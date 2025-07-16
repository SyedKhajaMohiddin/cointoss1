const coin = document.getElementById('coin');
const tossButton = document.getElementById('tossButton');
const result = document.getElementById('result');

const tossCoin = () => {
  const randomOutcome = Math.random() > 0.5 ? 'heads' : 'tails';
  
  // Start the flip animation
  coin.style.transform = 'rotateX(720deg)';
  
  // After the animation ends, display the result
  setTimeout(() => {
    if (randomOutcome === 'heads') {
      coin.style.transform = 'rotateX(0deg)';
      result.textContent = 'It\'s Heads!';
    } else {
      coin.style.transform = 'rotateX(180deg)';
      result.textContent = 'It\'s Tails!';
    }
  }, 1000);
};

// Event listener for the toss button
tossButton.addEventListener('click', tossCoin);
