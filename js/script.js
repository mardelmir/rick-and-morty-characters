// Fetch API

const list = document.getElementById('character-list');

fetch('https://rickandmortyapi.com/api/character/')
    .then((response) => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa')
        }
        return response.json()
    })

    .then((data) => {
        const array = data.results;

        array.filter((element) => {
            let item = document.createElement('li');
            list.appendChild(item);

            let fig = document.createElement('figure');
            item.appendChild(fig);

            let img = document.createElement('img');
            img.src = element.image;
            img.alt = `Image of ${element.name}`;
            img.classList.add('picture')
            fig.appendChild(img)

            let figcap = document.createElement('figcaption');
            figcap.innerHTML = `<span class="bold">Name:</span> ${element.name} <br /> <span class="bold">Species:</span> ${element.species}`;
            fig.appendChild(figcap)

        })
    })

    .catch((error) => {
        const errorMsg = document.createElement('p')
        errorMsg.textContent = 'Error: no se pudo obtener el contenido';
    });
