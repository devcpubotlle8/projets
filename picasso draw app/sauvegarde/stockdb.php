<?php
include_once 'db.php';
if(isset($_POST['Sauvegarder']))
//sauvegarder le canvas transformer en image dans la base de donnee sql
if(move_uploaded_file($_) {
        echo "Donnee sauvegarder !"; FILES["monCanvas"],'upload/'.$filename)){
		$insert = "INSERT into Image(file_name,uploaded_on,status) values('$filename',now(),1)";
		if(mysqli_query($conn, $insert)){
		  echo 'Dessin sauvegarder';
      }