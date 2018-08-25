<?php
namespace lib;

class assets
{

    static function includeFolderJs($foldername)
    {
        
        if ( $dh = opendir(APP_PATH  . DS . 'assets' . DS  .  "pagejs/$foldername") )
        {
            while ( ($file = readdir($dh)) !== false)
            {
                if ($file != "." && $file != ".." )
                {
                    $file = ASSET . "/pagejs/$foldername/$file";
                    echo "<script src='$file'></script>"; 
                    
                }
            }
            closedir($dh);
        }
                  
    }
}

?>