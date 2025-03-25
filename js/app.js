// Implementar solución aquí

const btn = document.getElementById("btn"); 
const body = document.querySelector("body");
const hexValue = document.getElementById("hex-value");

// Función para generar color aleatorio
const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

function handleClick() {
    console.log("Cambiando color...");
    body.style.backgroundColor = randomColor(); 
    hexValue.textContent = randomColor();
}
btn.addEventListener("click", handleClick);
