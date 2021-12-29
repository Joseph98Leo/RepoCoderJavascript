let canvas;
let ctx;
let FPS = 50;

let anchoCanvas = 400;
let altoCanvas = 640;

let anchoTablero = 10;
let altoTablero = 20;

let margenSuperior = 4;

let anchoF = 40;
let altoF = 40;

// (12 x 17) - ( 10 x 16 )
let tablero = [
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1]
];

// COLORES

let rojo = '#ff0000';
let morado = '#800080';
let naranja = '#ff8c00';
let amarillo = '#ffd700';
let verde = '#008000';
let cyan = '#00ced1';
let azul = '#0000cd';


const fichaGrafico = [
[
    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],

    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],

    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ],

    [
        [0,0,0,0],
        [0,1,1,0],
        [0,1,1,0],
        [0,0,0,0]
    ]
],

[
    [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
    ],

    [
        [0,0,0,0],
        [2,2,2,2],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0],
        [0,0,2,0]
    ]
],

[
    [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
    ],

    [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
    ],

    [
        [0,0,0,0],
        [0,0,3,3],
        [0,3,3,0],
        [0,0,0,0]
    ],

    [
        [0,0,3,0],
        [0,0,3,3],
        [0,0,0,3],
        [0,0,0,0]
    ]
],

[
    [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
    ],

    [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
    ],

    [
        [0,0,0,0],
        [0,4,4,0],
        [0,0,4,4],
        [0,0,0,0]
    ],

    [
        [0,0,0,4],
        [0,0,4,4],
        [0,0,4,0],
        [0,0,0,0]
    ]
],

[
    [
        [0,0,0,0],
        [0,5,5,5],
        [0,5,0,0],
        [0,0,0,0]
    ],

    [
        [0,0,5,0],
        [0,0,5,0],
        [0,0,5,5],
        [0,0,0,0]
    ],

    [
        [0,0,0,5],
        [0,5,5,5],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [0,5,5,0],
        [0,0,5,0],
        [0,0,5,0],
        [0,0,0,0]
    ]
],

[
    [
        [0,0,0,0],
        [0,6,6,6],
        [0,0,0,6],
        [0,0,0,0]
    ],

    [
        [0,0,6,6],
        [0,0,6,0],
        [0,0,6,0],
        [0,0,0,0]
    ],

    [
        [0,6,0,0],
        [0,6,6,6],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [0,0,6,0],
        [0,0,6,0],
        [0,6,6,0],
        [0,0,0,0]
    ]
],

[
    [
        [0,0,0,0],
        [0,7,7,7],
        [0,0,7,0],
        [0,0,0,0]
    ],

    [
        [0,0,7,0],
        [0,0,7,7],
        [0,0,7,0],
        [0,0,0,0]
    ],

    [
        [0,0,7,0],
        [0,7,7,7],
        [0,0,0,0],
        [0,0,0,0]
    ],

    [
        [0,0,7,0],
        [0,7,7,0],
        [0,0,7,0],
        [0,0,0,0]
    ]
]
];

let pieza;

let objPieza = function(){
    this.x = 0;
    this.y = 0;

    this.angulo = 0;
    this.tipo = 0;

    this.retraso = 50;
    this.fotograma = 0;

    this.nueva = function(){
        this.tipo = Math.floor(Math.random() * 7);
        this.y = 5;
        this.x = 4;
    };

    this.caer = function(){
        if(this.fotograma < this.retraso){
            this.fotograma++;
        }else{
            this.y++;
            this.fotograma = 0;
        }
    }

    this.dibuja = function(){
        for(py=0;py<4;py++){
            for(px=0;px<4;px++){

                if(fichaGrafico[this.tipo][this.angulo][py][px]!=0){


                if(fichaGrafico[this.tipo][this.angulo][py][px] == 1){
                ctx.fillStyle = rojo;
                }

                if(fichaGrafico[this.tipo][this.angulo][py][px] == 2){
                    ctx.fillStyle = naranja;
                }

                if(fichaGrafico[this.tipo][this.angulo][py][px] == 3){
                    ctx.fillStyle = amarillo;
                }
                
                if(fichaGrafico[this.tipo][this.angulo][py][px] == 4){
                        ctx.fillStyle = verde;
                }

                if(fichaGrafico[this.tipo][this.angulo][py][px] == 5){
                    ctx.fillStyle = cyan;
                }

                if(fichaGrafico[this.tipo][this.angulo][py][px] == 6){
                    ctx.fillStyle = azul;
                }

                if(fichaGrafico[this.tipo][this.angulo][py][px] == 7){
                    ctx.fillStyle = morado;
                }

                ctx.fillRect((this.x + px -1) * anchoF, (this.y + py - margenSuperior) * altoF, anchoF, altoF)
                }
            }
        }
    };

    this.rotar = function(){
        if(this.angulo < 3){
            this.angulo++;
        }else{
            this.angulo = 0;
        }
        console.log('Rotar')
    };

    this.abajo = function() {
        this.y++;
        console.log('abajo')
    };

    this.derecha = function() {
        this.x++;
        console.log('derecha')
    };

    this.izquierda = function() {
        this.x--;
        console.log('izquierda')
    };

    this.nueva();

};



function dibujaTablero(){
    for(py=margenSuperior;py<altoTablero;py++){
        for(px=1;px<anchoTablero;px++){

            if(tablero[py][px]!=0){


            if(tablero[py][px] == 1){
                ctx.fillStyle = rojo;
            }

            if(tablero[py][px] == 2){
                ctx.fillStyle = naranja;
            }

            if(tablero[py][px] == 3){
                ctx.fillStyle = amarillo;
            }
            
            if(tablero[py][px] == 4){
                ctx.fillStyle = verde;
            }

            if(tablero[py][px] == 5){
                ctx.fillStyle = cyan;
            }

            if(tablero[py][px] == 6){
                ctx.fillStyle = azul;
            }

            if(tablero[py][px] == 7){
                ctx.fillStyle = morado;
            }

            ctx.fillRect((px-1)*anchoF, (py-margenSuperior) * altoF, anchoF, altoF)
            }
        }
    }
}



function inicializaTeclado() {
    document.addEventListener('keydown', function(tecla){
        if(tecla.keyCode == 38){
            pieza.rotar();
        }
        if(tecla.keyCode == 40){
            pieza.abajo();
        }
        if(tecla.keyCode == 37){
            pieza.izquierda();
        }
        if(tecla.keyCode == 39){
            pieza.derecha();
        }
    })
}

function inicializa(){

    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.style.width = anchoCanvas;
    canvas.style.height = altoCanvas;

    pieza = new objPieza();

    inicializaTeclado();

    setInterval(function() {
        principal();
    },1000/FPS);
}

function borraCanvas(){
    canvas.width = anchoCanvas;
    canvas.height = altoCanvas;
}

function principal() {
    borraCanvas();
    dibujaTablero();
    pieza.caer();
    pieza.dibuja();
}