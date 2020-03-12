//El siguiente código es el encargado de generar la informaación de prueba. Se recomienda no modificarlo.

var categorias = [];
(()=>{
  //Este arreglo es para generar textos de prueba
  let textosDePrueba=[
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
      "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
      "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
      "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
      "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
  ]
  
  //Genera dinamicamente los JSON de prueba para esta evaluacion,
  //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria

  
  let contador = 1;
  for (let i=0;i<5;i++){//Generar 5 categorias
      let categoria = {
          nombreCategoria:"Categoria "+i,
          descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
          aplicaciones:[]
      };
      for (let j=0;j<10;j++){//Generar 10 apps por categoria
          let aplicacion = {
              codigo:contador,
              nombre:"App "+contador,
              descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
              icono:`img/app-icons/${contador}.webp`,
              instalada:contador%3==0?true:false,
              app:"app/demo.apk",
              calificacion:Math.floor(Math.random() * (5 - 1)) + 1,
              descargas:1000,
              desarrollador:`Desarrollador ${(i+1)*(j+1)}`,
              imagenes:["img/app-screenshots/1.webp","img/app-screenshots/2.webp","img/app-screenshots/3.webp"],
              comentarios:[
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Juan"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Pedro"},
                  {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Maria"},
              ]
          };
          contador++;
          categoria.aplicaciones.push(aplicacion);
      }
      categorias.push(categoria);
  }
  
  console.log(categorias);
})();


function render(){
    categoriesSel = document.getElementById("categoriesSel");
    for(categoria of categorias){
        categoriesSel.innerHTML += `<option value="${categoria.nombreCategoria}">${categoria.nombreCategoria}</option>`;
    }
    
    renderApps();
}


function renderApps(){
    value = document.getElementById("categoriesSel").value;
    appsDiv = document.getElementById("appsDiv");
    appsDiv.innerHTML = ""
    
    countCat = 0;
    for(categoria of categorias){
        countApp = 0;
        if( value=="all" || value==categoria.nombreCategoria){
            for(aplicacion of categoria.aplicaciones){
                appsDiv.innerHTML += `   <div class="col-sm-6 col-md-3 col-lg-2">
                                            <div class="card"  onclick="showModal(${countCat},${countApp})">
                                                <img class="card-img-top px-2 pt-2 pb-0" src="./${aplicacion.icono}" alt="Card image cap">
                                                <div class="card-body pt-0 px-2">
                                                <h5 class="card-title mb-0">${aplicacion.nombre}</h5>
                                                <p class="card-text pt-0 mt-0 mb-0">${aplicacion.desarrollador}</p>
                                                <div class="stars">
                                                    ${renderstars(aplicacion.calificacion)} 
                                                </div>
                                        
                                                </div>
                                            </div>
                                        </div> `;
                countApp++;
            }
        }     
        countCat++;
    }            
    
}

function renderstars(num){
    starsHTML = `${'<i class="fas fa-star"></i>'.repeat(num)}${'<i class="far fa-star"></i>'.repeat(5-num)}`;
    return starsHTML;
}


function showModal(catIndex,appIndex){
    console.log(catIndex);
    console.log(appIndex);

    app = categorias[catIndex].aplicaciones[appIndex]

    modalContent = document.getElementById("modalContent");
    modalContent.innerHTML=`    <div class="container-fluid modalContainer">

                                    <div class="headerApp">
                                        <img class="modalImg" src="./${app.icono}" alt="">
                                        <div class="descApp">
                                            <h3 class="modal-title" id="appReviewLabel">${app.nombre}</h3>
                                            <small>${app.desarrollador}</small>
                                            <p>${app.descripcion}</p>
                                        </div>
                                    </div>

                                    <div class="modalstars">
                                        ${renderstars(app.calificacion)}
                                    </div>


                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src="./${app.imagenes[0]}" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./${app.imagenes[1]}" class="d-block w-100" alt="...">
                                        </div>
                                        <div class="carousel-item">
                                            <img src="./${app.imagenes[2]}" class="d-block w-100" alt="...">
                                        </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                        </a>
                                    </div>

                                    <div class="comments">
                                        ${renderComment(app.comentarios)}
                                    </div>

                                </div>

                                <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                ${app.instalada? '':'<button type="button" class="btn btn-primary">Instalar</button>'}
                                </div>`


    $("#appReview").modal('show')
}


function renderComment(comments){
    commentHTML = [];
    
    for(comment of comments){
        commentHTML.push(`  <div class="comment">
                                <img  class="rounded rounded-circle" src="./img/user.webp" alt="">
                                <div class="userInfo">
                                    <strong>${comment.usuario}</strong>
                                    <p>${comment.comentario}</p>
                                </div>
                            </div>`)
    }
    
    return commentHTML.join("")
}
render();