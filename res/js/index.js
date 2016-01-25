/**
 * Created by frostornge on 2016. 1. 20..
 */

// 초기화
function init() {
    Canvas.setAttribute("width", WIDTH + "");
    Canvas.setAttribute("height", HEIGHT + "");

    window.setInterval(render, SPEED);
}

// 렌더링 함수.
function render(){
    var context = Canvas.getContext('2d');

    context.fillStyle = "lightgreen";
    context.fillRect(2, 2, 1, 1);
}