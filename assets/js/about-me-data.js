const contentData = {
    1: {
        header: "Who I Am",
        content: `
            <p>I'm Rafael Polope, graduated in Multimedia Engineering at the University of Valencia and currently pursuing my Master's Degree in Computer Graphics, Simulation and Virtual Reality at U-TAD in Madrid.</p>
            <p>Passionate about computer graphics and technology, I have a strong background in both theoretical knowledge and practical skills, aiming to apply my expertise in creative and innovative projects.</p>
        `
    },
    2: {
        header: "Skills",
        content: `
            <div class="mt-2 bold subtitle">Programming</div>
            <div class="mt-2 pl-4 bold secondary">Proficient</div>
            <div class="mt-2 pl-5">• C++, OpenGL, GLSL, C#, XR Interaction Toolkit, AR Foudnation, Java, Processing, Python, OpenCV, Primefaces, CSS, XHTML & HTML5.</div>
            <div class="mt-2 pl-4 bold secondary">Experienced</div>
            <div class="mt-2 pl-5">• Javascript, PHP, SQL, Three.js, OpenSceneGraph, Matlab/Octave.</div>

            <div class="mt-2 bold subtitle">Software</div>
            <div class="mt-2 pl-4 bold secondary">Proficient</div>
            <div class="mt-2 pl-5">• Unity, Blender, Git, GitHub, GitLab & SVN.</div>
            <div class="mt-2 pl-4 bold secondary">Experienced</div>
            <div class="mt-2 pl-5">• Unreal, Houdini & 3D Max.</div>

            <div class="mt-2 bold subtitle">Lenguajes</div>
            <div class="mt-2 pl-4 bold secondary">English</div>
            <div class="mt-2 pl-5">• Native.</div>
            <div class="mt-2 pl-4 bold secondary">English</div>
            <div class="mt-2 pl-5">•Conversational (B2).</div>

            <div class="mt-2 bold subtitle">Others</div>
            <div class="mt-2 pl-4">• Computational and proyective geometry, linear algebra, trigonometry, numerical integration.</div>
            <div class="mt-2 pl-4">• Knowledge of 3D graphics, animation and simulation.</div>
            <div class="mt-2 pl-4">• Bases of machine learning.</div>
            <div class="mt-2 pl-4">• Software engineering patterns, principles and methodologies.</div>
            <div class="mt-2 pl-4">• Software testing.</div>
            <div class="mt-2 pl-4">• Knowledge of audio systems.</div>
            <div class="mt-2 pl-4">• Parallel programming and operating systems.</div>
            <div class="mt-2 pl-4">• Projects management.</div>
            <div class="mt-2 pl-4">• Ease in finding solutions to new problems.</div>
        `
    },
    3: {
        header: "Educación",
        content: `
        <div class="mt-2 english">• Pursuing: <span class="bold">Master's in Computer Graphics, Simulation & VR</span> |<span class="secondary"> U-TAD</span></div>
        <div class="mt-2 spansih">• Cursando: <span class="bold">Máster en  Computación Gráfica, Simulación & RV</span> |<span class="secondary"> U-TAD</span></div>
        <div class="mt-2 english">• Graduated in <span class="bold">Multimedia Engineering</span> ( 2017-2021, Average grade: 8,1) |<span class="secondary"> Escola Tècnica Superior d'Enginyeria - Universidad de Valencia</span></div>
        <div class="mt-2 spanish">• Graduado en <span class="bold">Ingeniería Multimedia</span> ( 2017-2021, Average grade: 8,1) |<span class="secondary"> Escola Tècnica Superior d'Enginyeria - Universidad de Valencia</span></div>
        <div class="mt-2">• Technological high school diploma | <span class="secondary">I.E.S. Escultor José Luis Sánchez (2015-2017, Average grade: 9)</span></div>
        <div class="mt-2">• Bachillerato tecnológico |<span class="secondary"> I.E.S. Escultor José Luis Sánchez (2015-2017, Nota media: 9)</span></div>
        `
    },
    4: {
        header: "Experience",
        content: `
            <div class="mt-2">DESIGN AND TECHNICAL INNOVATION SL (02/2021-05/2021)</div>
            <div class="mt-2">Company where I did the curricular internship of the degree at the university.</div>
            <div class="mt-2 bold">Position:</div>
            <div class="mt-2 pl-4">• Internship Junior Programmer.</div>
            <div class="mt-2 bold">Tasks:</div>
            <div class="mt-2 pl-4">• Development of web applications, taking care of both the Frontend and the Backend, including a responsive version for mobile.</div>
            <div class="mt-2 pl-4">• React course carried out during the working period.</div>
            <div class="mt-2 pl-4">• I work with the use of plugins for Frontend.</div>
            <div class="mt-2 bold">Main technologies:</div>
            <div class="mt-2 pl-4">• Javascript, CSS3.</div>
            <div class="mt-2 pl-4">• PHP, with the use of the framework Codeigniter.</div>
            <div class="mt-2 pl-4">• HTML5.</div>
            <div class="mt-2">LÃBERIT (09/2021-Today)</div>
            <div class="mt-2">Company where I currently work as a programmer.</div>
            <div class="mt-2 bold">Position:</div>
            <div class="mt-2 pl-4">• Junior programmer.</div>
            <div class="mt-2 bold">Tasks:</div>
            <div class="mt-2 pl-4">• Development and maintenance of web applications for the Murcian Health System (SMS).</div>
            <div class="mt-2 bold">Work methodology:</div>
            <div class="mt-2 pl-4">• Agile.</div>
            <div class="mt-2 bold">Technology:</div>
            <div class="mt-2 pl-4">• Backend: Java (Spring), Hibernate with JPA and SQL.</div>
            <div class="mt-2 pl-4">• Frontend: JSF with the framework Primefaces.</div>
            <div class="mt-2 pl-4">• Unit tests with JUnit6.</div>
            <div class="mt-2 pl-4">• Platforms: Jenkins, Jira, Trello.</div>
            <div class="mt-2 pl-4">• Version Control: Git (and Gitlab) and SVN.</div>
        `
    },
    5: {
        header: "Proyectos",
        content: `
            <div class="mt-2 subtitle">Proyectos Personales</div>
            <div class="mt-2 pl-4">• Desarrollado varios <span class="bold">proyectos personales</span> relacionados con modelado 3D, animación y desarrollo de juegos, mostrando habilidades en software como Blender, Unity y Unreal Engine.</div>
            <div class="mt-2 subtitle">Contribuciones de Código Abierto</div>
            <div class="mt-2 pl-4">• Contribuí a proyectos de código abierto en los campos de gráficos por computadora y realidad virtual, incluyendo proyectos alojados en GitHub.</div>
            <div class="mt-2 subtitle">Proyectos de Prácticas</div>
            <div class="mt-2 pl-4">• Trabajé en <span class="bold">proyectos de prácticas</span> durante mi tiempo en varias empresas, incluyendo proyectos que involucraban experiencias de realidad virtual, desarrollo web e ingeniería de software.</div>
        `
    }
    
};



/* Rotation of about me section box by buttons*/
function changeContent(data) {
    const contentBox = document.querySelector('#two .content.box.style2');
    
    contentBox.classList.add('fade-out');
    
    setTimeout(function() {
        const header = contentBox.querySelector('header');
        const h2 = header.querySelector('h2');
        h2.textContent = data.header;

        const contentDiv = contentBox.querySelector('div');
        contentDiv.innerHTML = data.content;

        contentBox.classList.remove('fade-out');
    }, 500); 
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