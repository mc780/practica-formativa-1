<?php

$usuario = $_POST['usuario'] ?? '';
$password = $_POST['password']?? '';

if ($usuario === 'admin' && $password === '1234') {
    echo "Bienvenido admin";
} else {
    echo "Usuario o contraseña incorrectos";
}

?>

