//===========================================================Pedra Papel Tesoura=============================================================
// Mapeia as opções do usuário para os caminhos das imagens
const imagensSelecao = {
    'Pedra': 'img/PedraSemFundo.png',
    'Papel': 'img/PapelSemFundo.png',
    'Tesoura': 'img/TesouraSemFundo.png'
};

let escolhaUsuario = '';          // Variável para armazenar a opção selecionada
let caminhoEscolhaUsuario = '';   //Variável para converter a escolha para o caminho da imagem correspondente 
const ConfSelec = document.getElementById('ConfSelec'); //Variavel para controle do botão de confirmar seleção

function verificarSelecao() {
    // se seleção estiver vazia não permite confirmar seleção
    if (escolhaUsuario !== "") {
        ConfSelec.disabled = false;
    } else {
        ConfSelec.disabled = true;
    }
}

//=============Seleção do Usuario=============================================
function Selecao(opcao) {
    escolhaUsuario = opcao; // define a variavel com o valor escolhido pelo usuario "pedra, papel ou tesoura"
    let imagemUsuario = document.getElementById('imagem1');  // variavel define caminho imagem do usuario
    selecaoTexto.textContent = `Você selecionou: ${opcao}`;  //Muda o texto do selecaoTexto
    verificarSelecao(); // Verifica a seleção sempre que uma opção é escolhidas
    // Atualiza a imagem do usuário (imagem1) com base na escolha
    imagemUsuario.src = imagensSelecao[opcao] // a variavel opção é a chave para acessar o caminho da imagem escolhida

    // "Converte" a escolha do usuario para o caminho da imagem correspondente >>> será usado na function escolheVencedor
    if (escolhaUsuario === 'Pedra') {
        caminhoEscolhaUsuario = 'img/PedraSemFundo.png';
    }
    if (escolhaUsuario === 'Papel') {
        caminhoEscolhaUsuario = 'img/PapelSemFundo.png';
    }
    if (escolhaUsuario === 'Tesoura') {
        caminhoEscolhaUsuario = 'img/TesouraSemFundo.png';
    }
}
//===========================================================Resultado=============================================================

//============Sorteia a imagem do computador==================================
function sortearImagem() {
    const imagens = ["img/PedraSemFundo.png", "img/PapelSemFundo.png", "img/TesouraSemFundo.png"]; // nova variavel com o caminho das imagens 
    // Gera um número aleatório entre 0 e 2 (a multiplicação pelo comprimento do vetor imagens quer dizer que ira sortear um número entre 0 e 2)
    //Math.random() sorteia um numero ente 0 e 1 (ex:0,1;0,001;etc)
    //Math.floor() arrendonda um número para inteiro
    let numeroAleatorio = Math.floor(Math.random() * imagens.length);

    // Pega a imagem no segundo card
    let minhaImagemSegundoCard = document.getElementById('imagem2');

    // Define o caminho da imagem com base no número aleatório gerado
    minhaImagemSegundoCard.src = imagens[numeroAleatorio];
    // retorna a imagem (caminho da imagem) esolhida aleatoriamente
    return imagens[numeroAleatorio];

}
//============Calcula o vencedor==================================

function escolheVencedor(caminhoEscolhaUsuario, escolhaComputador) {
    if (caminhoEscolhaUsuario === escolhaComputador) {
        return 'Jogou terminou em empate';
    } else if (
        (caminhoEscolhaUsuario === 'img/PedraSemFundo.png' && escolhaComputador === 'img/TesouraSemFundo.png') ||
        (caminhoEscolhaUsuario === 'img/PapelSemFundo.png' && escolhaComputador === 'img/PedraSemFundo.png') ||
        (caminhoEscolhaUsuario === 'img/TesouraSemFundo.png' && escolhaComputador === 'img/PapelSemFundo.png')
    ) {
        return 'Parabens. Você ganhou.';
    } else {
        return 'Que pena, o computador ganhou';
    }
}

//============Mostra a Section com o resultado==================================

function mostrarResultado() {

    //variaveis para controlar quando a section correta deve aparecer
    var mostraResultado = document.getElementById("Resultado");
    var mostraGame = document.getElementById("Game");
    var botaoSelecao = document.getElementById("botaoSelecao");

    // Chame a função para sortear a imagem aleatória e a armazena o resultado na variavel escolhaComputador
    let escolhaComputador = sortearImagem();
    // chama a função para decidir o vencedor
    let vencedor = escolheVencedor(caminhoEscolhaUsuario, escolhaComputador); // variaveis com os caminhos das imagens do usuario e do computador

    // texto para  mostrar o resultado do jogo
    selecaoTexto.textContent = `Resultado: ${vencedor}`; // variavel vencedor tera o valor "return" conforme a função escolheVencedor

    // Condições if para ser visivel na tela as section certas 
    if (mostraResultado.style.display === "none") { 
        mostraGame.style.display = "none";
        botaoSelecao.style.display = "none";
        mostraResultado.style.display = "block";
    } else {
        mostraResultado.style.display = "none";
    }
}