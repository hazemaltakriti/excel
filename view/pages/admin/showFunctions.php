
<link href="<?php   echo ASSET; ?>/css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet" href="<?php   echo ASSET; ?>/pagecss/table.css">

<link rel="stylesheet" href="<?php echo ASSET ;  ?>/css/jqurey-ui.css">

<script src="<?php   echo ASSET; ?>/js/jquery-2.1.4.min.js"></script>

<script src='<?php   echo ASSET; ?>/pagejs/base/globalvariable.js'></script> 


<script src="<?php   echo ASSET; ?>/js/jquery-ui.js"></script>
<script>
    var WEBSITE_NAME  = '<?php echo WEBSITE_NAME;  ?>';
</script>

<div id='results' style='text-align:center;background: #bb2222;color:white;padding:20px;'>

</div>
<div id='contentFiles' class='collapse'>
 <?php
    
   echo htmlspecialchars( stripslashes(  $contentFiles )   );
   
?>
</div>

<script>
    function _getFunctionFromString(str)
    {
      
        //str = str.replace(/[\"\']/g,'');
        str = str.replace(/\`/g,'');
        
        var arr = str.match(/function +(_)?[A-z]+[0-9]*[A-z]*\(( *[A-z]+[0-9]*[A-z]*,?)*\)/g);        
        return arr;
    }
    function readAndConfigFiles()
    {
        var result = _getFunctionFromString(  $("#contentFiles").html()   );

        for(var i in result)
        {
            result[i] = result[i].replace(/function {1,}|\( {0,}\)/g,"");
            result[i] = '"' + result[i] + '"';
            if( i != result.length-1  )
                result[i]+=",";
        }
       
        for( var i in result  )
        {
            $("#results").append( result[i] );
            if( i%10 == 0 &&i>0 )
                $("#results").append("<br>");

        }
  
    } 
    readAndConfigFiles();
</script>
