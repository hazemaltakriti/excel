function moreControlTable()
{
    this.arrow = function()
    {
        var parent = this;
        
        $('#exceltable').on('focus','input',function()
        {
            $(this).keyup(function(e)
            {

               if(e.which == 39 ) //means right arrow 
                    parent.rightarrowclick($(this));
            
               if(e.which == 37 )//means left arrow
                    parent.leftarrowclick($(this));
               
               if(e.which == 38 )//means left arrow
                    parent.toparrowclick($(this));

               if(e.which == 40 )//means left arrow
                    parent.bottomarrowclick($(this));
               
            });
        });
    }

    this.rightarrowclick = function(input)
    {
        if(input.val() != "")
        return ; 
         cell(input).next().gete().focus();
    }

    this.leftarrowclick = function(input)
    {
        if(input.val() != "")
        return ; 
        cell(input).prev().gete().focus();
    }
    this.toparrowclick = function(input)
    {
        if(input.val() != "")
        return ; 
        cell(input).above().gete().focus();
    }
    this.bottomarrowclick = function(input)
    {
        if(input.val() != "")
        return ; 
        cell(input).down().gete().focus();
    }
    this.execute = function()
    {
        this.arrow();
    }
}
    