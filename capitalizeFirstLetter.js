// Hello there 
const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}
capitalize('everday code'); // 
capitalize('f'); //'F'
capitalize(0) //''
capitalize({}) //''

// String.prototype.toJadenCase = function () {
//     return split(" ").map(function (word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(" ");
// }
