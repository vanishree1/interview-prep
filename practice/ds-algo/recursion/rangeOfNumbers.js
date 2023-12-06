function rangeOfNumbers(start, end) {
    if(start < end ){
        return []
    }

    const number = rangeOfNumbers(start, end-1);
    number.push(end)
    return number;
}

rangeOfNumbers(0, 5) = [1, 2, 3, 4, 5]

rangeOfNumbers(0, 4) = [1, 2, 3, 4]

rangeOfNumbers(0, 3) = [1, 2, 3]

rangeOfNumbers(0, 2) = [1 , 2]

rangeOfNumbers(0, 1) = [1]

rangeOfNumbers(0 , 0) = []