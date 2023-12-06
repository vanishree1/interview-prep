
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('user-form');
    const submitButton = document.getElementById('submit-btn');

    const formDataWrapper = document.getElementById('show-formdata');
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();
        const formData = new FormData(form);
        showFormData(formData)
        

        // Log the form data to the console
       
    });

    const showFormData = (formData) => {
        let divEle = document.createElement('ul');
        formData.forEach((value, key) => {
            console.log(key, value);
            let childEle = document.createElement('li');
            childEle.innerHTML = `${key} : ${value}`;
            divEle.appendChild(childEle);
        });
        formDataWrapper.append(divEle);
    }

    let replyArr = [{text: 'I write code',
                     replies: [{text: 'please teach me',
                                    replies: [{text: 'sure', replies: []}, {text: 'sure', replies: []}]}]
                    },
                    {text: 'I write code',
                    replies: [{text: 'please teach me',
                                   replies: [{text: 'sure', replies: []}]}]
                   },
                   {text: 'I write code',
                   replies: [{text: 'please teach me',
                                  replies: [{text: 'sure', replies: []}]}]
                  }]
            const displayNestedComments = (replyArr, leftMargin=0) => {
                replyArr.map((item) =>{
                    let comment = document.createElement('div')
                    comment.style.marginLeft = `${leftMargin}px`;
                    comment.style.borderLeft = `1px solid black`;
                    comment.innerHTML = `<span> ${item.text}</span>`
                    formDataWrapper.append(comment)
                    leftMargin+= 10;
                    displayNestedComments(item.replies, leftMargin)
                  })
            }
            displayNestedComments(replyArr)
                  
});


// object and it's value


function obj() {
    return {
        name : 'vani',
        printName () {
            console.log('print my name ', this.name)
        }
    }
    
}

console.log('obj ==>', obj())
console.log('obj ===>2', new obj())
function nestedObj() {
    this.name = 'east';
    return {
        name: this.name,
        printName() {
            return {
                name: this.name,
                printFullTHIS() {
                        console.log('what is this nAME', this.name)
                }
            }
        }
    }
}

nestedObj().printName().printFullTHIS();
function nestedObjOne() {
    this.name = 'east';
    return {
        printName() {
            this.name = 'real';
            return {
                printFullTHIS() {
                        console.log('what is this nAME', this.name)
                }
            }
        }
    }
}

nestedObjOne().printName().printFullTHIS();

function sum(n) {
    if(n == 1) {
        return 1;
    }


    return n + sum(n-1);
}

console.log('sum -->',sum(10));

var name = 'test'
function test() {
  var name = 'vani'
  console.log('what is this', this.name)
}

function write() {
    var name = 'write'
    test()
}

test()
write()



class Stream {
    constructor() {
       this.subscribers = [];
    }
    subscribe(fn) {
        this.subscribers.push(fn)
    }
    push(ele) {
       this.subscribers.forEach((cb) => {
        cb(ele)
       })
    }
}
const z = new Stream();
z.subscribe((value) => console.log('val -->',value));
z.subscribe((value) => console.log('val2 --->',value * 2));
z.subscribe((value) => console.log('val3 --->',value * 3));
z.push(2);


// leftProduct = [1 , 0 , 0 , 0];
// rightProduct = [0 , 0 , 0 , 1];

// for(let i =1; i < leftProduct.length; i++) {
//     leftProduct[i] = leftProduct[i-1] * nums[i-1]
// }


var gcdOfStrings = function(str1, str2) {
   console.log('str1 and str2', str1, str2)
    if(str1 + str2 != str2 + str1){
      return "";
  } else if(str1 == str2){
      return str1;
  } else if(str1.length > str2.length){
      return gcdOfStrings(str1.substring(str2.length), str2);
  } else{
          return gcdOfStrings(str2.substring(str1.length), str1)
      }  
};




console.log('gcdOfStrings ==>', gcdOfStrings("ABCABC", "ABC"))

var groupAnagrams = function(strs) {
    let group = {};
    let ans = [];
    for(let i = 0; i< strs.length; i ++) {
        let key = strs[i].split("").sort().join("");
        if(!group[key]) {
            group[key] = [...[strs[i]]]
        } else {
            group[key].push(strs[i])
        }
    }
    Object.keys(group).forEach(key => {
        ans.push(group[key])
    })

    return ans;
};

console.log('test ==>', groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

function mergeIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    // Sort the intervals by their start values
    intervals.sort((a, b) => a[0] - b[0]);
    
    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const lastMergedInterval = merged[merged.length - 1];
        
        if (currentInterval[0] <= lastMergedInterval[1]) {
            // The current interval overlaps with the last merged interval
            lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
        } else {
            // No overlap, add the current interval to the merged result
            merged.push(currentInterval);
        }
    }

    console.log('merged ==', merged)
    return merged;
}

// Example usage:
const intervals = [[1, 3], [2, 6]];
const mergedIntervals = mergeIntervals(intervals);
console.log(mergedIntervals); // This will output [[1, 6], [8, 10], [15, 18]]


// -------------------------------------------------------------
// Q1. What is the output?
// console.log(false == '0') // O/P - true
// console.log(false === '0') // O/P - false



// -------------------------------------------------------------
// Q2. Output?
// var x = 21;
// var print = function() {
//   console.log(x);
//   var x = 20;
// };
// print();
// O/P - undefined



// -------------------------------------------------------------
// Q3. What does the following code do ?
// const foo = (x, y, z) => {
//     return {
//         x,
//         y,
//         z
//     };
// };

// let result = foo("a", "b", "c"); 
// console.log(result);

// o/p. {"a" : "a", "b" : "b", "c" : "c"}


// -------------------------------------------------------------
// Q4. Read the value of property c  and store it in another variable
// const a = { b: { c: 'Hi!' } };

// const { b : y  } = a;

// console.log("c val", y)



// -------------------------------------------------------------
// Q5: Solve below console queries.
// var hero = {
//   name: 'Clark Kent',
//   getSecretIdentity: function (){
//       return this.name; 
//   }
// };

// // console.log(hero.getSecretIdentity()); // O/P - 'Clark Kent'
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero); // O/P - return function
// console.log(stoleSecretIdentity()); // O/P - undefined
// console.log(stoleSecretIdentity.call(hero));
// console.log(stoleSecretIdentity.apply(hero));



// -------------------------------------------------------------
// Q6:  Write a function to check if given strings are anagram.

function isAnagram(string1, string2) {
    // if(string1 && string2) {
      if(!string1 || !string2) {
        return false
      }
      if(string1.length !==  string2.length) {
        return false;
      }
      let letterToCount = {};
      for(let i=0; i< string1.length; i++) {
        if(!letterToCount[string1[i]]) {
          letterToCount[string1[i]] = 1;
        } else {
          letterToCount[string1[i]] = ++letterToCount[string1[i]];
        }
      }
  
      for(let i=0; i< string2.length; i++) {
        if(letterToCount[string2[i]]) {
          letterToCount[string2[i]] = --letterToCount[string2[i]];
        } else {
          return false;
        }
      }
  
      Object.keys(letterToCount).forEach((key) => {
        if(letterToCount[key] !== 0) {
          return false;
        }
      })
  
      return true;
    // }
  
  }
  
  
  
  
  console.log(isAnagram('tab', 'bat'))
  console.log(isAnagram('tomato', 'bat'))
  
  
  
  
  // ---------------------------------------------------------------
  // Q7: Write cd function which should return output like comments 
  
  function cd(pwd,input) {
   if(!input) {
    return pwd
   }
   let pwdArr = pwd.split('/'); 
   let inputArr = input.split('/');
  
   console.log('test ', pwdArr, inputArr)
  
   for(let i=0; i < inputArr.length; i++) {
      if(inputArr[i] == '..') {
        pwdArr.pop();
      } else {
        pwdArr.push(inputArr[i])
      }
   }
  
  
   return pwdArr.length < 1 ? '/' : pwdArr.join('/');
  }
  
  
  
  // // Enable below console logs to run code
  console.log(cd('/User/arista/code', 'js/src')); // /User/arista/code/js/src
  console.log(cd('/User/arista/code', '../documents')); // /User/arista/documents
  console.log(cd('/User/arista/code', '../../..')); // /
  console.log(cd('/User/arista/code', '../../other/../arista/backend')); // /User/arista/backend
  
  
  
  
  
  // ----------------------------------------------------------------
//   Q8:  Visit the current node and all the nested children of a given node.
  let locations = {
        name: 'India',
        children: [{
          name: 'MH',
          children: [{
            name: 'Mumbai',
            children: []
          }, {
            name: 'Pune',
            children: []
          }, {
            name: 'Nagpur',
            children: []
          }]
        }, {
          name: 'MP',
          children: [{
            name: 'Indore',
            children: []
          }]
        }, {
          name: 'KT',
          children: [{
            name: 'Bangalore',
            children: []
          }]
        }]
      };
  
  function visit (node) {
     console.log(node.name);
     if(node.children) {
        node.children.forEach((ele) => {
            visit(ele)
        })
     }
  }
  
  visit(locations)
//   function(node, fun) {
//   } 
  