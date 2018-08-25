<?php
namespace controller;
use \lib\controller;
class user extends controller
{
    function home()
    {
       \controller\middleware::login();
        $this->setlayout('user','user','user','homeAndLoad');
         return $this->view('home' , [ 'oldProjects'=> $this->loadProjectName()  ]);
    }
    
    function save()//ajax 
    {
        \controller\middleware::login();
        
        $session = new \lib\session();

        $request = \lib\request::singletone();

        if( !file_exists( UPLOADSSAVES . $session->get('id')) )
            mkdir(APP_PATH . DS . 'uploads' . DS . 'saves' . DS . $session->get('id'));

        $FileName = $request->input('fileName');

        file_put_contents(APP_PATH . DS . 'uploads' . DS . 'saves' . DS . $session->get('id') .DS. 
                        $FileName . '.json' ,json_encode( $_POST['jsonTable' ],JSON_PRETTY_PRINT));
    }

    function load( $fileName )
    {
        \controller\middleware::login();
        
        $this->setlayout('user','user','user','homeAndLoad');

        $session = new \lib\session();
        
        $session->set('fileName',$fileName);

        $this->view('load' ,  [ 'oldProjects'=> $this->loadProjectName()  ] );
    }

    function loadsheets()
    {
        \controller\middleware::login();

        $request = \lib\request::singletone();

        $session = new \lib\session();

        $fileName  = $session->get('fileName');

        echo file_get_contents( APP_PATH . DS . 'uploads' . DS . 'saves' . DS .
                                 $session->get('id') .DS. $fileName . '.json'  );
    }

    function signOut()
    {
        \lib\session::reset();

        \controller\middleware::login();
    }
  
    function loadProjectName()
    {
        $session = new \lib\session();
        
        $folderName  = APP_PATH . DS . 'uploads' . DS . 'saves' . DS . $session->get('id');

        $projects = [];

        if( !is_dir(  $folderName  )  )
            return [];

        if ( $dh = opendir($folderName) )
        {
            while ( ($file = readdir($dh)) !== false)
            {
                if ($file != "." && $file != ".." )
                {
                    $projects[] =  str_replace(".json"   , "" , $file);
                }
            }
            closedir($dh);
        }
        return $projects;
    }
    
}

?>