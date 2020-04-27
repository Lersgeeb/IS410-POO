<?php
    //localhost:8000/.../api/users.php
    //echo 'Informacion: ' . file_get_contents('php://input');
    //echo "Metodo HTTP: " . $_SERVER['REQUEST_METHOD']; 
    
    sleep(1);
    header("Content-Type: application/json");
    include_once("../class/User.php");

    switch($_SERVER['REQUEST_METHOD']){


        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                echo User::getUser($_GET['id']);
            }else{
                echo User::getUsers();
            }
        break;


    }



?>