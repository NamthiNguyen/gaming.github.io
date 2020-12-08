<?php
session_start();
$user = "i".$_SESSION["user"];
$servername = "34.66.215.92";
$username = "root";
$dbname = "users";
$password = "";
$game = $_REQUEST['gameName'];

$conn = mysqli_connect($servername, $username, $password, $dbname);
$sql = "DELETE from $user where game = \"$game\"";
$result = mysqli_query($conn, $sql);
if($result){
	echo 1;
}
else{
	echo 0;
}

?>
