//Gestion des événéments clavier

function handleKeydown(evt) {
    if (evt.keyCode === 39) {
       //left key
      // console.log("left key");
       hero.moveleft();
    } else if (evt.keyCode === 37) {
       // right key
       hero.moveright();
    }
    else if (evt.keyCode == 38){
        //up key
        hero.moveup();
    }
    else if (evt.keyCode == 40){
       //down key 
        hero.movedown();
    }
}
function handleKeyup(evt) {
    hero.vitesseX--;
    hero.vitesseY--;
}

//Gestion des événements souris

let mousePos = {};

function traiteMouseMove(event){

    var rect = canvas.getBoundingClientRect();

    mousePos.x = event.clientX - rect.left - 25;
        mousePos.y = event.clientY - rect.top - 25;
        
        
        hero.setPos(mousePos.x, mousePos.y);
}

function traiteMouseDown(event) {
    if(etatjeu=="MenuPrincipal"){
        etatjeu='rules';
        miniMonstres.splice(0,miniMonstres.length);
        generateBalls(6,600,300,0);
        generateBalls(3,600,300,1);
        objectiveToget();
    }

    else if(etatjeu=="rules"){
        changeMusique(assets.heartbeat);
        etatjeu="GameStart";
    }

    else if(etatjeu=="FinduJeu"){
        etatjeu='MenuPrincipal';
        MPAnimation(25);
        changeMusique(assets.buildingtension);
        score = 0;
        hero.rayonhero = 25;
        hero.rayonhero = 25;
    }
   
  }