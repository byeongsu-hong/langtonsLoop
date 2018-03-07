/**
 * Created by frostornge on 2016. 1. 26..
 */

var Floor = [[]];

function initFloor() {
    for(var x = 0; x < WIDTH; x++) {
        var arrayX = [];

        for(var y = 0; y < HEIGHT; y++) {
            arrayX[y] = new Cell(x, y, 0);
        }

        Floor[x] = arrayX;
    }
}

function initPatternToFloor(startX, startY) {
    for(var x = 0; x < INITPTN.length; x++) {
        for(var y = 0; y < INITPTN[x].length; y++) {
            Floor[startY + y][startX + x].stat = parseInt(INITPTN[x][y]);
        }
    }
}

function logFloor(floor) {
    for(var x = 0; x < floor.length; x++) {
        var logger = [];

        for(var y = 0; y < floor[x].length; y++) {
            logger[y] = floor[x][y].stat;
        }

        console.log(logger);
    }
}

function drawFloor(context) {
    var floor = Floor;
    context.clearRect(0, 0, WIDTH, HEIGHT);

    for(var x = 0; x < floor.length; x++) {
        for(var y = 0; y < floor[x].length; y++) {
            var cell = floor[x][y];

            if(cell.stat !== "0") {
                context.fillStyle = COLORS[cell.stat];
                context.fillRect(cell.posx, cell.posy, 1, 1);
            }
        }
    }
}

function duplicateFloor(temp) {
    for(var x = 0; x < Floor.length; x++) {
        var arrayX = [];

        for(var y = 0; y < Floor[x].length; y++) {
            var cell = Floor[x][y];

            arrayX[y] = new Cell(cell.posx, cell.posy, cell.stat);
        }

        temp[x] = arrayX;
    }
}