<?php
include_once 'send_functions.php';

// отримання данних з фронта
$data = $_POST['data'];
$isDeleted = $_POST['isDeleted'];
$id = $_GET['id'];

// запис даних можливий лише при наявності двох параметрів
if($data && $isDeleted){
    insertData($data, $isDeleted);
}
// вивід данних виконується завжди при зверненні до файлу

getData($id);