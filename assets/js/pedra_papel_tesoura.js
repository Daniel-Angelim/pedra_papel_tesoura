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
let controle = 1
let cont = 1
// funcões de alteração de valor
// jogador 1
function pedra_1(){
    if(controle === 1){
        jogada_1 = 'pedra';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont += 1;
}
function papel_1(){
    if(controle === 1){
        jogada_1 = 'papel';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont += 1;
}
function tesoura_1(){
    if(controle === 1){
        jogada_1 = 'tesoura';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont += 1;
}
// jogador 2
function pedra_2(){
    if(controle === 1){
        jogada_2 = 'pedra';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont += 1;
}
function papel_2(){
    if(controle === 1){
        jogada_2 = 'papel';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
    }
    cont += 1;
}
function tesoura_2(){
    if(controle === 1){
        jogada_2 = 'tesoura';
        if (cont === 2){
            verificar_resultado()
        }
    }
    else{
        alert("Espere o contador chegar a 0")
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
    if(jogada_1 === jogada_2 && jogada_1 != null){
        alert("empate")
    }
    else if((jogada_1 === "pedra" && jogada_2 ==="tesoura") || (jogada_1==="papel" && jogada_2==="pedra") ||(jogada_1==="tesoura" && jogada_2==="papel")){
        alert("Jogador 1 venceu")
    }
    else if(jogada_1 != null){
        alert("Jogador 2 venceu")
    }
    cont = 0;
}