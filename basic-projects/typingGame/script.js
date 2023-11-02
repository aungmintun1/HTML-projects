let words = ['Be the change that you wish to see in the world.', 
'Live out your life in truth and justice, tolerant of those who are neither true nor just.',
 'The greatest glory in living lies not in never falling, but in rising every time we fall',
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."];

let currentIndex = 0;
let currentWordIndex = 0;
let startTime;
let endTime;
let timeTaken;
let timerId;

let wordElement = document.getElementById('word');
let inputElement = document.getElementById('input');
let startButton = document.getElementById('startButton');

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord() {
    let word = getRandomWord();
    wordElement.innerText = word;
    currentIndex = 0;
    inputElement.value = '';
    inputElement.focus();
    startTime = new Date();
    timerId = setInterval(updateTimer, 10);
}

function updateTimer() {
    let currentTime = new Date();
    timeTaken = (currentTime - startTime) / 1000;
    document.getElementById('timer').innerHTML = timeTaken.toFixed(2) + 's';
}

function handleInput() {
    let currentWord = wordElement.innerText;
    let inputValue = inputElement.value;
    
    if (inputValue === currentWord) {
        clearInterval(timerId);
        endTime = new Date();
        timeTaken = (endTime - startTime) / 1000;
        alert(`You typed the quote in ${timeTaken.toFixed(2)} seconds`);
        displayWord();
    } else if (currentWord.startsWith(inputValue)) {
        currentIndex++;
        wordElement.innerHTML = `<span style="color: green">${currentWord.slice(0, currentIndex)}</span>${currentWord.slice(currentIndex)}`;

    } else {
        currentIndex = 0;
        wordElement.innerHTML = `<span style="color: red">${currentWord.slice(0, currentIndex)}</span>${currentWord.slice(currentIndex)}`;
    }
}

startButton.addEventListener('click', displayWord);
inputElement.addEventListener('input', handleInput);