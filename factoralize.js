/** example 5! = 1*2*3*4*5 = 120 */
function factoralize(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        //console.log(i)
        result = result * i;
    }
    return result;
}

factoralize(5);