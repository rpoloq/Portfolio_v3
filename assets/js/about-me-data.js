const contentData = {
    1: {
        header: "Header 1",
        paragraph1: "Paragraph 1 for face 1",
        paragraph2: "Additional paragraph for face 1"
    },
    2: {
        header: "Header 2",
        paragraph1: "Paragraph 1 for face 2",
        paragraph2: "Additional paragraph for face 2"
    },
    3: {
        header: "Header 3",
        paragraph1: "Paragraph 1 for face 3",
        paragraph2: "Additional paragraph for face 3"
    },
    4: {
        header: "Header 4",
        paragraph1: "Paragraph 1 for face 4",
        paragraph2: "Additional paragraph for face 4"
    }
};


/* Rotation of about me section box by buttons*/
/* Función para cambiar el contenido del contenedor con efecto de fundido */
function changeContent(data) {
    const contentBox = document.querySelector('#two .content.box.style2');
    
    // Aplicar clase para iniciar el fade out
    contentBox.classList.add('fade-out');
    
    // Esperar un breve momento para que se complete el fade out
    setTimeout(function() {
        // Limpiar contenido anterior
        contentBox.innerHTML = '';

        // Crear encabezado
        const header = document.createElement('header');
        const h2 = document.createElement('h2');
        const contentDiv = document.createElement('div')
        h2.textContent = data.header;
        header.appendChild(h2);
        contentBox.appendChild(header);
        contentBox.appendChild(contentDiv);

        // Recorrer los párrafos del objeto data
        for (let i = 1; data[`paragraph${i}`]; i++) {
            const paragraph = document.createElement('p');
            paragraph.textContent = data[`paragraph${i}`];
            contentDiv.appendChild(paragraph);
        }

        // Quitar clase para finalizar el fade out e iniciar el fade in
        contentBox.classList.remove('fade-out');
    }, 500); // Tiempo suficiente para que se complete el fade out (0.5 segundos)
}


// Rotation of about me section box by buttons
let prev = document.querySelector('.nav-previous');
let next = document.querySelector('.nav-next');
let box = document.querySelector('.slider .box');
let degree = 0;

prev.addEventListener('click', function(){
    degree += 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(70px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});

next.addEventListener('click', function(){
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(70px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});