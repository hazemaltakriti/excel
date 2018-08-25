
//function convert number  binary to ..
function BIN_2DEC()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=BIN_2DEC()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=BIN_2DEC()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 2).toString(10);
            
}


function BIN_2HEX()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=BIN_2HEX()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=BIN_2HEX()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 2).toString(16);
            


}

function BIN_2OCT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=BIN_2OCT()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=BIN_2OCT()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 2).toString(8);
            


}

//function convert number  decimal to ..
function DEC_2BIN()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DEC_2BIN()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=DEC_2BIN()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 10).toString(2);
            
}


function DEC_2HEX()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DEC_2HEX()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=DEC_2HEX()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 10).toString(16);
            


}

function DEC_2OCT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DEC_2OCT()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=DEC_2OCT()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 10).toString(8);
            


}


//function convert number  OCT to ..
function  OCT_2BIN()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=OCT_2BIN()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=OCT_2BIN()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 8).toString(2);
            
}


function  OCT_2DEC()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=OCT_2DEC()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=OCT_2DEC()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 8).toString(10);
            


}

function OCT_2HEX()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=OCT_2HEX()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=OCT_2HEX()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 8).toString(16);
            
}

//function convert number  HEX to ..
function  HEX_2BIN()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=HEX_2BIN()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=HEX_2BIN()";
    }
   var  num=arguments[0];
   alert(1);
   return parseInt(num, 16).toString(2);
            
}


function HEX_2DEC()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=HEX_2DEC()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=HEX_2DEC()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 16).toString(10);
            


}

function HEX_2OCT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=HEX_2OCT()";
    }else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only into function ");
        return "=HEX_2OCT()";
    }
   var  num=arguments[0];
   
   return parseInt(num, 16).toString(8);
            


}

// function COMPLEX return x,y يرد القيمة على شكل عدد حقيقي وتخيلي
function COMPLEX(x,y)
{
    if(x==0)
    {
        if(y==0)
        return 0;

        else

        if(y==1)
        return "i";

        return y+"i";
    }

    if(y==0)
    {
        if(x==0)
        return 0;

        else

       return x;
    }
   

    return x+"+"+y+"i";
}
// function for validation  x==y retun 1 else return 0
function DELTA(x,y)
{
    

    if(y==x)
    {
        return 1;
    }
   

    return 0;
}
// function for validation if step (x)>= step(y)
function  GESTEP(x, y)
{
    

    if(x>=y)
    {
        return 1;
    }
   

    return 0;
}
