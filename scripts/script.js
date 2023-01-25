html = document.querySelector('html');


activity = document.querySelector('.activities');
title = document.querySelector('.title');
closeB = document.querySelector('.close');

dateTime = document.querySelector('.date-time');
calenderContainer = document.querySelector('.calander-contianer');

widgetsPanel = document.querySelector('.widgets-panel');
widgets = document.querySelector('.widgets');
fullScreen = document.querySelector('.full-screen');
powerOff = document.querySelector('.power-off');


sections = document.querySelectorAll('.container');


dockPanel = document.querySelector('.dock-panel');
dock = document.querySelector('.dock');




hidableElements = {widgetsPanel, calenderContainer};
winFile = ['./hyperLinks/aboutMe.html', './hyperLinks/myProjects.html', './hyperLinks/myBlogs.html', './hyperLinks/contactMe.html'];

winTitle = ['Introduction',
            'About Me',
            'My Skills',
            'My Projects',
            'My Blogs',
            'Contact Me'];



document.addEventListener('contextmenu', event => event.preventDefault());

// onmousemove = (e) => {
//     // console.log("mouse location:", e.x, e.y)
//     if (e.y > window.innerHeight*0.95) {
//         dock.style.visibility = 'visible';
//     }
//     else {
//         dock.style.visibility = 'hidden';
//     }
// }
// widgets.addEventListener("click", function(e) {
    
// });

 

function hideElements(ele) {
    ele.style.visibility = 'hidden';
}


widgets.addEventListener("click", function(e) {
    if (widgetsPanel.style.visibility == 'visible') {
        widgetsPanel.style.visibility = 'hidden';
    }
    else {
        widgetsPanel.style.visibility = 'visible';
    }
});


fullScreen.addEventListener("click", function(e) {
    if (document.fullscreenElement) {
        document.exitFullscreen();
        fullScreen.innerHTML = '<i class="fas fa-expand"></i> Full Screen';
        hideElements(widgetsPanel)
    }
    else {
        document.documentElement.requestFullscreen();
        fullScreen.innerHTML = '<i class="fas fa-compress"></i> Exit Full Screen';
        hideElements(widgetsPanel)
    }
});

powerOff.addEventListener("click", function(e) {
    if (confirm("Are you sure you want to power off?")) {
        window.close();
    }
});

dateTime.addEventListener("click", function(e) {
    if (calenderContainer.style.visibility == 'visible') {
        calenderContainer.style.visibility = 'hidden';
    }
    else {
        calenderContainer.style.visibility = 'visible';
    }
});

closeB.addEventListener("click", function(e) {    
    title.innerHTML = 'Home';
    closeB.style.display = 'none';

    for (let i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
    }
});

// && (e.target == html || e.target.classList.contains('main-body') || e.target.classList.contains('activity-bar') || e.target.classList.contains('dock-panel'))

onmousedown = (e) => {
    // console.log("mouse location:", e.x, e.y);
    // console.log(e.target.classList);
    if(e.button == 0  && (e.target.classList.contains('main-body') || e.target.classList.contains('activity-bar') || e.target.classList.contains('dock-panel') || e.target.classList.contains('container') || e.target.classList.contains('calander-contianer') ) ){
        for (let ele in hidableElements) {
            hidableElements[ele].style.visibility = 'hidden';
        }
    }
}


function openWindow(winIdx, event)
{
    title.innerHTML = winTitle[winIdx];
    sections[winIdx].classList.add('active');
    for (let i = 0; i < sections.length; i++) {
        if (i != winIdx){
            sections[i].classList.remove('active');}
    }
    closeB.style.display = 'inline';
}

themeChange = document.querySelector('.theme-change');

themeChange.addEventListener("click", () => {
    
    document.body.classList.toggle("light-mode");
    
    if (themeChange.classList.contains('light-t')) {
        themeChange.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        themeChange.classList.remove('light-t');
        themeChange.classList.add('dark-t');
    }
    else {
        themeChange.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        themeChange.classList.remove('dark-t');
        themeChange.classList.add('light-t');
    }

    hideElements(widgetsPanel);


})

// dockPanel.addEventListener('mouseover', function(e) {
//     dock.style.visibility = 'visible';
//     alert('Mouse over');
// });