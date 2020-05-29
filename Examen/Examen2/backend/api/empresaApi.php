<?php

    header("Content-Type: application/json");
    include_once("../class/Empresa.php");

    switch($_SERVER['REQUEST_METHOD']){

        case 'GET':
            if (isset($_GET['id'])){
                $empresa = Empresa::getEmpresaPorId($_GET['id']);
                echo $empresa;
            }
            break;

    }