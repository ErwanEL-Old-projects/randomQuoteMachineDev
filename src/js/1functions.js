const getCitacion = () => {
    object = data[index];
    name = `- <cite>${object.title}</cite>`;
    content = object.content;
    content = content.substr(3, (content.length - 8));
    content = `"${content}"`;
    persona.innerHTML = name;
    citacion.innerHTML = content;
};

const request = () => {
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