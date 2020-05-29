<?php

    header("Content-Type: application/json");
    include_once("../class/Usuario.php");
    include_once("../class/Orden.php");


    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);            
            if(isset($_POST["index"]) && isset($_POST["orden"])){

                $nombreProducto = $_POST["orden"]["nombreProducto"];
                $descripcion = $_POST["orden"]["descripcion"];
                $cantidad = $_POST["orden"]["cantidad"];
                $precio = $_POST["orden"]["precio"];

                $orden = new Orden( $nombreProducto, $descripcion, $cantidad, $precio );

                echo Usuario::agregarOrden($_POST["index"], $orden->getData() );

            }
            break;
    }