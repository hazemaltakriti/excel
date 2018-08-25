<?php

namespace controller;

use lib\controller;


use lib\regex;

use lib\request;

class login extends controller
{
   
    function user()
    {
        \controller\middleware::user();        
        
        return $this->view('login');
    }

    function authuser()
    {
        $request = \lib\request::singletone() ;
        
        $email = $request->input('email');

        $password = $request->input('password'); 
   
        if( $email == null  && $password == null  )
            return $this->view('login');
        
        $model = new \model\login();
        
        $res = $model->authuser($email,sha1($password));
        
        $row = $res->fetch_assoc();
        
        if( $row['count(*)'] == 1  )
        {
            $session = \lib\session::singletone();
            $session->set('id',$row['id'])->set('username',$row['username']);     
            return $this->redirect('user/home');
        }
        return $this->view('login',['error'=>'your email or password is incorrect','email'=>$email]);
    }
    
    function forgetpassword()
    {
        
    }
}
?>