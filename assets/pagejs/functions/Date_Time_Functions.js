// DATE(YEAR,MONTH,DAY)
function DATE() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=DATE()";
    }
    else if (arguments.length != 3) // Less or more then 3 parameters
    {
        alert("Please You Must Pass Three parameter To This Function");
        return "=DATE()";
    }

    var day, month, year, resulte;

    if (arguments[0] < 0 || arguments[1] < 0 || arguments[2] < 0) {
        return "#NAME?";
    }

    if (arguments[2] > 31) {

        return "#NAME?";
    }

    if (arguments[2] < 10) {
        day = "0" + arguments[2];
    }
    else {
        day = arguments[2];
    }

    if (arguments[1] > 12) {

        return "#NAME?";
    }

    if (arguments[1] < 10) {
        month = "0" + arguments[1];
    }
    else {
        month = arguments[1];
    }


    if (arguments[0] < 10) {
        year = "0" + arguments[0];
    }
    else {
        year = arguments[0];
    }

    resulte = day + "/" + month + "/" + year;

    return resulte;
}

// To find today's date
function TODAY() {
    if (arguments.length != 0) // Must No parameter
    {
        alert(" There is to many Arguments  ");
        return "#NAME?";
    }
    else {

        var d = new Date();
        var day = d.getDate() , month = d.getMonth() + 1 , year = d.getFullYear();

        return DATE(year, month, day);
    }
}

// TIME (hour , minutes , seconed)
function TIME() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "TIME()";
    }
    else if (arguments.length != 3) // Less or more then 3 parameters
    {
        alert("Please You Must Pass Three parameter To This Function");
        return "TIME()";
    }

    var hour = 0, minute = 0, seconed = 0, result, A_PM = "AM";

    if (arguments[0] < 0 || arguments[1] < 0 || arguments[2] < 0)
        return "#NUM!";

    // Seconeds
    if (arguments[2] > 59) {

        minute += Math.trunc((arguments[2] / 60));
        seconed += arguments[2] % 60;
    }
    else {
        seconed += arguments[2];
    }
    // Minute
    if (arguments[1] > 59) {
        hour += Math.trunc((arguments[1] / 60));
        minute += arguments[1] % 60;
    }
    else {
        minute += arguments[1];
    }
    // Hours
    if (arguments[0] > 23) {
        hour += arguments[0] % 24;
    }
    else {
        hour += arguments[0];
    }
    // Check PM or AM 
    if (hour >= 12) {
        hour -= 12;
        A_PM = "PM";
    }
    if (hour == 0) hour = 12;

    resulte = hour + ":" + minute + ":" + seconed + " " + A_PM;
    return resulte;

}

//  To find today's date And Time ..
function NOW() {
    if (arguments.length != 0) // Must No parameter
    {
        alert(" There is to many Arguments  ");
        return "#NAME?";
    }
    else {
         return TODAY() + " " + TODAY_TIME();
    }
}

// Return the DAY of the date passed .. DAY( serial_number )
function DAY() {
    if (arguments.length == 0) //if No parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=DAY()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert("Please You Must Pass one parameter To This Function");
        return "=DAY()";
    }
    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {
        var Day = Date_d.day, Month = Date_d.month;

        if (Good_Day(Day, Month)) return Day;
        else return "#NUM!";
    }
    else return "#NUM!";
}

// Return the MONTH of the date passed .. MONTH( serial_number )
function MONTH() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=MONTH()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert("Please You Must Pass one parameter To This Function");
        return "=MONTH()";
    }
    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {
        var Month = Date_d.month;

        if (Good_Month(Month)) return Month;
        else return "#NUM!";
    }
    else return "#NUM!";
}

// Return the YEAR of the date passed .. YEAR( serial_number )
function YEAR() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=YEAR()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert("Please You Must Pass one parameter To This Function");
        return "=YEAR()";
    }
    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {

        var Year = Date_d.year;
        if (Good_Year(Year)) return Year;
        else return "#NUM!";
    }
    else return "#NUM!";
}

// Return the SECONDD of the Time passed .. SECONDD( serial_number )
function SECOND() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=SECOND()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert(" Please You Must Pass one parameter To This Function ");
        return "=SECOND()";
    }

    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {
        var Seconds = Date_d.second;
        if (Seconds == "") return 0;
        else if (Seconds < 0) return "#NUM!";
        else if (Seconds > 59) {
            Date_d.minute += Math.trunc(Seconds / 60);
            Seconds = Seconds % 60;
            return Seconds;
        }
        else return Seconds;
    }
    else {
        var Time_t = new helptime(serial_number);
        if (Time_t.istime()) {
            var Seconds = Time_t.second;
            if (Seconds == "") return 0;
            else if (Seconds < 0) return "#NUM!";
            else if (Seconds > 59) {
                Time_t.minute += Math.trunc(Seconds / 60);
                Seconds = Seconds % 60;
                return Seconds;
            }
            return Seconds;
        }
        else return "#NUM!";
    }
}

// Return the MINUTE of the Time passed .. MINUTE( serial_number )
function MINUTE() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=MINUTE()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert(" Please You Must Pass one parameter To This Function ");
        return "=MINUTE()";
    }
    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {
        var Minute = Date_d.minute;
        if (Minute == "") return 0;
        else if (Minute < 0) return "#NUM!";
        else if (Minute > 59) {
            Date_d.hour += Math.round(Minute / 60);
            Minute = Minute % 60;
            return Minute;
        }
        else return Minute;
    }
    else {
        var Time_t = new helptime(serial_number);
        if (Time_t.istime()) {

            var Minute = Time_t.minute;
            if (Minute == "") return 0;
            else if (Minute < 0) return "#NUM!";
            else if (Minute > 59) {
                Time_t.hour += Math.trunc(Minute / 60);
                Minute = Minute % 60;
                return Minute;
            }
            return Minute;
        }
        else return "#NUM!";
    }
}

// Return the HOUR of the Time passed .. HOUR( serial_number )
function HOUR() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=HOUR()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert(" Please You Must Pass one parameter To This Function ");
        return "=HOUR()";
    }
    var serial_number = arguments[0] , Date_d = new helpdate(serial_number);

    if (Date_d.isdate()) {
        var Hour = Date_d.hour;
        if (Hour < 0) return "#NUM!";
        else if (Hour > 24) {
            Date_d.day += Math.trunc(Hour / 24);
            Hour = Hour % 24;
            return Hour;
        }
        else return Hour;
    }
    else {
        var Time_t = new helptime(serial_number);
        if (Time_t.istime()) {
            var Hour = Time_t.hour;
            if (Hour < 0) return "#NUM!";
            else if (Hour > 24) {
                Hour = Hour % 24;
                return Hour;
            }
            return Hour;
        }
        else return "#NUM!";
    }
}

// Count of days between Two Date ... DAYS(ُEnd_date,Start_date)
function DAYS() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=DAYS()";
    }
    else if (arguments.length != 2) // Less or more then 2 parameter
    {
        alert("Please You Must Pass two parameter To This Function");
        return "=DAYS()";
    }
    var One_Day = 1000 * 60 * 60 * 24; // Milliseconds in one day 
    var End_date = new helpdate(arguments[0]) , Start_date = new helpdate(arguments[1]);

    if (End_date.isdate() && Start_date.isdate()) {

        if (Good_Date(End_date.year, End_date.month, End_date.day) &&
            Good_Date(Start_date.year, Start_date.month, Start_date.day)) {
            // creat dates ..  
            var End_d = new Date(End_date.year, End_date.month, End_date.day);
            var Start_d = new Date(Start_date.year, Start_date.month, Start_date.day);

            // Convert dates to milliseconds and calculat the difference ..
            var diff_day = (End_d.getTime()) - (Start_d.getTime());
            if (diff_day < 0) return "####"; // in case -> DAYS(ُStart_date ,End_date)
            else return (Math.trunc(diff_day / One_Day));
        }
        else return "#NUM!";
    }
    else return "#NUM!";
}

// Count of days between Two Date (where year 360) using European way .. DAYS360(ُStart_date,End_date) 
function DAYSs() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=DAYS_360()";
    }
    else if (arguments.length != 2) // Less or more then 2 parameter
    {
        alert("Please You Must Pass Two parameter To This Function");
        return "=DAYS_360()";
    }
    var One_Day = 1000 * 60 * 60 * 24; // Milliseconds in one day 
    var Start_date = new helpdate(arguments[0]) , End_date = new helpdate(arguments[1]);

    if (End_date.isdate() && Start_date.isdate()) {

        if (Good_Date(End_date.year, End_date.month, End_date.day) &&
            Good_Date(Start_date.year, Start_date.month, Start_date.day)) {

            var diff_Y = Start_date.year - End_date.year;
            var diff_M = Start_date.month - End_date.month;
            var diff_D = Start_date.day - End_date.day;
            return Math.abs(diff_Y * 360 + diff_M * 30 + diff_D);
        }
        else return "#NUM!";
    }
    else return "#NUM!";
}

// calculat the days , months , year  between Two Date ..DATEDIF(ُEnd_date,Start_date,unit)
function DATEDIF() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "DATEDIF()";
    }
    else if (arguments.length != 3) // Less or more then 3 parameters
    {
        alert("Please You Must Pass Three parameter To This Function");
        return "DATEDIF()";
    }
    var End_date = new helpdate(arguments[0]), Start_date = new helpdate(arguments[1]);
    var unit = arguments[2] , resulte;

    if (End_date.isdate() && Start_date.isdate()) {
        var diff_day = DAYS(arguments[0], arguments[1]);

        switch (unit) {
            case "Y": // count of Full year 
                resulte = Math.trunc(diff_day / 356);
                break;
            case "M": // count of Full month 
                resulte = Math.trunc(diff_day / 30);
                break;
            case "D": // count of Full days
                resulte = diff_day - 1;
                break;
            case "MD": // count of days with egnore year and month  
                resulte = Math.abs(End_date.day - Start_date.day);
                break;
            case "YM": //  count of month egnore year and day  
                resulte = Math.abs(End_date.month - Start_date.month);
                break;
            case "YD": //  count of days egnore year 
                resulte = (diff_day % 365) - 1;
                break;
            default:
                resulte = "#NUM!";
        }
        return resulte;
    }
    else return "#NUM!";
}

// Convert the date_text to a serial number ... DATEVALUE(date_text)
function DATEVALUE() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=DATEVALUE()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert(" Please You Must Pass one parameter To This Function ");
        return "=DATEVALUE()";
    }
    var date_text = arguments[0] , Date_d = new helpdate(date_text);
    if (Date_d.isdate()) {
        var result = DAYS(date_text,"1/1/1900") ;

        if (result == "#NUM!" || result == "####") return "#VALUE?"
        else return parseInt(result)+1 ;
    }
    else return "#VALUE?"
}

//  returns the month indicated before or after the start date..EDATE(start_date,Month)
function EDATE() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=EDATE()";
    }
    else if (arguments.length != 2) // Less or more then 2 parameter
    {
        alert("Please You Must Pass two parameter To This Function");
        return "=EDATE()";
    }
    var start_dat = new helpdate(arguments[0]),Month_s = parseInt(arguments[1]),New_Month = 0;
    if (start_dat.isdate()) {

        New_Month = parseInt(start_dat.month) + Month_s;
        if (New_Month == 0 && Month_s > 0) New_Month = 1;
        if (New_Month == 0 && Month_s < 0) New_Month = 12;
        if (New_Month < 0) New_Month = 12 + New_Month;
        if (New_Month > 12) New_Month = New_Month % 12;
        return DATE(start_dat.year, New_Month, start_dat.day);
    }
    else return "#VALUE!";
}

// returns the last day of the month indicated before or after the start ..EMONTH(start_date,Month)
function EMONTH() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "EMONTH()";
    }
    else if (arguments.length != 2) // Less or more then 2 parameter
    {
        alert("Please You Must Pass two parameter To This Function");
        return "EMONTH()";
    }
    var Edate_str = EDATE(arguments[0], arguments[1]); // find new date ..
    var start_dat = new helpdate(Edate_str);

    if (start_dat.isdate()) {
        var MON = MONTH(Edate_str); // find th month ..
        if (MON == 2) return 29;
        else if ((MON == 4 || MON == 6 || MON == 9 || MON == 11)) return 30;
        else return 31;
    }
    else return "#VALUE!"
}

//  returns the ISO week number of the year for a specific date .. ISOWEEKNUM(date)
function ISOWEEKNUM() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "=ISOWEEKNUM()";
    }
    else if (arguments.length != 1) // Less or more then 1 parameter
    {
        alert(" Please You Must Pass one parameter To This Function ");
        return "=ISOWEEKNUM()";
    }
    var date = new helpdate(arguments[0]);
    if (date.isdate()) {

        // number of days between the date passed and the beginning of the year .. 
        var numday = DAYS(arguments[0], DATE(date.year, 1, 1));

        var weeknum = (numday / 7);

        if (weeknum == 0) return 1;

        if (weeknum < 0 || weeknum > 48) return "#NUM!"

        else return Math.round(weeknum);

    }
    else return "#VALUE!";
}

// Get the fraction of a year between two dates .. YEARFRAC(start_date, end_date, [basis]) 
function YEARFRAC() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "YEARFRAC()";
    }
    else if (arguments.length > 3 || arguments.length == 1) // Less or more then 3 parameters
    {
        alert("Please You Must Pass Tow / Three parameter To This Function");
        return "YEARFRAC()";
    }
    var start_date = new helpdate(arguments[0]);  // mandatory
    var end_date = new helpdate(arguments[1]);   // mandatory
    var basis;  // optional

    // if 2 arguments passed ..
    if (arguments.length == 2) basis = 1;
    else basis = Math.trunc(arguments[2]);
    // 1 --> Means 365 days of year .. 2 --> Means 360 days of year ..
    if (start_date.isdate() && end_date.isdate()) {

        var numdays = DAYS(arguments[1], arguments[0]);
        // 1 Means -- > 365 number of days of the year
        if (basis == 1) { 
            return (numdays / 365);
        }
        // 2 Means -- > 360 number of days of the year
        else if (basis == 2) {
            return (numdays / 360);
        }
        // 3 Means -- > 366 number of days of the year
        else if (basis == 3) {
            return (numdays / 366);
        }
        else return "#NUM!";
    }
    else return "#VALUE";
}

/*      BY USING DOOMSDAY ALGORITHM     */
// Get the day of the week as a number ... WEEKDAY(serial_number)‎ 
function WEEKDAY() {
    if (arguments.length == 0) // Non parameter
    {
        alert(" Please Enter parameter Into The Function ");
        return "WEEKDAY()";
    }
    else if (arguments.length > 1) 
    {
        alert("Please You Must Pass two parameter To This Function");
        return "WEEKDAY()";
    }
    var Serial_Number = new helpdate(arguments[0]) ;
    if (Serial_Number.isdate()){

        var Day = Serial_Number.day , Month = Serial_Number.month, Year = Serial_Number.year ;
        var Day_Of_Week = ["Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"] ;
        var Symbol_Mon = [1,4,4,0,2,5,0,3,6,1,4,6];

        var l1 = parseInt((Year % 100) / 4 );   //console.log(l1);
        var l2 = l1 + (Year % 100) ;            //console.log(l2);
        var l3 = l2 + Symbol_Mon[Month-1];      //console.log(l3);
        var l4 = l3 + parseInt(Day);            //console.log(l4);
        var l5 = parseInt(l4 % 7);              //console.log(l5);
        return " ( " + Day_Of_Week[l5] + " )" ;
    }
    else return "NUM!";
}