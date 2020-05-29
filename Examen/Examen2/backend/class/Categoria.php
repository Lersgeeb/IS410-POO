<?php
    class Categoria{
        private $nombreCategoria;
        private $descripcion;
        private $color;
        private $icono;
        private $empresas;

        public function __construct( $nombreCategoria, $descripcion, $color, $icono, $empresas){
            $this->nombreCategoria = $nombreCategoria;
            $this->descripcion = $descripcion;
            $this->color = $color;
            $this->icono = $icono;
            $this->empresas = $empresas;
        }
    
        public static function getCategorias(){
            $content = file_get_contents("../data/categorias.json");
            return  $content;
        }

        public function getData(){
            return array(
                "nombreCategoria" => $this->nombreCategoria,
                "descripcion" => $this->descripcion,
                "color" => $this->color,
                "icono" => $this->icono,
                "empresas" => $this->empresas
            );
        }

        public function crearCategoria(){
            $content = file_get_contents("../data/categorias.json");
            $categorias = json_decode($content,true);
            $categorias[] = $this->getData();

            $file = fopen("../data/categorias.json","w");
            fwrite($file, json_encode($categorias));
            fclose($file);

            return True;
        }
    }


        