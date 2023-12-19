<?php
    $name = $_POST['name'];
    $mail = $_POST['email'];
    $mensage = $_POST['mensage'];

    $conection__db = mysqli_connect('127.0.0.1:3308', 'root', 'admin', 'grume');


    $query = "INSERT INTO `grume`.`mail_teste` (`nomeDest`, `emailDest`, `mensagemDest`) VALUES ('$name', '$mail', '$mensage');";
    $result = mysqli_query($conection__db, $query);





?>