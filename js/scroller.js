function scrollfRight(panel) {
    var element = document.getElementById("panel"+panel);
    switch (panel) {
        case 1:
            element.classList.add("scroll-left");
            element = document.getElementById("panel2");
            element.classList.remove("scroll-left","scroll-right");
            element = document.getElementById("panel3");
            element.classList.remove("scroll-left","scroll-right");
            break;
        case 2:
            element.classList.add("scroll-left");
            element = document.getElementById("panel1");
            element.classList.remove("scroll-left","scroll-right");
            element = document.getElementById("panel3");
            element.classList.remove("scroll-left","scroll-right");
            break;
        case 3:
            element.classList.add("scroll-left");
            element = document.getElementById("panel1");
            element.classList.remove("scroll-left","scroll-right");
            element = document.getElementById("panel2");
            element.classList.remove("scroll-left","scroll-right");
            break;
    }
 }
 function scrollfleft(panel) {
    var element = document.getElementById("panel"+panel);
    switch (panel) {
        case 1:
            element.classList.add("scroll-right");
            element = document.getElementById("panel2");
            element.classList.remove("scroll-right","scroll-left");
            element = document.getElementById("panel3");
            element.classList.remove("scroll-right","scroll-left");
            break;
        case 2:
            element.classList.add("scroll-right");
            element = document.getElementById("panel1");
            element.classList.remove("scroll-right","scroll-left");
            element = document.getElementById("panel3");
            element.classList.remove("scroll-right","scroll-left");
            break;
        case 3:
            element.classList.add("scroll-right");
            element = document.getElementById("panel1");
            element.classList.remove("scroll-right","scroll-left");
            element = document.getElementById("panel2");
            element.classList.remove("scroll-right","scroll-left");
            break;
    }
 }