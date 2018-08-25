function  ProcessingFunction()
{
    this.checkclickenter = false;
    this.pickedcell = null;//pciked cell for get cell where function is exceuted
    this.visitednode=[]; //array for stop circle gragh in tree when i am update all parent for some node
    //this will check when user keypress on some buttons in keyboard if is not from special charachter 
    this._isBelongCharachtersToUpdate = function(which)
    {
        return which != 40 && which != 18
    }
    //function for add class for calculated cell
    this.pickCalculatedCell = function()
    {
        var prs = this; 
        $('#exceltable').on('keyup','input',        
             function(e)
              {
                    if( !prs._isBelongCharachtersToUpdate(e.which)  )
                        return ;
                    if($(this).val()[0] == "=")
                        $(this).addClass('calculated');
                    else    
                        $(this).removeClass('calculated');
                    
                    if(e.which == 13 || $(this).val()[0] != "="  && $(this).val() != ""   )//means if user in input and click enter 
                    {
                        if(e.which == 13 )
                            prs.checkclickenter = true;
                        else
                            prs.checkclickenter = false;

                        if( e.which == 13 )
                        {
                            $(this).attr( 'expression' ,$(this).val() );
                            if( $(this).hasClass('calculated') )
                                prs.execute($(this));
                        }
                        prs.update($(this));  
                        $('input').removeClass('selected');

                    }
                    else
                    {
                        console.log("i am in line 34 in processing function"  );
                        var attrexpression = $(this).attr('expression');
                        if (typeof attrexpression !== typeof undefined && attrexpression !== false) 
                            $(this).attr('expression',$(this).val());
                            
                    }
              }
        );
    }

    this.focusOnExpressionInput = function()    
    {
        var prs = this;
        
       $("#exceltable").on('focus','input',function()
       {
            var attrexpression = $(this).attr('expression');
            if (typeof attrexpression !== typeof undefined && attrexpression !== false) 
                if( attrexpression.length >0 )
                    $(this).val(attrexpression);
       })
    }
    this._dispatchAltDownKeyUp = function(currentCellExpression)
    {
        var allId = currentCellExpression.match(/[A-Z]+[0-9]+/g);
        var targetString = currentCellExpression;
        for(var i in allId)
        {
            var currentCellFromSentId           = cell().getcellbyid( allId[i] );
            var idcurrentCellFromSentId         = currentCellFromSentId.attr('id');
            var downFromcurrentCellFromSentId   = cell( currentCellFromSentId ).down().setid().gete();
            var iddownFromcurrentCellFromSentId = downFromcurrentCellFromSentId.attr('id');
            targetString = targetString.replace( idcurrentCellFromSentId.trim() , iddownFromcurrentCellFromSentId.trim()   );
        }
        
        return targetString;
    }

    this.AltDownKeyUp = function()
    {
        var self = this;
        $("#exceltable").on('keyup','input',function(e)
        {
            if( e.altKey  && e.which == 40   )
            {
                var currentCell = $(this);
                
                var downCell = cell(currentCell).down().setid().gete();

                var currentCellExpression = currentCell.attr('expression');
                downCell.val(currentCellExpression);
                
               // if( currentCellExpression[0] == "="  )
                 downCell.addClass("calculated");
                 var dispatchedExpression = self._dispatchAltDownKeyUp(currentCellExpression);
                downCell.attr('expression',dispatchedExpression);
                downCell.focus();
                self.execute(downCell);

            }
        });
    }

    this._fixingRelation = function( parent , children )
    {
        var parentid = parent.attr('id');
        var relatedin = children.attr('related-in');
        if (typeof relatedin !== typeof undefined && relatedin !== false) 
        {
            if( relatedin.indexOf(parentid) ==-1 )
                children.attr('related-in',relatedin + "," +  parentid);
                console.log("i am in _fixingRelation relatedin "  + relatedin);
        }  
        else 
            children.attr('related-in',parentid);
    }
    this._processSingleRange = function(range,str)
    {
        var currentranges = range.match(/(sheet[0-9])?[A-Z]{1,}[0-9]{1,}/g);
        var sheetname = cell().getsheetfromid(currentranges[0]);
        
        if( $("#" + sheetname).find('#' + currentranges[0]).length == 0 )
            cell().cellsetidunexist( currentranges[0]  );

        if ($("#" + sheetname).find('#' + currentranges[1]).length == 0 )
            cell().cellsetidunexist( currentranges[1]  );
       
        var temp = pickedsheet ;

        if( $("#" + sheetname).length>0 )
            pickedsheet = $("#" + sheetname);
     
        var targetarr = cell().range    
        (
            new cell( cell().getcellbyid( currentranges[0] ) ) ,
            new cell( cell().getcellbyid( currentranges[1] ) )
        );
    
        pickedsheet = temp;
   
        //for loop for fixing relation to children of picekd cell
        for( var j in targetarr )
        {
            this._fixingRelation( this.pickedcell , cell().getcellbyid( targetarr[j] ) )
        }
        return str.replace( range , targetarr.toString() );
    }
    //function for proccessing range and this function will use in dispatch function
    this._processingRange = function(str)
    {
       
        var ranges =  str.match( /(sheet[0-9])?[A-Z]{1,}[0-9]{1,}:(sheet[0-9])?[A-Z]{1,}[0-9]{1,}/g );
        for(var i in ranges)
        {
            str = this._processSingleRange( ranges[i] , str );
        }
        return str;
    }

    this.isnumeric = function(str)
    {
        return str.search(/(\+|-)?[0-9]+$/)  !=-1;
    }
    //function for set id when write id on cell and another cell doesnot has that id
    this._fixingRelationAndId = function()
    {
        for(var i  in passedid )
        {
           var targetcell =  cell().cellsetidunexist( passedid[i] );
           var relatedin  = targetcell.attr('related-in');
           var id_will_set = this.pickedcell.closest('table').attr('id') + this.pickedcell.attr('id');
           
           if( typeof relatedin !== typeof undefined && relatedin !== false   )
           {
               if( relatedin.indexOf( id_will_set ) == -1 )
                    targetcell.attr('related-in' , relatedin + "," + id_will_set );   
           }
           else
                targetcell.attr( 'related-in' , id_will_set );
        }
    }
    
    this._dispatch = function(str)
    {
        str = this._processingRange(str);
        passedid = str.match(/(sheet[0-9]+([A-Z]{1,}[0-9]{1,}))|([A-Z]{1,}[0-9]{1,})/g);
      
        this._fixingRelationAndId();
        str = str.replace("=","");
        for(var i  in passedid )
        {
            var sheetidval  = cell().getcellbyid(passedid[i]).val();
            if( this.isnumeric(  sheetidval  ) )
                str = str.replace( passedid[i] , sheetidval   );  
            else
                str = str.replace( passedid[i] , '"' + sheetidval + '"' );  
        }
        str = str.replace(/,{2,}/g,",");
        str = str.replace(/,\)/g,")");
        str = str.replace(/\(,/g,"(");
        return str;
    }

    //function for update node with related in node(input) 
    this.update = function(node)
    {
        var self  = this;//array for prevent loop excute when two input related together 
        var relatedNode = node.attr('related-in');
        if ( typeof relatedNode == typeof undefined && relatedNode == false )
            return ;
        try {
            var nodearr = relatedNode.split(',');
        } catch (error) {
            console.log("i am in processfunction in function update line 191"+error);
            return ;
        }
        var prs = this;
        nodearr.forEach(function(item)
        {   
            var targetnode = cell().getcellbyid(item);
            if( self.visitednode.indexOf(item) == -1 )
            {
                prs.execute(targetnode);
                self.visitednode.push(item);
                prs.update(targetnode);//recursion for update all parent 
            }
            self.visitednode.pop();
        });

    }

    this.execute = function(node )
    {
        this.pickedcell = node;
       
        var targetdstring  ; // value for get target value which programm is excuete this dependent on eval function
        
        if( node.hasClass('calculated') )
        {
            var expression  =  node.attr('expression');
                
            if (typeof expression !== typeof undefined && expression !== false) targetdstring = expression;
            
            else targetdstring = node.val();
            
            targetdstring=  this._dispatch(targetdstring);
                
            console.log("i am in execute function"+ targetdstring);
            try {
                var solve = eval(targetdstring);
                //if( !this.isnumeric(solve))
                node.val(solve);
                
            } catch (error) {
            // alert(error);
                if( this.checkclickenter )
                    node.val('#error');
                return targetdstring;
            }
            //for remove last array passed id
            passedid = [];
        }   
    }
    
    this.command = function()
    {
        this.focusOnExpressionInput();
        this.pickCalculatedCell();
        this.AltDownKeyUp();
    }   

}

