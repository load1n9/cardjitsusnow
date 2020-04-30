var  bgms = {
    mute: false,
    loop: true,
}
var bgmsmenu  = {
    mute: false,
    loop: true
}
var scenething = randomint(0,2);


var playerelement = "snow"
var player;
var player2;
var player3;
var gridthing = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
]

function randomint(a, b) {
    if (a > b) {
      var c = a;
      a = b;
      b = c;
    }
    return Math.floor(Math.random() * (b - a + 1) + a);
}


