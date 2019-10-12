const quotes = [{
quote: 'Earth provides enough to satisfy every man’s needs, but not every man’s greed.',
author: '- Mahatma Gandhi'
},
{
quote: 'The best way to find yourself is to lose yourself in the service of others.',
author: '– Mahatma Gandhi'
},
{
quote: 'Freedom is not worth having if it does not include the freedom to make mistakes.',
author: '– Mahatma Gandhi'
},
{
quote: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
author: '– Mahatma Gandhi'
},
{
quote: 'A man is but a product of his thoughts. What he thinks he becomes.',
author: '– Mahatma Gandhi'
},
{
quote: 'Happiness is when what you think, what you say, and what you do are in harmony.',
author: '– Mahatma Gandhi'
}];

let getQuotes = document.querySelector('blockquote');
let getButton = document.querySelector('.butn');
let getPEl = document.querySelector('p');
let onButtonClick = function () {
    getQuotes.textContent = quotes[Math.floor(Math.random() * quotes.length)].quote;
    getPEl.textContent = quotes[Math.floor(Math.random() * quotes.length)].author;
};
getButton.addEventListener('click', onButtonClick);
