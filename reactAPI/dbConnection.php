<?php 
    //CREATE A CONNECTION WITH MYSQL DATABASE
    class dbConnection{
        private $server="localhost";
        private $dbName="mydatabase";
        private $username="root";

        public function connection(){
            try{
                $connect=new PDO('mysql:host='.$this->server.';dbname='.$this->dbName, $this->username);
                $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $connect;
            }catch(\Exception $e){
                echo "Database error: ".$e->getMessage();
            }
        }
    }
?>