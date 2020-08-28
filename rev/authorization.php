<?php
//$login = $_POST['pincode'];
//if ('login' == 2412 true )
//$_SESSION['login'] = true;
//if ($_SESSION['login']==true) {
// var_dump(zbz);
//};

$login = $_POST['pincode'];
if ($login == 2412 ) {
    session_start();
    $_SESSION['login'] = 'true';
    echo 'true';
}else{
    echo 'false';
};

?>

