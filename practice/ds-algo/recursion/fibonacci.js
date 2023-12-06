function fibonacci(arr) {
    if(n <= 1) {
        return 1;
    }
    return fibonacci(n-1) + fibonacci(n - 2);
}

fibonacci(5);
5 - fibonacci(4) + fibonacci(3) -- 5
4 - fibonacci(3) + fibonacci(2) -- 3
3 - fibonacci(2) + fibonacci(1) -- 2
2 - fibonacci(1) + fibonacci(0) -- 1
