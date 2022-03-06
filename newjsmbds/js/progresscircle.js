var i = 0;

function move() {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}function creationCircle(pas,counter){
    ctx.save();
    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, ((2 * Math.PI)/counter))*(counter-pas);
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.restore();
}
