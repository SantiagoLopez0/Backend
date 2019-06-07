<?php
require('library.php');

    $iterator = $_POST['iterator'];
    $response['Id'] = getInfo($iterator, "Id");
    $response['Direccion'] = getInfo($iterator, "Direccion");
    $response['Ciudad'] = getInfo($iterator, "Ciudad");
    $response['Telefono'] = getInfo($iterator, "Telefono");
    $response['Codigo_Postal'] = getInfo($iterator, "Codigo_Postal");
    $response['Tipo'] = getInfo($iterator, "Tipo");
    $response['Precio'] = getInfo($iterator, "Precio");
    $response['cantidadReg'] = count(getData());
    
 
  echo json_encode($response)


/*for($i=0; $i<getInfoRecords(0)['cantidadReg']; $i++){
    echo getInfoRecords($i)['Id'];
    echo "<br>";
    echo getInfoRecords($i)['Direccion'];
    echo "<br>";
    echo getInfoRecords($i)['Ciudad'];
    echo "<br>";
    echo getInfoRecords($i)['Telefono'];
    echo "<br>";
    echo getInfoRecords($i)['Codigo_Postal'];
    echo "<br>";
    echo getInfoRecords($i)['Tipo'];
    echo "<br>";
    echo getInfoRecords($i)['Precio'];
    echo "<br>";
    echo "<hr>";
}*/

?>