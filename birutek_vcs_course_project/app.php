<?php
if(isset($_POST['submit'])){
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $title = trim($_POST['title']);
    $message = trim($_POST['message']);

    if(!empty($name) && !empty($email) && !empty($title) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
            echo "<script>alert('Thank you for your message!');</script>";
        }
    }
    include('db.php');
}
?>