<?php
    class Artista{
        private $codigoArtista;
        private $nombreArtista;
        private $albumes;

        public function __construct($codigoArtista, $nombreArtista, $albumes){
            $this->codigoArtista = $codigoArtista;
            $this->nombreArtista = $nombreArtista;
            $this->albumes = $albumes;
        }


        /**
         * Get the value of codigoArtista
         */ 
        public function getCodigoArtista()
        {
                return $this->codigoArtista;
        }

        /**
         * Set the value of codigoArtista
         *
         * @return  self
         */ 
        public function setCodigoArtista($codigoArtista)
        {
                $this->codigoArtista = $codigoArtista;

                return $this;
        }

        /**
         * Get the value of nombreArtista
         */ 
        public function getNombreArtista()
        {
                return $this->nombreArtista;
        }

        /**
         * Set the value of nombreArtista
         *
         * @return  self
         */ 
        public function setNombreArtista($nombreArtista)
        {
                $this->nombreArtista = $nombreArtista;

                return $this;
        }

        /**
         * Get the value of albumes
         */ 
        public function getAlbumes()
        {
                return $this->albumes;
        }

        /**
         * Set the value of albumes
         *
         * @return  self
         */ 
        public function setAlbumes($albumes)
        {
                $this->albumes = $albumes;

                return $this;
        }

        public function getData(){
            return array(
                "codigoArtista"=> $this->codigoArtista,
                "nombreArtista"=> $this->nombreArtista,
                "albumes"=> $this->albumes
            );
        }

        public static function getArtistas(){
            $content = file_get_contents("../data/artistas.json");
            $artistas = json_decode($content,true);

            $simplifiedArtistas = [];
            foreach($artistas as $artista){
                $simplifiedArtistas[] = array(
                        "codigoArtista"=>$artista["codigoArtista"],
                        "nombreArtista"=>$artista["nombreArtista"]
                );
            }
            
            echo json_encode($simplifiedArtistas);
        }

         private static function artistasFilter($artistas, $key, $value){
                $finalArtistas = [];
                foreach ($artistas as $artista){
                        if($artista[$key]==$value)
                                $finalArtistas[] = $artista;
                }
                return  $finalArtistas;
        }

        public static function getArtistabyId($id){
            $content  = file_get_contents("../data/artistas.json");
            $artistas = json_decode($content,true);

            $artistaId = Artista::artistasFilter($artistas,"codigoArtista", $id);

            return json_encode($artistaId[0]);
        }

        public static function getArtistbyName($nombreArtista){
                $content  = file_get_contents("../data/artistas.json");
                $artistas = json_decode($content,true);

                $artistaId = Artista::artistasFilter($artistas,"nombreArtista", $nombreArtista);

                return $artistaId[0];
        }

        public static function getSongOfArtist($artista, $nAlbum, $nCancion){
                $albumes = $artista["albumes"];
        
                $album = Artista::artistasFilter($albumes,"nombreAlbum", $nAlbum)[0];

                $canciones = $album["canciones"];
                $cancion = Artista::artistasFilter($canciones,"nombreCancion", $nCancion)[0];

                return $cancion;
        }


    }