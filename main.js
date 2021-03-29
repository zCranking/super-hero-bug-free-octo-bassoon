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
window.addEventListener("keydown", myKeyDown)
function myKeyDown(e){
    keypress = e.keyCode;
    console.log(keypress);
    if (e.shiftKey == true && keypress == "80"){
        console.log("Shift and P pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };
    if (e.shiftKey ==true && keypress == "77"){
        console.log(" Shift and M pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    };
    if(keypress == "70"){
        console.log("f");
        new_image("spiderman_face.png");
    };
    if(keypress == "66"){
        console.log("b");
        new_image("hulkd_body.png");
    };
    if(keypress == "76"){
        console.log("l");
        new_image("spiderman_legs.png");
    };
    if(keypress == "82"){
        console.log("r");
        new_image("thor_right_hand.png");
    };
    if(keypress == "72"){
        console.log("h");
        new_image("hulk_left_hand.png");
    };
    if(keypress == "38"){
        console.log("UP");
        up();
    }
    if(keypress == "40"){
        console.log("DOWN");
        down();
    }
    if(keypress == "37"){
        console.log("LEFT");
        left();
    }
    if(keypress == "39"){
        console.log("RIGHT");
        right();
    }
}