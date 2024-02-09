const contentData = {
    1: {
        header: "Who I Am",
        content: `
            <p>I'm Rafael Polope, graduated in Multimedia Engineering at the University of Valencia and currently pursuing my Master's Degree in Computer Graphics, Simulation and Virtual Reality at U-TAD in Madrid.</p>
            <p>Passionate about computer graphics and technology, I have a strong background in both theoretical knowledge and practical skills, aiming to apply my expertise in creative and innovative projects.</p>
        `
    },
    // 2: {
    //     header: "Habilidades",
    //     content: `
    //         <ul class="skills-list">
    //             <li><span class="bold">Programas 3D:</span> Blender, Unity, Unreal, Houidni, 3DMax, Processing</li>
    //             <li><span class="bold">lenguajes de programación:</span> Java, Python, C, C++, C#, JavaScript, CSS, HTML5, PHP, SQL</li>
    //             <li><span class="bold">Librerías Gráficas:</span> OpenGL (GLSL), WebGL</li>
    //             <li><span class="bold">Frameworks:</span> Bootstrap, Codeigniter, React, Primefaces, Hibernate, Spring, JPA</li>
    //             <li><span class="bold">Metodologías de desarrollo:</span> Scrum</li>
    //             <li><span class="bold">Control de versiones:</span> Git, SVN</li>
    //             <li><span class="bold">Patrones de diseño:</span> MVC, Pooling, Delegación, Singleton, Factory, etc. </li>
    //             <li><span class="bold">Otras habilidades</span></li>
    //             <ul class="skills-list">
    //                 <li>Fuertes conocimeintos de OOP</li>
    //                 <li>TDD</li>
    //                 <li>Graphic Pipeline and Graphic Engines</li>
    //                 <li>Ease in finding solutions to new problems<li>
    //             </ul>
    //         </ul>
    //     `
    // },
    2: {
        header: "Skills",
        content: `
            <div class="post">
                <div class="section" id="programmingSkills">
                    <div class="mt-2 pl-4 textoNegrita secundario">Proficient</div>
                    <div class="mt-2 pl-5">• C++, Python, OpenGL, XHTML y HTML5, CSS.</div>
                    <div class="mt-2 pl-4 textoNegrita secundario">Experienced</div>
                    <div class="mt-2 pl-5">• Java, Javascript, PHP, JSP, Matlab, SQL, Three.js, x3dom, d3.js, OpenSceneGraph, Scikit-learn.</div>
                </div>

                <div class="section" id="software">
                    <div class="mt-2 textoNegrita subtitulo">Software</div>
                    <div class="mt-2 pl-4 textoNegrita secundario">Proficient</div>
                    <div class="mt-2 pl-5">• Houdini, Visual Paradigm, Blender, GIMP, Premiere, Office.</div>
                    <div class="mt-2 pl-4 textoNegrita secundario">Experienced</div>
                    <div class="mt-2 pl-5">• ShotGrid, Nuke, Autodesk Maya, Inkscape, Scribus, After Effects, Audacity, Cubase.</div>
                </div>

                <div class="section" id="otherSkills">
                    <div class="mt-2 textoNegrita subtitulo">Other Skills</div>
                    <div class="mt-2 pl-4">• ICT and mathematical knowledge.</div>
                    <div class="mt-2 pl-4">• Knowledge of 3D techniques, animation and simulation.</div>
                    <div class="mt-2 pl-4">• Bases of machine learning and data mining.</div>
                    <div class="mt-2 pl-4">• Software engineering patterns and methodologies.</div>
                    <div class="mt-2 pl-4">• Knowledge of audio systems.</div>
                    <div class="mt-2 pl-4">• Networks and operating systems.</div>
                    <div class="mt-2 pl-4">• Projects management.</div>
                    <div class="mt-2 pl-4">• Communication theory, digital marketing.</div>
                    <div class="mt-2 pl-4">• Design and creation of multimedia content.</div>
                    <div class="mt-2 pl-4">• Ease in finding solutions to new problems.</div>
                    <div class="mt-2 pl-4">• Native Spanish, high comprehension of English and Catalan / Valencian.</div>
                </div>
            </div>

            <div class="pagination">
                <span class="dot" data-section="programmingSkills" onclick="showSection('programmingSkills')"></span>
                <span class="dot" data-section="software" onclick="showSection('software')"></span>
                <span class="dot" data-section="otherSkills" onclick="showSection('otherSkills')"></span>
                <!-- Agrega más puntos según la cantidad de secciones en la publicación -->
            </div>
        
        `
    },
    3: {
        header: "Educación",
        content: `
            <div class="mt-2">• Cursando: <span class="bold">Máster en Computación Gráfica, Simulación & RV</span> |<span class="secondary"> U-TAD</span></div>
            <div class="mt-2">• Graduado en <span class="bold">Ingeniería Multimedia</span> (2017-2021, Nota media: 8.1) |<span class="secondary"> Universidad de Valencia</span></div>
            <div class="mt-2">• Bachillerato tecnológico |<span class="secondary"> I.E.S. Escultor José Luis Sánchez (2015-2017, Nota media: 9)</span></div>
        `
    },
    4: {
        header: "Cursos",
        content: `
            <div class="mt-2">•<span class="bold">Scrum Developer Professional Certificate (SDPC)</span> |<span class="secondary"> CertiProf</span></div>
            <div class="mt-2">•<span class="bold">INTELIGENCIA ARTIFICIAL APLICADA A LA EMPRESA</span> |<span class="secondary"> EDUCATIC GAP PUE S.L.</span></div>        `
    },
    5: {
        header: "Idiomas",
        content: `
            <div class="mt-2">•<span class="bold">Español</span> |<span class="secondary"> Nativo </span></div>
            <div class="mt-2">•<span class="bold">Inglés</span> |<span class="secondary"> Conversacional</span></div>        `
    },
    6: {
        header: "Experiencia",
        content: `
            <div class="mt-2">• Prácticas de Programador Web Junior (02/2021-05/2021)|<span class="secondary"> Diseño e Innovación, S.L </span></div>
            <div class="pl-4">- Desarrollo de aplicaciones web, tanto Frontend como Backend, incluyendo una versión responsive para móviles.</div>
            <div class="mt-2">• Programmer (09/2021-Presente)|<span class="secondary"> LÃBERIT</div>
            <div class="pl-4">- Desarrollo y mantenimiento de aplicaciones web para el Sistema de Salud Murciano (SMS).</div>
        `
    },
    7: {
        header: "Proyectos",
        content: `
            <div class="mt-2">• Proyectos personales:</div>
            <div class="pl-4">- Desarrollo de varios proyectos personales relacionados con modelado 3D, animación y desarrollo de juegos.</div>
            <div class="pl-4">- Este portfolio.</div>
            <div class="mt-2">• Proyectos en prácticas:</div>
            <div class="pl-4">- Desarrollo de apliación web desde cero ocupándome de las tareas tanto de front-end como de back-end usando diversos plug-ins y framworks, tales como: bootstrap, JQuery o Codeigniter para manejo de BBDD.</div>
            <div class="pl-4">- Desarrollo de apliación en unity con control de modelos en tiempo real mediante gizmos y de cámara para prevención de riesgos laborales.</div>
        `
    }
};

// Show the section of Skills info
function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
  
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.style.display = 'block';
  
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.classList.remove('active');
    });
    const activeDot = document.querySelector(`.dot[data-section="${sectionId}"]`);
    activeDot.classList.add('active');
}
  


// Change the content of Info panel of the 3D Slider
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
let rotationIndex = 0;

prev.addEventListener('click', function(){
    degree += 90;
    rotationIndex ++;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    changeContent(contentData[Math.abs(rotationIndex) % 7 + 1]);
});

next.addEventListener('click', function(){
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    changeContent(contentData[Math.abs(rotationIndex) % 7 + 1]);
});