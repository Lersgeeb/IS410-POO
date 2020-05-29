<?php

    header("Content-Type: application/json");
    include_once("../class/Usuario.php");
    include_once("../class/Orden.php");


    switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
            if (isset($_GET['id'])){
                $usuario = Usuario::getUsuarioPorId($_GET['id']);
                echo $usuario;
            }
            else if( isset($_GET['index']) ){
                $usuario = Usuario::getUsuarioPorIndex($_GET['index']);
                echo $usuario;
            }
            else{
                echo Usuario::getUsuarios();
            }
            break;
    }