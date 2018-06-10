<?php 

$conn = new mysqli('localhost', 'root', 'c000482f5d7f7b7f8b47b1e05d515fbf2fee68aea7ae6a1d', 'chat');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$text = $_REQUEST['message'];
$sender_name = $_POST['nickname'];

$sql = "INSERT INTO messages (text, time, sender_name) VALUES ('$text', '2018', '$sender_name');";

if(!$result = $conn->query($sql)) {
    echo "Error:".$conn->error . "\n";
    exit;
}

$data;
$data -> text = $text;
$data -> sender_name = $sender_name;
$data -> status = "OK";
header('Content-Type: application/json');
echo json_encode($data);
?>
