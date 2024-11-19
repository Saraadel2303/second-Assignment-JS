var quotes = ["“Be yourself; everyone else is already taken.”" , "“Be the change that you wish to see in the world.”" , "“We accept the love we think we deserve.”" , "“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”" , "“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”" , "“It is never too late to be what you might have been.”" , "“Everything you can imagine is real.”" , "“Life isn't about finding yourself. Life is about creating yourself.”" , "“Success is not final, failure is not fatal: it is the courage to continue that counts.”" , "“When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.”"  ];
var authors = ["― Oscar Wilde" , "― Mahatma Gandhi" , "― Stephen Chbosky, The Perks of Being a Wallflower" , "― Albert Einstein" , "― Bill Keane" , "― George Eliot" , "― Pablo Picasso" , "― George Bernard Shaw" , "― Winston S. Churchill" , "― Helen Keller"  ];

var lastIndex=-1;

function getRandomQuote(){
    var random=Math.floor(Math.random()*quotes.length);
    if(random===lastIndex){
    random+=random %quotes.length;
    }
    lastIndex=random;
    return { quote: quotes[random], author: authors[random] };
}

function generateQuote() {
    var quoteElement = document.getElementById("quote");
    var authorElement = document.getElementById("author");
    var randomQuote = getRandomQuote(); 
    quoteElement.textContent = randomQuote.quote; 
    authorElement.textContent = randomQuote.author; 
}
    