function cell(element)
{
    this.element = element;
    
    this.next = function()
    {
        var tdcol = $(this.element).closest('td');
        this.element = tdcol.next().children('input');
        return this;
    }

    this.prev =function()
    {
        var tdcol = $(this.element).closest('td');
        this.element = tdcol.prev().children('input');
        return this;
    }
    this.above =function()
    {
        var row = $(this.element).closest('tr').prev();
        var indexcurrelement  = $(this.element).closest('td').index();
        this.element = row.children('td').eq(indexcurrelement).children('input');
        return  this; 
    }
    this.getcellbyid = function(id)
    {
        this.cellsetidunexist(id);   
        sheet = $("#"+this.getsheetfromid(id) );;
        if(sheet.length == 0)
            sheet = pickedsheet;
        id = this.getpureid(id);
        return sheet.find("#" + id);
    }
    this.down =function()
    {
        var row = $(this.element).closest('tr').next();
        var indexcurrelement  = $(this.element).closest('td').index();
        this.element = row.children('td').eq(indexcurrelement).children('input');
        return this;   
    }

    this.setid = function()
    {
  
        var columnindex = this.element.closest('td').index();
        
        var rowindex = this.element.closest('tr').index();

        var tbl = new Table();

        var id = tbl.toAlpha(columnindex-1) + rowindex;

        this.element.attr('id',id);
       
        return this;
    }

    this.getcellByindex =function(coord)//the type of coord is point 
    {
        var columnindex =coord.y;
        
        var rowindex =coord.x;
        var targetcell = pickedsheet.children('tbody').children('tr')
                            .eq(rowindex).children('td').eq(columnindex).children('input');
                                                    
       
        return new cell( targetcell );
    }
    
    this.getindex = function()
    {
        
        var y = this.element.closest('tr').index();
        var x = this.element.closest('td').index();
        var pt =  new this.point(x,y);
        
        return pt;
    }

    this.point = function(x,y)//this function will use in function range for get index of cell
    {
        this.x = x ,this.y = y;
        this.set = function(x,y)
        {
            this.x = x;
            this.y = y;
        }
        this.get =function()
        {
            alert(this.x + "," + this.y);
        }
    }

   
    this.gete = function()//function for get element 
    {
        return this.element;
    }   
    
    this.range = function( from , to )
    {
        // with two input in same column
        
        frompt = from.getindex();

        topt = to.getindex();
             
        if( topt.x < frompt.x )
        {
            frompt.x = [ topt.x , topt.x = frompt.x ][0];
            from = this.getcellByindex(frompt);
            to   = this.getcellByindex(topt);
        }
        if( topt.y <= frompt.y )
        {
            frompt.y = [ topt.y , topt.y = frompt.y ][0];
            from = this.getcellByindex(frompt);
            to   = this.getcellByindex(topt);
        }
        
        var resultsid = [];
        for(var x = frompt.y ; x<=topt.y ;x++ )
        {
            for(var y = frompt.x ; y<=topt.x ;y++ )
            {
                var element = this.getcellByindex( new point(x,y) ).setid().gete();
               var id = element.closest('table').attr('id') + element.attr('id');
               resultsid.push(id);
            }
            
        } 
        return resultsid;
    }

    this.getsheetfromid = function(id)
    {
        return id.replace(/[A-Z]+[0-9]+/,"");
    }
    this.getpureid = function(id)
    {
        return id.replace(/sheet[1-9]+/,"");
    }
    //function for set id for cell doesnt have id
    this.cellsetidunexist = function(id )
    {
        sheet = $("#"+this.getsheetfromid(id) );
        
        if( sheet.length == 0  )
            sheet = pickedsheet ;
        id = this.getpureid(id);
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
        var targetinput = targettd.children('input');
        targetinput.attr('id' , id);

        return targetinput;
    }
    this.getColumn = function()
    {
       return this.getindex().x;
    }

    return this;
}