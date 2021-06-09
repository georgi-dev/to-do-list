<?php 
    include ('./App/Todos.php');

    $todos = new Todos();
    
    if($todos::save()) {
        header("Location: /list.php");
                exit();
    }
?>



