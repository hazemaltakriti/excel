//ARRAYS FOR FIND COLUMNS
columns = new Array("A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z");
// COMMONLY FUNCTION
function SUM()
{  
     var total = 0;
     arguments = filterArguments().filterFromNotNumber(arguments);
    for(var i=0;i<arguments.length;i++)
        total += arguments[i];
    return total;
}

function IF(condition,outputiftrue,outputiffalse)
{
    if(condition == true)
        return outputiftrue;
    else
        return outputiffalse;
}


function AVERAGE()
{
    var numbers=arguments.length;
    var resulte=0;
    var sum=0;
    if(numbers==0)
    {
        alert("please enter parameter into function ");
        return "=AVERAGE()" ;
    }
    for(var i=0;i<arguments.length;i++)
      sum+=arguments[i];

     resulte=(sum/numbers);

      return resulte;
}
// عدد الأرقام في مجال معين 
function COUNT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=COUNT()" ;
    }
    var number=0;

     for(var i=0;i<arguments.length;i++)
    {
        
        if(ISNUMBER(arguments[i]))
        { 
           
            number++;
           
        }

    }

    if(number!=0)
     { 
      return number;
     }

     return "#NAME?";
    
}
function MAX()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=MAX()" ;
    }
    var max=arguments[0];
    for(var i=1;i<arguments.length;i++)
    {
            if(arguments[i]>max)
            {
                max=arguments[i];
            }
    }
    
    return max;


}
function MIN()
{
   
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=MIN()";
    }
    var min=arguments[0];
    for(var i=0;i<arguments.length;i++)
    {
            if(arguments[i]<min)
            {
                min=arguments[i];
            }
    }
    
    return min;


}

//only tow parameter
function MMULT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=MMULT()";
    }else
    if(arguments.length!=2)
    {
        alert("please  you  MUST let two parameter only in function");
        return "=MMULT()";

    }
    var mul=arguments[0]*arguments[1];
    return mul;

}
// function convert number to int
function QUOTIENT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=QUOTIENT()";
    }else
    if(arguments.length!=2)
    {
        alert("please  you MUST let two parameter only in function");
        return "=QUOTIENT()";

    }
   
    var div=arguments[0]/arguments[1];
    return  parseInt(div);

}

function POWER()
{
 if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=POWER()";
    }else
    if(arguments.length!=2)
    {
        alert("please  you MUST let two parameter only in function");
        return "=POWER()";

    }
   var power=parseInt(arguments[1]);
    if(power==0)
    {
       return 1;
    }
    
    var id=arguments[0];
    var sum=1;
    var i=1;

    while(i<power)
    {
     i++;
     id=id * arguments[0];
   
    }
    return id;
}

//RETURN the first parameter in  function    where i choose number from 1 to 254

function CHOOSE()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=CHOOSE()";
    }else
    if(arguments.length<3)
    {
        alert("please you MUST let THREE parameter  in function");
        return "=CHOOSE()";

    }
   
    for(i=1;i<=arguments.length;i++)
    {
      
       
        if(i==arguments[0])
        {
            if(arguments[i]!=undefined)
            return arguments[i];
        }
    }
    return"#NAME?"

}
//DATE(YEAR,MONTH,DAY)
function DATE()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=CHOOSE()";
    }else
    if(arguments.length!=3)
    {
        alert("please you MUST let THREE parameter  in function");
        return "=CHOOSE()";
    }
    var day,month,year,resulte;

    if(arguments[0]<0||arguments[1]<0||arguments[2]<0)
    {
        return "#NAME?";
    }

    if(arguments[2]>31)
    {
       
        return "#NAME?";
    }

    if(arguments[2]<10)
    {
        day="0"+arguments[2];
    }
    else
    {
        day=arguments[2];
    }


    if(arguments[1]>12)
    {
     
        return "#NAME?";
    }

    if(arguments[1]<10)
    {
        month="0"+arguments[1];
    }
    else
    {
        month=arguments[1];
    }


    if(arguments[0]<10)
    {
        year="0"+arguments[0];
    }
    else
    {
        year=arguments[0];
    }
    
    resulte=day+"/"+month+"/"+year;

    return resulte;


}
function PRODUCUT() {
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=PRODUCUT()";
    }
    var mult=1;
    for (var i=0;i<arguments.length;i++)
    {
      mult *= arguments[i];
    }
    return mult;
    
}

// find text inside a nother text start with index passed ..
function FIND() {
    
        if (arguments.length == 0) // Non parameter
        {
            alert(" Please Enter parameter Into The Function ");
            return "=FIND()";
        } else
            if (arguments.length > 3 || arguments.length == 1) // 1 or more then 3 parameters
            {
                alert("Please You Must Pass Three parameter To This Function");
                return "=FIND()";
            }
    
        var find_text = arguments[0] , within_text = arguments[1];
    
        if (arguments.length == 2) var start_index = 0;
        else var start_index = arguments[2] - 1;
    
        if ((start_index < 0) || (find_text.length > within_text.length) || (start_index > within_text.length))
    
            return "#Value!";
    
        else {
            var pos = within_text.indexOf(find_text, start_index);
    
            if (pos == -1)
                return "#Value!";
            else
                return pos + 1;
        }
    }
    