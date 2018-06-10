// *** Load the page *** //

document.addEventListener('DOMContentLoaded', () =>  {

  // initial variables for the page

  const querty = document.getElementById('qwerty');
  const phrase = document.getElementById('phrase');
  const resetButton = document.querySelector('.btn__reset');
  const overlay = document.querySelector('#overlay');
  const winScreen = document.querySelector('.winScreen');
  const loseScreen = document.querySelector('.loseScreen');
  const letterClass = document.getElementsByClassName('letter');
  const showClass = document.getElementsByClassName('show');
  const title = document.querySelector('.title');

  let missed = 0;
  var phraseAnswers = [
    "Help me with code",
    "A random phrase",
    "Find me with search",
    "Group of words",
    "This is not a joke"
  ];


  // remove overlay from the start page

    resetButton.addEventListener("click", () => {
      overlay.style.display = "none";
    });

    // Random generator, split up string

    function getRandomPhraseAsArray(newRandom) {
      let firstRandomPhrase = newRandom[Math.floor(Math.random() * newRandom.length)];
      let finalPhrase = firstRandomPhrase.split('');
      return finalPhrase;
    };

    // Add random phrase to page

    function addPhrasetoDisplay(newPhrase) {

      for (let i = 0; i < newPhrase.length; i++) {

        let li = document.createElement('li');
        let text =  document.createTextNode(newPhrase[i]);
        phrase.children[0].appendChild(li);
        li.appendChild(text);

        if (newPhrase[i] !== ' ') {
          li.className = 'letter';
        } else {
          li.className = 'space';
        };
      };
    };

    // Function to check letters to see if they match 'letter' class

    function checkLetter(guess) {

      let check = false;

      for (let i = 0; i < letterClass.length; i+= 1) {

        let phraseLetter = letterClass[i];

        if (guess.textContent.toLowerCase() === phraseLetter.textContent.toLowerCase()) {

          let letterMatch = phraseLetter.className += ' show';
          check = true;
        }
      }
      return check;
    }

  // Run random generator

    let phraseArray = getRandomPhraseAsArray(phraseAnswers);
    addPhrasetoDisplay(phraseArray);

  // Check letters when user clicks

  querty.addEventListener('click', (e) => {

      if (e.target.tagName === 'BUTTON') {

        const button = e.target;

        // Make sure the letters are shown as checked

        button.className += 'chosen';
        button.disabled = true;

        // Run the check letter function

        const letterFound = checkLetter(button);

        if (letterFound === false) {
          const score = document.querySelector('ol');
          const li = document.querySelectorAll('.tries');
          score.removeChild(li[0]);
          missed += 1;
        }

        // Check to see if the player wins

        function checkWin() {

          // If they win, they see the congrats screen
          if (showClass.length == letterClass.length) {
            overlay.style.display = 'flex';
            overlay.className = 'win';
            phrase.remove();
            // page is reset
            title.innerHTML = "You win! You're so smart!";
            missed = 0;
            resetButton.innerHTML = "Restart game?";
            resetButton.addEventListener('click', () => {
              location.reload();
              overlay.style.display = "none";
            });
          } else if (missed === 5) {

            // If they lose, they get the try again screen
            overlay.style.display = 'flex';
            overlay.className = 'lose';
            phrase.remove();
            // page is reset
            title.innerHTML = "Sorry my friend, you lose.";
            resetButton.innerHTML = "Try again?";
            resetButton.addEventListener('click', () => {
              overlay.style.display = "none";
              location.reload();
            });
            missed = 0;
          }
        }
        checkWin();
      };
    });

});
