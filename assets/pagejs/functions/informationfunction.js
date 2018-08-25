columns = new Array("A", "B", "C", "D", "E", "F", "G", "H",
    "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
    "V", "W", "X", "Y", "Z");
//function CELL(TYBE,VALUE)   RETURN VALUE According to TYPE
// TYPE IS DIFRENT (ROW,CONTENTS,TYPE----)
function CELL() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=CELL()";
    } else
    if (arguments.length != 2) {
        alert("please you MUST INPUT  ONLY TWO  parameter into function ");
        return "=CELL()";
    }

    var result, i;

    if (arguments[0] == "row") {
        for (i = 0; i < passedid[0].length; i++) {
            if (columns[i] == passedid[0].charAt(i)) {
                continue;
            } else {
                break;
            }
        }

        result = passedid[0].slice(i, passedid[0].length);
        return result;
    } else
    if (arguments[0] == "contents") {
        return arguments[1];
    } else
        // return i if value ==string else return v
        if (arguments[0] == "type") {

            for (i = 0; i < columns[i].length; i++) {
                if (columns[i] == arguments[1]) {
                    return "i";
                }

            }

            return "v";

        }
    else {

        return "#Name?";
    }
}
/*
function ERROR.TYPE(ARGUMEN)‎
return number error
#NULL!‎
1

‎#DIV/0!‎

2

‎#VALUE!‎

3

‎#REF!‎

4

‎#NAME?‎

5

‎#NUM!‎

6

‎#N/A

7

‎#GETTING_DATA

8

أي قيمة أخرى




*/

function ERRORTYPE() {
    alert("1");
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ERRORTYPE()";
    } else
    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ERRORTYPE()";
    }

    if (arguments[0] == "‎#DIV/0!‎") {
        return 2;

    } else
    if (arguments[0] == "‎#VALUE!") {
        return 3;

    } else
    if (arguments[0] == "#REF!") {
        return 4;
    } else
    if (arguments[0] == "‎#NAME?‎") {
        return 5;
    } else
    if (arguments[0] == "‎#NUM!") {
        return 6;
    } else
    if (arguments[0] == "‎#N/A") {
        return 7;
    } else
    if (arguments[0] == "‎#GETTING_DATA") {
        return 8;
    } else
    if (arguments[0] == "#NULL!") {
        return 1;
    }
    return 9;


}
// if cell==empty return true
function ISBLANK() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISBLANK()";
    } else if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISBLANK()";
    }


    if (passedid[0] == undefined)
        return true;
    else
        return false;
}

function ISERR() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISERR()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISERR()";
    }

    if (arguments[0] != "‎#N/A")
        return true;
    else
        return false;
}

function ISLOGICAL() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISLOGICAL()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISLOGICAL()";
    }


    if (Boolean(arguments[0]))
        return true;
    else {
        return false;
    }

}

function ISNA() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISNA()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISNA()";
    }

    if (arguments[0] == "#N/A")
        return true;
    else
        return false;
}

function ISNONTEXT() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISNONTEXT()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISNONTEXT()";
    }

    if (isNaN(arguments[0])) {
        return false;
    } else
        return true;

}

function ISNUMBER() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISNUMBER()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISNUMBER()";
    }

    if (isNaN(arguments[0])) {
        return false;
    } else
        return true;

}

function ISTEXT() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=ISTEXT()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "=ISTEXT()";
    }

    if (isNaN(arguments[0])) {
        return true;
    } else
        return false;

}

function ISODD() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "= ISODD()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "= ISODD()";
    }

    if (arguments[0] % 2 != 0) {
        return true;
    } else
        return false;

}

function N() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "= N()";
    } else

    if (arguments.length != 1) {
        alert("please you MUST INPUT  ONLY ONE  parameter into function ");
        return "= N()";
    }

    if (arguments[0] == true) {
        return 1;
    } else
    if (arguments[0] == false) {
        return 0;
    } else {

        return 0;
    }



}

function NA() {

    return "#N/A";
}