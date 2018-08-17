<?php
//підключення і конф бд
$link = mysqli_connect('localhost', 'root', '')//domen, username, pasword

or die('лажа ' . mysqli_error($link));

mysqli_select_db($link, 'timer') or die('лажа з вибором бд');

//отримапння даних і заодно і видалення їх
function getData($id = null){
    global $link;

    if($id){
        $query = ' SELECT * FROM timer.tbl_user_data WHERE id = '. $id .';';
    }else{
        $query = ' SELECT * FROM timer.tbl_user_data;';
    }

    //$query .= ' DELETE FROM timer.tbl_user_data WHERE updatedAt < DATEADD(mi,-3,GETDATE()) AND isDeleted = 1';

    $result = mysqli_query($link,$query);

    $dataset = array();

    while($rowset = mysqli_fetch_array($result)) {
        $row["id"] = $rowset["id"];
        $row["data"] = $rowset["data"];
        $dataset[] = $row;
        // foreach($rowset as $row){
        //     $dataset[] = $row;
        // }

    }
    
    $query = 'DELETE FROM timer.tbl_user_data WHERE TIMESTAMPDIFF(MINUTE,updatedAt,NOW()) > 3 AND isDeleted = 1';
    mysqli_query($link,$query);

    mysqli_close($link);

    return json_encode($dataset);
}

// внесення нових даних і видалення старих
function insertData($data, $isDeleted = true){
    global $link;

    $query = 'DELETE FROM timer.tbl_user_data WHERE TIMESTAMPDIFF(MINUTE,updatedAt,NOW()) > 3 AND isDeleted = 1';

    $query = ' INSERT INTO timer.tbl_user_data (data,isDeleted,createdAt) VALUES(\''.$data.'\','.($isDeleted?1:0).','.time().');';

    //$query = ' DELETE FROM timer.tbl_user_data WHERE updatedAt < DATEADD(mi,-3,GETDATE()) AND isDeleted = 1';

    mysqli_query($link,$query);
    
    mysqli_close($link);
    
}