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

noticias = [
    {caratula:'img/1.jpg',
    titulo:"Cuidaddo con el ayuwoki",
    fechaPublicacion:'12/12/2019',
    likes:'3k',
    comentarios:'5k',
    resumenNoticia:'Lorem Ipsum dolor...',
    detalleNoticia:'Lorem Ipsum dolor sit amet Consectetur adipcdobic',
    categoria:'Recientes',
    principal:false,
    ultimaHora:true},

    {caratula:'img/principal.jpg',
    titulo:"Cuidaddo con el ayuwoki",
    fechaPublicacion:'12/12/2019',
    likes:'3k',
    comentarios:'5k',
    resumenNoticia:'Lorem Ipsum dolor...',
    detalleNoticia:'Lorem Ipsum dolor sit amet Consectetur adipcdobic',
    categoria:'Recientes',
    principal:true,
    ultimaHora:true},
    
    {caratula:'img/2.jpg',
    titulo:"Cuidaddo con el ayuwoki",
    fechaPublicacion:'12/12/2019',
    likes:'3k',
    comentarios:'5k',
    resumenNoticia:'Lorem Ipsum dolor...',
    detalleNoticia:'Lorem Ipsum dolor sit amet Consectetur adipcdobic',
    categoria:'Tecnologia',
    principal:false,
    ultimaHora:true},

    {caratula:'img/3.jpg',
    titulo:"Cuidaddo con el ayuwoki",
    fechaPublicacion:'12/12/2019',
    likes:'3k',
    comentarios:'5k',
    resumenNoticia:'Lorem Ipsum dolor...',
    detalleNoticia:'Lorem Ipsum dolor sit amet Consectetur adipcdobic',
    categoria:'Internacionales',
    principal:false,
    ultimaHora:true}

]


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
    for(noticia of noticias){
        if(noticia.principal){
            console.log('principal')
            principalDiv = document.getElementById("principal");
            principalDiv.innerHTML = `  <div class="card">
                                            <div class="card-img-top" style="height: 350px; background-image: url(./${noticia.caratula}); background-size: cover;">
                                                <div class="breakingNews">Ultima Hora</div>
                                            </div>
                                            
                                            <div class="card-body">
                                            <h5 class="card-title">${noticia.titulo}</h5>
                                            <p class="card-text">${noticia.resumenNoticia}</p>

                                            <div>${noticia.likes} likes | ${noticia.comentarios} Comentarios </div>
                                            <a href="#" class="">Ver Mas</a> |
                                            <a href="#" class="">Eliminar</a>
                                            </div>
                                        </div>`
        }
        else{
            categorieDiv = document.getElementById(`${noticia.categoria}Div`);
            categorieDiv.innerHTML += ` <div class="col col-lg-4">
                                            <div class="card">
                                                <div class="card-img-top" style="height: 12em; background-image: url(./img/3.jpg); background-size: cover;">
                                                    <div class="breakingNews">Ultima Hora</div>
                                                </div>
                                                <div class="card-body">
                                                <h5 class="card-title">Card title</h5>
                                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                                <a href="#" class="">Ver Mas</a> |
                                                <a href="#" class="">Eliminar</a>
                                                </div>
                                            </div>
                                        </div>`
        }
    }
    
}
render();