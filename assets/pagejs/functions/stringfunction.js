
// function CODE return value id string in ASci 
function CODE() {
    if (arguments.length == 0) {

        alert("enter paramater into function");
        return "=CODE()";
    }
    if (arguments.length != 1) {

        return "#NAME?";
    }

    return arguments[0].charCodeAt(0);

}
// FUNCTION CHAR opposite function code is return char 
function CHAR() {
    if (arguments.length == 0) {

        alert("enter paramater into function");
        return "=CHAR()";
    }
    if (arguments.length != 1) {

        return "#NAME?";
    }


    var ASci = new Array(
        "", " ", "!", "\"", "#",
        "$", "%", "&", "'", "(",
        ")", "*", "+", ",", "-",
        ".", "/", "0", "1", "2",
        "3", "4", "5", "6", "7",
        "8", "9", ":", ";", "<",
        "=", ">", "?", "@", "A",
        "B", "C", "D", "E", "F",
        "G", "H", "I", "J", "K",
        "L", "M", "N", "O", "P",
        "Q", "R", "S", "T", "U",
        "V", "W", "X", "Y", "Z",
        "[", "\\", "]", "^", "_",
        "`", "a", "b", "c", "d",
        "e", "f", "g", "h", "i",
        "j", "k", "l", "m", "n",
        "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x",
        "y", "z", "{", "|", "}",
        "~", ""
    );
    var i = 31;
    // i=31-----  127 in asci 
    while (i < 128) {

        if (i == arguments[0]) {
            i = i - 31;
            return ASci[i];
        }

        i++;
    }
    return "#NAME?"

}
// function return String is connected with each other
function CONCATENATE() {
    if (arguments.length == 0) {

        alert("enter paramater into function");
        return "=CONCATENATE()";
    }
    var resulte = "";
    for (var i = 0; i < arguments.length; i++) {
        if (isNaN(arguments[i]))
            resulte += arguments[i];
    }

    return resulte;
}
// EXACT return true if equal value else false
function EXACT() {
    if (arguments.length == 0) {

        alert("enter paramater into function");
        return "=EXACT()";
    }
    if (arguments[0] == arguments[1])
        return true;

    else
        return false;

}
// FUNCTION LEFT return number leter in string(string,number leter)
function LEFT() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=LEFT()";
    }
    if (arguments.length != 2) {
        alert("please enter two paramater into function ");
        return "=LEFT()";
    }
    var resulte = arguments[0].substr(0, arguments[1]);

    return resulte;

}
// FUNCTION LEN return  string.LENGHTH
function LEN() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=LEN()";
    }
    if (arguments.length != 1) {
        alert("please enter one paramater into function ");
        return "=LEN()";
    }


    return arguments[0].length;

}
// FUNCTION LOWER CONVERT STRING FROM toUpperCase TO toLowerCase
function LOWER() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=LOWER()";
    }
    if (arguments.length != 1) {
        alert("please enter one paramater into function ");
        return "=LOWER()";
    }


    return arguments[0].toLowerCase();

}
// FUNCTION  MID RETURN STRINT (string,FROM,TO)
function MID() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=MID()";
    }
    if (arguments.length != 3) {
        alert("please enter three paramater into function ");
        return "=MID()";
    }

    return arguments[0].substr(arguments[1], arguments[2]);

}
// FUNCTION  PROPER RETURN TOUPPERCASE FIRSTLASTER 
function PROPER() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=MID()";
    }
    if (arguments.length != 1) {
        alert("please enter one paramater into function ");
        return "=MID()";
    }
    var txt = arguments[0];
    alert(txt);
    str = txt.charAt(0).toUpperCase();
    alert(str);
    var txt = txt.replace(arguments[0].charAt(0), str);

    return txt;

}
// FUNCTION  PROPER RETURN TOUPPERCASE FIRSTLASTER 
function PROPER() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=MID()";
    }
    if (arguments.length != 1) {
        alert("please enter one paramater into function ");
        return "=MID()";
    }
    var txt = arguments[0];
    alert(txt);
    str = txt.charAt(0).toUpperCase();
    alert(str);
    var txt = txt.replace(arguments[0].charAt(0), str);

    return txt;

}
//function Replace(string,from,to,strinng replace) 
function REPLACE() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=REPLACE()";
    }
    if (arguments.length != 4) {
        alert("please enter four paramater into function ");
        return "=REPLACE()";
    }
    var str = arguments[0];
    var text = "";
    var i = 0;
    text += arguments[0].substr(0, arguments[1]);
    alert(text);
    text += arguments[3];
    alert(text);
    text += arguments[0].substr(arguments[2] + 1, arguments.length - 1);
    return text;
}
//function REPT (arrgument[0],number repeat) repeat string 
function REPT() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=REPT()";
    }
    if (arguments.length != 2) {
        alert("please enter two paramater into function ");
        return "=REPT()";
    }

    var text = "";
    for (var i = 0; i < arguments[1]; i++) {
        text += arguments[0];
        alert(text);
    }
    return text;
}
//function SEARCH(A_4,A_3) A_4 cell for search index INTO A_3
function SEARCH() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=SEARCH()";
    }
    if (arguments.length != 2) {
        alert("please enter two paramater into function ");
        return "=SEARCH()";
    }
    var str = arguments[1].indexOf(arguments[0]);

    return str;
}
// opposite lower function()
function UPPER() {
    if (arguments.length == 0) {
        alert("enter paramater into function");
        return "=UPPER()";
    }
    if (arguments.length != 1) {
        alert("please enter one paramater into function ");
        return "=UPPER()";
    }

    return arguments[0].toUpperCase();
}