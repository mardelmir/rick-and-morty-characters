// Fetch API

const list = document.getElementById('character-list');
let pagina = 'https://rickandmortyapi.com/api/character/?page=1';

function paginacion() {
    fetch(`${pagina}`)
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
}

paginacion();

// Botones prev-next

const pagination = document.getElementById('pagination');

const prev = document.getElementById('prev-page');
const next = document.getElementById('next-page');

next.addEventListener('click', () => {
    fetch(pagina)
        .then((response) => {
            if (!response.ok) {
                throw new Error('La solicitud no fue exitosa')
            }
            return response.json()
        })

        .then((data) => {
            let link = data.info.next;
            pagina = link;
            return pagina;
        }
        )

        .catch((error) => {
            const errorMsg = document.createElement('p')
            errorMsg.textContent = 'Error: no se pudo obtener el contenido';
        });

})
