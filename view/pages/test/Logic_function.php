
<script>


$(document).ready(function()
{
     function testLogic_function()
     {
         this.testAND = function()
         {
             var t = new testCase("AND");  

             t.assertSame("2>1,3>2","true")
         
             t.execute();
         }
         
         this.testIFERROR = function()
         {
             var t = new testCase("IFERROR");    
             t.assertSame("2>1,9>8","true")
         
             t.execute();
         }
         this.testIFS = function()
         {
             var t = new testCase("IFS");    
             t.assertSame("10>8,'yes'","yes")
             t.execute();
         }
         this.testNOT = function()
         {
             var t = new testCase("NOT");    
             t.assertSame("1>10","true")
             t.execute();
         }
         this.testOR = function()
         {
             var t = new testCase("OR"); 
             t.assertSame("2>1,1<3,1>8","true")
             t.execute(); 
         }
         this.testSWICH = function()
         {
             var t = new testCase("SWICH"); 
             t.assertSame("'YXCEl','Computer','YXCEl','EXCEl'","EXCEl")
             t.execute(); 
         }
         this.testXOR = function()
         {
             var t = new testCase("XOR"); 
             t.assertSame("'1>2','6>10'","false")
             t.execute(); 
         }
     
         this.execute = function()
         {
             this.testAND();
             this.testIFERROR();;
             this.testIFS();
             this.testNOT();
             this.testOR();
             this.testSWICH();
             this.testXOR();

         }
         return this;
     }
     
 testLogic_function().execute();

});
</script>
