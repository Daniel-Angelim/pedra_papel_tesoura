const modal = document.getElementById('modal')
const mHeader = document.getElementById('mHeader')
const mbody = document.getElementById('mBody');
const fecharBtn = document.getElementById('fecharBtn');
const mShadow = document.getElementById('mShadow');

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