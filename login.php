

<?php
session_start();
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "users";

$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$user = $_REQUEST['user'];
$pass = $_REQUEST['pass'];
$s = "select * from loginform where user= \"$user\"&& pass =\"$pass\"";
$r = mysqli_query($conn,$s);
$num = mysqli_num_rows($r);


if ($num > 0)
{
	$result = mysqli_fetch_assoc($r);
	$id = $result["ID"];
	$_SESSION["user"] = $id;
	
	echo 1;       
}else{
 
   echo 0; 
        

}


mysqli_close($conn);
?>

