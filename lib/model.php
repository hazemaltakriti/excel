<?php
namespace lib;
use lib\db;
class Model
{
    protected $data = [];
    
    protected $table;

    function save()
    { 
        $db = db::singletone() ;
        $db->insert( $this->data , $this->table );
        return $db->getLastId();
    }

    function __set($name,$val)
    {
        $this->data[$name]=$val;
    }
    
    function __get($name)
    {
        return $this->data[$name];
    }

    function setTable($table)
    {
        $this->table=$table;
    }
    function removefromdata($key)
    {
        if(isset($this->data[$key]))   
            unset($this->data[$key]);
    }
    function getTable()
    {
        if( !isset($this->table) )
        {
            $this->table = get_class($this).'s';
            
            #sanitize from namespace
                $this->table = explode('\\',$this->table );
                $this->table = end($this->table); 
            #end sanitize namespaces
        }

        return $this->table;
    }
    function getdata()
    {
        return $this->data;
    }

    function update($cond = null)
    {   
        $db = \lib\db::singletone();
        if( $cond == null )  
            $db->update( $this->data , $this->table );
        else
            $db->update( $this->data , $this->table , $cond);
    }

    function delete()
    {
        $this->table = $this->getTable();
        
        if(array_key_exists('id',$this->data))  
            DB::delete(  $this->table , "id='{$this->data['id']}'"); 
        else
            DB::delete(  $this->table  );
        
    }

    function selectAll($id = null)
    {
        
       
        $db = db::singletone();
        return $db->selectAll($this->table,$id);
    }

    function getcolumnfromtable()
    {
        $db = db::singletone();
        return $db->getcol( $this->table );
    }


 
    

}

?>