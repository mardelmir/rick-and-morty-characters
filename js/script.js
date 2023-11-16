
const list = document.getElementById('character-list');

const prevBtn = document.getElementById('prev-page');
const nextBtn = document.getElementById('next-page');

let page = 0;
let url = `https://rickandmortyapi.com/api/character/?page=${page}`;

const character = (url) => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa')
            }
            return response.json();
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
                fig.appendChild(img);

                let figcap = document.createElement('figcaption');
                figcap.innerHTML = `<span>Name:</span> ${element.name} <br /> <span>Species:</span> ${element.species}`; // Se que esta línea es horrenda, pero no he sabido hacerlo de otra manera.
                fig.appendChild(figcap);
            })
        })
        .catch((error) => {
            const errorMsg = document.createElement('li');
            list.appendChild(errorMsg);
            errorMsg.textContent = 'Error: no se pudo obtener el contenido';
        });
}

prevBtn.addEventListener('click', () => {
    if (page <= 0) {
        list.innerHTML = '<li class="prev-next">No hay más contenido para mostrar</li>';
    } else {
        list.innerHTML = '';
        page--;
        url = `https://rickandmortyapi.com/api/character/?page=${page}`;
        return character(url);
    }
})

nextBtn.addEventListener('click', () => {
    if (page > 41) {
        list.innerHTML = '<li class="prev-next">No hay más contenido para mostrar</li>';
    } else {
        list.innerHTML='';
        page++;
        url = `https://rickandmortyapi.com/api/character/?page=${page}`;
        return character(url);
    }
})

character(url);