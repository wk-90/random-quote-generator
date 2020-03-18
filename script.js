// Animating Twitt 'a' tag
var a = document.querySelector('a');
var i = document.querySelector('i');

a.addEventListener('mouseover', function(){            
    i.style.color = "rgb(58, 169, 233)";
    i.style.background = "#fff";
})

a.addEventListener('mouseout', function(){
    i.style.color = "#fff";
    i.style.background = "rgb(58, 169, 233)";
})


// main variables
var tweetLink = "https://twitter.com/intent/tweet?text=";
var quoteUrl = "http://quotes.stormconsultancy.co.uk/random.json";

// Generating quote
function getQuote1(){
    $.ajax({
        method: 'GET',
        url: quoteUrl,
        success: function(res) {
            var quoteText = res.quote;
            var quoteAuthor = res.author;

            // If quote author is an empty string then fill author field as a "Unknown author"
            if (!quoteAuthor.length){
                quoteAuthor = "Unknown author";
            }

            var tweetText = "Quote of the day: " + quoteText + " Author: " + quoteAuthor;
            // If quote exceed 280 signs then generate tweet once again
            if (tweetText.length > 280) {
                getQuote();
                // If it's ok show quote and add link to generated tweet
            } else {  
                var tweet = tweetLink + encodeURIComponent(tweetText); // full url to generated tweet
                $('.quote').text(quoteText);
                $('.author').text("Author: " + quoteAuthor);
                $('.tweet').attr('href', tweet)
            }
            
        }
    })
}

// Quote visible afted page is loaded
getQuote1();
// Loading quote after button click 
$('.trigger').click(function() {
    getQuote1();
})
