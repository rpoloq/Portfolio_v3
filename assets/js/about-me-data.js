const contentData = {
    spanish: {
        0: {
            header: "Quien soy",
            image: "images/about-me/yo.jpg",
            content: `
            <p>Soy Rafael Polope, graduado en Ingeniería Multimedia en la Universidad de Valencia y actualmente cursando mi Master en Gráficos por Computadora, Simulación y Realidad Virtual en U-TAD en Madrid.</p>
            <p>Apasionado por los gráficos por computadora y la tecnología, tengo una sólida formación tanto en conocimientos teóricos como en habilidades prácticas, con el objetivo de aplicar mi experiencia en proyectos creativos e innovadores.</p>`
        },
        1: {
            header: "Habilidades",
            image: "images/about-me/skills.jpg",
            content: `
                <div id="skills">
                    <div class="section" id="programmingSkills">
                        <div class="mt-2 bold subtitle">Lenguajes de Programación</div>
                        <div class="mt-2 pl-4 bold secondary">Avanzado</div>
                        <div class="mt-2 pl-5">• C++, C#, Java, Python, OpenGL, GLSL, XHTML y HTML5, Primefaces, CSS.</div>
                        <div class="mt-2 pl-4 bold secondary">Intermedio</div>
                        <div class="mt-2 pl-5">• Javascript, Three.js, WebGL, PHP, JSP, Matlab, SQL, Hibernate, JPA.</div>
                        <div class="mt-2 pl-4 bold secondary">Básico</div>
                        <div class="mt-2 pl-5">• x3dom, d3.js, OpenSceneGraph.</div>
                    </div>
    
                    <div class="section" id="software" style="display: none">
                        <div class="mt-2 bold subtitle">Software</div>
                        <div class="mt-2 pl-4 bold secondary">Avanzado</div>
                        <div class="mt-2 pl-5">• Blender, Unity, Processing, Visual Paradigm.</div>
                        <div class="mt-2 pl-4 bold secondary">Intermedio</div>
                        <div class="mt-2 pl-5">• Unreal, XR Interaction Toolkit, AR Foundation, Vuforia.</div>
                        <div class="mt-2 pl-4 bold secondary">Básico</div>
                        <div class="mt-2 pl-5">• Houdini, 3DMax.</div>
                    </div>
    
                    <div class="section" id="lenguages" style="display: none">
                        <div class="mt-2 bold subtitle">Idiomas</div>
                        <div class="mt-2 pl-4 bold">• Español | <span class="secondary">Nativo</span></div>
                        <div class="mt-2 pl-4 bold">• Inglés  | <span class="secondary">Intermedio</span></div>
                    </div>
    
                    <div class="section" id="mates" style="display: none">
                        <div class="mt-2 bold subtitle">Conocimientos matemáticos</div>
                        <div class="mt-2 pl-4">• Álgebra lineal y vectorial.</div>
                        <div class="mt-2 pl-4">• Geometría proyetiva y computacional.</div>
                        <div class="mt-2 pl-4">• Geometría diferencial.</div>
                        <div class="mt-2 pl-4">• Integración numérica.</div>
                        <div class="mt-2 pl-4">• Probabilidad y estadística.</div>
                        <div class="mt-2 pl-4">• Análisis de implementación de algoritmos de árboles y grafos.</div>
                        <div class="mt-2 pl-4">• Análisis de costes de algoritmos.</div>
                        <div class="mt-2 pl-4">• Estudio de algoritmos de compresión como el JPEG.</div>
                    </div>
    
                    <div class="section" id="otherSkills" style="display: none">
                        <div class="mt-2 bold subtitle">Otras habilidades</div>
                        <div class="mt-2 pl-4">• Conocimientos de técnicas 3D, animación y simulación.</div>
                        <div class="mt-2 pl-4">• Fundamentos de IA y aprendizaje automático.</div>
                        <div class="mt-2 pl-4">• Patrones y metodologías de ingeniería de software.</div>
                        <div class="mt-2 pl-4">• Conocimientos de sistemas de audio.</div>
                        <div class="mt-2 pl-4">• Redes y sistemas operativos.</div>
                        <div class="mt-2 pl-4">• Gestión de proyectos.</div>
                        <div class="mt-2 pl-4">• Diseño y creación de contenido multimedia.</div>
                        <div class="mt-2 pl-4">• Facilidad para encontrar soluciones a nuevos problemas.</div>
                    </div>
                </div>    
                <div class="pagination">
                    <span class="dot active" data-section="programmingSkills" onclick="showSection('programmingSkills')"></span>
                    <span class="dot" data-section="software" onclick="showSection('software')"></span>
                    <span class="dot" data-section="lenguages" onclick="showSection('lenguages')"></span>
                    <span class="dot" data-section="mates" onclick="showSection('mates')"></span>
                    <span class="dot" data-section="otherSkills" onclick="showSection('otherSkills')"></span>
                    <!-- Agrega más puntos según la cantidad de secciones en la publicación -->
                </div>    
            `
        },
        2: {
            header: "Educación",
            image: "images/about-me/education.webp",
            content: `
                <div class="mt-2">• Cursando: <span class="bold">Máster en Computación Gráfica, Simulación & RV</span> |<span class="secondary"> U-TAD</span></div>
                <div class="mt-2">• Graduado en <span class="bold">Ingeniería Multimedia</span> (2017-2021, <strong class="secondary">Nota media: 8.1</strong>) | Universidad de Valencia</div>
                <div class="mt-2">• Bachillerato tecnológico | I.E.S. Escultor José Luis Sánchez (2015-2017, <strong class="secondary">Nota media: 9</strong>)</div>
            `
        },
        3: {
            header: "Experiencia",
            image: "images/about-me/work-exp.avif",
            content: `
                <div class="mt-2">•<span class="bold">Prácticas de Programador Web Junior (02/2021-05/2021)<span class="bold"> |<span class="secondary"> Diseño e Innovación, S.L </span></div>
                <div class="pl-4">- Desarrollo de aplicaciones web, tanto Frontend como Backend, incluyendo una versión responsive para móviles.</div>
                <div class="mt-2">•<span class="bold">Programador (09/2021-Presente)<span class="bold">|<span class="secondary"> LÃBERIT</div>
                <div class="pl-4">- Desarrollo y mantenimiento de aplicaciones web para el Sistema de Salud Murciano (SMS).</div>
            `
        },
        4: {
            header: "Cursos",
            image: "images/about-me/cursos.jpg",
            content: `
                <div class="mt-2">•<span class="bold">SCRUM DEVELOPER PROFFESIONAL CERTIFICATE (SDPC)</span> |<span class="secondary"> CERTIPROF</span></div>
                <div class="mt-2">•<span class="bold">INTELIGENCIA ARTIFICIAL APLICADA A LA EMPRESA</span> |<span class="secondary"> EDUCATIC GAP PUE S.L.</span></div>        `
        },
        5: {
            header: "Proyectos",
            image: "images/about-me/projects.webp",
            content: `
                <div class="mt-2">• <span class="bold">Proyectos personales:<span class="bold"></div>
                <div class="pl-4">- Desarrollo de varios proyectos personales relacionados con modelado 3D, animación y desarrollo de juegos.</div>
                <div class="pl-4">- Este portfolio.</div>
                <div class="mt-2">• <span class="bold">Proyectos en prácticas:<span class="bold"></div>
                <div class="pl-4">- Desarrollo de apliación web desde cero ocupándome de las tareas tanto de front-end como de back-end usando diversos plug-ins y framworks, tales como: bootstrap, JQuery o Codeigniter para manejo de BBDD.</div>
                <div class="pl-4">- Desarrollo de apliación en unity con control de modelos en tiempo real mediante gizmos y de cámara para prevención de riesgos laborales.</div>
            `
        }
    },
    english:
    {
        0: {
            header: "Who I Am",
            image: "images/about-me/yo.jpg",
            content: `
                <p>I'm Rafael Polope, graduated in Multimedia Engineering at the University of Valencia and currently pursuing my Master's Degree in Computer Graphics, Simulation and Virtual Reality at U-TAD in Madrid.</p>
                <p>Passionate about computer graphics and technology, I have a strong background in both theoretical knowledge and practical skills, aiming to apply my expertise in creative and innovative projects.</p>
            `
        },
        1: {
            header: "Skills",
            image: "images/about-me/skills.jpg",
            content: `
                <div id="skills">
                    <div class="section" id="programmingSkills">
                        <div class="mt-2 bold subtitle">Programming Languages</div>
                        <div class="mt-2 pl-4 bold secondary">Advanced</div>
                        <div class="mt-2 pl-5">• C++, C#, Java, Python, OpenGL, GLSL, XHTML and HTML5, Primefaces, CSS.</div>
                        <div class="mt-2 pl-4 bold secondary">Intermediate</div>
                        <div class="mt-2 pl-5">• Javascript, Three.js, WebGL, PHP, JSP, Matlab, SQL, Hibernate, JPA.</div>
                        <div class="mt-2 pl-4 bold secondary">Basic</div>
                        <div class="mt-2 pl-5">• x3dom, d3.js, OpenSceneGraph.</div>
                    </div>
    
                    <div class="section" id="software" style="display: none">
                        <div class="mt-2 bold subtitle">Software</div>
                        <div class="mt-2 pl-4 bold secondary">Advanced</div>
                        <div class="mt-2 pl-5">• Blender, Unity, Processing, Visual Paradigm.</div>
                        <div class="mt-2 pl-4 bold secondary">Intermediate</div>
                        <div class="mt-2 pl-5">• Unreal, XR Interaction Toolkit, AR Foundation, Vuforia.</div>
                        <div class="mt-2 pl-4 bold secondary">Basic</div>
                        <div class="mt-2 pl-5">• Houdini, 3DMax.</div>
                    </div>
    
                    <div class="section" id="languages" style="display: none">
                        <div class="mt-2 bold subtitle">Languages</div>
                        <div class="mt-2 pl-4 bold">• Spanish | <span class="secondary">Native</span></div>
                        <div class="mt-2 pl-4 bold">• English  | <span class="secondary">Intermediate</span></div>
                    </div>
    
                    <div class="section" id="math" style="display: none">
                        <div class="mt-2 bold subtitle">Mathematical Knowledge</div>
                        <div class="mt-2 pl-4">• Linear and vector algebra.</div>
                        <div class="mt-2 pl-4">• Projective and computational geometry.</div>
                        <div class="mt-2 pl-4">• Differential geometry.</div>
                        <div class="mt-2 pl-4">• Numerical integration.</div>
                        <div class="mt-2 pl-4">• Probability and statistics.</div>
                        <div class="mt-2 pl-4">• Analysis of implementation of tree and graph algorithms.</div>
                        <div class="mt-2 pl-4">• Analysis of algorithm costs.</div>
                        <div class="mt-2 pl-4">• Study of compression algorithms like JPEG.</div>
                    </div>
    
                    <div class="section" id="otherSkills" style="display: none">
                        <div class="mt-2 bold subtitle">Other Skills</div>
                        <div class="mt-2 pl-4">• Knowledge of 3D techniques, animation and simulation.</div>
                        <div class="mt-2 pl-4">• Basics of AI and machine learning.</div>
                        <div class="mt-2 pl-4">• Software engineering patterns and methodologies.</div>
                        <div class="mt-2 pl-4">• Knowledge of audio systems.</div>
                        <div class="mt-2 pl-4">• Networks and operating systems.</div>
                        <div class="mt-2 pl-4">• Project management.</div>
                        <div class="mt-2 pl-4">• Design and creation of multimedia content.</div>
                        <div class="mt-2 pl-4">• Ease in finding solutions to new problems.</div>
                    </div>
                </div>    
                <div class="pagination">
                    <span class="dot active" data-section="programmingSkills" onclick="showSection('programmingSkills')"></span>
                    <span class="dot" data-section="software" onclick="showSection('software')"></span>
                    <span class="dot" data-section="languages" onclick="showSection('languages')"></span>
                    <span class="dot" data-section="math" onclick="showSection('math')"></span>
                    <span class="dot" data-section="otherSkills" onclick="showSection('otherSkills')"></span>
                    <!-- Add more points according to the number of sections in the publication -->
                </div>    
            `
        },
        2: {
            header: "Education",
            image: "images/about-me/education.webp",
            content: `
                <div class="mt-2">• Currently studying: <span class="bold">Master's in Computer Graphics, Simulation & VR</span> |<span class="secondary"> U-TAD</span></div>
                <div class="mt-2">• Graduated in <span class="bold">Multimedia Engineering</span> (2017-2021, <strong class="secondary">Average grade: 8.1</strong>) | University of Valencia</div>
                <div class="mt-2">• Technological high school | I.E.S. Escultor José Luis Sánchez (2015-2017, <strong class="secondary">Average grade: 9</strong>)</div>
            `
        },
        3: {
            header: "Experience",
            image: "images/about-me/work-exp.avif",
            content: `
                <div class="mt-2">•<span class="bold">Junior Web Programmer Internship (02/2021-05/2021)<span class="bold"> |<span class="secondary"> Design and Innovation, S.L </span></div>
                <div class="pl-4">- Development of web applications, both Frontend and Backend, including a responsive version for mobile.</div>
                <div class="mt-2">•<span class="bold">Programmer (09/2021-Present)<span class="bold">|<span class="secondary"> LÃBERIT</div>
                <div class="pl-4">- Development and maintenance of web applications for the Murcian Health System (SMS).</div>
            `
        },
        4: {
            header: "Courses",
            image: "images/about-me/cursos.jpg",
            content: `
                <div class="mt-2">•<span class="bold">SCRUM DEVELOPER PROFESSIONAL CERTIFICATE (SDPC)</span> |<span class="secondary"> CERTIPROF</span></div>
                <div class="mt-2">•<span class="bold">APPLIED ARTIFICIAL INTELLIGENCE TO THE COMPANY</span> |<span class="secondary"> EDUCATIC GAP PUE S.L.</span></div>        `
        },
        5: {
            header: "Projects",
            image: "images/about-me/projects.webp",
            content: `
                <div class="mt-2">• <span class="bold">Personal Projects:<span class="bold"></div>
                <div class="pl-4">- Development of several personal projects related to 3D modeling, animation, and game development.</div>
                <div class="pl-4">- This portfolio.</div>
                <div class="mt-2">• <span class="bold">Internship Projects:<span class="bold"></div>
                <div class="pl-4">- Development of a web application from scratch, handling both front-end and back-end tasks using various plugins and frameworks such as: bootstrap, JQuery, or Codeigniter for database management.</div>
                <div class="pl-4">- Development of an application in Unity with real-time model control using gizmos and camera for occupational risk prevention.</div>
            `
        }
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
        if (data.header === "Habilidades" || data.header === "Skills")
        {
            contentDiv.classList.add("skills-container");
        }else{
            contentDiv.classList.remove("skills-container");
        }

        contentBox.classList.remove('fade-out');
    }, 500);
}

// Rotation of about me section box by buttons
let prev = document.querySelector('.nav-previous');
let next = document.querySelector('.nav-next');
let box = document.querySelector('.slider .box');
let aboutMeSections = Object.keys(contentData.english);
let degree = 0;
let currentCardIndex = 2;
let currentSectionIndex = 0;
let sectionIndices = [4, 5, 0, 1, 2, 3]
let facesIndices = [0, 1, 2, 3]


prev.addEventListener('click', function(){
    degree += 90;
    currentCardIndex = (currentCardIndex - 1 + 4) % 4;
    currentSectionIndex = (currentSectionIndex - 1 + aboutMeSections.length) % aboutMeSections.length;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;

    changeContent(contentData['spanish'][currentSectionIndex]);

    for (let i = 0; i < sectionIndices.length; i++) {
        sectionIndices[i] = (sectionIndices[i] - 1 + sectionIndices.length) % sectionIndices.length;
    }
    
    for (let i = 0; i < facesIndices.length; i++) {
        facesIndices[i] = (facesIndices[i] - 1 + facesIndices.length) % facesIndices.length;
    }
    
    let cards = document.querySelectorAll('.slider .box .card');
    cards[facesIndices[0]].querySelector('img').src = contentData['spanish'][sectionIndices[0]].image;
    cards[facesIndices[3]].querySelector('img').src = contentData['spanish'][sectionIndices[3]].image;

});

next.addEventListener('click', function(){
    degree -= 90;
    currentCardIndex = (currentCardIndex + 1) % 4; 
    currentSectionIndex = (currentSectionIndex + 1) % aboutMeSections.length;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    changeContent(contentData['spanish'][currentSectionIndex]);

    for (let i = 0; i < sectionIndices.length; i++) {
        sectionIndices[i] = (sectionIndices[i] + 1) % sectionIndices.length;
    }
    
    for (let i = 0; i < facesIndices.length; i++) {
        facesIndices[i] = (facesIndices[i] + 1) % facesIndices.length;
    }

    let cards = document.querySelectorAll('.slider .box .card');
    cards[facesIndices[0]].querySelector('img').src = contentData['spanish'][sectionIndices[0]].image;
    cards[facesIndices[3]].querySelector('img').src = contentData['spanish'][sectionIndices[3]].image;
});

