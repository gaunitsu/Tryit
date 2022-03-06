let ballleft = [];
let ballright = [];

function MPAnimation(nb){

    ballright.splice(0,ballright.length);
    ballleft.splice(0,ballleft.length);

    let tabCouleurs=["red","green"];

    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[0];
        let vx = 0 ;
        let vy = 0.2 + Math.random() * 5 ;

        let b = new miniMonstre(100 , 0, r, couleur, vx , vy);

        ballleft.push(b);
    }


    for(let i=0; i < nb; i++){
        let r = 10 + Math.random()* 30;
        let couleur = tabCouleurs[1];
        let vx = 0 ;
        let vy = 0.2 + Math.random() * 5 ;

        let b = new miniMonstre(1100, 0, r, couleur, vx , vy);

        ballright.push(b);
    }

}

function updateMPanimation(){

    ballleft.forEach((b) =>{
        
        b.draw(ctx);
        b.move();
    })

    ballright.forEach((b) =>{
        
        b.draw(ctx);
        b.move();
    })

}
