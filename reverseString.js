// reverse string
// racecar = racecar
//car = rac
//hello = "olleh"
function reverseString(str) {
	var strArr = str.split('');
	var reversedArray = strArr.reverse();
	var reverseString = reversedArray.join("");

	return reverseString;
}

console.log(reverseString);