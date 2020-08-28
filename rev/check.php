<?php
session_start();
if ($_SESSION['login']=='true') {
    echo 'true';
} else {
    echo 'false';
};
?>