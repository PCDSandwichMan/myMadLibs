const missingInput = 'Please fill all input options.';

let storyOne =
  'A vacation is when you take a trip to some ~ place with your ~ family. Usually you go to some place that is near a/an ~ or up on a/an ~ . A good vacation place is one where you can ride ~ or play ~ or go hunting for ~ . I like to spend my time  ~ or ~ . When parents go on a vacation, they spend their time eating three ~ a day, and fathers play golf, and mothers sit around ~ . Last summer, my little brother fell in a/an ~ and got poison ~  all over his ~ . My family is going to go to (the) ~ , and I will practice ~ . Parents need vacations more than kids because parents are always very ~ and because they have to work ~ hours every day all year making enough ~ to pay for the vacation.';

// ?  Initializing variables
let madLibTextArray = storyOne.split(' '); // split current
let userInput = []; // user input

// ? for converting userInput below for story (readability)
const toUpper = function(x) {
  return x.toUpperCase().bold();
};

// ? Stores user input in an array
function inputArrayGen() {
  for (i = 1; i <= 19; ++i) {
    userInput[i - 1] = document.getElementById('i' + i).value;
  }
}
// ? Replaces the tildes with user input
function createMadLib() {
  let arrIndex = 0;
  let userInputLoop = userInput.map(toUpper);
  for (i = 1; i <= madLibTextArray.length; ++i) {
    let matchIndex = madLibTextArray.indexOf('~');
    madLibTextArray[matchIndex] = userInputLoop[arrIndex];
    arrIndex++;
  }
  document.getElementById('storyText').innerHTML = madLibTextArray.join(' ');
}

// ? Check for edges case if user does not enter input
function madLibGenerator() {
  inputArrayGen();
  //TODO fix the conditional to make sure all are filled
  window.scrollTo(0, 320);
  if (userInput.includes('')) {
    document.getElementById('storyText').innerHTML = missingInput;
    document.getElementById('questionText').classList.add('hide');
    document.getElementById('questionButtons').classList.add('hide');
    document.getElementById('reset').classList.remove('hide');
    document.getElementById('storyText').classList.remove('hide');
  } else {
    createMadLib();
    document.getElementById('storyText').classList.remove('hide');
    document.getElementById('reset').classList.remove('hide');
    document.getElementById('questionText').classList.add('hide');
    document.getElementById('questionButtons').classList.add('hide');
  }
}

function resetReload() {
  window.scrollTo(0, 0);
  window.location.reload();
}
// ! RANDOMIZE BUTTON

function generateRandomInput() {
  for (i = 1; i <= 19; ++i) {
    let temp = document.getElementById('i' + i);
    let listItem = temp.name;
    let randomArrLength = randomInput[listItem].length;
    let randomIndex = Math.floor(Math.random() * randomArrLength);
    //? Takes a random item from other file array and inputs
    temp.value = randomInput[listItem][randomIndex].toUpperCase();
  }
}
