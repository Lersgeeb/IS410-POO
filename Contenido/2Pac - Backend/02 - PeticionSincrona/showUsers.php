<table border="1" style="margin-top: 2em;">
    <thead>
        <th>Usuario</th>
        <th>Password</th>
    </thead>
    <tbody>
<?php
    $contenidoArchivo = file_get_contents('users.json');
    $usuarios = json_decode($contenidoArchivo,true);

    for($i = 0; $i <sizeof($usuarios);$i++){
    echo '  <tr>
                <td>'  . $usuarios[$i]['usuario'] . '</td>
                <td>'  . $usuarios[$i]['password'] . '</td>
            </tr>';
    }
?>

    </tbody>
</table>