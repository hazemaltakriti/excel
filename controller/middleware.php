<?php
namespace controller;
use \lib\controller;
class middleware extends controller
{
  static function login()
  {
    if( !isset( $_SESSION['id'] ) )
      return self::redirect('login/user');
  }

  static function user()
  {
    if( isset( $_SESSION['id'] ) )
      return self::redirect('user/home');
  }

    
}

?>