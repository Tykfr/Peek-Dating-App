<?php

require "init.php";
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

$userID = $obj['userID'];
$userSettings = "Select * FROM Settings WHERE userID = $userID";
$result = mysqli_query($con, $userSettings);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row);
} else {
    echo json_encode("user doesnt exist");
}

mysqli_close($con);
