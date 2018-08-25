//ARRAYS FOR FIND COLUMNS
columns = new Array("A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z");

//function column return id_column  cell
function COLUMN()
{
   
 
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=COLUMN()";
    }
    else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only  into function ");
        return "=COLUMN()";

    }
    var id=0,j=0,numberleter=0;
   
    // for count leter in id
  
  while((ISNUMBER(passedid[0].charAt(j))==false))
    {
       
      
        numberleter++;

        j++;
    }

    
    j=0;
   // if number conent leter one only
  
  if((ISNUMBER(passedid[0].charAt(1))==true)&&j==0)
  {   
       
      for(var i=0;i<columns.length;i++)
      {
          id++;
          if(passedid[0].charAt(0)==columns[i])
          {
              return id;
          }
      }
  }else
  // in number content tow leter only
  {
    
      for(var i=0;i<columns.length;i++)
      {
          
          id+=26
          if(passedid[0].charAt(j)==columns[i])
          {
             
                    j++;
          }

          if((ISNUMBER(passedid[0].charAt(j+1))==true))
          {  
            for(var i=0;i<columns.length;i++)
            {
                id++;
                if(passedid[0].charAt(j)==columns[i])
                {
                   
                    return id;
                }
            }
          }

      }
  }
  return "#NAME?"
 
}

//  INDIRECT RETURN VALUE CELL
function INDIRECT()
{
    if(arguments.length==0)
    {  
        alert("please enter parameter into function ");
        return "=INDIRECT()";
    }
    else
    if(arguments.length!=1)
    {
        alert("please enter one parameter only  into function ");
        return "=INDIRECT()";

    }

    if(ISBLANK(arguments[0])==true)
    {

        return "# REF!";
    }
   
    
    return arguments[0];


}
//function columns return number columns in rang

function COLUMNS()
{

    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=COLUMNS()";
    }
   var firstid,lastid,j=0,i=0,count=0,acsess=false;
   while(ISNUMBER(passedid[0].charAt(j))==false)
   {
      
       firstid=passedid[0].charAt(j);
       j++;
   }
   j=j-1;
   while(ISNUMBER(passedid[arguments.length-1].charAt(i))==false)
   {
        
       lastid=passedid[arguments.length-1].charAt(i);
       i++;
   }
   i=i-1;
   if(i==j)
   {
   
    for(var d=0;d<columns.length;d++)
    {
      
        if(firstid==columns[d])
        {
        acsess=true;   
        }
        if(acsess==false)
        count=0;
        else
        count++;
        if(lastid==columns[d])
         break;
        
    }

   }
   else
   {
       
      
            for(i=0;i<columns.length;i++)
        {
            count +=26;

            if(columns[i]==passedid[arguments.length-1].charAt(0))
            break;

        }
     
        
        for(var d=0;d<columns.length;d++)
        {
            if(firstid==columns[d])
            {
            acsess=true;   
            }
            if(acsess==true)
            count++;
            if(passedid[arguments.length-1].charAt(1)==columns[d])
            break;
            
        }


   }

    
return count;
    
}
// function vlookup (value for search ,range search ,id column for resulte,fasle)
// arguments[3] =fasle for Exact Match
function VLOOKUP()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=VLOOKUP()";
    }
    var j=1;
    var position=arguments[arguments.length-2];
   for(var i=1;i<arguments.length-2;i++)
   {
       if(arguments[0]==arguments[i])
       while(j<position)
       {
           j++,i++;
           if(j==position)
           return arguments[i];
       }
   }
    return "#NAME?";
}
// function rows return number rows into rang
function ROWS()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=ROWS()";
    }
    
    var valuesearchy=window.cell($("#"+passedid[arguments.length-1])).getindex().y;
    return valuesearchy;
}
// function row return number row in CELL
function ROW()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=ROWS()";
    }
    
    var valuesearchy=window.cell($("#"+passedid[0])).getindex().y;
    return valuesearchy;
}
// function lookup (value for search , range one ,range two for return value)
function LOOKUP()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=LOOKUP()";
    }
      var  mid=parseInt(arguments.length/2)+1;
           arguments[0]=arguments[0].toString();  
    for (var i=1,j=mid;i<mid,j<arguments.length;i++,j++)
    {
        arguments[i]=arguments[i].toString();     
        if(arguments[i]==arguments[0])
        return arguments[j];

    }
    return "#NAME?"

}
// FUNCTION MATCH RETURN NUMBER VALUE INTO RANGE  
// MARCH(VALUE,RANGE,1)
function MATCH()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=MATCH()";
    }
  
    for(var i=1;i<arguments.length-1;i++)
    {
      
        if(arguments[0]==arguments[i])

        {
            return i;
        }
       
      
    }

  

  return "#NAME?";

}


