<?php

namespace validate;

class v
{
    function vIsNumber($number)
    {
        if( $number == 0  )
            return true;
        return false;
    }
    function vIsAge()
    {
        return true;
    }
    function str()
    {
        return "hello its me life the birthday whats have story tongiht ";
    }
}

?>