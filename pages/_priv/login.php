<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="../../css/_priv/priv.css">
</head>
<body>
    <div id="login">
    <h2>Login</h2>

<?php
// Verifique se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifique a senha
    $senha_correta = "20918248";
    $senha_digitada = $_POST["senha"];

    if ($senha_digitada == $senha_correta) {
        session_start();
        $_SESSION["autenticado"] = true;

        header("Location: admin.php");
        exit();
    } else {
        echo "<p>Senha incorreta. Tente novamente.</p>";
    }
}
?>

<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
    <input type="password" name="senha" required>
    <input type="submit" value="Entrar">
</form>
    </div>
</body>
</html>
