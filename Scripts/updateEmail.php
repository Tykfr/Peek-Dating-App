<?php
require "init.php";

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$userID = $obj['userID'];
$email = $obj['email'];

$sql = "UPDATE Settings SET Email = '$email' WHERE userID = $userID";
$sql2 = "UPDATE users SET Email = '$email' WHERE userID = $userID";
if (mysqli_query($con, $sql) && mysqli_query($con, $sql2)) {
    echo json_encode("Success");
} else {
    echo json_encode("Failed");
}

mysqli_close($con);
