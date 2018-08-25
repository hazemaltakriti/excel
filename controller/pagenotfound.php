<?php
namespace controller;
use lib\controller;

class pagenotfound extends controller
{

    function controllernotfound()
    {
        $this->redirect('user/home');
        return $this->view('pagenotfound',['error'=>'controller not found']);
    }
    
    function methodnotfound($nameobject)
    {
        $this->redirect('user/home');
        return $this->view('pagenotfound',['error'=>"function not found in object $nameobject "]);
    }
    function argumentnotfound($className,$methodName)
    {
        $this->redirect('user/home');
        return $this->view('pagenotfound',['error'=>"error in argument in  $className/$methodName "]); 
    }

}
?>