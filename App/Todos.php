<?php

    require_once 'DB.php';
   
    class Todos {

        /**
         * @return array
         */
        static function getCountRecords() {
            $sql = "SELECT Count(*) as count FROM `to-do-list`";
            $stmt = new DB($sql);
            return $stmt->fetch()['count'];
        }

        static function getAll($params) {
            
            $page = $params['page'];
            $totalRecordsPerPage = 5;
            
            $offset = ($page-1) * $totalRecordsPerPage;
            $sql = "SELECT
                            id,
                            title,
                            description,
                            created_at
                    FROM     `to-do-list`
                    ORDER BY created_at DESC limit {$totalRecordsPerPage} offset {$offset}";

            $stmt = new DB($sql);
            $count = self::getCountRecords();
            if($count > 0) {
            return [
                        'todos' => $stmt->fetchAll(),
                        'current_page' => $page,
                        'pages' => ceil($count / $totalRecordsPerPage)
                    ];
            }
            return [];
        }

        /**
         * @param int $id
         * @return array
         */
        static function getOne($params): array {
            
            $sql = "SELECT * FROM `to-do-list` WHERE id=:id";
            $binds[":id"] = $params["id"];
            $stmt = new DB($sql);

            return ['result' => $stmt->fetch($binds)]; 
        }

        static function save() {

            print_r($_POST);

            $title = $_POST['title'];
            $description = $_POST['description'];
            $created_at = date("Y.m.d H:i:s");

            $sql = "INSERT INTO `to-do-list` (title, description, created_at)
            VALUES (:title, :desc, :created)";
            $binds[":title"] = $title;
            $binds[":desc"] = $description;
            $binds[":created"] = $created_at;
            $stmt = new DB($sql);

            $result = $stmt->fetch($binds);
            print_r($result);
            return true;
            // die;
            // $lastInsertId = $pdo->lastInsertId();
            // if($lastInsertId)
            // {
            //     return true;
            // }
        }
        static function update($params) {

            $sql = "UPDATE `to-do-list` SET title=:title,description=:desc WHERE id=:id";
            $binds[":id"] = $params["id"];
            $binds[":title"] = $params["title"];
            $binds[":desc"] = $params["description"];
            $stmt = new DB($sql);
            
            $result = $stmt->fetch($binds);

            if($stmt->getAffectedRows() > 0) {
                return ['result' => true]; 
            }

        }
        static function remove($params) {

            $sql = "DELETE FROM `to-do-list` WHERE id=:id";
            $binds[":id"] = $params["id"];
           
            $stmt = new DB($sql);
            $result = $stmt->fetch($binds);
            
            if($stmt->getAffectedRows() > 0) {
                return ['result' => true]; 
            }
            
        }
    }

?>