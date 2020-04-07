<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <?php
    
        //Declaracion de variable
        $nombre = "Gabriel";
        $apellido = "Escobar";

        //Mostrar en pantalla
        echo "Hola $nombre";

        //Concatenar texto
        echo "<br><br> <h2>Concatenar Texto</h2>";
        echo "Hola ". $nombre . " " . $apellido;

        //bucle
        echo "<br><br> <h2>Imprimiendo con bucle</h2> <br>";
        echo "<ul>";
        for($i=0; $i<10; $i++){
            echo "<li>" . $i . "</li>";
        }
        echo "</ul>";
    
        //Declaracion de Arreglo
        $myArray = array();

        //Asignacion dentro de arreglos 
        $myArray[0] = 100;
        $myArray[1] = 200;
        $myArray[2] = 300;

        //Otra manera de decarar un arreglo y asignar valores
        $myArrayV2[] = 100;
        $myArrayV2[] = 200;
        $myArrayV2[] = 300;

        //Comprobando igualdad entre arreglos
        echo "<br><br> <h2>Areglo1</h2>";
        echo "<ul>";
        for($i=0; $i<3; $i++){
            echo "<li>" . $myArray[$i] . "</li>";
        }
        echo "</ul>";

        echo "<br><br> <h2>Arreglo2</h2>";
        echo "<ul>";
        for($i=0; $i<3; $i++){
            echo "<li>" . $myArrayV2[$i] . "</li>";
        }
        echo "</ul>";

        //Imprime un arreglo en forma de cadena
        echo "<br><br> <h2>Imprimiendo Arreglo como Cadena</h2>";
        echo "<pre>";
        var_dump($myArrayV2);
        echo "</pre>";
        
        //Arreglo Multiclase
        $cosas[] = 1;
        $cosas[] = "Hola";
        $cosas[] = $myArrayV2;

        /*imprimiendo con bucle */
        echo "<br><br> <h2>Imprimiendo con bucle</h2>";
        for ($i=0;$i<count($cosas);$i++)
            echo "$cosas[$i]<br>"; //genera un error al querer imprimir el arreglo dentro del arreglo


        /*imprimiendo arreglo de multiClases con var_dump */
        echo "<br><br> <h2>Imprimiendo con var_dump</h2>";
        echo "<pre>";
        var_dump($cosas); //Se imprime tanto el indice como valor
        echo "</pre>";

        //Arreglos asociativos: Utilizan cadenas en vez de enteros como indices (similar a un Json)
        $persona1["nombre"] = "Gabriel";
        $persona1["apellido"] = "Escobar";
        $persona1["edad"] = 20;

        echo "<br><br> <h2>Imprimiendo Arreglo Asociativo</h2>";
        echo "<pre>";
        var_dump($persona1); //Se imprime tanto el indice como valor
        echo "</pre>";

        //Recibe un arreglo y retorna una cadena en JSON
        echo "<br><br> <h2>Imprimiendo Arreglo Asociativo convertido a cadena de JSON</h2>";
        echo json_encode($persona1);
        
        //Otra forma de crear un Arreglo Asociativo
        $persona2 = array(
            "nombre"=>"Pedro",
            "apellido"=>"Martinex",
            "edad"=>44
        );
        
        //Convertir una cadena JSON en Arreglo Asociativo
        $cadenaJSON = '{"marca":"Asus","modelo":"N45d","procesador":"32234GHz"}';

        $computadora = json_decode($cadenaJSON, true);
        echo "<br><br> <h2>Imprimiendo cadena JSOn convertido a Arreglo Asociativo</h2>";
        echo "<pre>";
        echo var_dump($computadora);
        echo "</pre>";

        //Generar codigo js desde php
        echo "<script>console.log('Hola gente')</script>"



    
    ?>
    
</body>
</html>