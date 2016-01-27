/**
 * Created by frostornge on 2016. 1. 26..
 */

function Cell(x, y, stat) {
    this.posx = x;
    this.posy = y;
    this.stat = stat;
}

function nextGen(temp) {
    for(var x = 0; x < Floor.length; x++) {
        for(var y = 0; y < Floor[x].length; y++) {
            checkPattern(Floor[x][y], temp);
        }
    }
}

function checkPattern(cell, temp) {
    var up = cell.posy - 1;
    var dw = cell.posy + 1;
    var lt = cell.posx - 1;
    var rt = cell.posx + 1;

    if(up == -1) {up = HEIGHT - 1}
    if(dw == HEIGHT) {dw = 0}
    if(lt == -1) {lt = WIDTH - 1}
    if(rt == WIDTH) {rt = 0}

    for(var i = 0; i < CONDITIONS.length; i++) {
        var condition = CONDITIONS[i];

        if(condition[0] == temp[cell.posx][cell.posy].stat) {
            for(var j = 1; j <= 4; j++) {
                if (condition[1] == temp[cell.posx][up].stat &&
                    condition[2] == temp[rt][cell.posy].stat &&
                    condition[3] == temp[cell.posx][dw].stat &&
                    condition[4] == temp[lt][cell.posy].stat) {
                    cell.stat = condition[5];
                }

                if (condition[2] == temp[cell.posx][up].stat &&
                    condition[3] == temp[rt][cell.posy].stat &&
                    condition[4] == temp[cell.posx][dw].stat &&
                    condition[1] == temp[lt][cell.posy].stat) {
                    cell.stat = condition[5];
                }

                if (condition[3] == temp[cell.posx][up].stat &&
                    condition[4] == temp[rt][cell.posy].stat &&
                    condition[1] == temp[cell.posx][dw].stat &&
                    condition[2] == temp[lt][cell.posy].stat) {
                    cell.stat = condition[5];
                }

                if (condition[4] == temp[cell.posx][up].stat &&
                    condition[1] == temp[rt][cell.posy].stat &&
                    condition[2] == temp[cell.posx][dw].stat &&
                    condition[3] == temp[lt][cell.posy].stat) {
                    cell.stat = condition[5];
                }
            }
        }
    }
}