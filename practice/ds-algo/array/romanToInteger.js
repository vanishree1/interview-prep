function romanToInteger(s) {
    let romanToIntegerMap = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    };

    let result = 0;
    for(let i = 0; i < s.length; i++) {
        const current = romanToIntegerMap[s[i]];
        const next = romanToIntegerMap[s[i + 1]];

        if( next && current < next) {
            result += next - current;
            i++;
        }else {
            result += current
        }

    }

}

romanToInteger('MCMXCIV');
