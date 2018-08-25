
<script>


   $(document).ready(function()
   {
        function testCommonlyFunction()
        {
            this.testSum = function()
            {
                var t = new testCase("SUM");  

                t.assertSame("1,'1','a'","1")
            
                t.execute();
            }
            this.testAverage = function()
            {
                var t = new testCase("AVERAGE");    
                t.assertSame("1,1,1,1,1,4","1.5")
            
                t.execute();
            }
            this.testIf = function()
            {
                var t = new testCase("IF");    
                t.assertSame("1>2,'yes','no'","no")
                t.execute();
            }
            this.testCount = function()
            {
                var t = new testCase("COUNT");    
                t.assertSame("1,1,1,1,1,4","6")
                t.execute();
            }
            this.testMax = function()
            {
                var t = new testCase("MAX"); 
                t.assertSame("1,2,3,4","4")
                t.execute(); 
            }
            this.testMin = function()
            {
                var t = new testCase("MIN"); 
                t.assertSame("1,2,3,4","1")
                t.execute(); 
            }
           
            this.testQuotient = function()
            {
                var t = new testCase("QUOTIENT"); 
                t.assertSame("3,2","1")
                t.execute(); 
            }
            this.testProduct = function()
            {
                var t = new testCase("PRODUCT"); 
                t.assertSame("1,2,3,4,5,6","120")
                t.execute();
            }
            this.testFind = function()
            {
                var t = new testCase("FIND"); 
                t.assertSame("'a','angry',1","1")
                t.execute();
            }
            this.testChoose = function()
            {
                var t = new testCase("CHOOSE"); 
                t.assertSame("4,1,2,3,4,5,1","4")
                t.execute();
            }
            this.testDate = function()
            {
                var t = new testCase("DATE"); 
                t.assertSame("2016,11,12","12/11/2016")
                t.execute();
            }
           
            this.execute = function()
            {
                this.testSum();
                this.testAverage();;
                this.testIf();
                this.testCount();
                this.testMax();
                this.testMin();
                this.testQuotient();
                this.testChoose()
                this.testDate();
                this.testFind();
                
            }
            return this;
        }
        
    testCommonlyFunction().execute();

   });
</script>
