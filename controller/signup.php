<?php
namespace controller;
use lib\controller;
class signup extends controller
{
    private $sendmailvalidate = false;
    
    function user()
    { 
      \controller\middleware :: user();
        return $this->view('signup');
    }
    
    function authuser()//for get inputs from form signup
    {   
        
        $request  = \lib\request :: singletone();
        
        $model = new \model\signup(); 

        $model->email    = $request->input('email');
        
        $model->username = $request->input('username');
        
        $model->password  = $request->input('password');

        return $this->autherror($model);
    }
    
    private function autherror($model)//for validate if there an error and convert to new page if there are no errors
    {
        $allerror = (array)$this->fixingerror($model);

        $data  = array_merge($model->getdata() ,  $allerror );
   
        if( count($allerror) != 0 )
            return $this->view('signup', $data );  
        
        $model->settable('users');
                
        $model->password = sha1($model->password);

        $model->validatecode = sha1(rand());
        
        $url = WEBSITE_NAME . DS . 'user' . DS . 'validate' . DS . $model->email . DS .  $model->validatecode  ;
        
        $this->sendmailvalidate($model->email , 'validate email' , $url);

        $insered_id = $model->save();
        
        $session = \lib\session::singletone();

        $session->set('id',$insered_id)->set('username',$model->username);


       return $this->redirect('user/home');
    }

    private function fixingerror($model)//for fixing error in signup
    {
        $allerror = (object)[];

        $regex  = \lib\regex :: singletone();

        if( !$regex->isemail($model->email) )  $allerror->emailerr = 'invalid email' ;  

        if( $model->countpassedemail($model->email) == 1 ) $allerror->emailerr = 'this email was registered before';

        if( !$regex->isname($model->username) ) $allerror->usernameerr = 'only lettere and white space';
        
        if( is_null($model->username) ) $allerror->usernameerr = 'this information is required ';
        
        if( is_null($model->password) )  $allerror->passworderr = 'this information is required ';
        
        if(  strlen($model->password)<8 ) $allerror->passworderr = 'password must be 8 letters at least';

        return $allerror;
    }


    private function sendmailvalidate($to , $subject , $msg , $header="evaluation validate")
    {
        if( !$this->sendmailvalidate )
            return ;

        mail($to,$subject,$msg,$headers); 
    }
   
}
?>