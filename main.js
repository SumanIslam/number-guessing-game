// variables
let min = 1,
    max = 10,
    winningNumber = Math.floor(Math.random() * (max-min +1) + min),
    guessesLeft = 3;
console.log(winningNumber);

// Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play Again event listener
game.addEventListener('mousedown', (e) => {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
  console.log(e);
})
// Event Listener
guessBtn.addEventListener('click', (e) => {
  const guess = parseInt(guessInput.value);

  // check if won or not
  if(guess === winningNumber){
    // win
    gameOver(true, `Yahoo!! number ${winningNumber} is correct. You Win!!`);
  } else {
    // wrong number
    guessesLeft--;

    if(guessesLeft === 0) {
      // game over - lost
      gameOver(false, `Game Over, You lost. The correct number was ${winningNumber}`);
      
    } else {
      // game continuous - wrong answer
      guessInput.style.borderColor = 'red';
      guessInput.value = '';
      setMessage(`${guess} is not correct, ${guessesLeft} is left`, 'red');
    }
  }

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  }

  e.preventDefault();
})

// setMessage function
function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
};

// gameOver function
function gameOver(won,msg) {
  let color;
  won === true ? color = 'green' : color = 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}