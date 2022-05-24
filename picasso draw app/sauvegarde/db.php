<?php
    $hostname='localhost';
    $username='root';
    $password='';
    $databaseName = "my_db";
    $conn=mysqli_connect($hostname,$username,$password,$databaseName);
      if(!$conn){
          die('Se connecte pas au serveur MySql :' .mysql_error());
        }
?>
