<?php 
/
if (isset($_POST ['submit']) && $_POST['email'] != ''){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "conneratherton@gmail.com";
    $headers = "From: ".$email;
    $txt = "You have reveived an email from ".$name".\n\n".$message;

    mail($mailTo, $message, $txt, $headers);
    header("Location: contactform.php?mailsend");

    $message_sent = true;
}
?>
