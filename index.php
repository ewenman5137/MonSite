<?php
require_once 'vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
session_start();

if(isset($_GET['page'])){
    switch($_GET['page']){
        # Home
        case 'home':
            require_once 'app/controllers/home.php';
            break;
        default:
            header('Location: home');
            break;
    }

}else{
    header('Location: home');
}