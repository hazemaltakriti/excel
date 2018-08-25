
function testCase(funnctionName)
{
    this.results = [];
    this.funnctionName = funnctionName;

    
    this._isAccepted = function(executedString , output , expectedOutput)
    {
        var div = $("<div></div>").addClass('alert-success').addClass("alert").addClass("text-capitalize");
        
        var strong = $("<strong></strong>").html("case #" + this.results.length + ":");

        var span = $("<span></span>").html(" " + executedString 
                                            + "is Accepted" + 
                                             " output is : " + output + " , expected output is :" + expectedOutput );
        div.append(strong).append(span);
                                        
        this.results.push(    div[0].outerHTML   );
        
    }

    this._isNotAccepted = function( executedString , errorMessage  , output , expectedOutput )
    {
        var div = $("<div></div>").addClass('alert-danger').addClass("alert").addClass('text-capitalize');
        
        var strong = $("<strong></strong>").html("case #" + this.results.length + ":");

        var span = $("<span></span>").html(" " + executedString 
                                            + " is Not Accepted" + " error:" + errorMessage 
                                            + " output is : " + output + " , expected output is :" + expectedOutput );
        div.append(strong).append(span);
                                        
        this.results.push(    div[0].outerHTML   );
    }

    this.assertSame = function(input,expectedOutput,messageErr="failed")
    {
        eval(eval("window."+ this.funnctionName  + ".toString().replace(/alert\\(/g,'return (')"));
        
        try
        {
            var executedString =  funnctionName + "(" + input + ")";

            var result = eval( executedString  );
            
            console.log(this.funnctionName + " res "  + result + " output " + expectedOutput);
            
            if(   result.toString() !== expectedOutput.toString()   )
                this._isNotAccepted(executedString,messageErr,result , expectedOutput)
            else    
                this._isAccepted( executedString , result ,expectedOutput );
        }
        catch(messageErr)
        {
            this._isNotAccepted( executedString , messageErr , result , expectedOutput )
        }
        return this;
    }
    
    this._createReportFunction= function(divTitle)
    {
        var div = $("<div></div>").addClass('alert').addClass('alert-info');   
        var errorLenght = divTitle.children(".alert-danger").length;
        var content = "Function " + this.funnctionName + ": Assertion: " + this.results.length  
                        + " failute:" + errorLenght;
        div.html( content );
        divTitle.append(div);
    }   
    this.execute = function()
    {
        var divTitle = $("<div><div>").attr('id',funnctionName);
        var headerTitle = $("<h2></h2>").addClass("well").addClass('text-center').
                        addClass('text-primary').addClass('text-capitalize');
        headerTitle.html( "Function test case " + "<span>" + this.funnctionName + "<span>" );
        divTitle.append(headerTitle).append(this.results );
        $("#resulttestcase").append(  divTitle );
        this._createReportFunction(divTitle);
    } 
}