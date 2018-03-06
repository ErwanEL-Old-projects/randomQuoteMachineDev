const citacion = document.getElementById('citacion'),
      persona = document.getElementById('persona'),
      tweetButton = document.getElementById('tweet'),
    otraButton = document.getElementById('otra');

let url = "https://big-okra.glitch.me/https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=10&callback=",
    data = [],
    name,
    content,
    index = 0,
    object;