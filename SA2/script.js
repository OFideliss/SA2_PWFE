// Obtém uma referência ao elemento HTML com o ID "minhaImagem" (presumivelmente uma imagem de lâmpada)
let lampada = document.getElementById("minhaImagem");

// Inicializa variáveis para rastrear o estado da lâmpada e o número de vezes que ela foi acesa
let cont = 0;
let lampadaOk = true;
let lampadaAcesa = false;

// Função que lida com o evento de clique na lâmpada
function acender() {
    if (lampadaAcesa == false) {
        // Se a lâmpada não estiver acesa, a imagem da lâmpada é trocada para uma imagem acesa
        lampadaAcesa = true;
        lampada.src = "img/ybxlO.jpg";
        cont++;

        // Se a lâmpada for acesa mais de 5 vezes, ela é quebrada
        if (cont > 5) {
            lampada.src = "img/quebrada.jpg";
            lampadaOk = false;
        }
    } else if (lampadaOk) {
        // Se a lâmpada estiver acesa, a imagem  é trocada para apagada
        lampadaAcesa = false;
        lampada.src = "img/apagada.jpg";
    }
}

// Função que reseta o estado da lâmpada
function trocar() {
    cont = 0;
    lampada.src = "img/apagada.jpg";
    lampadaOk = true;
    lampadaAcesa = false;
}

// um clique chama a função "acender", quando a lâmpada é clicada
lampada.addEventListener("click", acender);




