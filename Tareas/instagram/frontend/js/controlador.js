
/*--------------------------------------Funcionalidades---------------------------------------*/
var historias= [];

function verHistoria(codigoUsuario, codigoHistoria,indiceHistoria,username){
    console.log(`Ver historia ${codigoHistoria} del usuario ${codigoUsuario} `);
    $('#ver-historia').modal('show');

    LabelModalStories = document.getElementById('LabelModalStories')
    LabelModalStories.innerHTML = `Viendo Historias de ${username}`;
    storiesUsers = document.getElementById('storiesUsers');
    storiesUsers.innerHTML =``;
    
    for(historia of historias[indiceHistoria]){
        storiesUsers.innerHTML +=`  <div class="historia">
                                        <div class="historia-image-post" style="background-image: url(${historia.imagen})">
                                            <div class="historia-titulo">${historia.titulo}</div>
                                        </div>
                                    </div>`;

    }
}

async function comentar(codigoPost){
    console.log(`Comentar el post ${codigoPost} con el comentario ${$("#comentario-post-"+codigoPost).val()}`);

    commentContent = document.getElementById(`comentario-post-${codigoPost}`)
    userCode = document.getElementById('usuario-actual').value;
    
    comment = await setComment(codigoPost,userCode,commentContent.value);
    if(comment){
        commentSection = document.getElementById(`commentSection${codigoPost}`)
        commentSection.innerHTML += `   <div>
                                            <span class="post-user">${comment.usuario}</span>
                                            <span class="post-content">${comment.comentario}</span>
                                        </div>`


        commentContent.value = "";
    }


}

function like(codigoPost,likeButton){

    liked = likeButton.getAttribute('liked')
    if(liked == 0)    {
        likeButton.setAttribute("liked", "1");
        likeButton.innerHTML = `<i class="fas fa-heart" style="color:#F7545C;"></i>`
    }
    else{
        likeButton.innerHTML = `<i class="far fa-heart"></i>`
        likeButton.setAttribute("liked", "0");
    }

    
    
}


async function CreatePost(){
    userCode = document.getElementById('usuario-actual').value;
    postContent = document.getElementById('contenido-post');
    img = document.getElementById('url-imagen');

    if(postContent.value && img.value){
        const posted = await setPost(userCode, postContent.value, img.value);
        console.log(posted);
        if(posted) 
            postContent.value = '';
            img.value = '';
            $('#nuevo-post').modal('hide');
    }



}

/*--------------------------------------AXIOS---------------------------------------*/
async function getUsers(){
    url = '../backend/api/userApi.php';

    const users =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(users.request.status == 200)
        return users.data;
}

async function getUserById(id){
    url = `../backend/api/userApi.php?id=${id}`;

    const user =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(user.request.status == 200)
        return user.data;
}

async function getPostsbyUserId(userId){
    url = `../backend/api/postApi.php?codigoUsuario=${userId}`;

    const posts =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(posts.request.status == 200)
        return posts.data;
}

async function getStoriesbyUserId(userId){
    url = `../backend/api/storieApi.php?codigoUsuario=${userId}`;

    const stories =  await axios({
        method:'GET',
        url: url, 
        responsetype:'json'
    })

    if(stories.request.status == 200)
        return stories.data;
}

async function setPost(userCode,postContent,img){
    url = `../backend/api/postApi.php`;

    const post =  await axios({
        method:'POST',
        url: url, 
        responsetype:'json',
        data:{
            "codigoUsuario":userCode,
            "contenidoPost":postContent,
            "imagen":img,
        }
    })

    if(post.request.status == 200)
        return true;
}

async function setComment(postCode,userCode,commentContent){
    url = `../backend/api/commentApi.php`;

    const saveComment =  await axios({
        method:'POST',
        url: url, 
        responsetype:'json',
        data:{
            "codigoPost":postCode,
            "usuario":userCode,
            "comentario":commentContent,
        }
    })

    if(saveComment.request.status == 200)
        return saveComment.data;
}


/*--------------------------------------RENDER---------------------------------------*/

async function render(){
    //printUsers();
    rendered = await renderUserScroll();
    if(rendered)
        renderPageByActualUser();
}


async function renderUserScroll(){
    const users = await getUsers();

    if(users){
        actualUser = document.getElementById('usuario-actual');
        actualUser.innerHTML = '';
        for(user of users){
            actualUser.innerHTML += `<option value="${user.codigoUsuario}">${user.nombre}</option>`;
        }
        return true;
    }
        
}

function renderPost(post){
    postsDiv = document.getElementById('posts');

    commentsRendered = post.comments.map( (comment) => {
        return `<div>
                    <span class="post-user">${comment.usuario}</span>
                    <span class="post-content">${comment.comentario}</span>
                </div>`
    })

    postsDiv.innerHTML += ` <div class="col-lg-12">
                                <div class="card mb-4 shadow-sm">
                                <div class="card-header">
                                    <img class="img-fluid img-thumbnail rounded-circle" src="${post.user.imagen}">    
                                    <span>${post.user.nombre}</span>
                                </div>
                                <div class="card-body px-0 py-0">
                                    <div class="image-post" style="background-image: url(${post.imagen});">

                                    </div>
                                    <div class="px-3 py-3 post">
                                    <span class="pointer" onclick="like(${post.codigoPost},this);" liked=0 ><i class="far fa-heart"></i></span>&nbsp;${post.cantidadLikes} Likes<br>
                                    <span class="post-user">${post.user.nombre}</span>
                                    <span class="post-content">${post.contenidoPost}</span>
                                    <hr>
                                    <b>Comments</b><br>
                                        <div id="commentSection${post.codigoPost}">
                                            ${commentsRendered.join(" ")}        
                                        </div>
                                    <hr>
                                    <div class="px-0">
                                        <div class="input-group mb-3">
                                        <input type="text" class="form-control" placeholder="Comment" id="comentario-post-${post.codigoPost}">
                                        <div class="input-group-append">
                                            <button type="button" onclick="comentar(${post.codigoPost});" class="btn btn-outline-danger"><i class="far fa-paper-plane"></i></button>
                                        </div>
                                        </div>
                                    </div>
                                    </>
                                </div>
                                </div>
                            </div>`;


}




async function renderPosts(actualUserId){
    
    postsDiv = document.getElementById('posts');
    postsDiv.innerHTML = '';
    const posts = await getPostsbyUserId(actualUserId);
    
    for(post of posts){
        renderPost(post)
    }
}

async function renderStories(actualUserId){
    
    storieSection = document.getElementById('storieSection');
    storieSection.innerHTML = `<div class="card-header">
                                    Stories
                                </div>`;

    
    const stories = await getStoriesbyUserId(actualUserId);
    
    
    countStory = 0;
    for(story of stories){
        historias.push(story.historia);
        storieSection.innerHTML +=`  <div class="px-1 py-2 story-card pointer" onclick="verHistoria(${story.codigoUsuario},${story.codigoHistoria}, ${countStory++},'${story.usuario}');">
                                        <div class="fl">
                                        <img class="img-fluid img-thumbnail rounded-circle img-thumbnail-historia" src="${story.imagenUsuario}">
                                        </div>  
                                        <div class="py-1 px-1 fl">
                                        <small><b>${story.usuario}(${story.historia.length})</b></small><br>
                                        <small class="muted">12/12/2012</small>
                                        </div>
                                    </div>`;
    }
}

async function renderPageByActualUser(){
    actualUserId = document.getElementById('usuario-actual').value;
    renderPosts(actualUserId);
    renderStories(actualUserId);
}


render();