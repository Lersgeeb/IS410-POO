  
<?php

require_once __DIR__.'/vendor/autoload.php';

use Kreait\Firebase\Factory;

$factory = (new Factory)
    ->withServiceAccount('./secret/fir-php-test-49dba-6c01d748532f.json')
    ->withDatabaseUri('https://fir-php-test-49dba.firebaseio.com');;

$database = $factory->createDatabase();

/*$newPost = $database
    ->getReference('users')
    ->push([
        'firstName'=>'Juan',
        'lastName'=>'Perez',
        'birthDate'=>'12/12/2012',
        'country'=>'Honduras'
    ]);*/

    $snapshot = $database->getReference('users')->getSnapshot();

?>