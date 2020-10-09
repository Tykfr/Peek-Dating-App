<?php

require "init.php";
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);
$userID = $obj['userID'];
$status = $obj["status"];

$sql = "UPDATE Settings SET Visibility = '$status' WHERE userID = $userID";
$exc = mysqli_query($con, $sql);


mysqli_close($con);
