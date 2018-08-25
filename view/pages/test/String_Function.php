
<script>


$(document).ready(function()
{
     function testString_Function()
     {
         this.testCODE = function()
         {
             var t = new testCase("CODE");  

             t.assertSame("'a'","97")
         
             t.execute();
         }
         
         this.testCHAR = function()
         {
             var t = new testCase("CHAR");    
             t.assertSame("100","d")
         
             t.execute();
         }
         this.testCONCATENATE = function()
         {
             var t = new testCase("CONCATENATE");    
             t.assertSame("'co','mp','u','ter'","computer")
             t.execute();
         }
         this.testEXACT = function()
         {
             var t = new testCase("EXACT");    
             t.assertSame("'Excel','Excel'","true")
             t.execute();
         }
         this.testLEFT = function()
         {
             var t = new testCase("LEFT"); 
             t.assertSame("'Hello_world',5","Hello")
             t.execute(); 
         }
         this.testLEN = function()
         {
             var t = new testCase("LEN"); 
             t.assertSame("'Cat'","3")
             t.execute(); 
         }
         this.testLOWER = function()
         {
             var t = new testCase("LOWER"); 
             t.assertSame("'EXCEL'","excel")
             t.execute(); 
         }
         this.testUPPER = function()
         {
             var t = new testCase("UPPER"); 
             t.assertSame("'excel'","EXCEL")
             t.execute(); 
         }
         this.testMID = function()
         {
             var t = new testCase("MID");    
             t.assertSame("'Excel website',0,5","Excel")
         
             t.execute();
         }
         this.testSEARCH = function()
         {
             var t = new testCase("SEARCH"); 
             t.assertSame("'a','sea'","2")
             t.execute(); 
         }
         /*
           this.testPROPER = function()
           {
var t = new testCase("PROPER");    
t.assertSame("'EXCEL'","EXCEL")
t.execute();
           }
           this.testREPLACE = function()
           {
               var t = new testCase("REPLACE");    
               t.assertSame("'2009',3,2,'10'","2010")
               t.execute();
           }*/
           this.testREPT = function()
           {
               var t = new testCase("REPT"); 
                t.assertSame("'ab',3","ababab")
                t.execute(); 
           }
         
         this.execute = function()
         {
             this.testCODE();
             this.testCHAR();
             this.testCONCATENATE();
             this.testEXACT();
             this.testLEFT();
          
             this.testLOWER();
             this.testUPPER();
             this.testMID();
             this.testSEARCH();

               //this.testPROPER();
              // this.testREPLACE();
               this.testREPT();

         }
         return this;
     }
     
 testString_Function().execute();

});
</script>
