const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const h2 = document.querySelector('h2');
const p = document.querySelector('.content');
const img = document.querySelector('img');
const url = `https://api.chucknorris.io/jokes/random`;

btn.addEventListener('click', () => {
    loadJoke(url);
});

function loadJoke(url) {
    const xhr = new XMLHttpRequest();
    console.log(xhr);

    xhr.open('GET', url);
    console.log(xhr);

    xhr.onreadystatechange = () => {
        if (xhr.status === 200 && xhr.readyState === 4) {
            console.log(xhr);
            const resObject = JSON.parse(xhr.responseText);
            console.log(resObject);
            img.src = resObject.icon_url;
            container.appendChild(img);
            h2.innerText = `Joke is created on - ${new Date(resObject.created_at).toDateString()}`;
            container.appendChild(h2);
            
            p.innerText = resObject.value;
            container.appendChild(p);
        }
    }
    xhr.send();
}