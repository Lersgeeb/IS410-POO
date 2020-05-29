var currentArtist = null;
var currentUser = 1;

async function verPlaylist(codigoPlaylist){
    console.log('Ver playlist con codigo: ' + codigoPlaylist);

    user = await  getCurrentUser();
    playlist = user.playlists[codigoPlaylist];
    Songlist = await getPlaylist(playlist.canciones);
    


    playlistReview = document.getElementById('playlistReview');
    playlistSection = document.getElementById('playlistSection');

    playlistReview.innerHTML = `<h5>${playlist.tituloPlaylist}</h5>
                                <div class="cover-image">
                                    <i class="fas fa-music fa-9x"></i>
                                </div>
                                <button class="btn btn-success"type="button">Play</button>`;
    
    playlistSection.innerHTML = "";

    for(let i=0; i<Songlist.length; i++){
        
        playlistSection.innerHTML += `<div class="row song-item">
                                        <div class="col-1"><i class="fas fa-play"></i></div>
                                        <div class="col-10">
                                        <div class="song-title">${playlist.canciones[i].nombreCancion}</div>
                                        <div class="song-description">${playlist.canciones[i].artista} - ${playlist.canciones[i].album}</div>
                                        </div>
                                        <div class="col-1">
                                            <span>${Songlist[i].duracion}</span>
                                        </div>
                                    </div>`;
    }


    $("#vista-playlist").show();
    $("#vista-artista").hide();
}


async function verArtista(codigoArtista){
    console.log('Ver artista con codigo: ' + codigoArtista);
    currentArtist = codigoArtista;
    artist = await getArtistByID(codigoArtista);

    count = {album:0, song:0};
    artistAlbumsHTML =  [];

    for(album of artist.albumes){
        count.song = 0;
        artistAlbumsHTML.push( renderAlbum(artist.nombreArtista, album, count) );
        count.album++;
    }

    vistaArtista = document.getElementById('vista-artista');
    vistaArtista.innerHTML = `${artistAlbumsHTML.join("<hr>")}`;

    $("#vista-artista").show();
    $("#vista-playlist").hide();
}

function agregarCancion(albumIndex, songIndex){
    console.log(`Agregar cancion ${songIndex} de album ${albumIndex} `);
    

    modalPlaylistButtons = document.getElementById('modalPlaylistButtons');
    modalPlaylistButtons.innerHTML = `  <button type="button" class="btn btn-outline-success" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-outline-success" onclick="addSong(${albumIndex},${songIndex})">Guardar en playlist</button>`

    $("#modal-playlists").modal('show');
}

async function addSong(albumIndex, songIndex){
    playlistIndex = document.getElementById("selectePlaylist").value;
    added = await addSongToPlaylist(albumIndex, songIndex, playlistIndex);
    $("#modal-playlists").modal('hide');
}

async function getCurrentUser(){
    selectedUser = document.getElementById('selectUser').value;
    user = await getUserById(selectedUser);
    return user;
}

async function renderUserModal(){
    selectUser = document.getElementById('selectUser');
    users = await getUsers();
    selectUser.innerHTML = '';
    for(user of users) {
        selectUser.innerHTML += `<option value="${user.codigoUsuario}">${user.nombreUsuario}</option>`
    }
}

async function renderPlaylistModal(){
    selectePlaylist = document.getElementById('selectePlaylist');
    user = await getCurrentUser();
    selectePlaylist.innerHTML = '';


    countPlaylist = 0;
    for(playlist of user.playlists) {
        selectePlaylist.innerHTML += ` <option value="${countPlaylist++}">${playlist.tituloPlaylist}</option>`
    }
}

async function renderArtistList(){
    artistList = document.getElementById('artistList');
    artistList.innerHTML = `<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Artists</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                <span data-feather="plus-circle"></span>
                                </a>
                            </h6>`;

    artists = await getArtists();

    for(artist of artists ){
        artistList.innerHTML += `<li class="nav-item"><div class="nav-link" onclick="verArtista(${artist.codigoArtista})"><i class="fas fa-music"></i> ${artist.nombreArtista}</div></li>`;
    }
}

function renderPlaylist(user){

    playlistCol = document.getElementById('playlistCol');
    playlistCol.innerHTML = `<h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Playlists</span>
                                <a class="d-flex align-items-center text-muted" href="#">
                                <span data-feather="plus-circle"></span>
                                </a>
                            </h6>`;

    count = 0;
    for(playlist of user.playlists){
        playlistCol.innerHTML += `<li class="nav-item"><div class="nav-link" onclick="verPlaylist(${count++})"><i class="fas fa-play"></i> ${playlist.tituloPlaylist}</div></li>`;
    }

}

function renderSong(artistName, albumName, song , count){
    return  `<div class="row song-item">
                    <div class="col-1"><i class="fas fa-play"></i></div>
                    <div class="col-10">
                    <div class="song-title">${song.nombreCancion}</div>
                    <div class="song-description">${artistName} - ${albumName}</div>
                    </div>
                    <div class="col-1">
                        <span>${song.duracion}</span>
                        <button onclick="agregarCancion(${count.album},${count.song})" class="btn btn-outline-success btn-sm" title="Agregar a playlist"><i class="fas fa-plus"></i></button>
                    </div>
                </div>`
}


function renderAlbum(artistName, album, count){
    songs = [];

    for(song of album.canciones){
        songs.push( renderSong(artistName,album.nombreAlbum,song, count) );
        count.song++;
    }
    
    return `   <section class="container-fluid">
                    <div class="row">
                        <div class="col-4 text-center" >
                            <div class="cover-image" style="background-image:url(${album.caratulaAlbum});">
                            </div><br>
                            <h5 class="text-muted">${album.nombreAlbum}</h5>
                            <button class="btn btn-success"type="button">Play</button>
                        </div>
                        <div class="col-8">
                            ${songs.join("\n")}
                        </div>
                    </div>
                </section>`
}



async function renderChangeUser(){
    await renderArtistList();
    await renderPlaylistModal();
    user = await  getCurrentUser();
    renderPlaylist(user);
    currentUser = user.codigoUsuario;
    $("#modal-usuarios").modal('hide');
}


async function render(){
    await renderUserModal();
    await renderPlaylistModal();
    await renderArtistList();
    user = await  getCurrentUser();
    renderPlaylist(user);
}

render();

/*--------------AXIOS------------- */

async function getUsers(){
    urlUsers = "api/usuarioApi.php";
    users = await axios.get(urlUsers);
    
    if(users.request.status == 200)
        return users.data;
}

async function getArtists(){
    urlArtists = "api/artistaApi.php";
    artists = await axios.get(urlArtists);
    
    if(artists.request.status == 200)
        return artists.data;
}

async function getArtistByID(id){
    urlArtists = `api/artistaApi.php?id=${id}`;
    artists = await axios.get(urlArtists);
    
    if(artists.request.status == 200)
        return artists.data;
}

async function getUserById(id){
    urlUsers = `api/usuarioApi.php?id=${id}`;
    user = await axios.get(urlUsers);
    
    if(user.request.status == 200)
        return user.data;
}

async function getPlaylist(playlist){
    urlPlaylist = `api/playlistApi.php`;
    
    songList = await axios.get(urlPlaylist, {
        params: {
            playlist: playlist
        }
    });
    
    if(songList.request.status == 200)
        return songList.data;
}

async function addSongToPlaylist(albumIndex, songIndex, playlistIndex){
    urlPlaylist = `api/playlistApi.php`;
    
    songList = await  axios({
        method:'POST',
        url: urlPlaylist, 
        responsetype:'json',
        data:{
            "id":currentArtist,
            "albumIndex":albumIndex,
            "songIndex":songIndex,
            "userId":currentUser,
            "playlistIndex":playlistIndex
        }
    });
    
    if(songList.request.status == 200)
        return songList.data;
}