/*

 <FORM NAME="myForm">
        <TABLE BORDER=2>
            <TR>
                <TD align="center">
                    <INPUT TYPE="text" ID="screen" NAME="screen" style="width:99%"><br>
                </TD>
            </TR>
            <TR>
                <TD>
                    <INPUT TYPE="button" NAME="7" VALUE="  7  " onclick="update(7)">
                    <INPUT TYPE="button" NAME="8" VALUE="  8  " onclick="update(8)">
                    <INPUT TYPE="button" NAME="9" VALUE="  9  " onclick="update(9)">
                    <INPUT TYPE="button" NAME="+" VALUE="  +  " onclick="update('+')">
                    <br>
                    <INPUT TYPE="button" NAME="4" VALUE="  4  " onclick="update(4)">
                    <INPUT TYPE="button" NAME="5" VALUE="  5  " onclick="update(5)">
                    <INPUT TYPE="button" NAME="6" VALUE="  6  " onclick="update(6)">
                    <INPUT TYPE="button" NAME="-" VALUE="  -  " onclick="update('-')">
                    <br>
                    <INPUT TYPE="button" NAME="1" VALUE="  1  " onclick="update(1)">
                    <INPUT TYPE="button" NAME="2" VALUE="  2  " onclick="update(2)">
                    <INPUT TYPE="button" NAME="3" VALUE="  3  " onclick="update(3)">
                    <INPUT TYPE="button" NAME="*" VALUE="  x  " onclick="update('*')">
                    <br>
                    <INPUT TYPE="button" NAME="c" VALUE="  c  " onclick="form_reset();">
                    <INPUT TYPE="button" NAME="0" VALUE="  0  " onclick="update(0)">
                    <INPUT TYPE="button" NAME="=" VALUE="  =  " onclick="result();">
                    <INPUT TYPE="button" NAME="/" VALUE="  /  " onclick="update('/')">
                </TD>
            </TR>
        </TABLE>
    </FORM>
*/

function update(value) {
    document.getElementById('screen').value += value;
}

function result() {
    document.getElementById('screen').value = eval(document.getElementById('screen').value);
}

function form_reset() {
    document.getElementById('screen').value = "";
}