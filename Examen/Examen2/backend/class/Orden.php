<?php

    class Orden{
        private $nombreProducto;
        private $descripcion;
        private $cantidad;
        private $precio;

        public function __construct( $nombreProducto, $descripcion, $cantidad, $precio){
            $this->nombreProducto = $nombreProducto;
            $this->descripcion = $descripcion;
            $this->cantidad = $cantidad;
            $this->precio = $precio;
        }

        public function getData(){
            return array(
                "nombreProducto" => $this->nombreProducto,
                "descripcion" => $this->descripcion,
                "cantidad" => $this->cantidad,
                "precio" => $this->precio
            );
        }
    }
