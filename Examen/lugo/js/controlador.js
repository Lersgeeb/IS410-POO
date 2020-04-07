///-----------------------------------------------USUARIOS

localStorage = window.localStorage;
if( localStorage.getItem("usuarios")==null ){

    var usuarios = [
        {
            nombre:"Pedro",
            apellido:"Martinez",
            ordenes:[
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 2",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Juan",
            apellido:"Perez",
            ordenes:[
                {
                    nombreProducto:"Producto 3",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        },
        {
            nombre:"Maria",
            apellido:"Rodriguez",
            ordenes:[
                {
                    nombreProducto:"Producto 4",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                },
                {
                    nombreProducto:"Producto 1",
                    descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                    cantidad:2,
                    precio:49.99
                }
            ]
        }
    ];
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
}
else{
    usuarios = JSON.parse(localStorage.getItem("usuarios"))
}

///-----------------------------------------------CATEGORIAS

if( localStorage.getItem("categorias")==null ){
    var categorias = [
        {
            nombreCategoria:"Farmacias",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Restaurantes",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Salud",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Café",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        },
        {
            nombreCategoria:"Bebidas",
            descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
            color:"#9482C4",
            icono:"fab fa-angellist",
            empresas:[
                {
                    nombreEmpresa: "Empresa 1",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 2",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                },
                {
                    nombreEmpresa: "Empresa 3",
                    imagen:"img/banner.jpg",
                    productos:[
                        {
                            nombreProducto: "Producto 1",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 2",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 3",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        },
                        {
                            nombreProducto: "Producto 4",
                            descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                            precio: 49.99
                        }
                    ]
                }
            ]
        }
    ];
    localStorage.setItem("categorias",JSON.stringify(categorias))

}
else{
    categorias = JSON.parse(localStorage.getItem("categorias"))
}

console.log ('Usuarios', usuarios);
console.log ('Categorias', categorias);





function render(){

    /* render select tag */
    userSel = document.getElementById("userSel");
    userSel.innerHTML = ""

    countUser = 0;

    for(usuario of usuarios){
        userSel.innerHTML += `<option value="${usuario.nombre} ${usuario.apellido}">${usuario.nombre} ${usuario.apellido}</option>`;
    }
    /*----------------*/

    renderGreeting();

    
    renderCategories();
}


function renderGreeting(){
    name = document.getElementById("userSel").value;
    titleGreeting = document.getElementById("titleGreeting");
    titleGreeting.innerHTML = `<h1>¡Hola ${name.split(" ")[0]}!</h1>`;
}


function renderCategories(){
    categoriesDiv = document.getElementById("categoriesDiv");
    categoriesDiv.innerHTML = " ";

    countCategory = 0;
    for(categoria of categorias){
        categoriesDiv.innerHTML += `    <div class="col-6 col-md-4 col-lg-3 mt-3">
                                            <div class="products" style="background-color: ${categoria.color};" onclick="showBusiness(${countCategory++})">

                                                <div class="iconCategory">
                                                    <i class="${categoria.icono}"></i>
                                                </div>    

                                                <div class="descCategory mt-3 pb-1">
                                                    <h4 class="nameCategory mb-0">${categoria.nombreCategoria}</h4>
                                                    <p class="QuantBusiness">${categoria.empresas.length} Comercios</p>
                                                </div>

                                            </div>
                                        </div>`
    }
    
}

render();


function showOrders(){
    userSel = document.getElementById("userSel");
    name = userSel.value;
    userIndex = userSel.selectedIndex;

    ordersModalLabel = document.getElementById("ordersModalLabel");
    ordersModalLabel.innerHTML = `${name.split(" ")[0]}, estas son tus ordenes`;
    
    productsUser =  document.getElementById("productsUser");
    productsUser.innerHTML = "";
    for(orden of usuarios[userIndex].ordenes){
        productsUser.innerHTML += `  <div class="product">
                                                        
                                        <div class="productDetailed">
                                            <h5>${orden.nombreProducto}</h5>
                                            <p>${orden.descripcion} </p>
                                        </div>
                                            
                                        <div class="productPrice">
                                            <strong>$${orden.precio}</strong>    
                                        </div>
                                    </div>`;
    }
    

    $("#ordersModal").modal('show');
}

function showBusiness(indexCategory){
    
    userSel = document.getElementById("userSel");
    name = userSel.value;
    userIndex = userSel.selectedIndex;

    businessModalLabel = document.getElementById("businessModalLabel");
    businessModalLabel.innerHTML = `${categorias[indexCategory].nombreCategoria}`;

    businessview = document.getElementById("businessview");
    businessview.innerHTML = "";

    countbusiness =  0 ;
    for(empresa of categorias[indexCategory].empresas){
        businessview.innerHTML += `<div class="col-6 businessCard">

                                        <div class="imgBusiness" style="background-image: url(${empresa.imagen});"><h3 class="titleImg">${empresa.nombreEmpresa}</h3></div>
                                        <div class="containerBusiness" id="productsUser">
                                            ${renderProductsBusiness(empresa.productos,indexCategory,countbusiness++)}
                                        </div>
                                    </div> `
    }




    $("#businessModal").modal('show')
}



function renderProductsBusiness(productos,indexCategory,countbusiness){
    innerHTML = ""

    countProduct = 0;
    for(producto of productos){
        innerHTML += `  <div class="product">
        
                            <div class="productDetailed">
                                <div class="productName">
                                    <h5>${producto.nombreProducto}</h5> 
                                    <span><button onclick="showNewProduct(${countProduct++},${indexCategory},${countbusiness})">Pedir</button></span>
                                </div>
                                <p>${producto.descripcion}</p>
                            </div>
                                
                            <div class="productPrice">
                                <strong>$${producto.precio}</strong>    
                            </div>
                        </div>`;
    }

    return innerHTML;
}


function showNewProduct(productIndex,indexCategory,countbusiness){
    
    newProductQuant = document.getElementById("newProductQuant");
    newProductQuant.innerHTML = `   <div class="modal-body modal-body-newProduct">
                                        <h3>${categorias[indexCategory].empresas[countbusiness].productos[productIndex].nombreProducto}</h3>
                                        <p>${categorias[indexCategory].empresas[countbusiness].productos[productIndex].descripcion} </p>
                                        <label for="quantProduct">Cantidad a solicitar</label>
                                        <input type="number" id="quantProduct">
                                        <h5>$${categorias[indexCategory].empresas[countbusiness].productos[productIndex].precio}</h5>
                                    </div>
                                    <div class="modal-footer modal-footer-newProduct">
                                        <button type="button" class="btn btn-secondary" onclick="addProduct(${productIndex},${indexCategory},${countbusiness})">Procesar Orden</button>
                                    </div>`
    
    $("#newProduct").modal('show')
    
}

function addProduct(productIndex,indexCategory,countbusiness){
    quant = document.getElementById("quantProduct").value
    userSel = document.getElementById("userSel");
    userIndex = userSel.selectedIndex;

    console.log(categorias[indexCategory].empresas[countbusiness].productos[productIndex].nombreProducto)
    console.log(categorias[indexCategory].empresas[countbusiness].productos[productIndex].descripcion)
    console.log(categorias[indexCategory].empresas[countbusiness].productos[productIndex].precio)
    console.log(quant)

    usuarios[userIndex].ordenes.push({nombreProducto:categorias[indexCategory].empresas[countbusiness].productos[productIndex].nombreProducto,
                                    descripcion: categorias[indexCategory].empresas[countbusiness].productos[productIndex].descripcion,
                                    cantidad:quant,
                                    precio: categorias[indexCategory].empresas[countbusiness].productos[productIndex].precio});

                    
    localStorage.setItem("usuarios",JSON.stringify(usuarios))
    $("#newProduct").modal('hide')
}
