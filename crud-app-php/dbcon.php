<?php

define("HOSTNAME", "localhost"); //this is the host of the server
define("USERNAME", "root");
define("PASSWORD", "");
define("DATABASE", "crud_operation"); // this is the database that it's connected to

$connection = mysqli_connect(HOSTNAME,USERNAME,PASSWORD,DATABASE);  //holds connection to database crud_operation

if(!$connection) {
die("Connection Failed");
}



?>