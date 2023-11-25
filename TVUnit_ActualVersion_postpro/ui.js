

document.getElementsByClassName('closeImg').onmouseover = function() { 
    document.getElementsByClassName('closeImg').src="icons/closeHover.png";
};
document.getElementsByClassName('closeImg').onmouseout = function() { 
    document.getElementsByClassName('closeImg').src="icons/close.png";
};





document.getElementById("DoorLeft_S1").onmouseover = function() { 
    document.getElementById("DoorLeft_S1").src="icons/DoorLeft_Open.jpg";
};
document.getElementById("DoorLeft_S1").onmouseout = function() {
    document.getElementById("DoorLeft_S1").src="icons/DoorLeft_Close.jpg";
};

document.getElementById("DoorRight_S1").onmouseover = function() { 
    document.getElementById("DoorRight_S1").src="icons/DoorRight_Open.jpg";
};
document.getElementById("DoorRight_S1").onmouseout = function() {
    document.getElementById("DoorRight_S1").src="icons/DoorRight_Close.jpg";
};

document.getElementById("DoubleDoor_S1").onmouseover = function() { 
    document.getElementById("DoubleDoor_S1").src="icons/DoubleDoor_Open.jpg";
};
document.getElementById("DoubleDoor_S1").onmouseout = function() {
    document.getElementById("DoubleDoor_S1").src="icons/DoubleDoor_Close.jpg";
};







document.getElementById("DoorLeft_S2").onmouseover = function() { 
    document.getElementById("DoorLeft_S2").src="icons/DoorLeft_Open.jpg";
};
document.getElementById("DoorLeft_S2").onmouseout = function() {
    document.getElementById("DoorLeft_S2").src="icons/DoorLeft_Close.jpg";
};

document.getElementById("DoorRight_S2").onmouseover = function() { 
    document.getElementById("DoorRight_S2").src="icons/DoorRight_Open.jpg";
};
document.getElementById("DoorRight_S2").onmouseout = function() {
    document.getElementById("DoorRight_S2").src="icons/DoorRight_Close.jpg";
};

document.getElementById("DoubleDoor_S2").onmouseover = function() { 
    document.getElementById("DoubleDoor_S2").src="icons/DoubleDoor_Open.jpg";
};
document.getElementById("DoubleDoor_S2").onmouseout = function() {
    document.getElementById("DoubleDoor_S2").src="icons/DoubleDoor_Close.jpg";
};

document.getElementById("Drawer_S2").onmouseover = function() { 
    document.getElementById("Drawer_S2").src="icons/Drawer_Open.jpg";
};
document.getElementById("Drawer_S2").onmouseout = function() {
    document.getElementById("Drawer_S2").src="icons/Drawer_Close.jpg";
};







const leftArrow = document.querySelector('.arrow-btn.left');
const rightArrow = document.querySelector('.arrow-btn.right');
const dimensionMenu = document.querySelector('.dimensionMenu');
const dimensionNames = document.querySelectorAll('.dimensionName');

// Amount to scroll (width of one dimensionName + its margin)
const scrollAmount = dimensionNames[0].offsetWidth;

// Scroll left
leftArrow.addEventListener('click', function() {
    dimensionMenu.scrollBy({ top: 0, left: -scrollAmount, behavior: 'smooth' });
});

// Scroll right
rightArrow.addEventListener('click', function() {
    dimensionMenu.scrollBy({ top: 0, left: scrollAmount, behavior: 'smooth' });
});

// Change color of arrow buttons when a menu is selected
dimensionNames.forEach(function(name) {
    name.addEventListener('click', function() {
        leftArrow.classList.add('selected');
        rightArrow.classList.add('selected');
    });
});

// main menu mobile version 
const menuMap = {
    "buttonWidth": "menuWidth",
    "buttonDepth": "menuDepth",
    "buttonHeight": "menuHeight",
    "buttonFeet": "menuFeet",
    "buttonVerticalPart": "menuVerticalPart",
    "buttonCarcassColour": "menuCarcassColour",
    "buttonFrontFacadesColour": "menuFrontFacadesColour",
    "buttonBackPanels": "menuBackPanels",
    "buttonHandles": "menuHandles"
};

var buttons = document.querySelectorAll('.dimensionName');
var submenus = Object.values(menuMap).map(id => document.getElementById(id));


// Attach click event listener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        // Get the id of the button
        var buttonId = this.id;

        // Reset color and background-color of all buttons
        buttons.forEach(function(btn) {
            btn.style.backgroundColor = "#e9e9ed";
            btn.style.color = "black";
        });

        // Change color and background-color of the clicked button
        this.style.backgroundColor = "#356b4d";
        this.style.color = "white";

        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if (isMobile && this != 'buttonCarcassColour') {
            document.getElementById("CarcassColorSection").style.display = "none";
            document.getElementById("buttonCarcassColourPlus").style.display = "none";
            document.getElementById("ShowMoreCarcassColor").innerHTML = "+20";
            document.getElementById("ShowMoreCarcassColor").setAttribute("title", "Show More");

            document.getElementById("FacadesColorSection").style.display = "none";
            document.getElementById("buttonFrontFacadesColourPlus").style.display = "none";
            document.getElementById("ShowMoreFacadesColor").innerHTML = "+20";
            document.getElementById("ShowMoreFacadesColor").setAttribute("title", "Show More");
            
            document.getElementById("menuCarcassColour").style.height = '10vh';
            document.getElementById("menuFrontFacadesColour").style.height = '10vh';
            document.getElementById("MainSubMenus").style.height = '11vh';
            document.getElementById("MenuForMobileVersion2").style.height = '17.4vh';
            document.getElementById("MenuForMobileVersion").style.height = '15em';
        }

        // Get the id of the corresponding submenu from the map
        var submenuId = menuMap[buttonId];

        // Get the submenu element
        var submenu = document.getElementById(submenuId);
        submenus.forEach(sm => sm.style.display = "none");
        submenu.style.display = "flex";

    });
});


