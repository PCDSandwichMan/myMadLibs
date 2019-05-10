// TODO add import for randomizer
const missingInput = 'Please fill all input options.';

let storyOne =
  'A vacation is when you take a trip to some ~ place with your ~ family. Usually you go to some place that is near a/an ~ or up on a/an ~ . A good vacation place is one where you can ride ~ or play ~ or go hunting for ~ . I like to spend my time  ~ or ~ . When parents go on a vacation, they spend their time eating three ~ a day, and fathers play golf, and mothers sit around ~ . Last summer, my little brother fell in a/an ~ and got poison ~  all over his ~ . My family is going to go to (the) ~ , and I will practice ~ . Parents need vacations more than kids because parents are always very ~ and because they have to work ~ hours every day all year making enough ~ to pay for the vacation.';

// ?  Initializing variables
let madLibTextArray = storyOne.split(' '); // split current
let userInput = []; // user input

// ? Stores user input in an array
function inputArrayGen() {
  for (i = 1; i <= 19; ++i) {
    userInput[i - 1] = document.getElementById('i' + i).value;
  }
}

// ? Replaces the tildas with user input
function createMadLib() {
  let arrIndex = 0;
  for (i = 1; i <= madLibTextArray.length; ++i) {
    let matchIndex = madLibTextArray.indexOf('~');
    madLibTextArray[matchIndex] = userInput[arrIndex];
    arrIndex++;
  }
  document.getElementById('storyText').innerHTML = madLibTextArray.join(' ');
}

console.log(userInput);
// ? Check for edges case if user does not enter input
function madLibGenerator() {
  inputArrayGen();
  if (userInput[0] === '') {
    document.getElementById('storyText').innerHTML = missingInput;
    document.getElementById('questionText').classList.add('hide');
    document.getElementById('reset').classList.remove('hide');
    document.getElementById('storyText').classList.remove('hide');
  } else {
    createMadLib();
    document.getElementById('storyText').classList.remove('hide');
    document.getElementById('reset').classList.remove('hide');
    document.getElementById('questionText').classList.add('hide');
  }
}

// ! TEST / RANDOMIZE BUTTONS
function generateRandom() {
  let spot = 1;
  for (i = 1; i <= 19; ++i) {
    document.getElementById('i' + i).value = 'TEST' + spot;
    ++spot;
  }
}

// function generateRandomInput() {
//   let spot = 1;
//   for (i = 1; i <= 19; ++i) {
//     document.getElementById('i' + i).value = 'TEST' + spot;

//     ++spot;
//   }
// }
