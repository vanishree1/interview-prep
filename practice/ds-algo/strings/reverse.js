//pass string and output reverse of it.

export function reverse(S) {
    return S.split('').reverse().join('')
}

console.log('reverse ==>',reverse('i love js'))