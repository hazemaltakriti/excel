
<script>

$(document).ready(function()
{
     function testEngineering_Function()
     {
         this.testBIN_2DEC = function()
         {
             var t = new testCase("BIN_2DEC");  

             t.assertSame("1100100","100")
             t.assertSame("01","1")
         
             t.execute();
         }
         this.testBIN_2HEX= function()
         {
             var t = new testCase("BIN_2HEX");    
             t.assertSame("1110","e")
             t.execute();
         }
         this.testBIN_2OCT= function()
         {
             var t = new testCase("BIN_2OCT");    
             t.assertSame("1100100","144")
             t.execute();
         }
         this.testDEC_2BIN = function()
         {
             var t = new testCase("DEC_2BIN");    
             t.assertSame("9","1001")
             t.execute();
         }
         this.testDEC_2HEX = function()
         {
             var t = new testCase("DEC_2HEX"); 
             t.assertSame("28","1c")
             t.assertSame("100","64")
             t.execute(); 
         }

         this.testDEC_2OCT = function()
         {
             var t = new testCase("DEC_2OCT"); 
             t.assertSame("58","72")
             t.execute(); 
         }
         this.testOCT_2BIN = function()
         {
             var t = new testCase("OCT_2BIN"); 
             t.assertSame("3","11")
             t.execute(); 
         }
         this.testOCT_2DEC = function()
         {
             var t = new testCase("OCT_2DEC"); 
             t.assertSame("54","44")
             t.execute(); 
         }
         this.testOCT_2HEX = function()
         {
             var t = new testCase("OCT_2HEX");    
             t.assertSame("100","40")
         
             t.execute();
         }
         
        this.testHEX_2BIN = function()
        {
            var t = new testCase("HEX_2BIN"); 
            t.assertSame("'b7'","10110111")
            t.assertSame("'B7'","10110111")

            t.assertSame("'f'","00001111")
            t.assertSame("'f'","1111")

            t.execute(); 
        }
        this.testHEX_2DEC = function()
        {
            var t = new testCase("HEX_2DEC");    
            t.assertSame("'A5'","165")
            t.execute();
        }
        this.testHEX_2OCT= function()
        {
            var t = new testCase("HEX_2OCT");    
            t.assertSame("'f'","17")
            t.assertSame("'3b4e'","35516")
            t.assertSame("'ffffffff00'","7777777400")
            t.execute();
        }
         
         this.testCOMPLEX = function()
         {
             var t = new testCase("COMPLEX"); 
             t.assertSame("2,3","2+3i")
             t.assertSame("-8,4","-8+4i")
             t.execute(); 
         }
         this.testDELTA= function()
         {
             var t = new testCase("DELTA");    
             t.assertSame("2,3-1","1")
             t.assertSame("5,6","0")
             t.assertSame("2,9","0")
             t.execute();
         }
         this.testGESTEP = function()
         {
             var t = new testCase("GESTEP"); 
             t.assertSame("2,3-1","1")
             t.assertSame("9,6","1")
             t.assertSame("10,12","0")
             t.execute(); 
         }

         this.execute = function()
         {
             this.testBIN_2DEC();
             this.testBIN_2HEX();
             this.testBIN_2OCT();
             this.testDEC_2BIN();
             this.testDEC_2HEX();

             this.testDEC_2OCT();
             this.testOCT_2BIN();
             this.testOCT_2DEC();
             this.testOCT_2HEX();
            
             this.testHEX_2DEC();
             this.testHEX_2OCT();
             this.testHEX_2BIN();
            
             this.testCOMPLEX();
             this.testDELTA();
             this.testGESTEP();
             
         }
         return this;
     }
     
   testEngineering_Function().execute();

});
</script>
