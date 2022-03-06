let hero ={
    xhero:0,
    yhero:0,
    rayonhero:25,
    rayonshield:25,
    vitesseX:10,
    vitesseY:10,
    heroGlobalAlpha:1,
    colorhero:"#ffffff",
    colorshield:"#8c28ef",

    draw:function(ctx){

        ctx.clearRect(0,0,canvas.width, canvas.height);

        ctx.save();

        ctx.beginPath();
        ctx.fillStyle= this.colorshield; 
        ctx.arc(this.xhero, this.yhero, this.rayonshield, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.globalAlpha = this.heroGlobalAlpha;
        ctx.fillStyle= this.colorhero;
        ctx.arc(this.xhero, this.yhero, this.rayonhero, 0, 2 * Math.PI);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 15, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 20, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle= "black";
        ctx.arc(this.xhero, this.yhero, 10, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.restore();

    },
    setPos:function (x, y){
        this.xhero = x ;
        this.yhero = y ;
      }
};