function Table()
{

    this.numbercell  ;

    this.numberrow ;

    this.checkCtrlClick = false;

    this.isstretchcol = false;

    this.sheethtml ;

    this.setSheetHtml = function()
    {
        this.sheethtml = $('#sheet1')[0].outerHTML;   
    }
    this.setColumnAndRow = function(numbercell =30, numberrow =30)
    {
        this.numbercell = 30;
        this.numberrow = 30;
    }
    this.toAlpha = function(num)//function for convert number of column to alpha
    {
        var res = "" ;
        do
        {
                res += String.fromCharCode( num%10+65 );
                num = Math.floor(num/10);
        }
        while(num>0)
        
        return res;
    }
    this.setId = function()//set id for input on focus dependt on row html and column html
    {
       var tbl = this;
        $('#exceltable').on('focus','input',
        
            function()
            {
                var columnindex = $(this).closest('td').index();
                
                var rowindex = $(this).closest('tr').index();
                   
                var id = tbl.toAlpha(columnindex-1) + rowindex;

                $(this).attr('id',id);
            }
        )
    }
    
    this.suggested = function(input)
    {
        $('#exceltable').on('keyup','input',
        
            function() 
            {
                if( $(this).val()[0] != "="   ) 
                    return ;

                self = $(this)  ;
                var availableTags = allfunction.map(function(e){  return "=" + e + "(" });
                self.autocomplete(
                {
                  source: availableTags
                });

            } 
        )
      
    }
    

    this.print =function( sheet = $('#sheet1') )//sheet here for specefied which sheet i have to print 
    {
        var td = "<td><input type='text'></td>";
    
        var row =  [];

        var thead =sheet.children('thead');

        var  colborder =  '<div class="colborder" style="display: block;"></div>';
    
        for(var i = 0 ; i<= this.numbercell ; i++)
        {
            if(i == 0)
                thead.append("<th style='background-color:#b0b0b0'></th>");
            thead.append("<th>" +  this.toAlpha(i) + "</th>");
            
            row[i] = td;
        }
      
        var tbody = sheet.children('tbody');

        for(var i = 0 ; i<this.numberrow; i++)
        {
             tbody.append( "<tr>" + "<td>" + (i+1) + "</td>" + row  + "</tr>");
        }    
        return sheet;
    }

    this.ctrlClick = function()
    {
        var self = this;
        addEventListener('keyup',function(e)
        {
             if( e.which == 17 )
            {
                if ( self.checkCtrlClick )
                    self.checkCtrlClick = false; 
                else
                    self.checkCtrlClick = true;
            }
            else    
                self.checkctrlclick = false;              
        });
        $('#exceltable').on('focus','input',function()
        {
             if( self.checkCtrlClick == false )
            {
                    $('input').removeClass('selected');
                    $(this).addClass('selected');
                   
            }   
            else 
            {
                console.log('value of' + self.checkCtrlClick );
                $(this).addClass('selected');
                $(this).attr('selected-index',$('.selected').length)
            }             
        });
    }
    
   
    this.addRow = function()
    {
        jQuery(function($) {
            $('#exceltable').on('scroll', function() 
            {
                var table = pickedsheet;
                
                tbody = table.children('tbody');
                if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) 
                {
                   var lastrow  = $( tbody.children('tr:last').prop('outerHTML') ); 
                    lastrow.find('input').val("");

                    var rownumber = parseInt(lastrow.children('td:first').html())+1;
                    console.log( rownumber );
                    lastrow.children('td:first').html(rownumber);
                
                    tbody.append(lastrow);
                }
            })
        });
    }

    this.addColumn = function()
    {
        var selfobj = this;
        jQuery(function($) {
            $('#exceltable').on('scroll', function() 
            {
                var table = pickedsheet;
                tbody = table.children('tbody');
                var thead  = table.children('thead');
                if( $(this).scrollLeft()  + $(this).innerWidth() >= $(this)[0].scrollWidth )
                {
                    var tdhtml = $(tbody.children('tr').children('td')[0].outerHTML);

                    tdhtml.find('input').val('');
                    
                    tbody.children('tr').append(tdhtml);
                    
                    thhtml = $(thead.children('th:last')[0].outerHTML);

                    thead.append(thhtml);

                    tr = tbody.children('tr');

                    thhtml.html( selfobj.toAlpha( pickedsheet.children('thead').find('th').length -2    ) )   ;           
                }
            })
        });
        
    }

    this.createSheet = function()
    {
        var self = this;
       
        $('#newsheet').click(function()
        {
            
            var linksheet = $('<button></button>');

            var sheetname = "sheet" + ( $('#sheets').children().length + 1);

            linksheet.html(  sheetname );
            
            linksheet.addClass('btn').addClass('sheet');
            if( $('#sheets').children().length  == 0 )
                linksheet.addClass('btn-success');
            $('#sheets').append(linksheet);
            
            var sheettbl = $(  self.sheethtml  );

            sheettbl.addClass('collapse');

            sheettbl.attr('id',sheetname);

            sheettbl = self.print( sheettbl );

            $('#exceltable').append(sheettbl);

            self.setColumnAndRow();//reset values of number column and number row after end of create sheet

            return sheettbl;
        });
    }
    //function for change tag when click on sheet
    this.clickLinkSheet = function()
    {
        $('#sheets').on('click','.sheet',function()
        {
            /*line for set sheet id in first of tables */
            var sheetid = $(this).html().trim();
  
            $( '#' + sheetid ).siblings().addClass('collapse');

            $( '#' + sheetid ).siblings().removeClass('in');
            
            $('#' + sheetid).addClass('in');
            
            pickedsheet = $( '#' +sheetid );
        });
    }

    
    //function for calling functions from 
    this.command = function()
    {
        this.setSheetHtml();

        this.clickLinkSheet();

        this.setColumnAndRow();//for config num of row and number of column

        this.setId();//function for set id on click  on input

        this.ctrlClick();

        this.suggested();

        this.addRow();
        
        this.addColumn();

        this.createSheet();

        pickedsheet = $('#sheet1');
    }
}
