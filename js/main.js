window.onload = main;

let highscore;
let canvas;
let ctx;
let score;
let etatjeu = "MenuPrincipal";
let collisionbord = false;
let goniCatch = false;
let animationMP = false;
let musicloaded;
let IsPlayerInvincible;
let counter=2;
let isNextlevelAvailable = false;
let currentalpha = 0;
let endCountdown = false;
let miniMonstres = [];
let assets;

const setUpCanvas = () => {
    // Pour avoir un canvas responsive
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
};


let zonespawn = {
    draw:function(ctx){
        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(600,300,40,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(600,300,30,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(600,300,20,0,2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.strokeStyle = 'red';
        ctx.arc(600,300,50,0,2 * Math.PI);
        ctx.stroke();
        
        ctx.restore();
    }
};

function main(){
    loadAssets(startGame);      
}

function startGame(assetsLoaded){
    
    if(localStorage.getItem("highscore") == null){
       highscore = 0;   
    }
    else{
        highscore = JSON.parse(localStorage.getItem("highscore"));
    }

    console.log('page chargée');
    // on récupére grâce à la Selector API

    canvas = document.querySelector("#mycanvas");

    ctx = canvas.getContext('2d');

    // Responsive Canvas
    //setUpCanvas();

    assets = assetsLoaded;

    //console.log(monstre.donneTonNom());

    //window.addEventListener('keydown', handleKeydown, false);
    //window.addEventListener('keyup', handleKeyup, false);

    canvas.onmousedown = traiteMouseDown;
    canvas.onmousemove = traiteMouseMove;

    MPAnimation(20);
    changeMusique(assets.buildingtension);
    //assets.buildingTension.play();
    score = 0;

    requestAnimationFrame(animationLoop);

}

//Animation à 60 images/s
function animationLoop(){
    //1 on efface le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    switch(etatjeu){
        case"MenuPrincipal":
            canvas.style.cursor = "pointer";
            afficherMenuPrincipal();
            break;
        case"rules":
            afficherRules();
            break;
        case"GameStart":
            canvas.style.cursor = "none";
            updateGame();
            break;
        case"TransitionLevel":
            AffichageNextLevel();
            if(isNextlevelAvailable){
                isNextlevelAvailable = false;
                etatjeu="GameStart";
                resetCounter(2);
                spawnEnemies();
            }
            break;
        case"FinduJeu":
            canvas.style.cursor = "pointer";
            afficherGameOver();
            break;
    }

    // Rappel de la fonction animationloop dans 1/60 seconde par le navigateur
    requestAnimationFrame(animationLoop);
}


function spawnEnemies(){
    assets.popup.play();
    generateBalls(3,600,300,0);
    generateBalls(1,600,300,1); 
    objectiveToget();
}

function HighscoreStorage(){
    if(score >= highscore){
        highscore = score;
        localStorage.setItem("highscore", JSON.stringify(highscore));
    };
}

function updateGame(){
    timeLeft = 3;
    afficherGame();
    if(endLevel()){
        etatjeu = "TransitionLevel";
        AffichageNextLevel();
        rendJoueurInvincibleTemporairement(2000);
        score++;
    }
    HighscoreStorage();
}

function endLevel(){
    if(goniCatch == true){
        goniCatch = false;
        return true;
    }
    else{
        return false;
    }
}










 

