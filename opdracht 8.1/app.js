function add() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function minus() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 - num2;
    document.getElementById("result").innerHTML = result;
}

function multiply() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 * num2;
    document.getElementById("result").innerHTML = result;
}

function divide() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}