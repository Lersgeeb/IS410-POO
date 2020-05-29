<?php

    header("Content-Type: application/json");
    include_once("../class/Artista.php");
    include_once("../class/Playlist.php");

    switch($_SERVER['REQUEST_METHOD']){
            #isset($_GET['nombreCancion']) && isset($_GET['artista']) && isset($_GET['album'])
        case 'GET': 
            if( isset($_GET["playlist"]) ){ 
                $playlist = Playlist::getSongsfPlaylist($_GET["playlist"]);
                echo json_encode($playlist);
            }

        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'),true);
            if( isset($_POST["id"]) && isset($_POST["albumIndex"]) && isset($_POST["songIndex"])  && isset($_POST["userId"])  && isset($_POST["playlistIndex"]) ){
                $artista = json_decode(Artista::getArtistabyId($_POST["id"]),true) ;
                $album = $artista["albumes"][$_POST["albumIndex"]];
                $song = $album["canciones"][$_POST["songIndex"]];

                Playlist::addSongToPlaylist($_POST["userId"], $_POST["playlistIndex"],  $artista["nombreArtista"],$album["nombreAlbum"],$song["nombreCancion"]);
            } 
    }