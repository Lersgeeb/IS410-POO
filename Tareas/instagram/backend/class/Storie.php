<?php
  

    class Storie{
        private $codigoHistoria;
        private $usuario;
        private $imagenUsuario;
        private $historia;

        public function __construct($codigoComentario, $codigoPost, $usuario, $comentario){
            $this->$codigoComentario = $codigoComentario ;
            $this->$codigoPost = $codigoPost ;
            $this->$usuario = $usuario ;
            $this->$comentario = $comentario ;
        }

        /**
         * Get the value of codigoHistoria
         */ 
        public function getCodigoHistoria()
        {
                return $this->codigoHistoria;
        }

        /**
         * Set the value of codigoHistoria
         *
         * @return  self
         */ 
        public function setCodigoHistoria($codigoHistoria)
        {
                $this->codigoHistoria = $codigoHistoria;

                return $this;
        }

        /**
         * Get the value of usuario
         */ 
        public function getUsuario()
        {
                return $this->usuario;
        }

        /**
         * Set the value of usuario
         *
         * @return  self
         */ 
        public function setUsuario($usuario)
        {
                $this->usuario = $usuario;

                return $this;
        }

        /**
         * Get the value of imagenUsuario
         */ 
        public function getImagenUsuario()
        {
                return $this->imagenUsuario;
        }

        /**
         * Set the value of imagenUsuario
         *
         * @return  self
         */ 
        public function setImagenUsuario($imagenUsuario)
        {
                $this->imagenUsuario = $imagenUsuario;

                return $this;
        }

        /**
         * Get the value of historia
         */ 
        public function getHistoria()
        {
                return $this->historia;
        }

        /**
         * Set the value of historia
         *
         * @return  self
         */ 
        public function setHistoria($historia)
        {
                $this->historia = $historia;

                return $this;
        }

        private static function storiesfilter($stories, $key, $value){
                $finalStories = [];
                foreach ($stories as $storie){
                        if($storie[$key]==$value)
                                $finalStories[] = $storie;
                }
                return  $finalStories;
        }

        public static function getStoriebyId($id){
                $content  = file_get_contents("../data/historias.json");
                $stories = json_decode($content,true);

                $storieId = Storie::storiesfilter($stories,"codigoHistoria", $id);

                return json_encode($storieId[0]);
        }

        public static function getStoriebyIndex($index){
                $content  = file_get_contents("../data/historias.json");
                $stories = json_decode($content,true);

                return json_encode($stories[$index]);
        }


        public static function getStoriesbyUser($userName){
                $content  = file_get_contents("../data/historias.json");
                $stories = json_decode($content,true);
                $storieUser = Storie::storiesfilter($stories,"usuario", $userName);


                return json_encode($storieUser);
        }
    }

