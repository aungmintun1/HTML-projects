const quotes = [
	"Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
	"Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
	"Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got this. - Chantal Sutherland"
];

function generateQuote() {
	const randomNumber = Math.floor(Math.random() * quotes.length);
	document.getElementById('quote').innerHTML = quotes[randomNumber];
}
