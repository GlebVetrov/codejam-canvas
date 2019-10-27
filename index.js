import './style.scss';

import matrix4x4 from './json/4x4';
import matrix32x32 from './json/32x32';
document.addEventListener("DOMContentLoaded", canvas);

function canvas() {
    const cvs = document.getElementById('canvas'),
          scale = window.innerWidth/9.714,
          height = matrix4x4[0].length,
          width = matrix4x4.length;
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

    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            context.fillStyle = `#${matrix4x4[row][col]}`; // Set the color to the one specified
            context.fillRect(row * scale, col * scale, scale, scale); // Actually draw the rectangle
        }
    }

}
