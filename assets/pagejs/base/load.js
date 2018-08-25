function Load()
{
    
    $("#sheets").children().remove();
    this.table =  new Table();
    this.table.command();
    this._replacByLoadedId  =function(element , sheet )
    {
        var id  = element.attr('id');
        
        var colindex = id.replace(/[0-9]/g,"");
        
        var rowindex = parseInt(id.replace(/[a-z]/gi,"")) ;
     
        var tempcolindex = 0;
      //  alert(colindex);
        var th = sheet.children('thead').find('th');
        for( i=0;i<th.length ;i++    )
        {
            if(  th.eq(i).html().trim() == colindex )
            {
                tempcolindex = i;
                break;
            }    
        }
        
        var targettr = sheet.find('tbody').children('tr').eq(rowindex);

        var targettd = targettr.children('td').eq(tempcolindex);

        targettd.children('input').replaceWith(element);
    }

    this._fixingRichTextloaded = function(targetSheet , richtext)
    {
        /* $(".ui-wrapper").remove(); */
        targetSheet.append(richtext);
        
        var includingimg  = $(".includingimg");
        var img = $("img");
        for( var i = 0 ; i < includingimg.length ; i++  )
        {
            includingimg.eq(i).html(  img.eq(i)[0].outerHTML     );
        } 
        $(".ui-resizable-handle").remove();
        $("img").resizable()
       includingimg.draggable();

    }

    this._getUserdataFromServer = function()
    {
        var userdata;
        $('#sheet1').remove();
        $.ajax({
                'async': false,
                'type': "POST",
                'global': false,
                'dataType': 'html',
                'url': window.WEBSITE_NAME +  "/user/loadsheets",
                'success': function (data) 
                {
                    userdata = JSON.parse(data);
                }
            });
        return userdata;
    }
    this._configSheetByIndex = function(userdata,i)
    {
        var sheet  = userdata.sheets[i]["sheet"+(i+1)];
        this.table.numbercell = sheet.maxcol;
        this.table.numberrow = sheet.maxrow;
        $('#newsheet').click();
        //lines for update sheets according to old variable
        if( sheet.hasOwnProperty( "table" )  )
        {
            var tableinput = sheet.table;
            for(var j=0 ; j< tableinput.length ; j++)
            {
                    this._replacByLoadedId( $(tableinput[j]) , $('#sheet' + (i+1) ) );
            }
        }
        return sheet;
    }

    this.loading =function()
    {
    
        var userdata  = this._getUserdataFromServer();;//variable describe number row + number colum + data for user 

        for( var i=0 ; i<userdata.sheets.length ; i++  )
        {
            var sheet = this._configSheetByIndex( userdata , i );
            this._fixingRichTextloaded( $( "#sheet" + (i+1) ) ,sheet.richtext );
        }

        $('#sheet1').removeClass('collapse');
        
        pickedsheet = $("#sheet1");
    }

   
}
