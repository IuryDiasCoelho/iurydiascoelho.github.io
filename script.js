// Efeito de digitação
const texto = "Estudante de Engenharia de Software.";
let i = 0;

function digitar(){
    if(i < texto.length){
        document.getElementById("typing").textContent += texto.charAt(i);
        i++;
        setTimeout(digitar, 40);
    }
}

function iniciarDigitacao(){
    const elemento = document.getElementById("typing");
    if(elemento){
        elemento.textContent = "";
        digitar();
    }
}

// Menu mobile (hamburguer)
function configurarMenuMobile(){
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");

    if(!toggle || !menu) return;

    toggle.addEventListener("click", () => {
        const aberto = menu.classList.toggle("open");
        toggle.setAttribute("aria-expanded", aberto);
    });

    // Fecha o menu ao clicar em um link (útil no mobile)
    menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    iniciarDigitacao();
    configurarMenuMobile();
});