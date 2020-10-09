<?php
//
require "init.php";
function retrieveNewUserID($con, $phoneNumber)
{
    $retrieveUserID = mysqli_query($con, "SELECT userID FROM users WHERE PhoneNumber = '$phoneNumber'");

    if ($retrieveUserID->num_rows > 0) {
        $row = $retrieveUserID->fetch_assoc();
        echo json_encode($row['userID']);
    }
}
// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Populate  user phone number from JSON $obj array and store into $phoneNumber.
$phoneNumber = $obj['phoneNumber'];

/*first check if the user exist in the users table, 
 *if so, return their userID, 
 *else create an entry in the table and return their userID
*/

$userLookUp = "SELECT userID FROM users WHERE PhoneNumber = $phoneNumber";
$result = mysqli_query($con, $userLookUp);
if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo json_encode($row['userID']);
} else {

    echo json_encode("-1");
}


mysqli_close($con);
