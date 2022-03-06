//Gestion des Menus

function afficherMenuPrincipal(){
    //1 on efface le canvas;
    ctx.save();

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "bold 60px honey";
    ctx.textAlign = "center";
    ctx.fillText("Click anywhere",600,550);
    ctx.fillStyle = 'gold';
    ctx.fillText("High Score : " + highscore.toString(),600,450);
    ctx.strokeStyle = 'gold';
    ctx.fillStyle = 'gold';
    ctx.font = "bold 80px honey";
    ctx.fillText("Try it",600,150);
    ctx.strokeText("Try it",600,150);

    ctx.strokeRect(450,90,300,80);
    

    zonespawn.draw(ctx);

    updateMPanimation();

    ctx.restore();

}

function afficherRules(){

    ctx.save();

    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle ='white';
    ctx.font = 'bold 40px honey'
    ctx.textAlign = "center";
    ctx.fillText("Red balls reduce your size",600,400);
    ctx.fillText("Green balls increase your size",600,450);
    ctx.font = 'bold 45px honey';
    ctx.fillText("Catch the gold ball to score",600,120);
    ctx.fillText("You lose if your pointer disappear",600,175)
    ctx.font = 'bold 30px honey';
    ctx.fillText("[Hints : Stay alive as long as you can]",600,225);
    ctx.font = "bold 70px honey";
    ctx.fillText("Click here        to start",600,550);
    zonespawn.draw(ctx);

    ctx.beginPath();
    ctx.fillStyle = 'gold';
    ctx.arc(250,110,15,0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(250,390,15,0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.arc(250,440,15,0,2*Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle= "#ffffff";
    ctx.arc(600, 530, 25, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle= "black";
    ctx.arc(600, 530,15, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle= "black";
    ctx.arc(600, 530, 20, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle= "black";
    ctx.arc(600, 530, 10, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.restore();

}

function afficherGameOver(){

    ctx.save();
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "bold 140px honey";
    ctx.fillText("GAME OVER",600,100);
    ctx.font = "bold 80px honey";
    ctx.fillText("Score : " + score.toString(),600,200);
    ctx.fillText("Click to try again",600,450);
    ctx.fillStyle = "gold"
    ctx.font = "bold 50px honey";
    ctx.fillText("High score : " + highscore.toString(),600,550);

    zonespawn.draw(ctx)


    ctx.restore();
}

function afficherGame(){
    //score ++;
    //1 on efface le canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);
    //2 on dessine les objets
    //monstre.draw(ctx);
    hero.draw(ctx);
    zonespawn.draw(ctx);

    updateMinimonstres();  
    traiteCollisionsJoueurAvecBords();

    afficherScore();

}

function afficherScore(){
    ctx.save();
    ctx.fillStyle = "white";
    //ctx.textAlign = "center";
    ctx.font = "bold 60px honey";
    ctx.fillText("Score : " + score.toString(),15,45);
    ctx.fillStyle = "gold"
    ctx.font = "bold 40px honey";
    ctx.fillText("High score : " + highscore.toString(),15,80);
    ctx.restore();
}

function AffichageNextLevel(){

    hero.draw(ctx);
    zonespawn.draw(ctx);

    ctx.save();
    ctx.fillStyle = "white";
    ctx.font = "30px cranberry";
    ctx.fillText("[Invulnerability : " + counter.toString() + " ]",475,45);
    ctx.restore();

    updateMinimonstres();  
    traiteCollisionsJoueurAvecBords();

    afficherScore();
}