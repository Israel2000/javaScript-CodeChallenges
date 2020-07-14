// example eye = eye
// racecar = racecar

function palindrome(str) {
    var reversed = str.split("").reverse().join("");
    //console.log(reversed);
    if (reversed === str) return true;
    return false;
}
palindrome("racecar"); //true