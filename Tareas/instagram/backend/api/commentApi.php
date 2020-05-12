<?php
    
    header("Content-Type: application/json");
    include_once("../class/Comment.php");
    include_once("../class/User.php");

    switch($_SERVER['REQUEST_METHOD']){

       

        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                echo Comment::getCommentbyId($_GET['id']);
            }
            else if(isset($_GET['codigoPost'])){ //?id=#
                echo Comment::getCommentsbyPostId($_GET['codigoPost']);
            }
            else if(isset($_GET['index'])){ //?id=#
                echo Comment::getCommentbyIndex($_GET['index']);
            }else{
                echo Comment::getComments();
            }
        break;
        
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            $user = json_decode( User::getUser($_POST["usuario"]),true );
            $comment = new Comment($_POST["codigoPost"], $user["nombre"], $_POST["comentario"]);
            $comment->saveComment();
            echo json_encode($comment->getData()) ;
    }
