function calculate(num1, num2) {
    const sum = num1 + num2;
    console.log(`Antwoord: ${sum}`);
  }
  
  calculate(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));

  function multiplyByFive(number) {
    const result = number * 5;
    console.log(`Antwoord: ${result}`);
  }
  

  multiplyByFive(Math.floor(Math.random() * 20));

  function calculateMinutes(seconds) {
    const minutes = seconds / 60;
    console.log(`Antwoord: ${minutes}`);
  }
  
  calculateMinutes(3600); 