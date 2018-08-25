function RichText()
{
    this._createRichTextDiv = function()
    {
        var div = $("<div class='richtext'></div>");
        pickedsheet.append(div);
    }
    this.appendRichText = function(url)
    {
        if( pickedsheet.children('.richtext').length == 0   )  this._createRichTextDiv(); 

        var div = $("<div class='includingimg'></div>");

        var img = $("<img/>");

        img.css('min-height',"300");

        img.css('min-width',"300");

        img.attr('src',url);
        
        div.append(img);
        
        div.draggable();
        
        pickedsheet.children(".richtext").append(div);
        
        img.resizable();
        
    }
    
    this.insertImg  = function()
    {
        var selfclass = this;

        $('body').on('change','#insertimg',function(event)
        {
            var self  = $(this);

            var input = event.target;

            var reader = new FileReader();
            
            var url;
            
            reader.onload = function()
            {
                url = reader.result;
                selfclass.appendRichText(url);
            };
            
            reader.readAsDataURL(input.files[0]);  
        });      
    }
    
    this.remove = function()
    {
        $(document).keyup(function(e)
        {
           if(e.which == 46)  $(".selectedimg").closest(".includingimg").remove();   
        })
    }
    
    this.selected = function()
    {
        $("#exceltable").on('click','img',function()
        {
            $("img").removeClass('selected').removeClass("selectedimg");
            $(this).addClass('selected').addClass("selectedimg");
        });
    }
    this.clickOutImage = function()
    {
      $(document).click(function()
      {
        
      });
    }
    this.command = function()
    {
        this.insertImg();
        //this.clickOutImage();
        this.selected();
        this.remove();
    }
}
