<?php
#echo "running\n";
$word1 = $_REQUEST["word1"]; #email
$word2 = $_REQUEST["word2"]; #List of game info
#echo $word2;
$output = "output";
#$command = escapeshellcmd("python3 test.py");
$command = escapeshellcmd("python3 /var/www/html/testEmail.py $word1 '$word2'");
$output = shell_exec($command);
echo $output;
?>
