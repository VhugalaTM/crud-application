<?php 
    //THE DATA THAT WE WILL BE RECEIVEING FROM THE REACT FILE RUNS IN A DIFFERENT PORT THAN THE PHP PORT, TO BRING COMMUNICATION BETWEEN THE TWO WILL WRITE THE FOLLOWING FUNCTION
    header("Access-Control-Allow-Origin: *"); 
    header("Access-Control-Allow-Headers: *"); 
    header("Access-Control-Allow-Methods: *"); 
    //THE ABOVE ALLOWS THIS PHP FILE TO RECEIVE THE DATA FROM A REACT FILE AND SEND A RESPONSE TO THE REACT FILE

    //DATABASE CONNECTION
    include "dbConnection.php";
    $database=new dbConnection;
    $db=$database->connection();
    
    //TO ACCESS THE DATA SENT WE DON'T USE $_POST METHOD, INSTEAD WE USE THE file_get_contents. AND THE DATA SENT FROM REACT IS IN A JSON FORMAT, IT MUST DECODED
    $userData = json_decode(file_get_contents("php://input"));
    $httpMethod=$_SERVER['REQUEST_METHOD'];

    if($httpMethod == "POST"){
        //CREATE SQL STATEMENT SENDING IT TO THE DATABASE
        if(empty($userData->studentName)){
            $response="<font color=red>student name is empty</font>";
        }elseif(empty($userData->course)){
            $response="<font color=red>course field is empty</font>";
        }else{
            $insert=$db->prepare("INSERT INTO students (Student_Name, Course) VALUES (:a, :b)");
            $insert->bindParam(":a", $userData->studentName);
            $insert->bindParam(":b", $userData->course);
            $insert->execute();
            $response="<font color=green>added successful</font>";
        }
        echo json_encode($response);
    }
    if($httpMethod=="GET"){
        //STATEMENT IS MEANT FOR UPDATING DATA IN THE DATABASE FOR A SPECIFIC USER
        $path=explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])){
            $display=$db->prepare("SELECT * FROM students WHERE id=:id");
            $display->bindParam(":id", $path[3]);
            $display->execute();
            $users=$display->fetch();            
        }else{
            $display=$db->prepare("SELECT * FROM students");
            $display->execute();
            $users=$display->fetchAll();

        }
        echo json_encode($users);
    }

    if($httpMethod == "DELETE"){
        $delete=$db->prepare("DELETE FROM students WHERE id=:id");
        //THE FOLLOWING STATEMENT IS USED TO ACCESS THE VALUE STORED WITH THE URL/ http request method
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $delete->bindParam(":id", $path[3]);
        $delete->execute();
        $response="row has been deleted";
        echo json_encode($response);
    }

    if($httpMethod == "PUT"){
        if(empty($userData->studentName)){
            $response="<font color=red>student name is empty</font>";
        }elseif(empty($userData->course)){
            $response="<font color=red>course field is empty</font>";
        }else{
            $update=$db->prepare("UPDATE students SET Student_Name = :a, Course = :b WHERE id=:id");
            $update->bindParam(":id", $userData->id);
            $update->bindParam(":a", $userData->studentName);
            $update->bindParam(":b", $userData->course);
            $update->execute();
            $response="<font color=green>updated successful</font>";
        }
        echo json_encode($response);
    }
?>