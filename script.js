//array of inspirational quotes
const quotes = [
    "The best way to predict the future is to invent it.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "The future belongs to those who believe in the beauty of their dreams.", 
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "You are never too old to set another goal or to dream a new dream.",
    "The only way to do great work is to love what you do.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "Do not wait; the time will never be 'just right.'",
    "Act as if what you do makes a difference. It does.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Dream bigger. Do bigger.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Do something today that your future self will thank you for.",
    "Little things make big days.",
    "The key to success is to focus on goals, not obstacles.",
    "Dream it, believe it, build it.",
    "Success is what happens after you have survived all your mistakes.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Go confidently in the direction of your dreams. Live the life you have imagined.",
    "Turn your wounds into wisdom.",
    "Hustle in silence and let your success make the noise.",
    "The best way to predict your future is to create it.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "The biggest adventure you can take is to live the life of your dreams.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "You only live once, but if you do it right, once is enough." ,
    "To succeed in life, you need three things: a wishbone, a backbone, and a funny bone.",
    "Believe in your dreams. They were given to you for a reason.",
    "Start where you are. Use what you have. Do what you can.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Take risks: If you win, you will be happy; if you lose, you will be wise.",
    "Doubt kills more dreams than failure ever will.",
    "Strive for progress, not perfection.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "Challenges are what make life interesting. Overcoming them is what makes life meaningful." ,
    "Your life does not get better by chance. It gets better by change.",
    "Work hard in silence, let your success be your noise." ,
    "The way to get started is to quit talking and begin doing.",
    "The only place where success comes before work is in the dictionary.",
    "Perseverance is not a long race; it is many short races one after the other.",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful."
];

//function to generate a random quote
function generateQuote() {
    //get a random index from the quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    //display the quote in the quote element
    document.getElementById('quote').textContent = quotes[randomIndex];
}

//add event listener to the button
document.getElementById('newQuoteBtn').addEventListener('click', generateQuote);

