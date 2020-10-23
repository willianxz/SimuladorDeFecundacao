var ovuloPositionX;
var ovuloPositionY;
var ovuloSize = 100;
var distOvulo;
var totalEspermatozoides = 100;
var espermatozoidesOvulados = 0;
var espermatozoidesMortos = 0;

function setup() {  
  createCanvas(windowWidth, windowHeight);  //No Setup, ele não aceita width/2 e height/2, simplesmente ignora isso.
  noStroke();
  background(0);
  drawEspermatozoides();
}

function drawEspermatozoides(){
  
   ovuloPositionX = width/2; //Já dentro de uma outra função ele aceita.
   ovuloPositionY = height/2;
  
   fill(75,0,130);
   stroke(0,191,255);
   ellipse(ovuloPositionX, ovuloPositionY, ovuloSize, ovuloSize); //Faça a esfera maior no centro.  
   noStroke();   
   for(var i = 0; i < totalEspermatozoides; i ++){ //Quero 100 esferas com as posições aleatoria da tela.
     
   var randomEsferaMenorPositionX = random(0, windowWidth); //De a posição X aleatoria para uma esfera.
   var randomEsferaMenorPositionY = random(0, windowHeight); //De a posição Y aleatoria para uma esfera.
   
   //Calculamos se as posições da esfera menor coincidem com as da esfera maior.
   distOvulo = dist(randomEsferaMenorPositionX, randomEsferaMenorPositionY, ovuloPositionX, ovuloPositionY); 
    if(distOvulo < ovuloSize/2){ //Se acertou dentro da esfera maior, mostre a esfera menor com a cor vermelha.
       fill(255, 0, 0); 
       ellipse(randomEsferaMenorPositionX, randomEsferaMenorPositionY, 10, 10);
       espermatozoidesOvulados++;
    }else{  //Senão acertou, apenas mostre a esfera menor com a cor preta, nessa posição que está fora da esfera maior.
       fill(255);
       ellipse(randomEsferaMenorPositionX, randomEsferaMenorPositionY, 10, 10);
       espermatozoidesMortos++;
    }
  }
}


function draw(){
   var randomEsferaMenorPositionX = random(0, windowWidth); //De a posição X aleatoria para uma esfera.
   var randomEsferaMenorPositionY = random(0, windowHeight); //De a posição Y aleatoria para uma esfera.
   
   //Calculamos se as posições da esfera menor coincidem com as da esfera maior.
   distOvulo = dist(randomEsferaMenorPositionX, randomEsferaMenorPositionY, ovuloPositionX, ovuloPositionY); 
    if(distOvulo < ovuloSize/2){ //Se acertou dentro da esfera maior, mostre a esfera menor com a cor vermelha.
       fill(255, 0, 0); 
       ellipse(randomEsferaMenorPositionX, randomEsferaMenorPositionY, 10, 10);
       espermatozoidesOvulados++;
    }else{  //Senão acertou, apenas mostre a esfera menor com a cor preta, nessa posição que está fora da esfera maior.
       fill(255);
       ellipse(randomEsferaMenorPositionX, randomEsferaMenorPositionY, 10, 10);
       espermatozoidesMortos++;
    }
    
    
    fill(255);
    stroke(0);
    strokeWeight(10);
    textSize(18);
    text("Quantidade de óvulos: 1", 55, 70);
    text("Total de Espermatozoides: "+totalEspermatozoides, 55, 100);
    text("Espermatozoides Ovulados: "+espermatozoidesOvulados, 55, 130);
    text("Espermatozoides Mortos: "+espermatozoidesMortos, 55, 160);
    
    noStroke();
    totalEspermatozoides++;
}
