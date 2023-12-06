// for(var i=0; i<4; i++) {
//     setTimeout(() => {


       
//     }, 1000)
// }

// for(let i=0; i<4; i++) {
    setTimeout(() => {
        console.log('printing i for let')
    }, 1000)
// }

Promise.resolve().then(() =>{
    console.log('result ==>')
})




console.log("first answer == >", find([3, 4, 5, 8, 20], 5))

function find(arr, ele) {
    let first = 0;
    let last = arr.length - 1;
    
    while(first < last) {
        let mid = first + last / 2;
        if(arr[mid] === ele) {
            return mid;
        }
        if(arr[mid] > ele) {
            first = mid + 1;
        } else {
            last = mid - 1;
        }
    }
    return start
}


console.log('second answer ==>', findIntersection([1,2,4,5], [1,3,4,5,5,6]));

function findIntersection(array1, array2) {
    let map1 = {}
    let interSectArr = [];
    array1.forEach(element => {
        map1[element] = map1[element] ? map1[element]++ : 1
    });

    array2.forEach(element => {
        if(map1[element] && map1[element] > 0) {
            interSectArr.push(element);
            map1[element] = 0;
        }
    });
    
    return interSectArr;
}