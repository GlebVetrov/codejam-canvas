import './style.scss';

import matrix4x4 from './json/4x4';
import matrix32x32 from './json/32x32';
document.addEventListener("DOMContentLoaded", canvas);

function canvas() {

    const cvs = document.getElementById('canvas');
    let context = cvs.getContext('2d');

    window.addEventListener("resize", function () {
        // if (window.innerWidth > 1400 && window.innerHeight > 900) {
        //     cvs.width = 724;
        //     cvs.height = 724;
        // }

        // if (window.innerWidth  1400 && window.innerHeight > 900) {
        //     cvs.width = 724;
        //     cvs.height = 724;
        // }
        // cvs.width = window.innerWidth;
        // cvs.height = window.innerHeight;
    });

    function render(matrix, url) {

        const height = matrix[0].length,
              width = matrix.length,
              scale = cvs.width/width;

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

    context.fillStyle = 'gray';
    context.fillRect(0, 0, cvs.width, cvs.height);

    render(matrix32x32);
 }
