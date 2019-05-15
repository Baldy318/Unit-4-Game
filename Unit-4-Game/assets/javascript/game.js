wins = 0;
losses = 0;

startGame();

$('#a1').click(function () {
    addTonum(randR1);
});
$('#a2').click(function () {
    addTonum(randR2);
});
$('#a3').click(function () {
    addTonum(randR3);
});
$('#a4').click(function () {
    addTonum(randR4);
});
$('#a5').click(function () {
    addTonum(randR5);
});
$('#a6').click(function () {
    addTonum(randR6);
});

function addTonum(num) {
    mynum = mynum + num;
    $('#my-count').text(mynum);
    if (mynum == random_num) {
        wins++;
        $('#wins').text(wins);
        alert("Winner!");
        startGame();
        glowMe("wins");
    }
    else if (mynum > random_num) {
        losses++;
        $('#losses').text(losses);
        alert("Thanos wins! Earth depends on you. Try Again!");
        startGame();
        glowMe("losses");
    }
}

function startGame() {
    random_num = Math.floor(Math.random() * (120 - 19)) + 19;
    $('#random-num').text(random_num);
    mynum = 0;
    $('#my-count').text(mynum);
    randR1 = Math.floor(Math.random() * (12 - 2)) + 2;
    randR2 = Math.floor(Math.random() * (12 - 2)) + 2;
    randR3 = Math.floor(Math.random() * (12 - 2)) + 2;
    randR4 = Math.floor(Math.random() * (12 - 2)) + 2;
    randR5 = Math.floor(Math.random() * (12 - 2)) + 2;
    randR6 = Math.floor(Math.random() * (12 - 2)) + 2;


    while (randR1 + randR2 + randR3 + randR4 + randR5 + randR6>= random_num *(5/ 6) || randR1 == randR2
        || randR1 == randR3 || randR1 == randR4 || randR2 == randR3 || randR2 == randR4 || randR3 == randR4) {
        randR1 = Math.floor(Math.random() * (12 - 2)) + 2;
        randR2 = Math.floor(Math.random() * (12 - 2)) + 2;
        randR3 = Math.floor(Math.random() * (12 - 2)) + 2;
        randR4 = Math.floor(Math.random() * (12 - 2)) + 2;
        randR5 = Math.floor(Math.random() * (12 - 2)) + 2;
        randR6 = Math.floor(Math.random() * (12 - 2)) + 2;
    }
    cheat = [randR1,randR2,randR3,randR4,randR5,randR6];
    console.clear();
    console.log("Thanos can't win");
    console.log("Why do you want the Avengers to win ['var cheat']?");

}

function glowMe(status) {
    if (status == "losses") {
        // glow effect win
        document.getElementById("title_l").setAttribute("id", "title_l_glow");
        document.getElementById("loss-counter").setAttribute("id", "loss-counter_glow");
        setTimeout(function () {
            document.getElementById("title_l_glow").setAttribute("id", "title_l");
            document.getElementById("loss-counter_glow").setAttribute("id", "loss-counter");
        }, 700);
    }
    else if (status == "wins") {
        // glow effect win
        document.getElementById("title_w").setAttribute("id", "title_w_glow");
        document.getElementById("win-counter").setAttribute("id", "win-counter_glow");
        setTimeout(function () {
            document.getElementById("title_w_glow").setAttribute("id", "title_w");
            document.getElementById("win-counter_glow").setAttribute("id", "win-counter");
        }, 700);
    }
}
