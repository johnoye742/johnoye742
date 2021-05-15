<?php

$name=$_POST['name'];

$email=$_POST['email'];

$message=$_POST['message'];

$subject = $_POST['subject'];

$send = $_POST['send'];

if (!isset($email)) {

} else {
$from="From: $name<$email>\r\nReturn-path: $email";
mail("olugbengajohnoye@gmail.com", $subject, $message, $from);
echo "Email sent!";
}
?>