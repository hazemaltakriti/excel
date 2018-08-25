
<script>

$(document).ready(function()
{
     function testDate_time_function()
     {
         this.testTime = function()
         {
             var t = new testCase("TIME");  

             t.assertSame("10,1,2","10:1:2 AM")
             t.assertSame("23,9,2","11:9:2 PM")
             t.assertSame("12,30,7","12:30:7 PM")
             t.assertSame("0,0,0","12:0:0 AM")
             t.execute();
         }
         this.testDate = function()
         {
             var t = new testCase("DATE");  

             t.assertSame("2015,5,8","08/05/2015")
             t.assertSame("2016,12,3","03/12/2016")
             t.execute();
         }
         this.testDay = function()
         {
             var t = new testCase("DAY");    
             t.assertSame("'1/2/2016'","1")
             t.assertSame("'29/9/2018'","29")
             t.assertSame("'38/9/2018'","#NUM!")
             t.execute();
         }
         this.testMonth = function()
         {
             var t = new testCase("MONTH");    
             t.assertSame("'1/2/2016'","2")
             t.assertSame("'11/10/1996'","10")
             t.execute();
         }
         this.testYear = function()
         {
             var t = new testCase("YEAR");    
             t.assertSame("'1/3/1999'","1999")
             t.assertSame("'15/6/2018'","2018")
             t.assertSame("'15/6/2000'","2000")
             t.execute();
         }
         this.testSecond = function()
         {
             var t = new testCase("SECOND"); 
             t.assertSame("'10:1:58'","58")
             t.assertSame("'9:30:70'","10")
             t.assertSame("'10:1'","0")
             t.execute(); 
         }
         this.testMinute = function()
         {
             var t = new testCase("MINUTE"); 
             t.assertSame("'10:14:2'","14")
             t.assertSame("'9:80:20'","20")
             t.assertSame("'8:10'","10")
             t.execute(); 
         }
         this.testHour= function()
         {
             var t = new testCase("HOUR"); 
             t.assertSame("'10:1:2'","10")
             t.assertSame("'7:11'","7")
             t.assertSame("'3:0'","3")
             t.execute(); 
         }
         this.testDays = function()
         {
             var t = new testCase("DAYS"); 
             t.assertSame("'1/4/2016','1/3/2016'","30")
             t.assertSame("'15/4/2011','1/3/2011'","43")
             t.assertSame("'31/12/2011','1/1/2011'","364")
             t.execute();
         }
         this.testDayss = function()
         {
             var t = new testCase("DAYSs"); 
             t.assertSame("'30/1/2011','1/2/2011'","1")
             t.assertSame("'1/1/2011','31/12/2011'","360")
             t.assertSame("'1/1/2011','1/2/2011'","30")
             t.execute();
         }
         this.testDateIf = function()
         {
             var t = new testCase("DATEDIF"); 
             t.assertSame("'1/1/2003','1/1/2001','Y'","2")
             t.assertSame("'1/11/2012','1/1/2012','M'","10")
             t.assertSame("'15/8/2002','1/6/2001','D'","440")

             t.assertSame("'30/9/2015','15/1/2001','MD'","15")
             t.assertSame("'30/2/2019','30/1/2017','YM'","1")
             t.assertSame("'15/8/2002','1/6/2001','YD'","75")
             t.execute();
         }
         this.testDATEVALUE = function()
         {
            var t = new testCase("DATEVALUE");    
             t.assertSame("'2/1/1900'","2");
             t.assertSame("'3/1/1900'","3")     ;  
             t.assertSame("'22/8/2011'","40775");
             t.execute();
         }
 
         
        this.testEDATE = function()
         {
            var t = new testCase("EDATE");    
             t.assertSame("'15/1/2011',1","15/02/2011")
             t.assertSame("'15/1/2011',-1","15/12/2011")
             t.assertSame("'15/1/2011',2","15/03/2011")
             t.execute();
         }
         this.testEMONTH = function()
         {
            var t = new testCase("EMONTH");    
             t.assertSame("'1/1/2011',1","29")
             t.assertSame("'1/1/2011',-2","30")
             t.assertSame("'18/5/2018',8","31")
             t.execute();
         }

         this.testIsoWeekNum = function()
         {
             var t = new testCase("ISOWEEKNUM"); 
             t.assertSame("'1/1/2016'","1")
             t.assertSame("'9/3/2012'","10")
             t.execute();
         }
          this.testWEEKDAY = function()
         {
            var t = new testCase("WEEKDAY");
            t.assertSame("'22/7/2018'"," ( Sunday )")
            t.assertSame("'23/7/2018'"," ( Monday )")
            t.assertSame("'24/7/2018'"," ( Tuesday )")
            t.assertSame("'25/7/2018'"," ( Wednesday )")
            t.assertSame("'26/7/2018'"," ( Thursday )")
            t.assertSame("'27/7/2018'"," ( Friday )")
            t.assertSame("'28/7/2018'"," ( Saturday )")
            t.execute(); 
         } 

         this.execute = function()
         {
           this.testTime();
           this.testDate();

           this.testDay();
           this.testMonth();
           this.testYear();

           this.testSecond();
           this.testMinute();
           this.testHour();

           this.testDays();
           this.testDayss();
           this.testDateIf();

           this.testDATEVALUE();
           this.testEDATE();

           this.testEMONTH();
           this.testIsoWeekNum();
           this.testWEEKDAY();
         }
         return this;
     }
     
 testDate_time_function().execute();

});
</script>