let counterElement = document.getElementById("counter");
let counter = 0;

function increment() {
    counter++;
    counterElement.innerHTML = counter;
    if (counter == 10) {
        counter = 0;
    }
}