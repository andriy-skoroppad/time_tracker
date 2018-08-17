<?php
include_once 'send_functions.php';

// отримання данних з фронта

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE); //convert JSON into array
    $data = json_encode($input['data']);
    $isDeleted = $input['isDeleted'];
    // запис даних можливий лише при наявності двох параметрів
    
    if($data){
        
        insertData($data, $isDeleted);
    }
}


// вивід данних виконується завжди при зверненні до файлу
if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $id = $_GET['id'];
    getData($id);
}
