<?php
require('library.php');

//$iterator = $_POST['iterator'];
//$response['Tipo'] = getInfo($iterator, "Tipo");


for ($i=0; $i <= count(getData()); $i++) { 
	if(getInfo($i, "Tipo")!=getInfo($i+1, "Tipo")){
		$response['op1'] = getInfo($i, "Tipo");
		break;
	}	
	echo json_encode($response);
}



?>