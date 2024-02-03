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
function changeContent(data) {
    const contentBox = document.querySelector('#two .content.box.style2');

    // Verificar si contentBox y contentDiv existen
    if (contentBox) {
        let contentDiv = contentBox.querySelector('div');

        // Crear contentDiv si no existe
        if (!contentDiv) {
            contentDiv = document.createElement('div');
            contentBox.appendChild(contentDiv);
        } else {
            // Limpiar contenido del contentDiv
            contentDiv.innerHTML = '';
        }

        // Crear o actualizar encabezado
        let header = contentBox.querySelector('header');
        if (!header) {
            header = document.createElement('header');
            contentBox.prepend(header);
        }
        let h2 = header.querySelector('h2');
        if (!h2) {
            h2 = document.createElement('h2');
            header.appendChild(h2);
        }
        h2.textContent = data.header;

        // Recorrer los párrafos del objeto data
        for (let i = 1; data[`paragraph${i}`]; i++) {
            const paragraph = document.createElement('p');
            paragraph.textContent = data[`paragraph${i}`];
            contentDiv.appendChild(paragraph);
        }
    }
}

// Rotation of about me section box by buttons
let prev = document.querySelector('.nav-previous');
let next = document.querySelector('.nav-next');
let box = document.querySelector('.slider .box');
let degree = 0;

prev.addEventListener('click', function(){
    degree += 90;
    if (degree > 360) degree -= 360; // Reset degree if it exceeds 360 degrees
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(70px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});

next.addEventListener('click', function(){
    degree -= 90;
    if (degree < -360) degree += 360; // Reset degree if it goes below -360 degrees
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(70px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});