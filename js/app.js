// *** Load the page *** //

document.addEventListener("DOMContentLoaded", () =>  {

  // initial variables for the page

  const querty = document.getElementById("qwerty");
  const phrase = document.getElementById("phrase");
  const resetButton = document.querySelector(".btn__reset");
  const overlay = document.querySelector("#overlay");
  // const buttons = document.getElementsByTagName('button');

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

    // Check letter functions

  querty.addEventListener('click', (e) => {

    let currentLetter = e.target;
    let letterClass = document.getElementsByClassName('letter');

    currentLetter.className += 'chosen';
    currentLetter.disabled = true;

    console.log('here');

    function checkLetter() {

      for (let i = 0; i < letterClass[i].length; i++){
        console.log('here again');
        if (currentLetter.value === letterClass[i].value) {
          let answerLetter = letterClass[i].className += 'show';
          return answerLetter;
        } else {
          return null;
        }
      }
    };
    checkLetter();
  });

    // Run random generator

    let phraseArray = getRandomPhraseAsArray(phraseAnswers);
    console.log(phraseArray);

    addPhrasetoDisplay(phraseArray);

});
