function Save()
{
    var self = this;

    var thisclass  = this;

    var savebtn = $('#save');

    var jsonsheets = { "sheets" : [] };
    //this function is used in _configurationsheet
    this._pickAcceptesElementFromsheet = function(currentsheet)
    {
        var table = [];
        var inputexceltable = currentsheet.find('input');        
        for( var i=0 ; i < inputexceltable.length ; i++ )
        {
            var element = inputexceltable.eq(i);
            var id = element.attr('id');   
        
            if (typeof id !== typeof undefined && id !== false)
            {
                element.attr('value',element.val())
                
                var outerhtml = element[0].outerHTML;
                
                var length = outerhtml.length;

                table.push(outerhtml);
            }
        }
        return table;
    }
    this._configurationSheet = function(indexsheet)
    {
        var exceltable =  $('#exceltable').children('table');
        
        var currentsheet = exceltable.eq(indexsheet);

        var sheetname = currentsheet.attr('id');
        
        var richtext  ;
        
        var tempjsontable = 
        {
            "table"  : [],
            "richtext"  : "",
            "maxcol" : currentsheet.find('thead').find('th').length -2,
            "maxrow" : currentsheet.find('tbody').find('tr').length-1
        };
        if( currentsheet.children('.richtext').length )
        {
            tempjsontable.richtext = currentsheet.children('.richtext')[0].outerHTML;
        }
        var jsontable = {}; 
        
        jsontable[sheetname]  = tempjsontable;

        var table = this._pickAcceptesElementFromsheet(currentsheet);
        
        jsontable[sheetname].table = table;

        jsonsheets.sheets.push( jsontable );

        return jsonsheets
    }
    this.getFileName = function()
    {
        return $("#inputgetfilename").val();
    }
    this.isValidateFileName = function()
    {
        return self.getFileName().match(/^[A-z]+$/) != null;
    }

    this.onClickSave = function()
    {
        var self = this;

        savebtn.click(function()
        {         
            var exceltable =  $('#exceltable').children('table');
            if( !self.isValidateFileName() )
            {
                alert("invalide");
                return ;
            }
            for(var j = 0 ; j < exceltable.length ; j++ )
            {
                self._configurationSheet(j);       
            }
            ;
            thisclass.sendTable(jsonsheets, self.getFileName() );
            jsonsheets = { "sheets" : [] };
        });
    }

    this.sendTable = function(jsontable , fileName)
    {
        $.post(window.WEBSITE_NAME  + '/' + 'user' + '/' + 'save' ,
        {
            "jsonTable": jsontable ,
            "fileName" : fileName,
        },
        function(data,status)
        {
            alert(data);
        });
    }
   
    this.onKeyUpOnFileName = function()
    {
        $("#inputgetfilename").keyup(function()
        {
            var messageResDiv = $("<div id='messageRes'></div>").addClass('alert').css('margin-top','10');;
            var strongTag = $("<stron></strong>")
           if( !self.isValidateFileName()  )
           {
                messageResDiv.addClass('alert-danger');
                messageResDiv.append("Error!");
                messageResDiv.append(strongTag).append("File Name Must Be Small And Big Letters");;
           }
           else 
           {
                messageResDiv.addClass('alert-success');
                strongTag.append("Success!");
                messageResDiv.append(strongTag).append("File Name Is Ok");;
           }
            $(this).closest(".form-group").children('#messageRes').remove();
            $(this).closest(".form-group").append( messageResDiv  ) ;
        })
    }
    this.command = function()
    {
        this.onClickSave();
        this.onKeyUpOnFileName();
    }
}
