<?php
    
    header("Content-Type: application/json");
    include_once("../class/Comment.php");

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
        
        
    }