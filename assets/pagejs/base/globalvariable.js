var passedid = [];//variable for send array id wich replaced his in value in processfunction dispatch function

var allfunction  = [
    "SUM","IF(condition,outputiftrue,outputiffalse)","AVERAGE","COUNT","MAX","MIN","MMULT","QUOTIENT","POWER","CHOOSE","DATE",
"PRODUCUT","FIND","DAVERAGE","DCOUNT","DCOUNTA","DMAX","DMIN","DPRODUCT","DSUM","DATE",
"TODAY","TIME","NOW","DAY","MONTH","YEAR","SECOND","MINUTE","HOUR","DAYS",
"DAYSs","DATEDIF","DATEVALUE","TIMEVALUE","EDATE","EMONTH","ISOWEEKNUM","YEARFRAC","WEEKDAY","BIN_2DEC",
"BIN_2HEX","BIN_2OCT","DEC_2BIN","DEC_2HEX","DEC_2OCT","OCT_2BIN","OCT_2DEC","OCT_2HEX","HEX_2BIN","HEX_2DEC",
"HEX_2OCT","COMPLEX(x,y)","DELTA(x,y)","GESTEP(x, y)","helpdate(str)","helptime(str)","TODAY_TIME","Good_Day(day,month)","Good_Month(month)","Good_Year(year)",
"Good_Date(year, month, day)","CELL(TYBE,VALUE)","CELL","ERRORTYPE","ISBLANK","ISERR","ISLOGICAL","ISNA","ISNONTEXT","ISNUMBER",
"ISTEXT","ISODD","N","NA","AND","FALSE","IFERROR","IFS","NOT","OR",
"SWICH","TRUE","xor(true,false)","XOR","ABS(x)","ACOS(x)","ACOSH(x)","ASIN(x)","ASINH(x)","ATAN(x)",
"ATANH(x)","CEIL(x)","CLZ_32(x)","EXP(x)","FLOOR(x)","LOG(x)","LOG_10(x)","LOG_2(x)","SIGN(x)","ROUND(x)",
"SIN(x)","COS(x)","TAN(x)","SQRT(x)","POW(x,y)","MIN","MAX","COLUMN","INDIRECT","COLUMNS",
"VLOOKUP","ROWS","ROW","LOOKUP","MATCH","CODE","CHAR","CONCATENATE","EXACT","LEFT",
"LEFT","LOWER","MID","PROPER","PROPER","Replace(string,from,to,strinng replace)","REPLACE","REPT","SEARCH(A_4,A_3)","SEARCH",
"UPPER"
                ] //variable for suggested customer function

var pickedsheet = $('#sheet1');//variable for set and get which user sheet picked 
