<?php
include ('./App/Todos.php');

switch ($_REQUEST["req"])
{
	case "get":
		$obj = new Todos();
		echo json_encode($obj->getAll($_REQUEST));
		break;
	case "get_one":
		$obj = new Todos();
		echo json_encode($obj->getOne($_REQUEST));
		break;
	case "update":
		$obj = new Todos();
		echo json_encode($obj->update($_REQUEST));
		break;
	case "remove":
		$obj = new Todos();
		echo json_encode($obj->remove($_REQUEST));
		break;
	}
?>