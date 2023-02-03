const quotes = [
  {
    quote:
      "The simple act of paying positive attention to people has a great deal to do with productivity.",
    author: "Tom Peters",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote: "Whoever is happy will make others happy too.",
    author: "Anne Frank",
  },
  {
    quote: "Life is either a daring adventure or nothing at all.",
    author: "Helen Keller",
  },
  {
    quote:
      "In this life we cannot do great things. We can only do small things with great love.",
    author: "Mother Teresa",
  },
  {
    quote:
      "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
    author: "Oscar Wilde",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
    author: "Steve Jobs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.round(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
