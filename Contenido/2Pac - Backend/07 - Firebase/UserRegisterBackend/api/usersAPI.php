<?php
    //localhost:8000/.../api/users.php
    //echo 'Informacion: ' . file_get_contents('php://input');
    //echo "Metodo HTTP: " . $_SERVER['REQUEST_METHOD']; 
    
    //sleep(1);
    header("Content-Type: application/json");
    include_once("../class/User.php");
    require_once("../class/Database.php");

    $database = new Database();

    switch($_SERVER['REQUEST_METHOD']){

        case 'POST': //Guardar
            $_POST = json_decode(file_get_contents('php://input'),true);
            $user = new User($_POST["name"],$_POST["lastname"],$_POST["birthday"],$_POST["country"]);
            $key = $user->saveUser($database->getDatabase());
            $resultado["mensaje"] = "Guardar usuario, informacion: " . $user . " y con key: " . $key;
            echo json_encode($resultado);
        break;

        case 'GET': //Obtener
            if (isset($_GET['id'])){ //?id=#
                User::getUser($_GET['id'], $database->getDatabase());
            }else{
                User::getUsers( $database->getDatabase() );
            }
        break;

        case 'PUT': //Actualizar
            $_PUT = json_decode(file_get_contents('php://input'),true);
            $user = new User($_PUT["name"],$_PUT["lastname"],$_PUT["birthday"],$_PUT["country"]);
            $user->updateUser($_GET['id'], $database->getDatabase());
            $resultado["mensaje"] =  "Actualizar un usuario con el id: " .$_GET['id'].
                                    ",  Informacion a actualizar: " . $user;
            echo json_encode($resultado);
        break;

        case 'DELETE': //Borrar
            User::removeUser($_GET['id'],  $database->getDatabase());
            $resultado["mensaje"] = "Eliminar un usuario con el id: ".$_GET['id'];
            echo json_encode($resultado);
        break;
    }



?>
