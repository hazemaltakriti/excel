<?php
namespace controller;
use \lib\controller as controller ;
class testphp extends controller
{
    function removeme()
    {
        $x = 0;
        if( $x == 0  )
            echo "i will make something ";
    }
    function test()
    {
        return $this->view('test');
    }
}

?>