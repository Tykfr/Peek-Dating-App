<?php

//Must include config file
require "init.php";

//Get UserID and store in $userID variable
$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$userID = $obj['userID'];
$response = $obj['response'];
$prompt = $obj['prompt'];
$index = $obj['index'];

switch ($index){
    case 1:
        $sql_query = "UPDATE Prompts SET Prompt_1='$prompt', Response_1='$response' WHERE userID=$userID";

        break;
    case 2:
        $sql_query = "UPDATE Prompts SET Prompt_2='$prompt', Response_2='$response' WHERE userID=$userID";

        break;

    case 3:
        $sql_query = "UPDATE Prompts SET Prompt_3='$prompt', Response_3='$response' WHERE userID=$userID";
        break;
}
$result  = mysqli_query($con,$sql_query);

if($result){
    echo json_encode("Success");
}
else{
    echo json_encode("Error: Failed to Update Prompt");
}
?>
