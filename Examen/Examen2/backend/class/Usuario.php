<?php
    class Usuario{
        private $idUsuario;
        private $nombre;
        private $apellido;
        private $ordenes;
        

        public function __construct( $idUsuario, $nombre, $apellido, $ordenes){
            $this->idUsuario = $idUsuario;
            $this->nombre = $nombre;
            $this->apellido = $apellido;
            $this->ordenes = $ordenes;
        }

        public static function getUsuarios(){
            $content = file_get_contents("../data/usuarios.json");

            return  $content;
        }

        public static function agregarOrden($index, $orden){
                $content = file_get_contents("../data/usuarios.json");
                $usuarios = json_decode($content,true);
                $usuarios[$index]["ordenes"][] = $orden;

                $file = fopen("../data/usuarios.json","w");
                fwrite($file, json_encode($usuarios));
                fclose($file);

                return True;
        }

        private static function filtroUsuarios($usuarios, $key, $value){
            $finalUsuarios = [];
            foreach ($usuarios as $usuario){
                    if($usuario[$key]==$value)
                            $finalUsuarios[] = $usuario;
            }
            return  $finalUsuarios;
        }

        public static function getUsuarioPorId($id){
            $content = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($content,true);

            $usuario = Usuario::filtroUsuarios($usuarios,"idUsuario", $id)[0];
            return json_encode($usuario);
        }

        public static function getUsuarioPorIndex($index){
            $content = file_get_contents("../data/usuarios.json");
            $usuarios = json_decode($content,true);
            return json_encode($usuarios[$index]);
        }
    }