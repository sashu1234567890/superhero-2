var  canvas = new fabric.Canvas('myCanvas');

block_width =30;
block_height =30;

player_x = 10;
player_y = 10;

var player_object="";
block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });

     canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeight(block_height);
block_image_object.set({
top:player_y,
left:player_x
});

canvas.add(block_image_object);

    });
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e){
key_pressed =e.keyCode;
console.log(key_pressed);

if (e.shiftKey == true && key_pressed == '80')

{
    console.log('p + shift pressed together');
block_height = block_height + 10;
block_width = block_width + 10;
document.getElementById('current_height').innerHTML = block_height;
document.getElementById('current_width').innerHTML = block_width;
}
if (e.shiftKey == true && key_pressed == '77')

{
    console.log('m + shift pressed together');
block_height = block_height - 10;
block_width = block_width - 10;
document.getElementById('current_height').innerHTML = block_height;
document.getElementById('current_width').innerHTML = block_width;

}

if(key_pressed == '38')

{
up()
console.log('up')
}

if(key_pressed == '40')

{
down()
console.log('down')
}

if(key_pressed == '37')

{
left()
console.log('left')
}

if(key_pressed == '39')

{
right()
console.log('right')
}

if(key_pressed == '87')

{
new_image('wall.jpg')
console.log('w')
}

if(key_pressed == '71')

{
new_image('ground.png')
console.log('g')
}

if(key_pressed == '76')

{
new_image('light_green.png')
console.log('l')
}

if(key_pressed == '84')

{
new_image('trunk.jpg')
console.log('t')
}

if(key_pressed == '82')

{
new_image('roof.jpg')
console.log('r')
}

if(key_pressed == '89')

{
new_image('yellow_wall.png')
console.log('y')
}

if(key_pressed == '68')

{
new_image('dark_green.png')
console.log('d')
}

if(key_pressed == '85')

{
new_image('unique.png')
console.log('u')
}

if(key_pressed == '67')

{
new_image('cloud.jpg')
console.log('c')
}
}

function up()
{
    if(player_y >=0 )
    {
player_y = player_y - block_height;
console.log("block image height =" + block_height);
console.log("when up arrow is pressed, X = "+ player_x +"player_y =" + player_y);
canvas.remove(player_object);
player_update();

    }
}

function down()
{
    if(player_y <=500 )
    {
        player_y = player_y + block_height
        console.log("block image height =" + block_height);
        console.log("when down arrow is pressed, X = " + player_x + "player_y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >=0 )
    {
        player_x = player_x - block_width
        console.log("block image width =" + block_width);
        console.log("when left arrow is pressed, X = " + player_x + "player_y =" + player_y)
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=900 )
    {
        player_x = player_x + block_width
        console.log("block image width =" + block_width);
        console.log("when right arrow is pressed, X = " + player_x + "player_x =" + player_x)
        canvas.remove(player_object);
        player_update();
    }
}


