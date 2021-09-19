canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x = 5;
greencar_y = 225;

function add() {
background_imgTag = new Image();
background_imgTag.onload = uploadBackground;
background_imgTag.src = background_image;

greencar_imgTag = new Image();
greencar_imgTag.onload = uploadgreencar;
greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);
}


window.addEventListener("keydown",mykeypress);
function mykeypress(e)
{
keypress=e.keyCode;
if(keypress=="65"){
left();
}
if(keypress=="68"){
right();
}
if(keypress=="83"){
down();
}
if(keypress=="87"){
up();
}
}
function up()
{
if(greencar_y>0){
greencar_y = greencar_y - 15;
uploadBackground();
uploadgreencar();
}
}
function down()
{
if(greencar_y < 500){
greencar_y = greencar_y + 15;
uploadBackground();
uploadgreencar();
}
}
function left()
{
if(greencar_x > 0){
greencar_x = greencar_x - 15;
uploadBackground();
uploadgreencar();
}
}
function right()
{
if(greencar_x <700){
greencar_x = greencar_x +15;
uploadBackground();
uploadgreencar();
}
}