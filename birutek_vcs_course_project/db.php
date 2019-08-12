<?php
    define("DB_SERVER", "localhost");
    define("DB_USER", "root");
    define("DB_PASSWORD", "");
    define("DB_NAME", "snow_contact");

$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB_NAME);
if($mysqli->connect_error){
    echo "We're sorry. The site is not opening.\n";
    echo 'Error: '.$mysqli->connect_error.'\n';
    exit();
}

mysqli_query($mysqli, "INSERT INTO messages (name, email, title, message) VALUES('$_POST[name]', '$_POST[email]', '$_POST[title]', '$_POST[message]')");