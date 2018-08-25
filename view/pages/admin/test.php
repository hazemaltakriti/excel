<script src="<?php  echo WEBSITE_NAME . '/assets/pagejs/testcase/testcase.js'   ?>"   ></script>
<style>
    .well
    {
        margin:5px ;
    }
    .well,.alert
    {
        margin-bottom:0px !important; 
    }
    h2
    {
        margin: 0px !important;
    }
</style>
<div id = 'resulttestcase' >
    
</div>
<script>
   $(document).ready(function()
   {
        var t = new testCase("SUM");    
        t.assertSame("1,'1','a'","1")
       
        t.execute();
        var t = new testCase("AVERAGE");    
        t.assertSame("1,1,1,1,1,4","1.5")
       
        t.execute();
   });
</script>
