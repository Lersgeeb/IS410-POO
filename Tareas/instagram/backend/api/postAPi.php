<?php
    header("Content-Type: application/json");
    include_once("../class/Post.php");

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST': //Guardar

            $_POST = json_decode(file_get_contents('php://input'),true);
            $post = new Post($_POST["codigoUsuario"],$_POST["contenidoPost"],$_POST["imagen"],0);

            $post->createPost();
            $resultado["mensaje"] = "Guardar post, informacion: " . $post->getCodigoUsuario();
            echo json_encode($resultado);
        break;

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
        

 

     
    }
