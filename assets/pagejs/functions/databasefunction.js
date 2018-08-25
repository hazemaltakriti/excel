columns = new Array("A","B","C","D","E","F","G","H",
"I","J","K","L","M","N","O","P","Q","R","S","T","U",
"V","W","X","Y","Z");
// function DAVERAGE return average for information into database 
//paramaters (range,id column,retery rang)
function DAVERAGE()
{
    if( arguments.length == 0 )
    {
        alert("please enter parameter into function ");
        return "= DAVERAGE()" ;
    }
    
    
    
    var idstart=passedid[0].charAt(0),avg=0,j=0,n=0,access=false;
    // FOR COLUMN CONTENT MORE LETER 
    while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }
    
    idcolumn=arguments.length/2;
   
    idcolumn=parseInt(idcolumn);
    var count=0;
    var sum=0;
  
    for(i=0;i<arguments.length;i++)
    {
      if(passedid[i]==passedid[0]&& i!=0)
      break;

      if(passedid[i].charAt(j)==idstart)
      {
          count=1;
          access=true;
      }
      else
      if(access==true)
      count++;
    
     if(count==arguments[idcolumn])
     {
       
         sum +=arguments[i];
         n++;
         access=false; 
         count=0;
     }
  
   
   
    }
    
    avg=sum/n;

    return avg;      
   
}
// function DCOUNT return COUNT(NUMBER) into database 
//paramaters (range,id column,condition 1,condition 2)

function DCOUNT()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "= DCOUNT()" ;
    }
    
   var count=0,idstart=passedid[0].charAt(0),j=0,place;

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-3;i++)
    {   
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-3])
        { 
           if(ISNUMBER(arguments[i])==true)
             {
              
               if( arguments[i]>arguments[arguments.length-2] &&arguments[i]<arguments[arguments.length-1])
                    count++;

                     access=false; 
                     place=0;
    

             }
        }
     
    }
    if(count==0)
    {
        return "#Name?";
    }
    else
    return count;
}

// function DCOUNTA return ID Which fulfills the condition into database 
//paramaters (range,id column,condition 1,condition 2)

function DCOUNTA()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DCOUNTA()" ;
    }
    
   var count=0,idstart=passedid[0].charAt(0),j=0,place;

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-3;i++)
    {   
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-3])
        {     
          if(arguments[i]>arguments[arguments.length-2]&&arguments[i]<arguments[arguments.length-1])
             return passedid[i];             
        }
     
    }
   
        return "#Name?";
  
}
// function DMAX return VALUE MAX IN COLUMN INTO DATABASE
//paramaters (range,id column)

function DMAX()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DMAX()" ;
    }
    
   var idstart=passedid[0].charAt(0),j=0,place,max=arguments[0];

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-1;i++)
    {   
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-1])
        {   
            if(max<arguments[i])
            max=arguments[i];
            access=false; 
            place=0;  
        
        }
     
    }
   
   return max;
}

// function DMIN return VALUE MIN IN COLUMN INTO DATABASE
//paramaters (range,id column)

function DMIN()
{
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DMIN()" ;
    }
    
   var idstart=passedid[0].charAt(0),j=0,place,min=arguments[0];

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-1;i++)
    {   
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-1])
        {   
            if(min>arguments[i])
            min=arguments[i];
            access=false; 
            place=0;  
        
        }
     
    }
   
   return min;
}

// function DPRO MULTI VALUES IN COLUMN INTO DATABASE
//paramaters (range,id column,condtion 1,condtion 2)

function DPRODUCT()
{
   
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DPRODUCT()" ;
    }
    
   var idstart=passedid[0].charAt(0),j=0,place,pro=1;

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-3;i++)
    { 
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-3])
        {   
           
        if(arguments[i]>arguments[arguments.length-2]&&arguments[i]<arguments[arguments.length-1])
           pro *=arguments[i];
            access=false; 
            place=0;  
        
        }
     
    }
   
   return pro;
}

// function DSUM return SUM VALUES IN COLUMN INTO DATABASE
//paramaters (range,id column,condtion 1,condtion 2)

function DSUM()
{
   
    
    if(arguments.length==0)
    {
        alert("please enter parameter into function ");
        return "=DSUM()" ;
    }
    
   var idstart=passedid[0].charAt(0),j=0,place,sum=0;

   while(ISNUMBER(passedid[0].charAt(j+1))==false)
    {
        idstart=passedid[0].charAt(j+1);
        j++;
    }

    for(var i=0;i<arguments.length-3;i++)
    { 
        if(passedid[i].charAt(j)==idstart)
        {
         
            place=1;
            access=true;
        }
        else
        if(access==true)
        place++;
     
       if(place==arguments[arguments.length-3])
        {   
      
       
        if(arguments[i]>arguments[arguments.length-2]&&arguments[i]<arguments[arguments.length-1])
           sum +=arguments[i];
            access=false; 
            place=0;  
        
        }
     
    }
   
   return sum;
}
