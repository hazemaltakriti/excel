<?php
namespace validate;
class valid
{
    function isNumber($number)
    {
        if( $number == 0  )
            return true;
        return false;
    }
    function isAge()
    {
        return true;
    }
     function isBelong()
    {
        return true;
    }
}

?>