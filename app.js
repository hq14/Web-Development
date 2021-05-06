const options = [
  {
    position: 0,
    choice: 'rock',
    borderColor: 'hsl(349, 70%, 56%)',
    image: 'images/icon-rock.svg'
  },
  {
    position: 1,
    choice: 'paper',
    borderColor: 'hsl(230, 89%, 62%)',
    image: 'images/icon-paper.svg'
  },
  {
    position: 2,
    choice: 'scissors',
    borderColor: 'hsl(40, 84%, 53%)',
    image: 'images/icon-scissors.svg'
  }
]
let score = 0;

// display rules window
document.querySelector('button').addEventListener('click', function(){
  document.querySelector('.rules-window').classList.toggle('hidden');
});

// hide rules window
document.querySelector('.rules-close').addEventListener('click', function(){
  document.querySelector('.rules-window').classList.add('hidden');
});

// hide play again button and result
document.querySelector('.play-again').addEventListener('click', function(){
  document.querySelector('.play-again').classList.add('hidden');
  document.querySelector('.result').classList.add('hidden');
});

// generate random number
function randomNumber() {
  var n = Math.random();
  n = Math.floor(n*3);
  return Number(n);
}

// click on rock/paper/scissors
for (var i=0; i<3; i++) {
  let choice = '.' + options[i]['choice']
  let imagesource = options[i]['image']
  let border = options[i]['borderColor']
  let player = options[i]['position']
  document.querySelector(choice).addEventListener('click', function(){
    let n = randomNumber()
    // set players borders and images
    document.querySelector('.player').firstElementChild.setAttribute('src', imagesource);
    document.querySelector('.player').style.borderColor = border;
    // set computers borders and images
    document.querySelector('.computer').firstElementChild.setAttribute('src', options[n]['image']);
    document.querySelector('.computer').style.borderColor = options[n]['borderColor'];

    // decide who won
    if (n == player) {
      document.querySelector('.result').innerText = 'DRAW';
    } else if (n == 0) {
      if (player==1) {
        document.querySelector('.result').innerText = 'YOU WIN';
        score += 1
      } else {
        document.querySelector('.result').innerText = 'YOU LOSE';
      }
    } else if (player==0) {
      if (n==1) {
        document.querySelector('.result').innerText = 'YOU LOSE';
      } else {
        document.querySelector('.result').innerText = 'YOU WIN';
        score += 1;
      }
    } else if (n>player) {
      document.querySelector('.result').innerText = 'YOU LOSE';
    } else if (player>n) {
      document.querySelector('.result').innerText = 'YOU WIN';
      score += 1;
    };

    // Umhide elements
    document.querySelector('.rps').classList.add('hidden');
    document.querySelector('.choices').classList.remove('hidden');
    document.querySelector('.play-again').classList.remove('hidden');
    document.querySelector('.result').classList.remove('hidden');
  });
};



// plat again
document.querySelector('.play-again').addEventListener('click', function(){
document.querySelector('.choices').classList.add('hidden');
document.querySelector('.rps').classList.remove('hidden');
document.querySelector('.score h1').innerText = score;
});
