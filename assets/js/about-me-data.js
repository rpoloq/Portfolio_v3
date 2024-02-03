const contentData = {
    1: {
        header: "Who I Am",
        paragraph1: "I'm Rafael Polope, a Multimedia Engineering graduate from the University of Valencia and a current student in U-TAD's Master's program for Computer Graphics, VR and Simulation in Madrid.",
        paragraph2: "Passionate about computer graphics, I'm eager for a career shift after three years in web development. Proficient in Unity, Blender and Unreal, with programming skills in C++, C#, Java and Python, including libraries like OpenGL and OpenCV. My expertise spans simulation, shaders, video games, animation and XR.",
        paragraph3: "I aspire to craft captivating worlds and immersive experiences, fostering constant learning and improvement. Striving to be a versatile standout professional in computer graphics."
    },
    2: {
        header: "Skills",
        paragraph1: "Proficient in Unity, Blender, and Unreal Engine.",
        paragraph2: "Strong programming skills in C++, C#, Java, and Python.",
        paragraph3: "Familiarity with libraries like OpenGL and OpenCV for computer vision projects."
    },
    3: {
        header: "Projects",
        paragraph1: "Developed interactive VR experiences using Unity for various clients.",
        paragraph2: "Created realistic 3D models and animations with Blender for game development.",
        paragraph3: "Contributed to open-source projects in the fields of computer graphics and virtual reality."
    },
    4: {
        header: "Experience",
        paragraph1: "Worked as a web developer for three years, specializing in front-end development.",
        paragraph2: "Completed internships in software engineering roles, gaining experience in agile development methodologies.",
        paragraph3: "Currently pursuing a Master's degree in Computer Graphics, VR, and Simulation."
    }
};


/* Rotation of about me section box by buttons*/
function changeContent(data) {
    const contentBox = document.querySelector('#two .content.box.style2');
    
    // Aplicar clase para iniciar el fade out
    contentBox.classList.add('fade-out');
    
    // Esperar un breve momento para que se complete el fade out
    setTimeout(function() {
        // Obtener el encabezado existente
        const header = contentBox.querySelector('header');
        // Actualizar el texto del encabezado
        const h2 = header.querySelector('h2');
        h2.textContent = data.header;

        // Obtener el div de contenido existente
        const contentDiv = contentBox.querySelector('div');
        // Limpiar contenido anterior
        contentDiv.innerHTML = '';

        // Recorrer los párrafos del objeto data y agregarlos al div de contenido existente
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
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});

next.addEventListener('click', function(){
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    // Cambiar el contenido del div content box según la cara visible
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});