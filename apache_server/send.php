<?php
include_once 'send_functions.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, PATCH, DELETE");
header("Content-Type: application/json; charset=UTF-8");
// отримання данних з фронта


if($_SERVER['REQUEST_METHOD'] === 'POST'){
    
    
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, TRUE); //convert JSON into array
    $id = $input['id'];//string
    $data = $input['data']; //json_encode($input['data']);
    $isDeleted = $input['isDeleted'];
    // запис даних можливий лише при наявності двох параметрів
    
    if($data && $id){
        echo insertData($id, $data, $isDeleted);
    } else {
        echo "{\"messege\": \"ERROR: no data or id.\"}";
    }
} else


// вивід данних виконується завжди при зверненні до файлу
if($_SERVER['REQUEST_METHOD'] === 'GET'){
    $id = $_GET['id'];
    echo getData($id);
} else {
    
    echo "{\"messege\": \"ERROR: server error.\"}";
}


