<?php

$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "users";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if (mysqli_connect_errno()) {
  die("Connection failed: ". mysqli_connect_error());
}
$output = "";
$sql = "SELECT * FROM loginform";
$emailArr = array();
$idArr = array();
$r = mysqli_query($conn,$sql);
while ($row = mysqli_fetch_row($r)) {
	
	$emailArr[] = $row[1];
	$idArr[] = $row[0];
	
}
//print_r($emailArr);
//print_r($idArr);

for($i = 0; $i < count($emailArr); $i++) {
  $sql = "SELECT * from i".$idArr[$i];
  $output = $emailArr[$i].":";
  $r = mysqli_query($conn,$sql);
  while ($row = mysqli_fetch_row($r)) {
    $output .= $row[1] . " ";
  }
  echo $output."\n";

}

mysqli_close($conn);
#Here is the plan
#connect to database
#select user from loginform
#	select id from loginform where user = selecteduser
#	select gameid from "i"+id
#	return gameids in a list
#	return a list where the first element is the email, and the following elements are game id

?>
