<?php
    class Usuario{
        private $codigoUsuario;
        private $nombreUsuario;
        private $playlists;


        public function __construct($codigoUsuario, $nombreUsuario, $playlists){
            $this->codigoUsuario = $codigoUsuario;
            $this->nombreUsuario = $nombreUsuario;
            $this->playlists = $playlists;
        }

        /**
         * Get the value of codigoUsuario
         */ 
        public function getCodigoUsuario()
        {
                return $this->codigoUsuario;
        }

        /**
         * Set the value of codigoUsuario
         *
         * @return  self
         */ 
        public function setCodigoUsuario($codigoUsuario)
        {
                $this->codigoUsuario = $codigoUsuario;

                return $this;
        }

        /**
         * Get the value of nombreUsuario
         */ 
        public function getNombreUsuario()
        {
                return $this->nombreUsuario;
        }

        /**
         * Set the value of nombreUsuario
         *
         * @return  self
         */ 
        public function setNombreUsuario($nombreUsuario)
        {
                $this->nombreUsuario = $nombreUsuario;

                return $this;
        }

        /**
         * Get the value of playlists
         */ 
        public function getPlaylists()
        {
                return $this->playlists;
        }

        /**
         * Set the value of playlists
         *
         * @return  self
         */ 
        public function setPlaylists($playlists)
        {
                $this->playlists = $playlists;

                return $this;
        }

        public function getData(){
            return array(
                "codigoUsuario"=> $this->codigoUsuario,
                "nombreUsuario"=> $this->nombreUsuario,
                "playlists"=> $this->playlists
            );
        }

        public static function getUsuarios(){
            $content = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($content,true);

            $simplifiedUsuarios = [];
            foreach($usuarios as $usuario){
                $simplifiedUsuarios[] = array(
                        "codigoUsuario"=>$usuario["codigoUsuario"],
                        "nombreUsuario"=>$usuario["nombreUsuario"]
                );
            }
            
            echo json_encode($simplifiedUsuarios);
        }

        private static function usuariosFilter($usuarios, $key, $value){
                $finalUsuarios = [];
                foreach ($usuarios as $usuario){
                        if($usuario[$key]==$value)
                                $finalUsuarios[] = $usuario;
                }
                return  $finalUsuarios;
        }

        public static function getUsuariobyId($id){
            $content  = file_get_contents("../data/Usuarios.json");
            $usuarios = json_decode($content,true);

            $usuarioId = Usuario::usuariosFilter($usuarios,"codigoUsuario", $id);

            return json_encode($usuarioId[0]);
        }


    }