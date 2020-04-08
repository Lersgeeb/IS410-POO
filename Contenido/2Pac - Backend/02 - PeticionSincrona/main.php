<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        
        #Al usar POST se envia los valores como un Arreglo Asociativo

        //imprimir el usuario y contraseña enviado por POST al servidor 
        /*echo 'Usuario: ' . $_POST['usuario'].'<br>'; 
        echo 'Password: ' .$_POST['password'];*/

        //Imprimir el Arreglo Asociativo
        /*echo '<pre>';
        var_dump($_POST);
        echo '</pre>'; */

        
        if($_POST){
            sleep(3);
            $contenidoArchivo = file_get_contents('users.json');
            $usuarios = json_decode($contenidoArchivo,true);
            $usuarios[] = $_POST;

            echo '<h2>Usuario Agregado</h2>';
            echo  json_encode($_POST);

            $archivo = fopen('users.json','w');//r: Lectura, w: Escritura, a+: Anexar
            fwrite($archivo, json_encode($usuarios));
            fclose($archivo); 
            include("showUsers.php");  
        }
        
    ?>
</body>
</html> 