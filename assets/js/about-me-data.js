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
            <div class="mt-2 textoNegrita subtitulo">Programming</div>
            <div class="mt-2 pl-4 textoNegrita secundario">Proficient</div>
            <div class="mt-2 pl-5">• C++, Python, OpenGL, XHTML y HTML5, CSS.</div>
            <div class="mt-2 pl-4 textoNegrita secundario">Experienced</div>
            <div class="mt-2 pl-5">• Java, Javascript, PHP, JSP, Matlab, SQL, Three.js, x3dom, d3.js, OpenSceneGraph, Scikit-learn.</div>

            <div class="mt-2 textoNegrita subtitulo">Software</div>
            <div class="mt-2 pl-4 textoNegrita secundario">Proficient</div>
            <div class="mt-2 pl-5">• Houdini, Visual Paradigm, Blender, GIMP, Premiere, Office.</div>
            <div class="mt-2 pl-4 textoNegrita secundario">Experienced</div>
            <div class="mt-2 pl-5">• ShotGrid, Nuke, Autodesk Maya, Inkscape, Scribus, After Effects, Audacity, Cubase.</div>

            <div class="mt-2 textoNegrita subtitulo">Others</div>
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
        `
    },
    3: {
        header: "Education",
        content: `
            <div class="mt-2">• Graduated: <span class="textoNegrita">Master in VFX and composition with Houdini and Nuke</span> |<span class="secundario"> Animum Creativity Advanced School</span></div>
            <div class="mt-2">• Graduated in <span class="textoNegrita">Multimedia Engineering</span> ( 2017-2021, Average grade: 8,34) |<span class="secundario"> Escola Tècnica Superior d'Enginyeria - Universidad de Valencia</span></div>
            <div class="mt-2">• Bachillerato tecnológico |<span class="secundario"> I.E.S. Pirámide</span></div>
        `
    },
    4: {
        header: "Experience",
        content: `
            <div class="mt-2 subtitulo"><span class="textoNegrita">Junior Pipeline &amp; Tools Developer </span> <span class="secundario">| November 2022 - March 2023</span></div>
            <div class="mt-2 pl-4">• Full-time development at <a href="https://www.linkedin.com/company/el-guiri-studios/mycompany/" target="_blank">El Guiri Studios</a>.
            Development of the integration of Photoshop and Blender within the Pipeline. Development of production tools and Blender tools with PySide. Support in the implementation of the Task Manager tool and use of Aquarium (Production Management, similar to Shotgrid).</div>
            <div class="mt-2 subtitulo"><span class="textoNegrita">Tools programmer / Pipeline </span> <span class="secundario">| June 2022 - November 2022</span></div>
            <div class="mt-2 pl-4">• Part-time development at <a href="https://lbox.es/" target="_blank">Lightbox Animation Studios</a>.
            Development of pipeline tools and TD. Django web development in Linux. PyQt, Nuke, Blender, Natron, Maya.</div>
            <div class="mt-2 subtitulo"><span class="textoNegrita">Tools programmer </span> <span class="secundario">| October 2020 - January 2021</span></div>
            <div class="mt-2 pl-4">• Internship in the pipeline department of the <span class="textoNegrita">animation studio</span> <a href="https://hampastudio.com/" target="_blank">Hampa Studio S.L.</a>
            Development of tools and resolution of tasks related to the position of Technical Director within the Pipeline using specific software, including Shotgun Software.</div>
            <div class="mt-2 textoNegrita subtitulo">Graphic design</div>
            <div class="mt-2 pl-4">• <a href="https://rafaelpolope.github.io/LaTortilleria_Site/" target="_blank">Corporate website for the company La Tortillería</a>. Custom web design with WordPress for a graphic design company, including online store development.</div>
        `
    },
    5: {
        header: "Projects",
        content: `
            <div class="mt-2 subtitulo">Personal Projects</div>
            <div class="mt-2 pl-4">• Developed various <span class="textoNegrita">personal projects</span> related to 3D modeling, animation, and game development, showcasing skills in software like Blender, Unity, and Unreal Engine.</div>
            <div class="mt-2 subtitulo">Open Source Contributions</div>
            <div class="mt-2 pl-4">• Contributed to open-source projects in the fields of computer graphics and virtual reality, including projects hosted on GitHub.</div>
            <div class="mt-2 subtitulo">Internship Projects</div>
            <div class="mt-2 pl-4">• Worked on <span class="textoNegrita">internship projects</span> during my time at various companies, including projects involving VR experiences, web development, and software engineering.</div>
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
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});

next.addEventListener('click', function(){
    degree -= 90;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;
    changeContent(contentData[Math.abs(Math.floor(degree / 90)) % 4 + 1]);
});