// *** Load the page *** //

document.addEventListener("DOMContentLoaded", () =>  {

  // initial variables for the page

  const querty = document.getElementById("qwerty");
  const phrase = document.getElementById("phrase");
  const resetButton = document.querySelector(".btn__reset");
  const overlay = document.querySelector("#overlay");
  // const buttons = document.querySelectorAll('button');

  let missed = 0;
  var phraseAnswers = [
    "Help me with code",
    "A random phrase",
    "Find me with search",
    "Group of words",
    "This is not a joke"
  ];

// *** Global functions *** //

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

    // Check letters to see if they match 'letter' class

    function checkLetter(guess) {

      const letterClass = document.getElementsByClassName('letter');

      for (let i = 0; i < letterClass.length; i+= 1) {

        let phraseLetter = letterClass[i];

        console.log('here');

        if (guess.textContent.toLowerCase() === phraseLetter.textContent.toLowerCase()) {

          console.log('here 2');

          let letterMatch = phraseLetter.className += ' show';
        }
      }
      return null;
    }

  // Check letters

  querty.addEventListener('click', (e) => {

      if (e.target.tagName === 'BUTTON') {

        const button = e.target;

        // Make sure the letters are shown as checked

        button.className += 'chosen';
        button.disabled = true;

        const letterFound = checkLetter(button);
      };
    });

    // Run random generator

    let phraseArray = getRandomPhraseAsArray(phraseAnswers);
    console.log(phraseArray);

    addPhrasetoDisplay(phraseArray);

});
