<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "users";
$user = $_POST['user'];
$pass = $_POST['pass'];
$conn = mysqli_connect($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


$s = " select * from loginform where user= '$user'";
$r = mysqli_query($conn,$s);
$num = mysqli_num_rows($r);


if ($num > 0)
{  
 	echo '<script>alert("Email has been used")</script>';
       echo '<h1>Please Hit the back button to signup again using a different email</h1>';	

}else{
	$sql = "INSERT INTO loginform (user,pass)VALUES ('$user', '$pass')";

	$result = mysqli_query($conn, $sql);
	$sql2 = "SELECT * from loginform where user= '$user'";
	$result1 = mysqli_query($conn, $sql2);
	$result2 = mysqli_fetch_assoc($result1);
	$id = "i".$result2["ID"];
	$sql3 = "CREATE TABLE $id(
		num INT(3) NOT NULL AUTO_INCREMENT PRIMARY KEY,
		gameid VARCHAR(11),
		game VARCHAR(50),	
		sentemail VARCHAR(1) DEFAULT '0'
		)";
	$result4 = mysqli_query($conn, $sql3);
	mysqli_close($conn);



		
	
header('location:loginpage.html');
echo '<script>alert("Registration complete please login!")</script>'; 


}


mysqli_close($conn);
?>


