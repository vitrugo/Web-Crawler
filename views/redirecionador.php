<?php

$id = $_GET['id'];
$palavra = $_GET['nome'];


$usuario = "root";
$servidor = "localhost";
$senha = "";
$db = "lp3";


if ($conn = mysqli_connect($servidor, $usuario, $senha, $db)) {
    $result = mysqli_query($conn, "INSERT INTO pesquisa VALUES(default, '$palavra', '$id')");
    if ($result) {
        header("location: https://en.wikipedia.org?curid=$id");
        //echo "</br>ID: ".$id;
        //echo "</br>PALAVRA: ".$palavra;
    } else {
        //echo mysqli_error($conn);
        header("location: http://localhost/Projeto-lapa-web/Web-Crawler/views/");
    }
}
