<?php
session_start();

// Verificar se o usuário está autenticado
if (!isset($_SESSION['authenticated']) || $_SESSION['authenticated'] !== true) {
    // Redirecionar para a página de login se não estiver autenticado
    header('Location: login.html');
    exit;
}
?>
