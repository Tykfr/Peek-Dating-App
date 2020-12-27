<?php

//Must include config file
require "init.php";

//Get UserID and store in $userID variable
$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$userID = $obj['userID'];

$sql_query = "SELECT * FROM Prompts WHERE userID='$userID'";

$result  = $con->query($sql_query);

if($result){
  echo $result;
}
else{

  echo "Error: Not Found";
}
?>
