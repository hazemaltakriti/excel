
//  ... class for help customer function date ...

function helpdate(str) {

    this.str = str.trim();

    this.year = "";
    this.month = "";
    this.day = "";
    this.hour = "";
    this.minute = "";
    this.second = "";
    this.isdate = function () {
        return this.str.search(/^[0-9]+[/][0-9]+[/][0-9]{4}( [0-9]{1,2}(:[0-9]{1,2}(:[0-9]{1,2})?)?)?$/) != -1;
    }
    if (this.isdate()) {
        var arr = this.str.split(/\/| |:/);
        this.day = arr[0];
        this.month = arr[1];
        this.year = arr[2];
        this.hour = typeof arr[3] != typeof undefined ? arr[3] : "";
        this.minute = typeof arr[4] != typeof undefined ? arr[4] : "";
        this.second = typeof arr[5] != typeof undefined ? arr[5] : "";
    }
}

//  ... class for help customer function Time ...

function helptime(str) {
    this.str = str.trim();

    this.hour = "";
    this.minute = "";
    this.second = "";

    this.istime = function () {
        return this.str.search(/^[0-9]{1,2}(:[0-9]{1,2}(:[0-9]{1,2})?)?$/) != -1;
    }

    if (this.istime()) {
        var arr = this.str.split(/:/);
        this.hour = arr[0];
        this.minute = arr[1] ;
        this.second = typeof arr[2] != typeof undefined ? arr[2] : "";
    }

}

// ...  functions to help with time and date functions  ...

// To find today's Time
function TODAY_TIME() {

    if (arguments.length != 0) // Must No parameter
    {
        alert(" There is to many Arguments  ");
        return "#NAME?";
    }
    else {
        var d = new Date();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var seconed = d.getSeconds();

        return TIME(hour, minute, seconed);
    }
}

// function return true if the day is in range of the month ...
function Good_Day(day,month) {

    // if (day <= 0 || day >= 31) return false;
    //else return true;
    if (day <= 0 || day > 31) return false;

    else {
        if (month == 2 && day > 29)
            return false;

        else if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30)
            return false;

        else return true;
    }
}

function Good_Month(month) {

    if (month <= 0 || month > 12) return false;
    else return true;
}

function Good_Year(year) {

    if (year <= 0 || year > 9999) return false;
    else return true;
}

function Good_Date(year, month, day) {

    if (Good_Day(day,month) && Good_Month(month) && Good_Year(year))
        return true;
    else return false;
}

/*
    example
    -var d = new helpdate(day/month/year);
    x.day =>day,
    x.month =>month,
    x.year =>year
*/