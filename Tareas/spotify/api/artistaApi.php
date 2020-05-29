<?php

    header("Content-Type: application/json");
    include_once("../class/Artista.php");

    switch($_SERVER['REQUEST_METHOD']){

        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                $artista = Artista::getArtistabyId($_GET['id']);
                echo $artista;
            }else{
                Artista::getArtistas();
            }
            break;

    }