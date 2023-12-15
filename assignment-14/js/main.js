var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

//Rainbow Gradient for Shits and Giggles
var grd = ctx.createLinearGradient(0, 0, 400, 200);
grd.addColorStop(0, "red");
grd.addColorStop(0.2, "orange");
grd.addColorStop(0.4, "yellow");
grd.addColorStop(0.6, "blue");
grd.addColorStop(0.8, "green");
grd.addColorStop(1, "purple");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 200);

//Meh
cty.font = "50px Arial";
cty.strokeText("Meh", 10, 40);
cty.strokeText("/", 70, 80);
cty.strokeText("10", 100, 120);