<script src='<?php   echo ASSET; ?>/pagejs/base/processingfunction.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/save.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/exporttable.js'></script> 

<script src='<?php   echo ASSET; ?>/pagejs/base/cell.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/contextmenue.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/morecontroltable.js'></script> 

<script src='<?php   echo ASSET; ?>/pagejs/base/richtext.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/table.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/load.js'></script> 

<script src='<?php   echo ASSET; ?>/pagejs/base/filters.js'></script> 
<script src='<?php   echo ASSET; ?>/pagejs/base/manager.js'></script>
<script src="<?php   echo ASSET; ?>/js/export2excel.js"></script>

<?php  \lib\assets::includeFolderjs("functions"); ?>
<script>
    
    $("#sheets").on('click','button',function()
    {   
        $(this).siblings().removeClass('btn-success');
        $(this).addClass('btn-success');
    });
</script>