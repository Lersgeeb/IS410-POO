<?php
    sleep(3);
    
    if($_POST){
        $_POST = json_decode(file_get_contents("php://input"),true); //Si no es urlEnconded
        echo json_encode($_POST);
    }
    if($_GET){
        echo json_encode($_GET);
    }
    
    
?>