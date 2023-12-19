<?php
// Encerre a sessão
session_start();
session_destroy();

// Redirecione para a página de login
header("Location: login.php");
exit();
?>
