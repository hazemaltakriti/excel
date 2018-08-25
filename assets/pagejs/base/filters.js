function Filters() 
{
    var self = this;
    this._makeDesign = function()
    {
        var selectedInput = $(".selected");
        
        var spandTag = $("<span></span>");

        iconTag = $("<i></i>").addClass('fa').addClass('fa-sort-down');
     
        var divDropDown = $("<div></div>").addClass('dropdown');

        var internalButton  = $("<button></button>").addClass("btn")
                             .addClass("").addClass("suggestedfilters").append(iconTag);

        var select = $("<select></select>").addClass("dropdown-menu");
        
        divDropDown.append( internalButton );

        spandTag.append( divDropDown);
       
        divDropDown.append( select );
        
        selectedInput.closest('td').append( spandTag );
    }

    this.filterRowAccordingValue = function()
    {
        $("#filterrowaccordingvalue").click(function()
        {
            var selectedInput = $(".selected");
            
            if( selectedInput.siblings('span').find('select').length == 0    )
                self._makeDesign();
        });
    }

    this.createOption = function( targetInput , select , selectedInput )
    {
        var value =  targetInput.val();
        
        if(  value != "" && selectedInput.val() != value)
        {
            option = $("<option></option>")
                        .append( value );
            select.append( option );
        }
    }

    this.openOptions = function()
    {
        $("#exceltable").on('click','.suggestedfilters',function()
        {
            var selectedInput;
          
           var selectedInput =  $(this).closest('td').find('input').focus();

            var rows = selectedInput.closest('table').find('tr');
            
            var ColumnNum  = cell( selectedInput ).getindex().x; 

            var select = selectedInput.siblings('span').find('select');
            
            var oldVal = select.val();
            
            select.html('');
            
            select.append("<option></option>");

            var visitedValue = [] ;
            
            for( var i = 1 ; i< rows.length ;i++ )
            {
                var targetInput = rows.eq(i).children('td').eq(ColumnNum).children('input')
                
                if( visitedValue.indexOf( targetInput.val() ) != -1 )
                    continue;
               
                self.createOption( targetInput , select ,selectedInput);   
               
                visitedValue.push( targetInput.val() );
            }

            select.val( oldVal );

            $(this).closest('.dropdown').toggleClass('open');
        });
    }

    this.testForRemoveCollapse = function( row , selectedInput , filterValue,targetInput)
    {
     
        var oldAttrCollapse = row.attr('data-filter-collapse');

        if( typeof oldAttrCollapse == typeof undefined  ) oldAttrCollapse = "";
        
        if( targetInput.val() != filterValue && filterValue != "") 
        {
            row.addClass('collapse');

            if( oldAttrCollapse.indexOf(  pickedsheet.attr('id') +  targetInput.attr('id')  ) == -1 )
                row.attr( 'data-filter-collapse' , oldAttrCollapse += "," +  pickedsheet.attr('id') +  targetInput.attr('id') );            
        }
        else
        {
            var newAttrCollapse = oldAttrCollapse.replace( pickedsheet.attr('id') + targetInput.attr('id') , "" );
            console.log("hee");
            row.attr('data-filter-collapse',newAttrCollapse); 

            if( row.attr('data-filter-collapse').indexOf("sheet") == -1  )
                row.removeClass('collapse');
        }
  
    }

    this.changeSelectFilter = function()
    {
        $('#exceltable').on('change','select',function()
        {
            var filterValue = $(this).val();

            var selectedInput = $(this).closest('td').find('input');
            
            var rows = selectedInput.closest('table').find('tr');
            
            var ColumnNum  = cell( selectedInput ).getindex().x; 

            var select = selectedInput.siblings('span').find('select');
          
            for( var i = 1 ; i< rows.length ;i++ )
            {
                var targetInput = rows.eq(i).children('td').eq(ColumnNum).children('input');

                var value =  targetInput.val();
                
                if(    targetInput.val() != selectedInput.val()   )
                {
                    self.testForRemoveCollapse(  rows.eq(i) , selectedInput ,filterValue,targetInput);
                }
                    
            }
        });
    }

    this.command = function()
    {
        this.filterRowAccordingValue();
        this.openOptions();
        this.changeSelectFilter();
    }
}
