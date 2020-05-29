<?php

    header("Content-Type: application/json");
    include_once("../class/Usuario.php");

    switch($_SERVER['REQUEST_METHOD']){


        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                $usuario = Usuario::getUsuariobyId($_GET['id']);
                echo $usuario;
            }else{
                Usuario::getUsuarios();
            }
            break;

            
        break;
    }