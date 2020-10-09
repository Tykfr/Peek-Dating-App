<?php

require "init.php";

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);
$userID = null;
$name =  $obj['name'];
$email = $obj['email'];
$phoneNumber = $obj['phoneNumber'];

// Creates a new entry of a user in the users table and retrieves the userID created. 
$newUserQuery = "INSERT INTO users (Name, Email, PhoneNumber) VALUES ('$name', '$email', '$phoneNumber' )";
$result = mysqli_query($con, $newUserQuery);
$sql = mysqli_query($con, "SELECT userID  FROM users WHERE PhoneNumber = $phoneNumber");
if ($sql->num_rows > 0) {
    $row = $sql->fetch_assoc();
    $userID = $row['userID'];
    echo json_encode($userID);
}


// Creates a new entry of a user settings in the settings table. 
$newUserSettings = "INSERT INTO Settings (userID, Visibility, PhoneNumber, Email, PushNotificationStatus, AppleStatus, FacebookStatus, GoogleStatus) 
    VALUES ('$userID', TRUE, '$phoneNumber', '$email', TRUE , FALSE , FALSE , FALSE )";

$userSettings = mysqli_query($con, $newUserSettings);

//Creates a new entry of a user profile in the Profile table. 

$bio = $obj['bio'];
$birthDate = $obj['birthDay'];
$birthMonth = $obj['birthMonth'];
$birthYear = $obj['birthYear'];
$city_state = $obj['city_state'];
$ethnicity = $obj['ethnicity'];
$gender = $obj['genderResult'];
$datingInterest = $obj['interestSelection'];
$latitude = $obj['latitude'];
$longitude = $obj['longitude'];
$occupation = $obj['occupation'];
$politicalViews = $obj['politicalParty'];
$religion = $obj['religion'];
$school = $obj['school'];


$newUserProfile = "INSERT INTO Profile (userID, Bio, BirthDate, BirthMonth, BirthYear, Gender, School,
PoliticalViews, Religion, Ethnicity, Occupation, City_State, DatingInterest, Longitude, Latitude) VALUES (
'$userID', '$bio', '$birthDate', '$birthMonth', '$birthYear', '$gender', '$school', '$politicalViews', '$religion',
'$ethnicity', '$occupation', '$city_state', '$datingInterest', '$longitude', '$latitude'
)";

$userProfile  = mysqli_query($con, $newUserProfile);

// Creates a new entry of a user prompts in the Prompts table.

$prompt1 = $obj['firstPrompt'];
$prompt2 = $obj['secondPrompt'];
$prompt3 = $obj['thirdPrompt'];
$response1 = $obj['firstResponse'];
$response2 = $obj['secondResponse'];
$response3 = $obj['thirdResponse'];

$newUserPrompts = "INSERT INTO Prompts (userID, Prompt_1, Prompt_2, Prompt_3, Response_1, Response_2, Response_3) VALUES(
    '$userID', '$prompt1', '$prompt2', '$prompt3', '$response1', '$response2', '$response3'
)";

$userPrompts = mysqli_query($con, $newUserPrompts);


// // Need to figure out how to store pictures on databases

// // $firstImage = $obj["largeImage"];
// // $secondImage = $obj['mediumImageOne'];
// // $thirdImage = $obj['mediumImageTwo'];
// // $fourthImage = $obj['smallImageOne'];
// // $fifthImage = $obj['smallImageTwo'];
// // $sixthImage = $obj['smallImageThree'];

// // $test1 = serialize(gzcompress($firstImage, 9));

// // echo json_encode(strlen(serialize(($test1))));

// // $test2 = gzcompress($secondImage, 9);
// // $test3 = gzcompress($thirdImage, 9);
// // $test4 = gzcompress($fourthImage, 9);
// // $test5 = gzcompress($fifthImage, 9);
// // $test6 = gzcompress($sixthImage, 9);
// // $test1 = base64_encode(gzdeflate($firstImage, 9));
// // $test2 = base64_encode(gzdeflate($secondImage, 9));
// // $test3 = base64_encode(gzdeflate($thirdImage, 9));
// // $test4 = base64_encode(gzdeflate($fourthImage, 9));
// // $test5 = base64_encode(gzdeflate($fifthImage, 9));
// // $test6 = base64_encode(gzdeflate($sixthImage, 9));



// // $newUserPhotos = "INSERT INTO Photos (userID, Photo_1) VALUES('$userID','$test1' )";
// // $userPhotos = mysqli_query($con, $newUserPhotos);
// // if ($userPhotos) {
// //     echo json_encode($userID);
// // } else {
// //     echo json_encode("Error occurred when submitting photos");
// // }


mysqli_close($con);
