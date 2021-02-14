//Call for window to ask a name
let name = prompt('Hello, what is your name?');

//Call for window untill player enter the name
while (name == '' || name == null) {
  name = prompt('Please, enter your name!');
}

// call for rules of the game after name were entered
alert(name + ', I thought of a number from 1 to 100. Try to guess it off in the fewest possible attempts. After each try, I will say "little", "a lot", or "guessed".');

//Call for number 1-100
let number = random(100)
// Call for window to input the guess
let guess = prompt('What number i thinking abut?');
let numberOfGuesses = 1;


// Call for window untill number is guessed 
while (guess != number) {
  numberOfGuesses = numberOfGuesses + 1;

  if (guess > number) {
    guess = prompt('A lot, try again');
  } else if (guess < number) {
    guess = prompt('A little, try again');
  }
}

// Number of guesse after right guess 
alert('You are right! The number is ' + number + ' You guessed it with ' + numberOfGuesses + ' tries');