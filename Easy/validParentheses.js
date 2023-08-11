
let isValid = function (s) {

    const closeToOpen = {
        ']': '[',
        '}': '{',
        ')': '('
    }
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const bracket = s[i];
        if (closeToOpen[bracket]) {
            if (stack && stack[stack.length - 1] === closeToOpen[bracket]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
        else {
            stack.push(bracket);
        }
    }

    return stack.length !== 0 ? false : true

}

let result = isValid("{[]}");
console.log(result);