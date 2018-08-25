
<script>

$(document).ready(function()
{
     function testInformation_Function()
     {
         this.testERRORTYPE = function()
         {
             var t = new testCase("ERRORTYPE");  

             t.assertSame("'#NULL!'","1")
             //t.assertSame("'#DIV/0!‎'","2")
             //t.assertSame("'#NUM!'","6")
         
             t.execute();
         }
         this.testISLOGICAL = function()
         {
             var t = new testCase("ISLOGICAL");    
             t.assertSame("true","true")
             t.assertSame("2!=6","true")
             t.assertSame("2>1","true")
         
             t.execute();
         }
         this.testISNA = function()
         {
             var t = new testCase("ISNA");    
             t.assertSame("'#N/A'","true")
             t.assertSame("'#REF!'","false")
             t.execute();
         }
         this.testISNONTEXT = function()
         {
             var t = new testCase("ISNONTEXT");    
             t.assertSame("'Excel'","false")
             t.assertSame("908","true")
             t.execute();
         }
         this.testISNUMBER = function()
         {
             var t = new testCase("ISNUMBER"); 
             t.assertSame("'programming'","false")
             t.assertSame("908","true")
             t.execute(); 
         }
         this.testISTEXT = function()
         {
             var t = new testCase("ISTEXT"); 
             t.assertSame("'Excel'","true")
             t.assertSame("908","false")
             t.execute(); 
         }
         this.testISODD = function()
         {
             var t = new testCase("ISODD"); 
             t.assertSame("22","false")
             t.assertSame("17","true")
             t.execute(); 
         }
         this.testN = function()
         {
             var t = new testCase("N"); 
             t.assertSame("'function'","0")
             t.assertSame("true","1")
             t.assertSame("9","0")
             t.execute(); 
         }
         this.testNA = function()
         {
             var t = new testCase("NA");    
             t.assertSame("","#N/A")
             t.execute();
         }

         this.execute = function()
         {
             this.testERRORTYPE();
             this.testISLOGICAL();
             this.testISNA();
             this.testISNONTEXT();
             this.testISNUMBER();

             this.testISTEXT();
             this.testISODD();
             this.testN();
             this.testNA();
         }
         return this;
     }
     
   testInformation_Function().execute();

});
</script>
