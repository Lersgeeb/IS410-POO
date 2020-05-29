<?php
    class Empresa{
        private $idEmpresa;
        private $nombreEmpresa;
        private $imagen;
        private $productos;

        public function __construct($idEmpresa, $nombreEmpresa, $imagen, $productos){
            $this->idEmpresa = $idEmpresa;
            $this->nombreEmpresa = $nombreEmpresa;
            $this->imagen = $imagen;
            $this->productos = $productos;
        }

        private static function filtroEmpresas($empresas, $key, $value){
            $finalEmpresas = [];
            foreach ($empresas as $empresa){
                    if($empresa[$key]==$value)
                            $finalEmpresas[] = $empresa;
            }
            return  $finalEmpresas;
        }

        public static function getEmpresaPorId($id){
            $content = file_get_contents("../data/empresas.json");
            $empresas = json_decode($content,true);

            $empresa = Empresa::filtroEmpresas($empresas,"idEmpresa", $id)[0];
            return json_encode($empresa);
        }
    }

