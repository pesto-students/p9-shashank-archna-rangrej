function paranthesisChecker(str) {
    let stack = [];
    const map = new Map();
    map.set(')', '(');
    map.set('}', '{');
    map.set(']', '[');

    for (let char of str) {
        if (!map.has(char)) {
            stack.push(char);
        } else if (stack.pop() !== map.get(char)) {
            return false;
        }
    }
    
    return stack.length === 0;
};

const str = "({[]})";

const result = paranthesisChecker(str);

/* 
    Time Complexity: O(N)
    Space Complxity: O(N)
*/