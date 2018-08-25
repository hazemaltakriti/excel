function ABS(x){return Math.abs(x);}

function ACOS(x){return Math.acos(x);}

function ACOSH(x){return Math.acosh(x);}

function ASIN(x){return Math.asin(x);}

function ASINH(x){return Math.asinh(x);}

function ATAN(x){return Math.atan(x);}

function ATANH(x){return Math.atanh(x);}

function CEIL(x){return Math.ceil(x);}

function CLZ_32(x){return Math.clz32(x);}//function returns the number of leading zero bits in the 32-bit binary 

function EXP(x){return Math.exp(x);}

function FLOOR(x){return Math.floor(x);}

function LOG(x){return Math.log(x);}

function LOG_10(x){return Math.log10(x);}

function LOG_2(x){return Math.log2(x);}

function SIGN(x){return Math.sign(x);}

function ROUND(x){return Math.round(x);}

function SIN(x){return Math.sin(x);}

function COS(x){return Math.cos(x);}

function TAN(x){return Math.tan(x);}

function SQRT(x){  return Math.sqrt(x);  }
function POW(x,y){  return Math.pow(x,y) }
function MIN()
{ 
    var min =arguments[0] ; 
    for(var i in arguments )
    {  
        if( arguments[i]<min )
             min = arguments[i]
    }  
    return min; 
}
function MAX()
{ 
    var max =arguments[0] ; 
    
    for(var i in arguments )
    {  
        if( arguments[i]>max )
             max = arguments[i]
    }  
    return max; 
}


