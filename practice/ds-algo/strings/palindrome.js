//check wheather given string palindrome or not
// note: palindrome is string which reads the same when we read it from right to left and left to right .
export function isPalindrome(S) {
    let left = 0;
    let right = S.length-1;
    while(left < right) {
        if(S[left] !== S[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log('isPalindrome',isPalindrome('tomato'));

console.log('isPalindrome', isPalindrome('kik'));


function isPalindromeForSentence(s) {
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const n = s.length;
    
    for (let i = 0; i < n / 2; i++) {
        if (s[i] !== s[n - i - 1]) {
            return false;
        }
    }
    
    return true;
}

// Example usage:
const inputString = "A man, a plan, a canal: Panama";
const isPalindromic = isPalindromeForSentence(inputString);
console.log(isPalindromic);