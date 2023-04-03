var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

// console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

function colorChange() {
    body.style.background = "linear-gradient(to right, " + color1.value + 
        ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorChange);

color2.addEventListener("input", colorChange);

