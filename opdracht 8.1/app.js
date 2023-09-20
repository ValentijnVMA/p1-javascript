function add() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    if (num1 > 0 && num2 > 0) {
        let result = num1 + num2;
        document.getElementById("result").innerHTML = result;
    } else {
        alert("Het getal is te laag");
    }
}

function minus() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    if (num1 > 0 && num2 > 0) {
        let result = num1 - num2;
        document.getElementById("result").innerHTML = result;
    } else {
        alert("Het getal is te laag");
    }
}

function multiply() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    if (num1 > 0 && num2 > 0) {
        let result = num1 * num2;
        document.getElementById("result").innerHTML = result;
    } else {
        alert("Het getal is te laag");
    }
}

function divide() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);

    if (num1 > 0 && num2 > 0) {
        let result = num1 / num2;
        document.getElementById("result").innerHTML = result;
    } else {
        alert("Het getal is te laag");
    }
}
