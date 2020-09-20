// write a javaScript FibonacciSequence() to generate Fibonacci sequance


function fibonacciSequence(n) {
    if (n === 1) {
        return [0, 1];
    } else {
        var s = fibonacciSequence(n - 1);
        s.push(s[s.length - 1] + s[s.length - 2]);
        return s;
    }
}