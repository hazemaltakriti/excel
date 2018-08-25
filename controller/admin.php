<?php

namespace controller;

use lib\controller;


use lib\regex;

use lib\request;

class admin extends controller
{

    function showFunctions()
    {
        $foldername  = "functions";
        $contentFiles = "";
        $i=0;
        if ( $dh = opendir(APP_PATH  . DS . 'assets' . DS  .  "pagejs/$foldername") )
        {
            while ( ($file = readdir($dh)) !== false)
            {
                if ($file != "." && $file != ".." )
                {
                    $file = ASSET . "/pagejs/$foldername/$file";
                    $contentFiles .=   file_get_contents( $file  );
                }
                $i++;
            }
            closedir($dh);
        }
      
        return $this->view('showFunctions',['contentFiles'=>$contentFiles]);
    }
}
?>