<?php
$servername = "34.66.215.92";
$username = "root";
$password = "";
$dbname = "games";
$game = "among us";

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
 		 echo "the game ". $row["name"]. " has the ID ". $row["appid"]."<br>";
		 
	 }
}
else {
  echo "0 results";
}

mysqli_close($conn);
?>