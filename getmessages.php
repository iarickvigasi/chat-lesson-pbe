<?php
 $conn = new mysqli('localhost', 'root', 'c000482f5d7f7b7f8b47b1e05d515fbf2fee68aea7ae6a1d',       'chat');

 if ($conn->connect_error) {
     die("Connection failed: " . $conn->connect_error);
 }

 $sql = "SELECT * FROM messages;";

 if(!$result = $conn->query($sql)) {
     echo "Error:".$conn->error;
     exit;
 }

 $rows = array();
 while($r = mysqli_fetch_assoc($result)) {
    $rows[] = $r;
 }

 $data = $rows;
 header('Content-Type: application/json');
 echo json_encode($data);
 ?>
