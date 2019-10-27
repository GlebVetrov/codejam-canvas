import './style.scss';

import matrix4x4 from './json/4x4';
import matrix32x32 from './json/32x32';
document.addEventListener("DOMContentLoaded", canvas);

function canvas() {
    const control4x4 = document.querySelector('.switch-panel__item:nth-child(1)');
    const control32x32 = document.querySelector('.switch-panel__item:nth-child(2)');
    const picture = document.querySelector('.switch-panel__item:nth-child(3)');

    let status = 'clear';

    control4x4.addEventListener('click', () => renderMatrix(matrix4x4));
    control32x32.addEventListener('click', () => renderMatrix(matrix32x32));
    picture.addEventListener('click', renderImg);

    const cvs = document.getElementById('canvas');
    let context = cvs.getContext('2d');

    window.addEventListener("resize", function () {
        resize();
    });

    function renderMatrix(matrix) {

        const height = matrix[0].length,
              width = matrix.length,
              scale = cvs.width/width;

        if (matrix.length > 5) {
            status = '32x32';
        } else {
            status = '4x4';
        }

        for(let row = 0; row < height; row++) {
            for(let col = 0; col < width; col++) {
                if (matrix.length > 5) {
                    console.log();
                    context.fillStyle = `rgba(${matrix[row][col].join(',')})`;
                } else {
                    context.fillStyle = `#${matrix[row][col]}`;
                }
                context.fillRect(row * scale, col * scale, scale, scale);
            }
        }
    }

    function renderImg() {
        status = 'picture';
        let img = new Image();
        img.onload = drawImg;
        img.src = 'img/rsschool.png';

        function drawImg() {
            context.drawImage(img, 0,0, cvs.width, cvs.height);
        }

    }

    function resize() {
        if (window.innerWidth >= 1400 && cvs.width !== 736) {
            cvs.width = 736;
            cvs.height = 736;
            reRander();
            return;
        }
        if (window.innerWidth <= 1050 && cvs.width !== 320) {
            cvs.width = 320;
            cvs.height = 320;
            reRander();
            return;
        }
        if (window.innerWidth < 1400 && window.innerWidth > 1050 && cvs.width !== 512) {
            cvs.width = 512;
            cvs.height = 512;
            reRander();
        }
    }

    function reRander() {
        const listRender = {
            'clear': drawBg,
            '4x4': function () {
                renderMatrix(matrix4x4);
            },
            '32x32': function () {
                renderMatrix(matrix32x32);
            },
            'picture': renderImg
        }

        listRender[status]();
    }

    function drawBg () {
        context.fillStyle = 'gray';
        context.fillRect(0, 0, cvs.width, cvs.height);
    }


    resize();
    reRander();
 }
