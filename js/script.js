const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const pontuacao = document.querySelector(".pontuacao");
let cont = 1;
const jump = () => {
    mario.classList.add("jump-mario");
    
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);

    pontuacao.innerHTML = cont++;    
};
const loopGame = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft;;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.botton=`${marioPosition}px`;

        mario.src = "/assets/img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft="45px";

        clearInterval(loopGame);
    }
}, 10);
document.addEventListener("keydown", jump);


