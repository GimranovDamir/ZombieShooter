// requestAnimationFrame first
(function() {
    var requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame;
    window.requestAnimationFrame = requestAnimationFrame;
})();

// Define canvas and get context
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = 3384,
    height = 240;

// Define player object
var player = {
    x: 36,
    y: 208 - 16,
    width: 13,
    height: 16,
    speed: 3,
    velX: 0,
    velY: 0,
    jumping: false
};

// init an array of keys to be pressed
var keys = [];

// add friction
var friction = 0.8;

// add gravity
var gravity = 0.3;

function update () {
    // check for keys
    // --
    // up arrow or space
    if (keys[87] || keys[32] || keys[1094]) {
        // jump!
        if (!player.jumping && maps.map[Math.floor(player.y / 16) + 1][Math.floor(player.x / 16) + 1] != 0 || maps.map[Math.floor(player.y / 16) + 1][Math.floor(player.x / 16)] != 0) {
            player.jumping = true;
            player.velY = -player.speed * 2.1;
            
        }
    }

    // right arrow
    if (keys[68]) {
        // increase speed to the right
        if (player.velX < player.speed) {
            player.velX++;
        }
    }

    // left arrow
    if (keys[65]) {
        // increase speed to the right
        if (player.velX > -player.speed) {
            player.velX--;
        }
    }

    // apply friction
    player.velX *= friction;

    // apply gravity
    player.velY += gravity;

    // move the player
    player.x += player.velX;
    player.y += player.velY;

    // don't allow the player to go outside the canvas
    if (player.x >= width - player.width) {
        player.x = width - player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    // don't allow the player to jump off the screen

    if (maps.map[Math.floor(player.y / 16) - 1][Math.floor(player.x / 16)] != 0 && player.jumping == true || maps.map[Math.floor(player.y / 16) - 1][Math.floor(player.x / 16) + 1] != 0 && player.jumping == true) {
        player.y = Math.floor(player.y / 16) * 16;
        player.velY = 0;
        keys[38] = false;
        keys[32] = false;
        player.jumping = false;

    } 
    if (maps.map[Math.floor(player.y / 16) + 1][Math.floor(player.x / 16) + 1] != 0 || maps.map[Math.floor(player.y / 16) + 1][Math.floor(player.x / 16)] != 0) {
        player.y = Math.floor((player.y) / 16) * 16;
        player.velY = 0;
        player.jumping = false;
        }

    // draw player
    
    ppic = new Image();              // "Создаём" изображение
    ppic.src = 'mario.png'; 
 // Источник изображения, позаимствовано на хабре
    ppic.onload = function() {
        ctx.clearRect(0, 0, width, height);    // Событие onLoad, ждём момента пока загрузится изображение
        ctx.drawImage(ppic, player.x, player.y);  // Рисуем изображение от точки с координатами 0, 0
    }
    // do the loop again
    requestAnimationFrame(update);
}

window.addEventListener("load", function () {
    update();
});

window.addEventListener("keydown", function (e) {
    keys[e.keyCode] = true;
});

window.addEventListener("keyup", function (e) {
    keys[e.keyCode] = false;
});