var budget = 100
var product = 60

if (budget >= product) {
    document.getElementById("result").innerHTML = "U heeft genoeg geld!";
    document.getElementById("result").style.color = "green";
} else {
    document.getElementById("result").innerHTML = "Helaas, te weinig geld!";
    document.getElementById("result").style.color = "red";
}