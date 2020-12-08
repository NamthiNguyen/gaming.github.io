<!DOCTYPE html>
<?php
session_start();
$servername = "34.66.215.92";
$username = "root";
$dbname = "users";
$password = "";
$conn = mysqli_connect($servername, $username, $password, $dbname);
if(isset($_SESSION["user"])){
	$user = $_SESSION["user"];
	$sql = "select * from loginform where ID= \"$user\"";
	$r = mysqli_query($conn, $sql);
	$result = mysqli_fetch_assoc($r);
	$u = $result["user"];
}else{
	$user = "Null";
}
?>
<html>
<body>
	<?php
           echo "Welcome " . $u;	
?>

<?php

if(isset($_SESSION["user"])){
	$user1 = "i".$_SESSION["user"];

	$s = "select game from $user1";
	$r1 =  mysqli_query($conn, $s);
	while($res = mysqli_fetch_assoc($r1)){
		$name = $res["game"];	
		echo "<table><tr><td>Game:</td><td>$name</td><td><button id =\"$name\" onClick=\"unsubscribe(this.id)\">unsubscribe</button></tr><td></td></table>";

	}
	
	
	
	}
?>
<p><a href = "index.html">Home</a></p>

<script>
	function unsubscribe(gamename){
		var phpURL = "unsubscribe.php?gameName="+gamename;
		var req = new XMLHttpRequest();
		req.open("GET",phpURL,true);
		req.onreadystatechange = function(){
			if (this.responseText.trim() === "1"){
			success();
			}
			else{
				 console.log(this.response);
			}
		
		}
		req.send(null)
		event.preventDefault()		
	}
	function success(){
		console.log("success");
		window.location.replace("user.php");
	}
</script>
</html>

