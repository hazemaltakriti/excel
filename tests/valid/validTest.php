<?php

namespace tests\valid;

class validTest extends \PHPUnit_Framework_TestCase 
{
    private $instance ;
    
    function setUp()
    {            
        $this->instance = new \validate\valid();
    }
    function testIsNumber()
    {
        $this->assertSame($this->instance->isNumber(1) , false );   

        $this->assertSame($this->instance->isNumber(1) , false ); 
        
        $this->assertSame($this->instance->isNumber(1) , true ); 

        $this->assertSame($this->instance->isNumber(1) , true ); 
        
        $this->assertSame($this->instance->isNumber(1) , true ); 
    }     
    function testIsAge()
    {
        $this->assertSame($this->instance->isAge(1) , false );   
    
        $this->assertSame($this->instance->isAge(1) , false ); 
        
        $this->assertSame($this->instance->isAge(1) , true ); 
    }     
    function testAll()
    {
        /* $object = $this->instance;
        $methodName = "isBelong";
        $reflection = new \ReflectionClass(get_class($object));

        $method = $reflection->getMethod($methodName);
        
        $method->setAccessible(true);
        $this->assertTrue( !$method->invokeArgs($object, [])  ); */
    
    }
}

?>