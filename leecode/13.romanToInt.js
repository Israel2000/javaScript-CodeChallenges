var romanToInt = function (s) {
    let count = 0;
    let roman = {
        I: [1, 0],
        V: [5, 1],
        X: [10, 2],
        L: [50, 3],
        C: [100, 4],
        D: [500, 5],
        M: [1000, 6]
    };
    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]]) {
            if (i !== s.length - 1) &&
                (roman[s[i]][1] + 1 === roman[s[i + 1]][1 || roman[s[i]]])
        }
    }
}