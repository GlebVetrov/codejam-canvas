import './style.scss';
document.addEventListener("DOMContentLoaded", canvas);
function canvas() {
    const cvs = document.getElementById('canvas');
    let context = cvs.getContext('2d');

    // cvs.width = 1000;
    // cvs.height = 1000;

    // window.addEventListener("resize", function () {
    //     w = cvs.width = window.innerWidth;
    //     h = cvs.height = window.innerHeight;
    // });

    context.fillStyle='red';
    context.fillRect(0, 0, cvs.width, cvs.height);
}