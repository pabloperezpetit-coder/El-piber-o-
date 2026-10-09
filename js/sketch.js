


const W = 500;
const H = 620;

let escena;
let tiempo = 0;
let energia = 0;
let fragmentos = [];

const COLOR = {
  fondo: "#090A18",
  violeta: "#6125A8",
  magenta: "#F12E8D",
  cyan: "#35F4EF",
  rojo: "#FF493F",
  amarillo: "#FFD76A",
  oscuro: "#101326",
  piel: "#E7C5B4"
};

function setup() {
  const canvas = createCanvas(W, H);
  canvas.parent("canvas-obra");

  pixelDensity(1);
  frameRate(30);

  escena = createGraphics(W, H);
  escena.pixelDensity(1);

  for (let i = 0; i < 65; i++) {
    fragmentos.push({
      x: random(W),
      y: random(H),
      ancho: random(5, 45),
      alto: random(1, 5),
      velocidad: random(0.2, 1.2),
      fase: random(TWO_PI)
    });
  }

  const estado = document.getElementById("estado-canvas");
  if (estado) estado.remove();

  const boton = document.getElementById("descargar-obra");

  if (boton) {
    boton.disabled = false;

    boton.addEventListener("click", () => {
      saveCanvas("el-grito-glitch-art", "png");
    });
  }
}

function draw() {
  tiempo += 0.025;

  const mouseActivo =
    mouseX >= 0 && mouseX <= W &&
    mouseY >= 0 && mouseY <= H;

  let objetivo = mouseActivo
    ? map(mouseX, 0, W, 0.4, 1)
    : 0.12;

  energia = lerp(energia, objetivo, 0.08);

  dibujarEscena();

  background(COLOR.fondo);

  push();
  blendMode(ADD);

  tint(255, 45, 45, 65);
  image(escena, -3 - energia * 7, 0);

  tint(30, 255, 255, 65);
  image(escena, 3 + energia * 7, 0);

  pop();
  noTint();

  image(escena, 0, 0);

  dibujarGlitch();

  dibujarFragmentos();

  dibujarScanlines();

  dibujarInterfaz();
}


function dibujarEscena() {
  let g = escena;

  g.background(COLOR.fondo);

  g.noStroke();

  for (let y = 0; y < 240; y += 12) {
    let tonos = [
      COLOR.violeta,
      COLOR.magenta,
      COLOR.rojo,
      "#B22C77",
      "#34247A"
    ];

    g.fill(tonos[floor(y / 12) % tonos.length]);

    g.rect(0, y, W, 12);
  }

  for (let i = 0; i < 13; i++) {
    let y = 15 + i * 17;

    g.noFill();
    g.stroke(
      i % 2 === 0 ? COLOR.cyan : COLOR.amarillo
    );
    g.strokeWeight(i % 3 === 0 ? 5 : 2);

    g.beginShape();

    for (let x = -20; x <= W + 20; x += 20) {
      let onda =
        sin(x * 0.018 + i * 0.8 + tiempo) * 15;

      let salto =
        sin(x * 0.07 + i * 3) > 0.7 ? 12 : 0;

      g.vertex(x, y + onda + salto);
    }

    g.endShape();
  }

  g.noStroke();
  g.fill("#151E45");

  g.beginShape();
  g.vertex(0, 190);
  g.vertex(120, 220);
  g.vertex(240, 195);
  g.vertex(390, 265);
  g.vertex(500, 220);
  g.vertex(500, 620);
  g.vertex(0, 620);
  g.endShape(CLOSE);

  g.fill("#102F47");

  g.beginShape();
  g.vertex(180, 295);
  g.vertex(500, 270);
  g.vertex(500, 620);
  g.vertex(320, 620);
  g.endShape(CLOSE);

  for (let i = 0; i < 55; i++) {
    let x = 250 + (i * 47) % 250;
    let y = 300 + (i * 29) % 300;

    g.fill(
      i % 2 === 0 ? COLOR.cyan : COLOR.violeta
    );

    g.rect(x, y, 15 + (i % 5) * 7, 2);
  }

  g.fill("#39234E");

  g.triangle(0, 210, 0, 620, 455, 620);

  g.fill("#6C2D61");

  g.triangle(0, 290, 0, 620, 310, 620);

  g.stroke(COLOR.magenta);
  g.strokeWeight(2);

  g.line(0, 280, 420, 620);
  g.line(0, 330, 310, 620);
  g.line(0, 390, 200, 620);
  g.line(0, 470, 100, 620);

  g.stroke("#170F2D");
  g.strokeWeight(17);
  g.line(-10, 245, 496, 587);

  g.stroke(COLOR.cyan);
  g.strokeWeight(4);
  g.line(-10, 240, 499, 580);

  g.stroke(COLOR.violeta);
  g.strokeWeight(8);

  g.line(20, 265, 20, 355);
  g.line(90, 315, 90, 430);
  g.line(170, 370, 170, 510);
  g.line(460, 560, 460, 620);

  g.noStroke();
  g.fill("#080D1B");

  g.rect(38, 245, 14, 75);
  g.rect(65, 260, 14, 75);

  g.circle(45, 237, 18);
  g.circle(72, 252, 18);

  dibujarFigura(g);
}


function dibujarFigura(g) {
  g.push();

  let vibracion =
    sin(tiempo * 7) * energia * 3;

  g.translate(vibracion, 0);

  g.noStroke();

  g.fill(COLOR.cyan);

  g.beginShape();
  g.vertex(255, 445);
  g.vertex(325, 445);
  g.vertex(380, 620);
  g.vertex(210, 620);
  g.endShape(CLOSE);

  g.fill(COLOR.oscuro);

  g.beginShape();
  g.vertex(242, 440);
  g.vertex(303, 435);
  g.vertex(350, 620);
  g.vertex(185, 620);
  g.endShape(CLOSE);

  g.fill("#35236A");

  g.triangle(250, 480, 290, 500, 230, 620);
  g.triangle(300, 480, 330, 620, 270, 610);

  g.fill(COLOR.piel);
  g.rect(253, 410, 42, 90);

  g.fill(COLOR.magenta);
  g.ellipse(279, 370, 125, 162);

  g.fill(COLOR.piel);
  g.ellipse(271, 367, 112, 150);

  g.fill("#C69CA9");

  g.triangle(220, 350, 255, 315, 245, 410);
  g.triangle(320, 355, 295, 315, 300, 425);

  g.fill(COLOR.oscuro);

  g.rect(244, 346, 15, 20, 3);
  g.rect(288, 346, 15, 20, 3);

  g.fill(COLOR.cyan);
  g.rect(248, 349, 5, 5);
  g.rect(292, 349, 5, 5);

  g.fill("#AA8495");
  g.triangle(273, 365, 262, 389, 283, 389);

  let apertura =
    42 + sin(tiempo * 5) * energia * 8;

  g.fill(COLOR.oscuro);
  g.ellipse(274, 415, 26, apertura);

  g.noFill();
  g.stroke(COLOR.cyan);
  g.strokeWeight(2);
  g.ellipse(274, 415, 35, apertura + 10);

  g.stroke(COLOR.oscuro);
  g.strokeWeight(25);

  g.line(220, 385, 215, 445);
  g.line(215, 445, 195, 510);

  g.line(325, 385, 333, 445);
  g.line(333, 445, 350, 510);

  g.stroke(COLOR.piel);
  g.strokeWeight(18);

  g.line(220, 365, 218, 407);
  g.line(325, 365, 327, 407);

  g.pop();
}


function dibujarGlitch() {
  let cantidad = floor(energia * 15);

  for (let i = 0; i < cantidad; i++) {
    let y = floor(random(H));
    let alto = floor(random(2, 18));

    let desplazamiento =
      random(-35, 35) * energia;

    copy(
      escena,
      0, y, W, alto,
      desplazamiento, y, W, alto
    );
  }
}


function dibujarFragmentos() {
  noStroke();

  for (let f of fragmentos) {
    let x =
      f.x + sin(tiempo * f.velocidad + f.fase) * 12;

    let y = f.y;

    fill(
      random() > 0.5
        ? color(53, 244, 239, 100)
        : color(241, 46, 141, 100)
    );

    rect(x, y, f.ancho, f.alto);
  }
}


function dibujarScanlines() {
  stroke(0, 0, 0, 45);
  strokeWeight(1);

  for (let y = 0; y < H; y += 4) {
    line(0, y, W, y);
  }
}


function dibujarInterfaz() {
  noFill();
  stroke(COLOR.cyan);
  strokeWeight(1);

  line(15, 15, 55, 15);
  line(15, 15, 15, 55);

  line(W - 15, 15, W - 55, 15);
  line(W - 15, 15, W - 15, 55);

  line(15, H - 15, 55, H - 15);
  line(15, H - 15, 15, H - 55);

  line(W - 15, H - 15, W - 55, H - 15);
  line(W - 15, H - 15, W - 15, H - 55);

  noStroke();
  fill(COLOR.cyan);

  textFont("monospace");
  textSize(10);

  text("ERROR_1893", 24, 36);
  text("EMOTION.EXE", 24, H - 30);

  textAlign(RIGHT);
  text("SIGNAL LOST", W - 24, H - 30);
  textAlign(LEFT);
}
