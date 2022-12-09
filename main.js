 const canvas = document.getElementById("pong")  //um canvas auswählen
 const context = canvas.getContext("2d"); //const damit nur einmalige eingabe
//alle objekte werden als const bezeichnet
//SPIELER TOR

const user = {
 x: 0, //ganz linke Ecke wo tor ist =0
 y: canvas.height/2 - 100/2,
 width: 10,
 height: 100,
 color: "BLUE",
 score:0
}

//computer spieler

 const com = {
   x: canvas.width- 10, //1 tor= 10px, insgesamter weg von tor zu tor = canvas width d.h canvas width - 10px
  y:canvas.height/2 - 100/2, //hälfte der y strecke= mitte, 1 tor = 100 px ; hälfte= 50px = 100/2
  width: 10,
  height: 100,
  color: "WHITE",
  score: 0
 }

 //ball erstellen

 const ball = { //soll in die Mitte
 x:canvas.width/2, //da in der MItte= hälfte von canvas width
  y: canvas.height/2, //da in der Mitte = hälfte von canvas height
 radius: 10, //radius ist 10px
 speed: 5,  //wie schnell der ball sich ewegt
 velocityX: 5,
 velocityY: 5,
 color: "WHITE"

 }
 //TOR
 const netz = {
 x:canvas.width - 1,
  y: 0,
  width: 2,
  height: 10,
  color: "WHITE"
 }



//Funktion um Recheck zu zeichnen

function drawRechteck(x,y,w,h,color) { //alles definieren
 context.fillStyle = color; //ich will etwas mit FArbe füllen
 context.fillRect(x,y,w,h) // x Achse, y-a , width, height; rechteck füllen
}
 drawRechteck(0,0, canvas.width, canvas.height, "BLACK") //um rechteck mit schwarz ausmalen


//Funktion für kreis
 function drawKreis(x,y,r,color) { //dasselbe für kreis + radius r
  context.fillStyle = color; //mit farbe füllen
  context.beginPath() //beginn des weges des balls
  context.arc(x,y,r,0,Math.PI*2,false); //pi für kreis
  context.closePath(); //ende, begrenzung weg
  context.fill ();

 }

 drawKreis(100,100,50,"WHITE"); //Kreis farbe grösse

//Funktion text
 function drawText(text,x,y,color) {
  context.fillStyle = color;
  context.font = "45px fantasy"; //schriftart
  context.fillText(text,x,y);
 }
 drawText("pong",300,200,"WHITE")




// render
 function render() {
  drawRechteck(0,0,canvas.width, canvas.height, "BLACK") //alles nochmal zusammenngefasst



  //für spieler und com

  drawRechteck(user.x,user.y,user.width,user.height,user.color);
  drawRechteck(com.x,com.y,com.width,com.height,com.color);


  //für den BAll
  drawKreis(ball.x,ball.y, ball.radius, ball.color);


 }

 function spiel() { //definieren render
  render();

 }

//loop
 const framePerSecond = 50;
 setInterval(spiel,1000/framePerSecond) //50 mal alle 1000ms =1 sec




