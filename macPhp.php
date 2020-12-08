<?php
header('Access-Control-Allow-Origin: *');  
$word1 = $_REQUEST["word1"];
$word2 = $_REQUEST["word2"];

    $command = escapeshellcmd("python3 /var/www/html/machineLearning/useMacLearn.py $word1 $word2");
    $output = shell_exec($command);
    echo $output;
?>
