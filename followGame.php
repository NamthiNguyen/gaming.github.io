<?php
session_start();
$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "users";
$gameID = $_REQUEST['gameID'];
$gameName = $_REQUEST['gameName'];

$conn = mysqli_connect($servername, $username, $password, $dbname);
if(isset($_SESSION["user"])){
	$user = "i".$_SESSION["user"];
	$sql = "INSERT INTO $user(gameid,game)VALUES ('$gameID','$gameName')";
	$result = mysqli_query($conn, $sql);
	if($result){
		echo 1;
	}
	else{
		echo 0;
	}
}else{
	echo 2;
}



mysqli_close($conn);
?>

