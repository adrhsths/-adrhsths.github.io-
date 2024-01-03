





document.getElementById("closeVerticalSection1_1").onmouseover = function() { 
    document.getElementById("closeVerticalSection1_1").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection1_1").onmouseout = function() { 
    document.getElementById("closeVerticalSection1_1").src="icons/close.png";
};

document.getElementById("closeVerticalSection1_2").onmouseover = function() { 
    document.getElementById("closeVerticalSection1_2").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection1_2").onmouseout = function() { 
    document.getElementById("closeVerticalSection1_2").src="icons/close.png";
};

document.getElementById("closeVerticalSection1_3").onmouseover = function() { 
    document.getElementById("closeVerticalSection1_3").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection1_3").onmouseout = function() { 
    document.getElementById("closeVerticalSection1_3").src="icons/close.png";
};

document.getElementById("closeVerticalSection1_4").onmouseover = function() { 
    document.getElementById("closeVerticalSection1_4").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection1_4").onmouseout = function() { 
    document.getElementById("closeVerticalSection1_4").src="icons/close.png";
};

document.getElementById("closeVerticalSection1_5").onmouseover = function() { 
    document.getElementById("closeVerticalSection1_5").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection1_5").onmouseout = function() { 
    document.getElementById("closeVerticalSection1_5").src="icons/close.png";
};


document.getElementById("closeVerticalSection2_1").onmouseover = function() { 
    document.getElementById("closeVerticalSection2_1").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection2_1").onmouseout = function() { 
    document.getElementById("closeVerticalSection2_1").src="icons/close.png";
};

document.getElementById("closeVerticalSection2_2").onmouseover = function() { 
    document.getElementById("closeVerticalSection2_2").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection2_2").onmouseout = function() { 
    document.getElementById("closeVerticalSection2_2").src="icons/close.png";
};

document.getElementById("closeVerticalSection2_3").onmouseover = function() { 
    document.getElementById("closeVerticalSection2_3").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection2_3").onmouseout = function() { 
    document.getElementById("closeVerticalSection2_3").src="icons/close.png";
};

document.getElementById("closeVerticalSection2_4").onmouseover = function() { 
    document.getElementById("closeVerticalSection2_4").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection2_4").onmouseout = function() { 
    document.getElementById("closeVerticalSection2_4").src="icons/close.png";
};

document.getElementById("closeVerticalSection2_5").onmouseover = function() { 
    document.getElementById("closeVerticalSection2_5").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection2_5").onmouseout = function() { 
    document.getElementById("closeVerticalSection2_5").src="icons/close.png";
};



document.getElementById("closeVerticalSection3_1").onmouseover = function() { 
    document.getElementById("closeVerticalSection3_1").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection3_1").onmouseout = function() { 
    document.getElementById("closeVerticalSection3_1").src="icons/close.png";
};

document.getElementById("closeVerticalSection3_2").onmouseover = function() { 
    document.getElementById("closeVerticalSection3_2").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection3_2").onmouseout = function() { 
    document.getElementById("closeVerticalSection3_2").src="icons/close.png";
};

document.getElementById("closeVerticalSection3_3").onmouseover = function() { 
    document.getElementById("closeVerticalSection3_3").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection3_3").onmouseout = function() { 
    document.getElementById("closeVerticalSection3_3").src="icons/close.png";
};

document.getElementById("closeVerticalSection3_4").onmouseover = function() { 
    document.getElementById("closeVerticalSection3_4").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection3_4").onmouseout = function() { 
    document.getElementById("closeVerticalSection3_4").src="icons/close.png";
};

document.getElementById("closeVerticalSection3_5").onmouseover = function() { 
    document.getElementById("closeVerticalSection3_5").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection3_5").onmouseout = function() { 
    document.getElementById("closeVerticalSection3_5").src="icons/close.png";
};


document.getElementById("closeVerticalSection4_1").onmouseover = function() { 
    document.getElementById("closeVerticalSection4_1").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection4_1").onmouseout = function() { 
    document.getElementById("closeVerticalSection4_1").src="icons/close.png";
};

document.getElementById("closeVerticalSection4_2").onmouseover = function() { 
    document.getElementById("closeVerticalSection4_2").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection4_2").onmouseout = function() { 
    document.getElementById("closeVerticalSection4_2").src="icons/close.png";
};

document.getElementById("closeVerticalSection4_3").onmouseover = function() { 
    document.getElementById("closeVerticalSection4_3").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection4_3").onmouseout = function() { 
    document.getElementById("closeVerticalSection4_3").src="icons/close.png";
};

document.getElementById("closeVerticalSection4_4").onmouseover = function() { 
    document.getElementById("closeVerticalSection4_4").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection4_4").onmouseout = function() { 
    document.getElementById("closeVerticalSection4_4").src="icons/close.png";
};

document.getElementById("closeVerticalSection4_5").onmouseover = function() { 
    document.getElementById("closeVerticalSection4_5").src="icons/closeHover.png";
};
document.getElementById("closeVerticalSection4_5").onmouseout = function() { 
    document.getElementById("closeVerticalSection4_5").src="icons/close.png";
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