<?php
$host = 'localhost'; // адрес сервера  95.215.206.82
$database = 'estake'; // имя базы данных
$user = 'estake_user'; // имя пользователя
$password = 'Efj2#$etf3g2bujnefwd'; // пароль

// подключаемся к серверу
$link = mysqli_connect($host, $user, $password, $database) 
    or die("Ошибка " . mysqli_error($link));

// выполняем операции с базой данных
     
?>