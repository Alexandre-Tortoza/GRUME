<?php
    $conexao_db = mysqli_connect('localhost:3308', 'root', 'admin', 'grume');
    $querry = mysqli_query($conexao_db, "SELECT * FROM equipe;");
    $resultado = array();

    while($registro = mysqli_fetch_assoc($querry)){
        array_push($resultado, $registro);
    };

    $json = json_encode($resultado);
    echo $json;

?>
