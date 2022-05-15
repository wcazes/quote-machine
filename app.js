var quotes = [
    {
        quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote:"The way to get started is to quit talking and begin doing.",
        author:"Walt Disney"
    },
    {
        quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        author:"Steve Jobs"
    },
    {
        quote:"If life were predictable it would cease to be life, and be without flavor",
        author:"Eleanor Roosevelt"
    },
    {
        quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        author:"Oprah Winfrey"
    },
    {
        quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author:"James Cameron"
    },
    {
        quote:"Life is what happens when you're busy making other plans.",
        author:"John Lennon"
    },
    ];
var length = quotes.length;
var author = document.querySelector("#author");
var text = document.querySelector("#text");
var tweet = document.querySelector("#tweet");
var q = getRandomQuote();
text.textContent = quotes[q].quote;
author.textContent = quotes[q].author;

function onTweet(){
    var link = "https://twitter.com/intent/tweet?text=" + text.textContent + " - " + author.textContent;
    link.replace(/ /g,"%20");
    tweet.href = link;
}

function getRandomQuote(){
    return Math.floor(Math.random() * length);
}

function updateQuote(){
    window.event.preventDefault()
    var n = getRandomQuote()
    text.textContent = quotes[n].quote;
    author.textContent = quotes[n].author;
}