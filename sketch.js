let perguntas = [
  {pergunta: "Qual festa celebra as tradições do campo com danças e comidas típicas?", opcoes: ["Carnaval", "Festa Junina", "Ano Novo", "Páscoa"], resposta: 1},
  {pergunta: "O que o campo fornece que abastece a cidade diariamente?", opcoes: ["Tecnologia", "Roupas", "Alimentos", "Veículos"], resposta: 2},
  {pergunta: "Qual tecnologia ajuda agricultores a prever o clima?", opcoes: ["Satélite", "Rádio", "Televisão", "Telefone"], resposta: 0},
  {pergunta: "Qual meio facilita a chegada dos produtos do campo à cidade?", opcoes: ["Trator", "Caminhão", "Bicicleta", "Avião"], resposta: 1},
  {pergunta: "Qual alimento típico do campo está presente em muitas festas juninas?", opcoes: ["Sushi", "Cuscuz", "Lasanha", "Pizza"], resposta: 1},
  {pergunta: "Qual produto do campo é essencial para fazer pão?", opcoes: ["Arroz", "Milho", "Trigo", "Café"], resposta: 2},
  {pergunta: "Que tipo de música tradicional aproxima o campo da cidade em festas?", opcoes: ["Rock", "Forró", "Jazz", "Samba"], resposta: 1},
  {pergunta: "Qual destes alimentos é produzido principalmente no campo?", opcoes: ["Carne", "Celular", "Tênis", "Geladeira"], resposta: 0},
  {pergunta: "O que os agricultores usam para irrigar as plantações?", opcoes: ["Internet", "Ônibus", "Sistema de irrigação", "Computador"], resposta: 2},
  {pergunta: "Qual benefício a cidade pode oferecer ao campo?", opcoes: ["Chuva", "Turismo", "Colheita", "Pastagem"], resposta: 1},
  {pergunta: "Qual é uma maneira de valorizar a cultura do campo na cidade?", opcoes: ["Ignorar festas típicas", "Promover feiras agrícolas", "Usar apenas produtos importados", "Evitar alimentos naturais"], resposta: 1},
  {pergunta: "O que representa a união entre campo e cidade?", opcoes: ["Desperdício de alimentos", "Comércio justo", "Isolamento rural", "Poluição urbana"], resposta: 1},
  {pergunta: "Qual transporte é mais usado para levar frutas do campo para a cidade?", opcoes: ["Navio", "Caminhão", "Trem-bala", "Helicóptero"], resposta: 1},
  {pergunta: "Qual destes alimentos é uma mistura típica de culturas do campo e da cidade?", opcoes: ["Hambúrguer com pão de milho", "Pizza congelada", "Refrigerante", "Sopa instantânea"], resposta: 0},
  {pergunta: "Qual valor está relacionado à convivência entre campo e cidade?", opcoes: ["Competição", "Desigualdade", "Cooperação", "Destruição"], resposta: 2}
];

let perguntaAtual = 0;
let pontos = 0;
let tela = "inicio";

function setup() {
  createCanvas(800, 600);  // Aumentando o tamanho da tela
  textAlign(CENTER, CENTER);
  textSize(18);
}

function draw() {
  desenharCenario();

  if (tela === "inicio") {
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(32);
    text("Jogo: Conexão Campo-Cidade", width / 2, height / 2 - 40);
    textSize(24);
    text("Clique para começar", width / 2, height / 2 + 20);
  } else if (tela === "jogo") {
    mostrarPergunta();
  } else if (tela === "fim") {
    fill(255);
    stroke(0);
    strokeWeight(3);
    textSize(32);
    text("Fim de jogo!", width / 2, 100);
    textSize(24);
    text("Pontuação: " + pontos + "/" + perguntas.length, width / 2, 140);

    // Botões de reiniciar ou sair
    if (mouseX > 250 && mouseX < 550 && mouseY > 400 && mouseY < 440) {
      fill(50, 180, 50);
      cursor(HAND);
    } else {
      fill(100, 220, 100);
      cursor(ARROW);
    }
    noStroke();
    rect(250, 400, 300, 40, 15);
    fill(255);
    stroke(0);
    strokeWeight(1);
    text("Jogar novamente", 400, 420);

    if (mouseX > 250 && mouseX < 550 && mouseY > 460 && mouseY < 500) {
      fill(180, 50, 50);
      cursor(HAND);
    } else {
      fill(220, 100, 100);
      cursor(ARROW);
    }
    noStroke();
    rect(250, 460, 300, 40, 15);
    fill(255);
    stroke(0);
    strokeWeight(1);
    text("Sair do jogo", 400, 480);
  } else if (tela === "sair") {
    background(0, 150, 70);
    fill(255);
    noStroke();
    textSize(28);
    text("Obrigado por jogar!", width / 2, height / 2);
  }
}

function desenharCenario() {
  // Cenario de campo
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(30, 144, 255), color(135, 206, 250), inter);
    stroke(c);
    line(0, i, width, i);
  }

  // Campo verde
  noStroke();
  fill(34, 139, 34);
  rect(0, height * 0.65, width, height * 0.35);

  // Sol amarelo
  fill(255, 223, 0);
  noStroke();
  ellipse(650, 70, 100, 100); // Ajustando a posição do sol
}

function mostrarPergunta() {
  let p = perguntas[perguntaAtual];

  fill(255);
  stroke(0);
  strokeWeight(3);
  textSize(24);
  text(p.pergunta, width / 2, 50);

  textSize(20); // Aumentando o tamanho da fonte das alternativas
  for (let i = 0; i < p.opcoes.length; i++) {
    let y = 150 + i * 70; // Ajustando o espaçamento entre as alternativas

    // Caixa de respostas com bordas arredondadas e cor mais contrastante
    fill(0, 150, 0); // Cor mais forte para destacar
    rect(width / 2 - 200, y, 400, 60, 15); // Aumentando o tamanho da caixa

    fill(255); // Texto branco para contraste
    stroke(0);
    strokeWeight(1);
    text(p.opcoes[i], width / 2, y + 30); // Centralizando as opções
  }
}

function mousePressed() {
  if (tela === "inicio") {
    tela = "jogo";
  } else if (tela === "jogo") {
    let p = perguntas[perguntaAtual];
    for (let i = 0; i < p.opcoes.length; i++) {
      let y = 150 + i * 70; // Ajustando o espaçamento entre as alternativas
      if (mouseX > width / 2 - 200 && mouseX < width / 2 + 200 && mouseY > y && mouseY < y + 60) { // Ajustando a área clicável
        if (i === p.resposta) {
          pontos++;
        }
        perguntaAtual++;
        if (perguntaAtual >= perguntas.length) {
          tela = "fim";
        }
        break;
      }
    }
  } else if (tela === "fim") {
    if (mouseX > 250 && mouseX < 550 && mouseY > 400 && mouseY < 440) {
      perguntaAtual = 0;
      pontos = 0;
      tela = "jogo";
    }

    if (mouseX > 250 && mouseX < 550 && mouseY > 460 && mouseY < 500) {
      tela = "sair";
    }
  }
}
