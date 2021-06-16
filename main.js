var canvas = new fabric.canvas('mycanas');

block_image_width =30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_objects="";

function player_update()
{
    fabric.image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaletowidth(150);
        player_object.scaletoHeight(140);
        player_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(player_object);
           });
}

function new_image(get_image)
{
    fabric.image.fromURL(get_image , function(Img){
        block_image_object = Img;

        block_image_object.scaletowidth( block_image_width);
        block_image_object.scaletoHeight( block_image_height);
        block_image_object.set({
        top:player_y,
        left:player_x
        });
        canvas.add(image_object);
           });
}

window.addEventListener("keydown" , my_keydown);

function my_keydown(e)
{
    keypressed =e.keycode;
    console.log(keypressed);
    if(e.shiftkey ==true && keypressed =='80')
    {
        console.log("p and shift pressed together ");
        block_image_object.block_image_width + 10
        block_image_object.block_image_height + 10
        document.getElementById("current_width").innerhtml  =block_image_width;
        document.getElementById("current_height").innerhtml  =block_image_height;
    }
    if(e.shiftkey && keypressed == '77')
    {
        console.log("m and shift pressed together ");
        block_image_object.block_image_width - 10
        block_image_object.block_image_height - 10
        document.getElementById("current_width").innerhtml  =block_image_width;
        document.getElementById("current_height").innerhtml  =block_image_height;
    }

}

 if(keypressed =='38')
 {
     up();
     console.log("up")
 }
if(keypressed == '40')
{
    down();
    console.log("down")
}
if(keypressed == '37')
{
    left();
    console.log("left");
}
if(keypressed == 39)
{
    right();
    console.log("right");
}
if(keypressed == '67')
{
    new_image('captain_armerica_left_hand.png');
    console.log('c')
}
if(keypressed == '84')
{
    new_image("thor_right_hand.png");
    console.log('t');
}
if (keypressed == '73')
{
    new_image('ironman_face.png');
    console.log('i');
}
if(keypressed == '72')
{
    new_image("hulk_legs.png");
    console.log('h')
}
if(keypressed == '83')
{
    new_image('spiderman_body.png');
    console.log('s')
}
}

 function up()
 {
     if(player_y>=0)
     {
         player_y= player_y- block_image_height;
         console.log("block_image_height=" + block_image_height)
         console.log("when up arrow key is pressed , X =" +player_x +", Y +" player_y);
         canvas.remove(player_object);
         player_update();
     }
 }

 function down()
 {
     if(player_y>=500)
     {
         player_y= player_y- block_image_height;
         console.log("block_image_height=" + block_image_height);
         console.log("when down arrow key is pressed , X =" + player_x +", Y +" player_y)
         canvas.remove(player_object)
         player_update();
     }
    }    

    function left  ()
    {
        if (player_x>0)

        {
            player_x = player_x- block_image_width;
            console.log("block image width =" + block_image_height);
            console.log ("when left arrow key is pressed , X = " + player_x +", Y +" player_y)
            canvas.remove(player_object);
            player_update();

        
        }
    }
    
    function  right()
    {
        if(player_x <=850)
        {
            player_x= player_x +block_image_width;
            console.log("block image width = " + block_image_width);
            console.log ("when right arrow key is pressed, X = "+player_x + " ,Y =" player_y)
            canvas.remove (player_object);
            player_update();
        }
    }


 
 