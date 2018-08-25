function ContextMenue()
{
    var copyval = "";
    var dropdown = $('#tableDropdown');
    
    var note = $('#note');
    
    this.copy = function()
    {
      
        if( $('.selected').length>1 )
            this.warning('you can not selected more than one cell','copy');
        else 
            if( $('.selected').length == 0 )
                this.warning('there are no selected cell ');

            if( $('.selected').length == 1 )
                copyval = $('.selected').eq(0).val();
    }

    this.paste = function()
    {
        if( $('.selected').length == 0 )
            this.warning('there are no selected cell ','paste error');
        if(copyval != "")
            $('.selected').val( copyval );

    }

    this.removeContent = function()
    {
        $('.selected').val('');
    }
    this.onContextMenue = function()
    {
        document.oncontextmenu = function(event)
        {
             event.preventDefault();
             dropdown.removeClass('collapse');
             dropdown.css(
             {
                 'position':'absoulte',
                 'left':event.clientX,
                 'top':event.clientY
             });
        }
    }
    this.onClickDropDown = function()
    {
        var self = this;
        dropdown.find('a').click(function()
        {
             var html  = $(this).html();
             html = html.toLocaleLowerCase();
             switch(html)
             {
                 case "copy" : self.copy();break;
                 case "remove content" : self.removeContent();break;
                 case "paste" : self.paste();break;
                 case "note" : self.onClickNote();break;
             }
             dropdown.addClass('collapse');;
        });
    }
    //#part for make drag dropdown with mouse
    this.onMouseMove = function()
    {
        $("table").mousemove(function(e)
        {
                dropdown.css(
            {
                'position':'absoulte',
                'left':event.clientX,
                'top':event.clientY
            }); 
        });   
    }
    this.warning =function (err,header='')
    {
        var warning = $('#alert');
        var alertbtn = $('#alertbtn');
        warning.find('h4').html(header);
        warning.find('.error').html(err);
        alertbtn.click();
    }

    this.onClickNote = function()//funciton for configuration setting of note 
    {
        if( $('.selected').length == 0 )            //line for stop this function when no input selected
        {
            note.addClass('collapse');
            this.warning('thera are no selected cell','note');
            return ;
        }
        note.find('textarea').val('');
           
            //get value from selected input   
        if( typeof $('.selected').eq(0).attr('title') !== typeof undefined  )
            note.find('textarea').val( $('.selected').eq(0).attr('title') );
            
        note.removeClass('collapse');
        
        //get mouse  coordinate 
        var left = $('#tableDropdown').css('left');
        var top  = $('#tableDropdown').css('top');
        // end get mouse coordinate 

        note.css( {'left':left,'top':top} );  
    }

    this.saveNote = function()
    {
        $('#savenote').click(function()//event onclick save button in note 
        {
            $('.selected').attr('data-toggle','tooltip');
            $('.selected').attr( 'title',note.find('textarea').val() );  
            note.addClass('collapse');
            $('[data-toggle="tooltip"]').tooltip();   
            
        });
    }
    this.removeNote = function()
    {
        $('#removenote').click(function()//event onclick remove button in note 
        {
            $('.selected').removeAttr('data-toggle','tooltip');
            $('.selected').removeAttr( 'title',note.find('textarea').val() );  
            note.find('textarea').val('');
            note.addClass('collapse');
        });
    }
    this.command = function()
    {
        
        this.removeContent();
        this.onContextMenue();
        this.onClickDropDown();
        this.onMouseMove();
        this.saveNote();
        this.removeNote();  
    }
    
    
}
