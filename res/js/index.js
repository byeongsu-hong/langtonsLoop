/**
 * Created by frostornge on 2016. 1. 20..
 */

// 초기화
function init() {
    Canvas.setAttribute("width", WIDTH + "");
    Canvas.setAttribute("height", HEIGHT + "");

    initFloor();
    initPatternToFloor(parseInt(WIDTH / 2) - 5, parseInt(HEIGHT / 2) - 5);

    render();
    window.setInterval(render, SPEED);
}

// 렌더링 함수.
function render(){
    var context = Canvas.getContext('2d');

    var temp = [[]];
    duplicateFloor(temp);

    drawFloor(context);
    nextGen(temp);
}