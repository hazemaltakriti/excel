<?php

namespace tests\valid;

class vTest extends \PHPUnit_Framework_TestCase 
{
    private $instance ;
    
    function setUp()
    {            
        $this->instance = new \validate\v();
    }
    function testvIsNumber()
    {
        $this->assertEquals($this->instance->vIsNumber(1) , true , "every thing is not ok" );   

        $this->assertEquals($this->instance->vIsNumber(1) , false ); 
        
        $this->assertEquals($this->instance->vIsNumber(1) , true ); 

        $this->assertEquals($this->instance->vIsNumber(1) , true ); 
        
        $this->assertEquals($this->instance->vIsNumber(1) , true ); 
    }     

    function testVIsAge()
    {
        $this->assertEquals($this->instance->vIsAge() , false );   

        $this->assertEquals($this->instance->vIsAge() , false ); 
        
        $this->assertEquals($this->instance->vIsAge() , true ); 
    }   
     
    function testStr()
    {
        /* $methodName = "isBelong";
        
        $reflection = new \ReflectionClass(get_class($object));

        $method = $reflection->getMethod($methodName);
        
        $method->setAccessible(true);
 */ 
        
        $res = file_get_contents("http://localhost:10080/excel/admin/showFunctions") ;
        
        $this->assertTrue(strpos( $res , "SUM") !== false,"doesnot exist in url");

    } 
}

?>