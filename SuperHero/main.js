var canvas = new fabric.Canvas("myCanvas");
block_image_width = 50;
block_image_height = 50;
player_image = "";
block_image = "";
player_x = 10;
player_y = 10;
var player_objects = "";

function player_update(){
    fabric.Image.fromURL("Orange Spiderman.png", function(Img) {
        player_objects = Img;

        player_objects.scaleToWidth(200);
        player_objects.scaleToHeight(190);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
};

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_objects = Img;

        block_image_objects.scaleToWidth(block_image_width);
        block_image_objects.scaleToHeight(block_image_height)
        block_image_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_objects);
    });
};