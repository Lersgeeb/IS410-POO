<?php

    header("Content-Type: application/json");
    include_once("../class/Categoria.php");

    switch($_SERVER['REQUEST_METHOD']){
        case 'GET': 
            echo Categoria::getCategorias();
            break;

        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);            
            if (isset($_POST['categoria'])){
                
                $nombreCategoria = $_POST['categoria']["nombreCategoria"];
                $descripcion = $_POST['categoria']["descripcion"];
                $color = $_POST['categoria']["color"];
                $icono = $_POST['categoria']["icono"];
                $empresas = $_POST['categoria']["empresas"];
                
                $categoria = new Categoria($nombreCategoria, $descripcion, $color, $icono, $empresas);
                echo $categoria->crearCategoria();
            }
    }