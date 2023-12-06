//array will be sorted array, check any of 2 items sum makes target or not

export function checkForTarget(num, target) {
    let i = 0;
    let j = num.length - 1;
    while(i < j) {
        let sum = num[i] + num[j];
        if(sum === target) {
            return true;
        }
        if(sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return false;
}

function twoSum(nums, target) {
    let j = 1;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] + nums[j] === target) {
            return [i, j]
        } else {
            j++;
        }
    }
};

twoSum([3,3], 6)