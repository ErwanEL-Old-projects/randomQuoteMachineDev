tweetButton.addEventListener('click', () => {
    let textToTweet = citacion.innerText + " " + persona.innerText;
    if (textToTweet.length > 280) {
        alert('Demasiado largo, no se puede twitear boludo');
    } else {
        var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(textToTweet);
        window.open(twtLink,'_blank');
    }  
});

otraButton.addEventListener('click', () => {
    if(index === data.length -1) {
        index = 0;
        request();
    } else {
        index += 1;
        getCitacion ();
    }
});