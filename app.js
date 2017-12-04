const citacion = document.getElementById('citacion');
const persona = document.getElementById('persona');
const tweetButton = document.getElementById('tweet');
const otraButton = document.getElementById('otra');

let url = "https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=";
let data = [];
let name;
let content;
let index = 0;
let object;

function getCitacion () {
    object = data[index];
    name = `- <cite>${object.title}</cite>`;
    content = object.content;
    content = content.substr(3, (content.length - 10));
    content = `"${content}"`;
    persona.innerHTML = name;
    citacion.innerHTML = content;
}
let request = function () {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if(xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText);
            getCitacion();
        } 
    };
    xhr.open('GET', url , true);
    xhr.send();
}
request();

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











 




