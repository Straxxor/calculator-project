let num1 = 3;
let num2 = 5;
let op = "+";

const operate = () => {
    if (op === "+") {
        return num1 + num2;
    } else if (op === "-") {
        return num1 - num2;
    } else if (op ==="/") {
        return num1 / num2;
    } else if (op === "*") {
        return num1 * num2;
    }
};
