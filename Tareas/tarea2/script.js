var posts = [
    {usuario:"Juan Perez",
    post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos nemo id beatae fugit rem. Beatae dignissimos aut perferendis ipsa. Voluptate reprehenderit animi aliquam blanditiis, vero id repudiandae corporis ratione.",
    fecha:"2012-12-12"},
    {usuario:"Juan Perez",
    post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos nemo id beatae fugit rem. Beatae dignissimos aut perferendis ipsa. Voluptate reprehenderit animi aliquam blanditiis, vero id repudiandae corporis ratione.",
    fecha:"2012-12-12"},
    {usuario:"Juan Perez",
    post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos nemo id beatae fugit rem. Beatae dignissimos aut perferendis ipsa. Voluptate reprehenderit animi aliquam blanditiis, vero id repudiandae corporis ratione.",
    fecha:"2012-12-12"},
    {usuario:"Juan Perez",
    post:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dignissimos nemo id beatae fugit rem. Beatae dignissimos aut perferendis ipsa. Voluptate reprehenderit animi aliquam blanditiis, vero id repudiandae corporis ratione.",
    fecha:"2012-12-12"},
];


var calendarMonths = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

function createPost(){
    var userName = document.getElementById("userName");
    var postContent = document.getElementById("postContent")
    var datePost = document.getElementById("datePost");


    if(userName.value && postContent.value && datePost.value){
        /*createItem(userName.value,postContent.value,datePost.value);*/

        posts.push({
            usuario:userName.value,
            post:postContent.value,
            fecha:datePost.value
        });

        console.log(posts);
        editPost();

        userName.value = "";
        postContent.value = "";
        datePost.value = "";
        /*updateAmount();*/
    }

}


function editPost(){
    postContainer = document.getElementById("postContainer");
    postContainer.innerHTML =   `<div class="col-sm-12 col-md-6 col-lg-4">
                                    <div class="card " style="">
                                        <div class="card-body">
                                            <form>
                                                <h3>Agregar Post</h3>
                                                <div class="form-group">
                                                    <select class="form-control" id="userName">
                                                    <option value="Juan Perez">Juan Perez</option>
                                                    </select>
                                                </div>
                                                <div class="form-group">
                                                    <textarea name="" id="postContent" cols="30" rows="10" placeholder="¿Que estas pensando?"></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <input type="date" class="form-control" id="datePost">
                                                </div>
                                            </form>
                                            <button onclick="createPost()" class="btn btn-primary">Posts</button>
                                        </div>
                                    </div>
                                </div>`;

    for (post of posts){
        dateSplit = post.fecha.split("-");
        dateSplit[1] = calendarMonths[parseInt(dateSplit[1])-1];


        postContainer.innerHTML += `<div class="col-sm-12 col-md-6 col-lg-4">
                                        <div class="card " style="">
                                            <div class="profile d-flex align-items-center">
                                                <img class="rounded-circle img-thumbnail" src="./img/profile.jpg" alt="Card image cap">
                                                <strong>&nbsp&nbsp${post.usuario}</strong>
                                                <small>&nbsp&nbsp(${dateSplit.reverse().join("/")})</small>
                                            </div>
                                            <div class="card-body">
                                            <p>${post.post}</p>
                                            </div>
                                        </div>
                                    </div>`;
    }
}

/*
    <h3>Agregar Post</h3>
    <div class="form-group">
        <input type="text" class="form-control" id="userName">
    </div>
    <div class="form-group">
        <textarea name="" id="postContent" cols="30" rows="10" placeholder="¿Que estas pensando?"></textarea>
    </div>
    <div class="form-group">
        <input type="date" class="form-control" id="datePost">
    </div>
*/ 