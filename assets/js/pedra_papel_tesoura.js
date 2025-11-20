// Elementos do painel de regras
const modal = document.getElementById('modal')
const mHeader = document.getElementById('mHeader')
const mbody = document.getElementById('mBody');
const fecharBtn = document.getElementById('fecharBtn');
const mShadow = document.getElementById('mShadow');
// Botões do jogador 1
const pedra1 = document.getElementById('Botao-Pedra-1');
const papel1 = document.getElementById('Botao-Papel-1');
const tesoura1 = document.getElementById('Botao-Tesoura-1');
// Botões do jogardor 2
const pedra2 = document.getElementById('Botao-Pedra-2');
const papel2 = document.getElementById('Botao-Papel-2');
const tesoura2 = document.getElementById('Botao-Tesoura-2');
// Pontuação
const placar1 = document.getElementById('jog-1');
const placar2 = document.getElementById('jog-2');
let ponto1 = 0;
let ponto2 = 0;
// resultados
const result1 = document.getElementById('jogada1');
const result2 = document.getElementById('jogada2');
const resultFinal = document.getElementById('resultado');
const placar = document.getElementById('placar');
// Função pra zerar resultados
function zerar(){
    cont = 1;
    controle = 0;
    document.getElementById('txt-contagem').textContent = "";
    setTimeout(() => {
        result1.textContent = "Jogador 1 jogou: ";
        result2.textContent = "Jogador 2 jogou: ";
        resultFinal.textContent = "Resultado: ";
    }, 4000);
    setTimeout(() => {
        placar.style.display = "none";
    }, 3000);

}
// Animações painel de regras
function ativarModal(){
    modal.style.animation = "modalIn 0.5s";
    mShadow.style.animation = "msIn 0.5s";

    modal.style.display = "flex";
    mShadow.style.display = "block";
}

function fecharModal(){
    modal.style.animation = "modalOut 0.5s";
    mShadow.style.animation = "msOut 0.5s";

    setTimeout(() => {
        modal.style.display = "none";
    mShadow.style.display = "none";
    },499)

    
}
// Variáveis para a jogada
let jogada_1
let jogada_2
let controle = 0
let cont = 1
// funcões de alteração de valor
// jogador 1
function pedra_1(){
    jogada_1 = 'Pedra';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
    
}
function papel_1(){
    jogada_1 = 'Papel';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
}
function tesoura_1(){
    jogada_1 = 'Tesoura';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
}
// jogador 2
function pedra_2(){
    jogada_2 = 'Pedra';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
}
function papel_2(){
    jogada_2 = 'Papel';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
}
function tesoura_2(){
    jogada_2 = 'Tesoura';
    if (cont === 2){
        verificar_resultado();
        setTimeout(() => {
            zerar()}, 1000);
    }
    cont += 1;
}
    // Condicionais para definir a jogada
// jogador 1
pedra1.addEventListener('click', function(){
    pedra_1()
})
papel1.addEventListener('click', function(){
    papel_1()
})
tesoura1.addEventListener('click', function(){
    tesoura_1()
})
// jogador 2
pedra2.addEventListener('click', function(){
    pedra_2()
})
papel2.addEventListener('click', function(){
    papel_2()
})
tesoura2.addEventListener('click', function(){
    tesoura_2()
})
// Verficando resultado
function verificar_resultado(){
    result1.textContent = result1.textContent + jogada_1;
    result2.textContent = result2.textContent + jogada_2;
    if (controle === 1){    
        if(jogada_1 === jogada_2 && jogada_1 != null){
        resultFinal.textContent = resultFinal.textContent + "Empate";
        }
        else if((jogada_1 === "Pedra" && jogada_2 ==="Tesoura") || (jogada_1==="Papel" && jogada_2==="Pedra") ||(jogada_1==="Tesoura" && jogada_2==="Papel")){
        resultFinal.textContent = resultFinal.textContent + "Jogador 1 venceu!";
            ponto1 += 1;
        }
        else if(jogada_1 != null){
        resultFinal.textContent = resultFinal.textContent + "Jogador 2 venceu!";
            ponto2 += 1;
        }
        placar.style.display = "block";
    }
    else{
        ativarAlert();
    }
    atualizarPontos();
    
}
// Adicionando jogadas pelo teclado
document.onkeydown = teclado;
function teclado(e){
    if (e.keyCode == 65){
        pedra_1();
    }
    else if (e.keyCode == 83){
        papel_1();
    }
    else if (e.keyCode == 68){
        tesoura_1()
    }
    else if (e.keyCode == 97){
        pedra_2();
    }
    else if (e.keyCode == 98){
        papel_2();
    }
    else if (e.keyCode == 99){
        tesoura_2()
    }
}
// Configurando contador
function contador() {
  let time = 3;
  const Display = document.getElementById('txt-contagem');
  
  const intervalId = setInterval(function() {
    if (time <= 0) {
      clearInterval(intervalId);
      Display.textContent = "0";
      controle = 1;
    } else {
      Display.textContent = time;
      time--;
    }
  }, 1000);
  
}
// Animação de esperar o contador
const alert = document.getElementById('alert')

function ativarAlert(){
    alert.style.animation = "alertIn .5s";
    
    alert.style.display = "flex";
    
    setTimeout(() => {
        fecharAlert();
    }, 2000);
}

function fecharAlert(){
    alert.style.animation = "alertOut .5s";

    setTimeout(() => {
        alert.style.display = "none";
    },499)
}
// Pontuação
function atualizarPontos(){
    placar1.textContent = ponto1;
    placar2.textContent = ponto2;
}