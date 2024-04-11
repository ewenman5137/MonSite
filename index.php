<?php
require_once '../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

if(isset($_GET['page'])){
    switch($_GET['page']){
        # Home
        case 'home':
            require_once 'app/controllers/homepage.php';
            break;
        case 'aboutMe':
            require_once 'app/controllers/aboutMe.php';
            break;
        case 'portfolio':
            require_once 'app/controllers/portfolio.php';
            break;
        default:
            header('Location: home');
            break;
    }

}else{
    header('Location: home');
}