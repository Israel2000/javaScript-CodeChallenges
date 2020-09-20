/*html code: <div>  
Enter the length of character:
<input type='text' id="num">
    <button onclick="stringGen()">submit</button>
    <p id="result"></p>
</div> 
*/
// create js func that generate random character id comprising of alphabets and number for given in input length.

function stringGen() {
    var text = "";
    var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var x = document.getElementById("num").value;
    for (var i = 0; i < x; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
