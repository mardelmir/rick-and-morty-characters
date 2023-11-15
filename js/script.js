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
            list. appendChild(item)

            let card = document.createElement('figure');
            item.appendChild(card);

            let info = document.createElement('figcaption');
            card.appendChild(info);

            let name = element.name;
            let species = element.species;
            info.innerHTML = `<b>Nombre:</b> ${name}`
            
            let img = document.createElement('img');
            img.src = element.image;
            img.alt = `Imagen de ${name}`;
            
            card.appendChild(img);
            img.insertAdjacentElement('afterend',info )

        })})
    .catch((error) => {
        character.inner
    })
    

        
        
        