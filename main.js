(function() {
    'use strict';
    let btn = document.getElementById('dec');
    let dem = document.getElementById('demo');

    let matrix = [];
    let pyramid = [];


    btn.addEventListener('click', function(evt) {
        evt.preventDefault();
        let x = document.getElementById('nrlines').value;
        dem.innerHTML = ' ';
        
        matrix = genMatrix(x);
        printMatrix(x, matrix);

        pyramid = genPyramid(x, matrix);
        printPyramid(x, pyramid);
    })

    // generate the matrix
    function genMatrix(x) {
        for (let i = 0; i < x; i++) {
            matrix[i] = [];
            for (let j=0; j < x ; j++) {
                matrix[i][j] = '0';
            }
        }
        return matrix;
    } 

    // print the matrix
    function printMatrix(x, matrix) {
        let el = document.createElement('p');
        el.innerHTML = 'The matrix is: ';
        document.getElementById('demo').appendChild(el);

        let text = ' ';
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                if (j === x-1) {
                    text += matrix[i][j] + `<br>`;
                } else {
                    text += matrix[i][j] + ' ';
                }
            }
        }

        el = document.createElement('p');
        el.innerHTML = text;
        document.getElementById('demo').appendChild(el);
    }

    // generate the pyramid
    function genPyramid(x, pyramid) {
        for (let i = 0; i < x; i++) {
            pyramid[i] = [];
            for (let j=0; j < x ; j++) {
                pyramid[i][j] = '0';
            }
        }
        let control = x - Math.floor(x/2);
        console.log('control este ', control);

        for (let j = 0; j < x; j++){
            pyramid[x-1][j] = 'x';
        }

        if (x % 2 === 0) {
            for (let i = x-2; i >= x-control; i--) {
                for (let j = x-i-1 ; j < x-control; j++) {  
                    pyramid[i][j] = 'x';
                    pyramid[i][x-j-1]   = 'x';
                }
            }

        }

        if (x % 2 !== 0) {
            for (let i = x-2; i >= x-control; i--) {
                for (let j = x-i-1 ; j <= x-control; j++) {  
                    pyramid[i][j] = 'x';
                    pyramid[i][x-j-1]   = 'x';
                }
            }
        }
        return pyramid;
    }

    // print the pyramid
    function printPyramid(x, pyramid) {
        let el = document.createElement('p');
        el.innerHTML = 'The pyramid is: ';
        document.getElementById('demo').appendChild(el);

        let text = ' ';
        for (let i = 0; i < x; i++) {
            for (let j = 0; j < x; j++) {
                if (j === x-1) {
                    text += pyramid[i][j] + `<br>`;
                } else {
                    text += pyramid[i][j] + ' ';
                }
            }
        }

        el = document.createElement('p');
        el.innerHTML = text;
        document.getElementById('demo').appendChild(el);
    }
    
})();