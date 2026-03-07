const texto = "Estudante de Engenharia de Software.";

let i = 0;

function digitar(){

    if(i < texto.length){

        document.getElementById("typing").innerHTML += texto.charAt(i);

        i++;

        setTimeout(digitar,40);

    }

}

window.onload = digitar;