<?php

//Must include config file
require "init.php";

//Get UserID and store in $userID variable
$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$userID = $obj['userID'];

$sql_query = "SELECT * FROM Profile WHERE userID=$userID";

$result  = mysqli_query($con,$sql_query);

if($result->num_rows > 0){
  $row = $result->fetch_assoc();
  echo json_encode($row);
}
else{

  echo json_encode("Error: Not Found");
}
?>
