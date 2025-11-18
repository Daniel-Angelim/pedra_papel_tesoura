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
    jogada_1 = 'pedra';
    if (cont === 2){
        verificar_resultado()
    }
    cont += 1;
}
function papel_1(){
    jogada_1 = 'papel';
    if (cont === 2){
        verificar_resultado()
    }
    cont += 1;
}
function tesoura_1(){
    jogada_1 = 'tesoura';
    if (cont === 2){
        verificar_resultado()
    }
    cont += 1;
}
// jogador 2
function pedra_2(){
    jogada_2 = 'pedra';
    if (cont === 2){
        verificar_resultado()
    }
    cont += 1;
}
function papel_2(){
    jogada_2 = 'papel';
    if (cont === 2){
        verificar_resultado()
    }
    cont += 1;
}
function tesoura_2(){
    jogada_2 = 'tesoura';
    if (cont === 2){
        verificar_resultado()
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
    if (controle === 1){    
        if(jogada_1 === jogada_2 && jogada_1 != null){
            alert("empate")
        }
        else if((jogada_1 === "pedra" && jogada_2 ==="tesoura") || (jogada_1==="papel" && jogada_2==="pedra") ||(jogada_1==="tesoura" && jogada_2==="papel")){
            alert("Jogador 1 venceu")
        }
        else if(jogada_1 != null){
            alert("Jogador 2 venceu")
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont = 0;
    setTimeout(document.getElementById('txt-contagem').textContent = "3", 1000);
    setTimeout(controle = 0, 1000);
    
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