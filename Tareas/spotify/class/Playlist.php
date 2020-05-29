<?php

    include_once("Artista.php");

    class Playlist{

        public static function getSongsfPlaylist($playlist){
            
            
            $songs = [];
            foreach($playlist as $song){
                $song = json_decode($song, true);
                $artista = Artista::getArtistbyName($song["artista"]);
                $songs[] = Artista::getSongOfArtist($artista, $song['album'], $song['nombreCancion']);
            }
            
            return $songs;
        }

        public static function addSongToPlaylist($userId, $playlistIndex, $artista, $album, $song){
            $content = file_get_contents("../data/usuarios.json");
            $users = json_decode($content,true);

            $added = false;
            $count = 0;

            foreach($users as $user){
                if($user["codigoUsuario"] == $userId){
                    $added = true;
                    break;
                }
                $count++;
            }

            $users[$count]["playlists"][$playlistIndex]["canciones"][] = array(
                "nombreCancion" => $song,
                "artista" => $artista, 
                "album" => $album 
            );
            
            $file = fopen("../data/usuarios.json","w");
            fwrite($file, json_encode($users));
            fclose($file);
            echo $added;
        }
    }

