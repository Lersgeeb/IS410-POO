var localStorage = window.localStorage;
if(!localStorage.getItem("categorias") || !localStorage.getItem("noticias")){

    var categorias = [
        {nombreCategoria:"Recientes",
        descripcion:"Noticias recientes"},
        
        {nombreCategoria:"Internacionales",
        descripcion:"Noticias sobre el mundo"},
        
        {nombreCategoria:"Tecnologia",
        descripcion:"Noticias de tecnologia"},
        
        {nombreCategoria:"Futbol",
        descripcion:"Noticias de futbol"}   
    ];
    
    var noticias = [
    
        {caratula:'img/1.jpg',
        titulo:"Cuidaddo con el ayuwoki",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Recientes',
        principal:false,
        ultimaHora:true},
    
        {caratula:'img/2.jpg',
        titulo:"Nueva marca de cremora TH",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Recientes',
        principal:false,
        ultimaHora:true},
        
        {caratula:'img/3.jpg',
        titulo:"Trump esta estresado",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Recientes',
        principal:false,
        ultimaHora:false},
    
        {caratula:'img/4.jpg',
        titulo:"Estudiantes a la expectativa de la nota de POO",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Internacionales',
        principal:false,
        ultimaHora:false},
        
        {caratula:'img/5.jpg',
        titulo:"Nuevo disco de epica",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Internacionales',
        principal:false,
        ultimaHora:false},
        
        {caratula:'img/6.jpg',
        titulo:"Bohemian Rhapsody rompe records",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Internacionales',
        principal:false,
        ultimaHora:false},
        
        {caratula:'img/7.jpg',
        titulo:"Nuevo Tesla",
        fechaPublicacion:'12/12/2019',
        likes:'15k',
        comentarios:'3k',
        resumenNoticia:'Lorem Ipsum dolor Lorem Ipsum dolor sit amet Consectetur adipcdobic Lorem Ipsum dolor sit amet Consectetur adipcdobic...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Tecnologia',
        principal:false,
        ultimaHora:false},
        
        {caratula:'img/principal.jpg',
        titulo:"Huawei Mate X Preocupa a los desarrolladores web",
        fechaPublicacion:'12/12/2019',
        likes:'3k',
        comentarios:'4k',
        resumenNoticia:'Lorem ipsum dolor sit amet consectetur adipisicing elit. At molestiae fuga vitae. Sequi beatae obcaecati libero molestias co...',
        detalleNoticia:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, suscipit exercitationem dolor ut recusandae a tempore nesciunt ab illo, ea soluta quam mollitia, animi odit doloribus quas ratione quae temporibus. Sunt, facere perspiciatis. Sint quod voluptas odio non porro, dolorem odit corrupti velit, veniam commodi cumque. Rem, repellat laboriosam. Eveniet, illum sequi voluptates placeat quidem consequuntur corporis quaerat veniam omnis. Laborum expedita reprehenderit debitis voluptates, magnam unde aspernatur in corrupti saepe, voluptatum repellat hic! Ex debitis possimus ducimus eius veritatis sit aperiam quam, molestiae dolor deleniti et qui minima porro? Provident repudiandae nostrum delectus animi error .',
        categoria:'Internacionales',
        principal:true,
        ultimaHora:true}
    ]

    localStorage.setItem("categorias",JSON.stringify(categorias));
    localStorage.setItem("noticias",JSON.stringify(noticias));
}
else{
    categorias = JSON.parse(localStorage.getItem("categorias"));
    noticias = JSON.parse(localStorage.getItem("noticias"));
}

function render(){

    /*Creando las categorias*/
    newsSectionsDiv = document.getElementById("newsSections");
    newsSections.innerHTML = `    <div class="categories">
                                    <div class="row">
                                        <div class="col col-lg-12" id="principal" >
                                            
                                        </div>
                                    </div>
                                </div>`;

    
    for(categoria of categorias){
        newsSections.innerHTML += ` <div class="categories d-flex flex-column">
                                        <h1>${categoria.nombreCategoria}</h1>
                                        <div class="row" id="${categoria.nombreCategoria}Div">
                                    
                                        </div>                                   
                                    </div>`
    }

    /*Agregando noticias a las secciones*/
    var count=0;
    for(noticia of noticias){
        if(noticia.principal){
            principalDiv = document.getElementById("principal");
            principalDiv.innerHTML = `  <div class="col col-lg-12">
                                            <div class="card">
                                                <div class="card-img-top" style="height: 350px; background-image: url(./${noticia.caratula}); background-size: cover;">
                                                    <div class="breakingNews" style="display:${noticia.ultimaHora ? "auto":"none"};">Ultima Hora</div>
                                                </div>
                                                
                                                <div class="card-body">
                                                    <h5 class="card-title">${noticia.titulo}</h5>
                                                    <p class="card-text newResume">${noticia.resumenNoticia}</p>
                                                    <p class="card-text newDetailed hide">${noticia.detalleNoticia}</p>

                                                    <div class="likeAndCommentDiv">${noticia.likes} likes | ${noticia.comentarios} Comentarios </div>
                                                    <div class="newsFuncButton">
                                                        <button class="" onclick="showMore(this)">Ver Mas</button> |
                                                        <button class="" onclick="removeNew(${count++})">Eliminar</button>
                                                    </div>

                                                </div>    
                                            </div>
                                        </div>`
            
                                        
                                        
        }
        else{
            categorieDiv = document.getElementById(`${noticia.categoria}Div`);
            categorieDiv.innerHTML += ` <div class="col col-lg-4">
                                            <div class="card">
                                                <div class="card-img-top" style="height: 12em; background-image: url(./${noticia.caratula}); background-size: cover;">
                                                    <div class="breakingNews" style="display:${noticia.ultimaHora ? "auto":"none"};">Ultima Hora</div>
                                                </div>
                                                <div class="card-body">
                                                    <h5 class="card-title">${noticia.titulo}</h5>
                                                    <p class="card-text newResume">${noticia.resumenNoticia}</p>
                                                    <p class="card-text newDetailed hide">${noticia.detalleNoticia}</p>

                                                    <div class="likeAndCommentDiv">${noticia.likes} likes | ${noticia.comentarios} Comentarios </div>
                                                    <div class="newsFuncButton">
                                                        <button class="" onclick="showMore(this)">Ver Mas</button> |
                                                        <button class=""  onclick="removeNew(${count++})">Eliminar</button>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>`
        }
    }
    
}


function showMore(e){
    var cardBody = e.parentNode.parentNode;

    cardBody.querySelector(".newResume").classList.toggle("hide");
    cardBody.querySelector(".newDetailed").classList.toggle("show");
}

function removeNew(index){
    noticias.splice(index,1)
    render();

    localStorage.setItem("noticias",JSON.stringify(noticias));
}


render();