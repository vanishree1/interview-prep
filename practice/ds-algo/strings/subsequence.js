// check s is subSequence of t or not

export function isSubsequence(s, t) {

    let i = 0;
    let j = 0;

    while(s.length < i && t.length <j) {
        if(s[i] == t[j]) {
            i++;
        } else {
            j++;
        }
    }
    return i == s.length;
}