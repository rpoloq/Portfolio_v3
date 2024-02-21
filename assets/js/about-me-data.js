async function loadJsonData(nombreArchivo) {
    try {
        const response = await fetch(nombreArchivo);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        throw error;
    }
}
  
async function getContentDataFromJson() {
    try {
        const data = await loadJsonData('./assets/data.json');
        contentData = data["contentData"];
    } catch (error) {
        console.error('There has been a problem loading the JSON:', error);
        throw error;
    }
}
  
// Show the section of Skills info
function showSection(sectionId) {

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.style.display = 'none';
    });
    
    let sectionIdEn, sectionIdEs;
    if (Object.keys(sectionsIds).includes(sectionId)) //El idioma actual es español
    {
        sectionIdEn = sectionsIds[sectionId];
        sectionIdEs = sectionId;

    }else{
        sectionIdEs = Object.keys(sectionsIds).find(key => sectionsIds[key] === sectionId);
        sectionIdEn = sectionId;
    }
    const sectionToShowEs = document.getElementById(sectionIdEs);
    const sectionToShowEn = document.getElementById(sectionIdEn);
    sectionToShowEs.style.display = 'block';
    sectionToShowEn.style.display = 'block';
  
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
      dot.classList.remove('active');
    });

    const activeDotEs = document.querySelector(`.dot[data-section="${sectionIdEs}"]`);
    const activeDotEn = document.querySelector(`.dot[data-section="${sectionIdEn}"]`);
    activeDotEs.classList.add('active');
    activeDotEn.classList.add('active');
}
  

// Change the content of Info panel of the 3D Slider
function changeContent(data, contentBox) {    
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


let contentData = {
    english: {
        0: { header: "", image: "", content: "" },
        1: { header: "", image: "", content: "" },
        2: { header: "", image: "", content: "" },
        3: { header: "", image: "", content: "" },
        4: { header: "", image: "", content: "" },
        5: { header: "", image: "", content: "" }
    },
    spanish: {
        0: { header: "", image: "", content: "" },
        1: { header: "", image: "", content: "" },
        2: { header: "", image: "", content: "" },
        3: { header: "", image: "", content: "" },
        4: { header: "", image: "", content: "" },
        5: { header: "", image: "", content: "" }
    }
};

const sectionsIds = {
    lenguajesProgramacion: "programmingSkills",
    Software: "software",
    Idiomas: "languages",
    Matematicas: "math",
    OtrasHabilidades: "otherSkills"
};

getContentDataFromJson();
let aboutMeSections = Object.keys(contentData.english);
const contentBoxes = document.querySelectorAll('#two .content.box.style2');
let prev = document.querySelector('.nav-previous');
let next = document.querySelector('.nav-next');
let box = document.querySelector('.slider .box');

let degree = 0;
let currentCardIndex = 2;
let currentSectionIndex = 0;
let sectionIndices = [4, 5, 0, 1, 2, 3]
let facesIndices = [0, 1, 2, 3]

// Rotation of about me section box by buttons
prev.addEventListener('click', function(){
    degree += 90;
    currentCardIndex = (currentCardIndex - 1 + 4) % 4;
    currentSectionIndex = (currentSectionIndex - 1 + aboutMeSections.length) % aboutMeSections.length;
    box.style = `transform: perspective(1000px) rotateY(${degree}deg) translateY(100px) !important`;

    // Both English and Spanish content divs are updated due to not synchronizing slider and displayed content
    changeContent(contentData.english[currentSectionIndex], contentBoxes[0]);
    changeContent(contentData.spanish[currentSectionIndex], contentBoxes[1]);
        

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

    changeContent(contentData['english'][currentSectionIndex], contentBoxes[0]);
    changeContent(contentData['spanish'][currentSectionIndex], contentBoxes[1]);
    

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

