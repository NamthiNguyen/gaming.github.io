<?php
$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "games";
$game = $_REQUEST["game"];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM gameid where name = \"$game\"";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
	// output data of each row
	while($row = mysqli_fetch_assoc($result)) {
		echo $row["appid"];
		 
	 }
}
else {
  echo "0";
}


mysqli_close($conn);
?>
