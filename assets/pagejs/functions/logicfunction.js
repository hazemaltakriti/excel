// AND(A_1>A_2) RETURN TRUE OR FALSE

function AND() {
    var j = 0;

    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "= AND()";
    }

    for (var i = 0; i < arguments.length; i++) {

        if (arguments[i] == true) {
            j++;

        }

    }
    if (i == j) {
        return true;
    } else {
        return false;

    }

}
//RETURN FALSE 
function FALSE() {

    return false;
}
// iferror(conditional,else ... )
function IFERROR() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=IFERROR()";
    } else
        if (arguments.length != 2) {
            alert("please  you  MUST let two parameter only in function");
            return "=IFERROR()";

        }

    if (arguments[0] != undefined && arguments[0] != Infinity && arguments[0] != false && arguments[0] != "")
        return arguments[0];

    else
        return arguments[1];

}
//ifs(conditional,if(conditiona===true)return paramater 2)
//  IFS FUNCTION IN EXCEL 2016
// IFS FUNCTION FOR MORE TEST VALUE
function IFS() {

    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=IFS()";
    } else
        if (arguments.length < 2) {
            alert("please  you  MUST let two parameter  in function");
            return "=IFS()";

        }

    for (var i = 0; i < arguments.length; i++) {


        if (arguments[i] == true) {

            return arguments[i + 1];
        }
    }

    return "#NAME?";
}
//NOT FUNCTION 
function NOT() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=NOT()";
    }
    else
        if (arguments.length == 1) {

            if (arguments[0] == true) {

                return FALSE();
            }
            else {
                return true;
            }

        }
        else

            return "#NAME?";



}
// OR(A_1>A_2) RETURN TRUE IF ONE or MORE  PARAMATER TRUE

function OR() {


    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "=  OR()";
    }

    for (var i = 0; i < arguments.length; i++) {

        if (arguments[i] == true) {
            return true;

        }

    }
    return FALSE();

}
/* SWICH FUNCTION FOR MORE CODITIONAL EXAMPLE SWICH(VALUE,ARGUMENTS[1],IF(VALUE==ARGUMENTS[1])RETURN ARGUMENT[2],---
----, IF(VALUE!=ARGUMENTS[i])RETURN ARGUMENTS[i+1])*/
function SWICH() {
    if (arguments.length == 0) {
        alert("please enter parameter into function ");
        return "= SWICH()";
    }
    if (arguments.length < 3) {
        alert("please  you  MUST let three parameter  in function")
        return "=SWICH()";
    }
    var i;
    for (i = 1; i < arguments.length; i++) {
        if (i % 2 != 0 && arguments[i] == arguments[0])
            return arguments[i + 1];

    }

    return arguments[i - 1];


}

function TRUE() {
    return true
}
// function xor(true,false)  return true / xor (true,true)  return true / xor(false,false) return false
function XOR() {
    if (arguments.length == 0) {
        alert("please enter parameter into function");
        return "=XOR()";
    }
    for (i = 0; i < arguments.length; i++) {

        if (arguments[i] == true) {

            return true;
        }

    }
    return false;

}

