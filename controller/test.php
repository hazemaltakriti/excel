<?php
namespace controller;
use \lib\controller;
class test extends controller
{
    function testCommonlyFunction()
    {
        $this->setlayout('test',null,'user');
        return $this->view('commonlyfunction');
    }
    function testDate_time_function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('Date_time_function');
    }
    function testLogic_function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('Logic_function');
    }
    function testString_Function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('String_Function');
    }
    function testEngineering_Function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('Engineering_Function');
    }
    function testInformation_Function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('Information_Function');
    }
    function testSearch_Function()
    {
        $this->setlayout('test',null,'user');
        return $this->view('Search_Function');
    }
    function pagestest()
    {
        $this->setlayout('test',null,'user');
        $this->view('pagestest');
    }
    
}

?>