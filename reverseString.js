/**this file belongs to reverse string only */
function reverseString(str) {
    var strArr = str.split('');
    var reversedStrArray = strArr.reverse();
    var reversedString = reversedStrArray.join("");

    return reversedString;
}
console.log(reverseString("hello"));

// or
function reversedString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));
