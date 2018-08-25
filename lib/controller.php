<?php
namespace lib;
/**
 * Class for inherited each controller form them 
 * @author HazemAltakriti <email@email.com>
 */
class controller 
{
    
    protected $header = null;

    protected $footer = null;
    protected $nav = null;
    protected $content = null;
    /**
     * Undocumented function
     * @param string $viewname
     * @param array $data
     * @author Hazem <email@email.com>
     * @return string
     */
    protected function view(string $viewname, array $data=null)
    {
      
        if($data!=null)
           extract($data);

        if( isset( $this->header )  )
            require LAYOUTS_DIR_HEADER . $this->header . '.php' ;

        if( isset( $this->nav )  )
            require LAYOUTS_DIR_NAVBAR . $this->nav .'.php' ;

        if( isset( $this->content )  )
            require LAYOUTS_DIR_CONTENT . $this->content .'.php' ;
              

        require  APP_PATH .   DS . 'view' . DS . 'pages/' . DS .  (new \ReflectionClass($this))->getShortName() . DS .  $viewname . '.php';

        if( isset( $this->footer )  )
            require LAYOUTS_DIR_FOOTER . $this->footer . '.php';
      

         return $this;
    }

    protected function setlayout($header , $nav , $footer, $content=null )
    {
        $this->header = $header;

        $this->footer = $footer;

        $this->nav = $nav;

        $this->content = $content;
    }    

    protected function redirect($dir)
    {
        $dir = WEBSITE_NAME . DS . $dir     ;

        header('Location:' . $dir );
    }
    protected function script($src)
    {
        echo "<script src = WEBSITE_NAME/$src ></script>";
    }
    private function sendwebsitennametoscript()
    {
        echo "<script> var WEBSITE_NAME=",WEBSITE_NAME,"</script>";
    }
}

?>