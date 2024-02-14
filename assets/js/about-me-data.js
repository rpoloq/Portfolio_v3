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
  
async function getObjectFromJson(objectName) {
    try {
        const data = await loadJsonData('./assets/data.json');
        const object = data[objectName];
        console.log(object);
        return object;
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


// Rotation of about me section box by buttons
let contentData;
try {
    contentData = await getObjectFromJson('contentData');
    console.log(contentData);
} catch (error) {
    console.error(error);
}
const contentBoxes = document.querySelectorAll('#two .content.box.style2');
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

    if (currentLanguage.name === "english")
    {
        changeContent(contentData['english'][currentSectionIndex], contentBoxes[0]);
    }else{
        changeContent(contentData['spanish'][currentSectionIndex], contentBoxes[1]);
    }

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

