<?php
    header("Content-Type: application/json");
    include_once("../class/Post.php");

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
                echo Post::getPostbyId($_GET['id']);
            }
            else if(isset($_GET['codigoUsuario'])){ //?id=#
                if( isset($_GET['profile']) )
                    echo Post::getPostsbyUserId($_GET['codigoUsuario']);
                else
                    echo Post::getPostsbyFollowUsers($_GET['codigoUsuario']);
            }
            else if(isset($_GET['index'])){ //?id=#
                echo Post::getPostbyIndex($_GET['index']);
            }else{
                echo Post::getPosts();
            }
        break;
        

        /*case 'PUT': //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $user = new User($_PUT["name"],$_PUT["lastname"],$_PUT["birthday"],$_PUT["country"]);
            $user->updateUser($_GET['id']);
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: " . $user;
            echo json_encode($resultado);
        break;*/

     
    }
