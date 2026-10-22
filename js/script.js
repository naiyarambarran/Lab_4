let button1 = false;
let button2 = false;
let box = document.getElementById("color-box");
let colorBox2 = document.getElementById("color-box2");

function buttonClicked () {
    button1 = true;
    document.getElementById("button1-state").innerHTML = button1; 
    changeBoxColor () ;
}

function button2Clicked () {
    button2= true;
    document.getElementById("button2-state").innerHTML = button2;
    changeBoxColor () ;
}

function changeBoxColor () {
    let box = document.getElementById("color-box"); 

 if (button1 == true && button2 == true) {
        box.style.backgroundColor = "#34170D";
    }
}

window.addEventListener("mousemove", function (event) {
    let cX = event.clientX;
    let cy = event.clientY;
    document.getElementById("client-x").innerHTML = cX;
    document.getElementById("client-y").innerHTML = cy;

    if (cX > 200 && cX < 400) {
        document.body.style.backgroundColor = "#D19AAB";
     } else {
        document.body.style.backgroundColor = "#FFE4E1";
     }
});

colorBox2.addEventListener("mousemove", function (event) {
let oX = event.offsetX;
let oY = event.offsetY;

document.getElementById("offset-y").innerHTML = oX;
document.getElementById("offset-y").innerHTML = oY;

if (oX < 500) {
    colorBox2.style.backgroundColor = "pink";
} else {
    colorBox2.style.backgroundColor = "#FFE4E1";
}
}); 




   
