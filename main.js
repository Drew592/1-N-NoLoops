function printNumbersTillUserNumber() {
    let userInput = prompt("Please enter a number:");
  
    if (userInput === null || userInput === "") {
      console.log("No input received.");
      return;
    }
  
    let number = parseInt(userInput);
  
    if (isNaN(number)) {
      console.log("Invalid input. Please enter a valid number.");
      return;
    }
    
    if (number < 0){
        console.log("Please enter a positive number")
        return;
    }
  
    for (let i = 0; i <= number; i++) {
      console.log(i);
    }
  }
  
  printNumbersTillUserNumber();