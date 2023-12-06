function calculate(expression) {
    let stack = [];
    let openBrackets = ['(' , '[', '{']
    for(let i = 0; i < expression.length; i++) {
        if(openBrackets.includes(expression[i])) {
            stack.push(expression[i])
        } else{
            let ele = stack.pop();
        }
    } 
}