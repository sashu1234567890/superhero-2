
var  canvas = new fabric.Canvas('myCanvas');

block_width =30;
block_height =30;

player_x = 10;
player_y = 10;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeigth(140);
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
block_image_object.scaleToHeigth(block_height);
block_image_object.set({
top:player_y,
left:player_x
});

canvas.add(block_image_object);

    });
}






function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
block_image_object = Img;

block_image_object.scaleToWidth(block_width);
block_image_object.scaleToHeigth(block_height);
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

if (e.shiftkey == true && key_pressed == '80')

{
    console.log('p + shift pressed together');
block_height = block_height + 10;
block_width = block_width + 10;
document.getElementById('current_height').innerHTML = block_height;
document.getElementById('current_width').innerHTML = block_width;
}
if (e.shiftkey == true && key_pressed == '77')

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



if(key_pressed == '76')

{
new_image('hulk_legs.png')
console.log('l')
}

if(key_pressed == '69')

{
new_image('ironman_legs.png')
console.log('e')
}

if(key_pressed == '71')

{
new_image('spiderman_legs.png')
console.log('g')
}

if(key_pressed == '70')

{
new_image('hulk_face(1).png')
console.log('f')
}

if(key_pressed == '82')

{
new_image('ironman_face.png')
console.log('a')
}

if(key_pressed == '89')

{
new_image('spiderman_face.png')
console.log('y')
}

if(key_pressed == '68')

{
new_image('thor_face.png')
console.log('d')
}

if(key_pressed == '85')

{
new_image('thor_left_hand.png')
console.log('u')
}

if(key_pressed == '67')

{
new_image('thor_right_hand_.png')
console.log('c')
}
if(key_pressed == '70')

{
new_image('thor_right_hand_.png')
console.log('f')
}

if(key_pressed == '80')

{
new_image('hulk_body.png')
console.log('p')
}

if(key_pressed == '71')

{
new_image('ironman_body.png')
console.log('g')
}

if(key_pressed == '86')

{
new_image('ironman_face.png')
console.log('v')
}

if(key_pressed == '71')

{
new_image('hulk_face.png')
console.log('h')
}

if(key_pressed == '71')

{
new_image('ironman_right_hand.png')
console.log('i')
}

if(key_pressed == '71')

{
new_image('spiderman_body.png')
console.log('b')
}
if(key_pressed == '74')

{
new_image('spiderman_face.png')
console.log('j')
}
if(key_pressed == '76')

{
new_image('spiderman_left_hand.png')
console.log('l')
}
if(key_pressed == '71')

{
new_image('spiderman_right_hand.png')
console.log('m')
}
}

