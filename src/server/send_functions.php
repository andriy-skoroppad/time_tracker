<?php
//підключення і конф бд
$link = mysqli_connect('192.168.1.5', 'root', '')//domen, username, pasword

or die("{\"messege\": \"ERROR: DB connection fail.\"}");

mysqli_select_db($link, 'timer') or die("{\"messege\": \"ERROR: DB select fail.\"}");

//отримапння даних і заодно і видалення їх
function getData($id = null){
    global $link;

    if($id){
        $query = ' SELECT * FROM timer.tbl_user_data WHERE id = '. $id .';';
    }else{
        $error["data"] = new stdClass();
        $error["messege"] = "ERROR: no Id Send";
        return json_encode($error);
    }

    $result = mysqli_query($link,$query);

    $dataset = array();

    while($rowset = mysqli_fetch_array($result)) {
        $row["id"] = $rowset["id"];
        $row["data"] = $rowset["data"];
        $dataset[] = $row;
    }

    mysqli_query($link,'DELETE FROM timer.tbl_user_data WHERE updatedAt < (NOW() - INTERVAL 10 MINUTE)')
     or die("{\"messege\": \"ERROR: Delete old failed.\"}");
    mysqli_query($link,'DELETE FROM timer.tbl_user_data WHERE id = '.$id.';' )
     or die("{\"messege\": \"ERROR: Delete by id failed.\"}");

    mysqli_close($link);
    return json_encode($dataset);
}

// внесення нових даних і видалення старих
function insertData($id, $data, $isDeleted = true){
    global $link;
    
    $query = 'INSERT INTO timer.tbl_user_data (id, data,isDeleted,createdAt, updatedAt) VALUES( '.$id.' , \''.$data.'\', 1, NOW(), NOW());';
    
    mysqli_query($link,$query) or die('{"messege": "ERROR: Id Exist. id = '. $id.'"}');

    mysqli_query($link,'DELETE FROM timer.tbl_user_data WHERE updatedAt < (NOW() - INTERVAL 10 MINUTE)') or die("{\"messege\": \"ERROR: Delete failed.\"}");
    
    mysqli_close($link);

    $succses["data"] = json_decode($data, TRUE);
    $succses["messege"] = "SUCCESS: Add to DB.";
    return json_encode($succses);
}