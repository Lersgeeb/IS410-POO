// Generando listas de categorias para pintarlas en pantalla ya estilizadas
async function pintandoCategoriasLugo () {
    
    //Usar una peticion para get categorias
    categorias = await getCategorias();
    document.getElementById('contenedor-categorias').innerHTML = ``;

    for(let i=0;i<categorias.length;i++) {
        document.getElementById('contenedor-categorias').innerHTML += `
        <div class="col-lg-3 col-md-4 col-sm-6 mt-2">
            <div class="card-item card" style="background: ${categorias[i].color};" onclick="infoCategorias(${ i })">
                <div class="row">
                    <div class="col mx-auto text-center m-3">
                        <i class="${categorias[i].icono} cat-icon"></i>
                    </div>
                    <div class="col">

                    </div>
                </div>
                <div class="row m-3 mt-4">
                    <section class="col">
                        <h3 class="text-white font-weight-bolder">${categorias[i].nombreCategoria}</h3>
                        <p class="text-white" style="font-size: 13px;">
                            ${categorias[i].empresas.length} Comercios
                        </p>
                    </section>
                </div>
            </div>
        </div>
        `;
    }
}
pintandoCategoriasLugo();

// Generando Usuarios 
async function listaUsuarios() { 
    //Usar una peticion para get usuario  
    usuarios = await getUsuarios();

    document.getElementById('usuarioActual').innerHTML = '';
    for (let i=0;i<usuarios.length;i++) {
        document.getElementById('usuarioActual').innerHTML += 
        `<option value="${i}">${ usuarios[i].nombre } ${ usuarios[i].apellido }</option>`;
    }
}

listaUsuarios();

// Onchange para seleccionar un usuario
async function cambiarUsuario () {
    let usuarioSeleccionado = document.querySelector('#usuarioActual').value;

    //Usar una peticion para get usuario
    usuario = await getUsuarioPorIndex(usuarioSeleccionado);
    document.getElementById('texto-hola').innerHTML = `¡Hola ${usuario.nombre}!`;
    return usuarioSeleccionado;
}

// Ver Ordenes de un usuario con el boton de ver ordenes
async function verOrdenes() {
    let usuarioIndex = await cambiarUsuario();
    //Usar una peticion para get usuario
    usuario = await getUsuarioPorIndex(usuarioIndex);

    // Header Modal
    document.querySelector('#modalUserLabel').innerHTML = `${usuario.nombre} , Estas Son Tus Ordenes.`;
    // Zona de Productos
    console.log(usuario.ordenes.length);
    document.querySelector('#zona-productos').innerHTML = '';
    for(let i=0;i<usuario.ordenes.length;i++) {
        document.querySelector('#zona-productos').innerHTML += `
            <p>
                <h3 style="color: #563D7C; font-weight: bold;">${ usuario.ordenes[i].nombreProducto }</h3>
            </p>
            <p style="font-size: 18px;">
                ${usuario.ordenes[i].descripcion}
            </p>
            <p class="ml-auto">
                <b style="font-size: 25px">$${usuario.ordenes[i].precio}</b>
            </p>
            <hr>
        `;
    }
}

// Ver info sobre categorias
async function infoCategorias(idCategoria) {
    document.getElementById('zona-categorias').innerHTML = ``;
    $('#modalCategorias').modal('show');

        categorias = await getCategorias();
        document.getElementById('header-categorias').innerHTML = `${ categorias[idCategoria].nombreCategoria }`;
        
        for(let i=0;i<categorias[idCategoria].empresas.length;i++) {

            //peticion empresa
            empresa = await getEmpresaPorId( categorias[idCategoria].empresas[i] );
            const productosPintar = empresa;
            let productos = '';
            for(let j=0;j<productosPintar.productos.length;j++) {
                productos += `
                    <div class="row p-2">
                        <div class="col-lg-7">
                            <h4 style="color:#563D7C;">${ productosPintar.productos[j].nombreProducto }</h4>
                        </div>
                        <div class="col-lg-5">
                            <input type="button" class="btn btn-secondary" onclick="pedir( ${ empresa.idEmpresa } ,${ j })" value="Pedir">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-8">
                            <p>${ productosPintar.productos[j].descripcion }</p>
                        </div>
                        <div class="col-lg-4 ml-auto">
                            <b>$ ${ productosPintar.productos[j].precio }</b>
                        </div>
                    </div>
                    
                `;
            }
            document.getElementById('zona-categorias').innerHTML += `
                <div class="col-lg-6 col-sm-12 mt-2">
                    <div class="card" style="border-radius:12px">
                        <section class="headerEmpresa">
                            <img src="img/banner.jpg" class="img-fluid" style="border-radius: 12px"/>
                            <h3 class="businessNameTxt" style="color: #fff; font-weight:bolder;">${ empresa.nombreEmpresa }</h3>
                        </section>
                        <section class="p-3">
                            ${ productos }
                        </section>
                    </div>
                </div>
            `;
        }
};

// Funcion para pedir orden a los usuarios
async function pedir (idEmpresa , idProducto) {
    console.log(idEmpresa);
    console.log(idProducto);
    $('#modalPedidos').modal('show');

    //get de empresa 
    empresa = await getEmpresaPorId(idEmpresa);
    console.log(empresa);

    var nombreProduct = empresa.productos[idProducto].nombreProducto;
    var description = empresa.productos[idProducto].descripcion;
    var valor = empresa.productos[idProducto].precio;


    document.getElementById('zona-pedidos').innerHTML =`
        <h3>${ empresa.productos[idProducto].nombreProducto }</h3><br>
        <p>${ empresa.productos[idProducto].descripcion }</p><br>
        <div class="row">
            <div class="col-lg-4">
                Cantidad A Solicitar : 
            </div>
            <div class="col-lg-8">
                <input type="text" class="form-control" id="txt-cantidad" />    
            </div>
        </div>
        <div class="row">
            <div class="col-lg-10 mr-auto">
                
            </div>
            <div class="col-lg-2"><br>
            <b>$ ${ empresa.productos[idProducto].precio }</b>
            </div>
        </div>
        <div class="modal-footer">
            <button type="button" onclick="agregarPedido('${nombreProduct}','${description}',${valor})" 
            class="btn btn-secondary">
            Procesar Orden</button>
        </div>
    `;
}

// Funcion para agregar un producto nuevo a un usuario 
async function agregarPedido(nombreProduct,description,valor) {
    let cantidad = document.getElementById('txt-cantidad').value;
    console.log(cantidad);
    console.log(nombreProduct);
    console.log(description);
    console.log(valor);
    let usuario = await cambiarUsuario();
    console.log(usuario);

    if(cantidad > 0){
        //post usuario
        let pedido =
            {
                nombreProducto:nombreProduct,
                descripcion: description,
                cantidad: cantidad,
                precio: valor
            };
    
        await postPedido(usuario, pedido);
        
        pintandoCategoriasLugo();
        listaUsuarios();
        $('#modalPedidos').modal('hide');
        $('#modalCategorias').modal('hide');
    }
}

// creando una nueva categoria
function crearCategoria() {
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
    $('#modalCreacionCategoria').modal('show');

}

async function guardar() {
    let txtnombre = document.getElementById('txt-nombre').value;
    let txtdescripcion = document.getElementById('txt-descripcion').value;
    let txtcolor = document.getElementById('txt-color').value;
    let txticono = document.getElementById('txt-icono').value;
    let categoria = 
    {
        nombreCategoria:txtnombre,
        descripcion:txtdescripcion,
        color:txtcolor,
        icono:txticono,
        empresas:[]
    };

    await postCategoria(categoria);
    
    pintandoCategoriasLugo();
    $('#modalPedidos').modal('hide');
    $('#modalCategorias').modal('hide');
    $('#modalCreacionCategoria').modal('hide');
}

/*AXIOS*/

async function getCategorias(){
    urlCategorias = "../backend/api/categoriaApi.php";
    categorias = await axios.get(urlCategorias);

    if(categorias.request.status == 200)
        return categorias.data;
}

async function postCategoria(categoria){
    urlCategorias = "../backend/api/categoriaApi.php";

    added = await  axios({
        method:'POST',
        url: urlCategorias, 
        responsetype:'json',
        data:{
            "categoria":categoria,
        }
    });

    if(added.request.status == 200)
        return added.data;
}

async function getUsuarios(){
    urlUsuario = "../backend/api/usuarioApi.php";
    usuario = await axios.get(urlUsuario);

    if(usuario.request.status == 200)
        return usuario.data;
}

async function getUsuarioPorIndex(index){
    urlUsuario = `../backend/api/usuarioApi.php?index=${index}`;
    usuario = await axios.get(urlUsuario);

    if(usuario.request.status == 200)
        return usuario.data;
}

async function getEmpresaPorId(id){
    urlEmpresa = `../backend/api/empresaApi.php?id=${id}`;
    empresa = await axios.get(urlEmpresa);

    if(empresa.request.status == 200)
        return empresa.data;
}

async function postPedido(index, orden){
    urlOrden = `../backend/api/ordenApi.php`;

    added = await  axios({
        method:'POST',
        url: urlOrden, 
        responsetype:'json',
        data:{
            "index":index,
            "orden":orden
        }
    });

    if(added.request.status == 200)
        return added.data;

}