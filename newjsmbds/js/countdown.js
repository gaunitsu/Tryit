
function timerCountdown() {
    countdownUpdate();
}

function resetCounter(time) {
    counter = time;
}

function countdownUpdate() {
    var interv = setInterval(function () {
        if(counter > 1){
            counter--;
        }
        if (!IsPlayerInvincible) {
            clearInterval(interv);
        }
    }, 1000);
}