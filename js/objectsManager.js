//Gestion Balls

function generateBalls(nb,x,y,indexCouleur){

    let tabCouleurs=["red","green"];

    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[indexCouleur];
        let vx = -5 + Math.random() * 10;
        let vy = -5 + Math.random() * 10;

        let b = new miniMonstre(x , y, r, couleur, vx , vy);

        miniMonstres.push(b);
    }
}

function objectiveToget(){
    let rOTG= 10;
    let vx = -5 + Math.random() * 10;
    let vy = -5 + Math.random() * 10;
    let OTG = new miniMonstre(600,300,rOTG,"gold",vx,vy);
    miniMonstres.push(OTG);
}

function updateMinimonstres(){

    miniMonstres.forEach((b) =>{
        b.draw(ctx);
        traiteCollisionsminiMonstresAvecBords(b);
        traiteCollisionHeroAvecMonstre(b);
        b.move();
    })
}
