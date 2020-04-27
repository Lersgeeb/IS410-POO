<?php
    header("Content-Type: application/json");
    include_once("../class/Storie.php");

    switch($_SERVER['REQUEST_METHOD']){

        /*case 'POST': //Guardar
            $_POST = json_decode(file_get_contents('php://input'),true);
            $user = new User($_POST["name"],$_POST["lastname"],$_POST["birthday"],$_POST["country"]);
            $user->saveUser();
            $resultado["mensaje"] = "Guardar usuario, informacion: " . $user;
            echo json_encode($resultado);
        break;*/

        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                echo Storie::getStoriebyId($_GET['id']);
            }
            else if(isset($_GET['usuario'])){ //?id=#
                echo Storie::getStoriesbyUser($_GET['usuario']);
            }
            else if(isset($_GET['index'])){ //?id=#
                echo Storie::getStoriebyIndex($_GET['index']);
            }
        break;

    }