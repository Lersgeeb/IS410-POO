function verHistoria(codigoUsuario, codigoHistoria){
    console.log(`Ver historia ${codigoHistoria} del usuario ${codigoUsuario} `);
    $('#ver-historia').modal('show');
}

function comentar(codigoPost){
    console.log(`Comentar el post ${codigoPost} con el comentario ${$("#comentario-post-"+codigoPost).val()}`);
}

/*AXIOS */
async function getUsers(){
    url = 'http://localhost/CodigoPOO/Tareas/instagram/backend/api/userApi.php';

    const users =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(users.request.status == 200)
        return users.data;
}

async function getUserById(id){
    url = `http://localhost/CodigoPOO/Tareas/instagram/backend/api/userApi.php?id=${id}`;

    const user =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(user.request.status == 200)
        return user.data;
}

async function getPostsbyId(id){
    url = `http://localhost/CodigoPOO/Tareas/instagram/backend/api/postApi.php?id=${id}`;

    const post =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(post.request.status == 200)
        return post.data;
}

async function printUsers(){
    const users = await getUsers();
    console.log(users);
   
}

async function getCommentsbyPost(PostId){
    url = `http://localhost/CodigoPOO/Tareas/instagram/backend/api/commentApi.php?codigoPost=${PostId}`;

    const comments =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(comments.request.status == 200)
        return comments.data;
}

async function printUsers(){
    const users = await getUsers();
    console.log(users);
   
}


/*------------------------------------------------------------------*/

async function render(){
    //printUsers();
    rendered = await renderUserScroll();
    if(rendered)
        renderPageBySetUser();
}


async function renderUserScroll(){
    const users = await getUsers();

    if(users){
        actualUser = document.getElementById('usuario-actual');

        for(user of users){
            actualUser.innerHTML += `<option value="${user.codigoUsuario}">${user.nombre}</option>`;
        }
        return true;
    }
        
}

function renderPost(post,user,comments){
    postsDiv = document.getElementById('posts');
    console.log('post',post)
    console.log('user',user)
    console.log('comment',comments)

    commentsRendered = comments.map( (comment) => {
        return `<div>
                    <span class="post-user">${comment.usuario}</span>
                    <span class="post-content">${comment.comentario}</span>
                </div>`
    })

    postsDiv.innerHTML += ` <div class="col-lg-12">
                                <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <img class="img-fluid img-thumbnail rounded-circle" src="${user.imagen}">    
                                    <span>${user.nombre}</span>
                                </div>
                                <div class="card-body px-0 py-0">
                                    <div class="image-post" style="background-image: url(${post.imagen});">

                                    </div>
                                    <div class="px-3 py-3 post">
                                    <span class="pointer" onclick="like(${post.codigoPost});"><i class="far fa-heart"></i></span>&nbsp;${post.cantidadLikes} Likes<br>
                                    <span class="post-user">${user.nombre}</span>
                                    <span class="post-content">${post.contenidoPost}</span>
                                    <hr>
                                    <b>Comments</b><br>
                                        ${commentsRendered.join(" ")}        
                                    <hr>
                                    <div class="px-0">
                                        <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Comment" id="comentario-post-${post.codigoPost}">
                                        <div class="input-group-append">
                                            <button type="button" onclick="comentar(${post.codigoPost});" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>`;


}

async function renderPageBySetUser(){
    actualUser = document.getElementById('usuario-actual').value;

    const user = await getUserById(actualUser);

    follows = user.siguiendo;

    postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';

    for(id of follows){
        const post = await getPostsbyId(id);
        const comments = await getCommentsbyPost(id)
        const userOfPost = await getUserById(post.codigoUsuario)
        renderPost(post,userOfPost,comments)
    }
}


render();