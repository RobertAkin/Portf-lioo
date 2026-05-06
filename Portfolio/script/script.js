const botao = document.getElementById("modoClaro/Escuro");

let claro = true;

botao.addEventListener("click", function() {
    if(claro) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        botao.textContent = "Mudar para Modo Claro"; // Texto do que o botão VAI fazer
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        botao.textContent = "Mudar para Modo Escuro";
    }
    claro = !claro;
});

const NOME = "Robert Bernardo";
let tituloProfissional = "Desenvolvimento de Sistema / Ator";
let minhaBio = "Uma pessoa cansada porém gente boa"; 
let anoFormatura = 2026; 

// CORREÇÃO: Usando a variável correta (NOME)
document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;

let hoje = new Date();

let dataFormatura = new Date(2026, 11, 15); 

let diferenca = dataFormatura - hoje;


diasRestantes = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
mesesRestantes = Math.floor(diasRestantes / 30);
anosRestantes = Math.floor(mesesRestantes / 12);

let textoFormatura; 

if (diferenca > 0) {

    textoFormatura = `Faltam ${anosRestantes} ano(s), ${mesesRestantes % 12} mês(es) e ${diasRestantes % 30} dia(s) para a formatura 🎓`;
} else {
    textoFormatura = "Você já se formou 🎓";
}

//----------------------------------------------------------------------------
document.getElementById("tempoFormatura").innerText = textoFormatura;

//Se anos para formatura for 0 ou <0 não que imprima ps anos
if(anoFormatura - anoAtual <= 0) {
    document.getElementById("tempoRestanteParaFormatura").innerText = '-';
} else if (anoFormatura - anoAtual === 1){
    document.getElementById("tempoRestanteParaFormatura")
    .innerText =`Tempo estante para formatura: ${anoFormatura - anoAtual} ano`;
} else {
    document.getElementById("tempoRestanteParaFormatura")
    innerText = `Tempo restante para formatura: ${anoFormatura - anoAtual} anos`;
};

    let diasRestantes = diasFormatura - diaAtual;
    let mesesRestantes = mesFormatura - mesAtual;
    let anosRestantes = anoFormatura - anoAtual;

    if (diasRestantes <= 0 && mesesRestantes <= 0 && anosRestantes <= 0){
                        document.getElementById("tempoRestanteParaFormatura").innerText ='Curso Concluído!';
}
//----------------------------------------------------------------
    let nota = 8;
    let aprovado = (nota >= 6)? "Aprovado" : "Reprovado";

   document.write('<p> Nota: ${nota} - ${aprovado} </p>');

    let diaSemana = DATAATUAL.getDAy() + 1;
    let diaEscrito
    switch (diaSemana){
        case 1: "Domingo"; break;
        case 2: "Segunda-feira"; break;
        case 3: "Terça-feira"; break;
        case 4: "Quarta-feira"; break;
        case 5: "Quinta-feira"; break;
        case 6: "Sexta-feira"; break;
        case 7: "Sábado";break;
        default: "Dia invalido";
    }

    document.write(`<p> Hoje é; ${diaEscrito} </p>`);
//===============================================================
// ─── QUIZ DE PERFIL ───────────────────────────────────────────
const perguntaEl   = document.getElementById("pergunta");
const btn1         = document.getElementById("btn-opcao1");
const btn2         = document.getElementById("btn-opcao2");
const resultadoEl  = document.getElementById("resultado-quiz");

let index = 0;
let pontosFront = 0;
let pontosBack = 0;

const perguntas = [
  {
    pergunta: "O que você prefere?",
    opcao1: "Criar layouts bonitos",
    opcao2: "Resolver problemas lógicos",
    tipo1: "front",
    tipo2: "back"
  },
  {
    pergunta: "O que parece mais interessante?",
    opcao1: "Cores, animações e design",
    opcao2: "APIs e banco de dados",
    tipo1: "front",
    tipo2: "back"
  },
  {
    pergunta: "Qual atividade você escolheria?",
    opcao1: "Melhorar a interface de um site",
    opcao2: "Criar um sistema de login",
    tipo1: "front",
    tipo2: "back"
  }
];

function carregarPergunta() {
  const atual = perguntas[index];

  perguntaEl.textContent = atual.pergunta;
  btn1.textContent = atual.opcao1;
  btn2.textContent = atual.opcao2;
}

btn1.addEventListener("click", () => {
  if (perguntas[index].tipo1 === "front") pontosFront++;
  else pontosBack++;

  proximaPergunta();
});

btn2.addEventListener("click", () => {
  if (perguntas[index].tipo2 === "front") pontosFront++;
  else pontosBack++;

  proximaPergunta();
});

function proximaPergunta() {
  index++;

  if (index < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  let resultado = "";

  if (pontosFront > pontosBack) {
    resultado = `
    <strong>🎨 Perfil Front-End!</strong><br>
    Você gosta de design, interface e experiência do usuário.<br>
    Tecnologias: HTML, CSS, React
    `;
    resultadoEl.style.backgroundColor = "#e8f4fd";
  } else if (pontosBack > pontosFront) {
    resultado = `
    <strong>⚙️ Perfil Back-End!</strong><br>
    Você gosta de lógica, dados e sistemas.<br>
    Tecnologias: Node.js, Python
    `;
    resultadoEl.style.backgroundColor = "#e8f8f0";
  } else {
    resultado = `
    <strong>🔄 Perfil Full Stack!</strong><br>
    Você manda bem em tudo!
    `;
    resultadoEl.style.backgroundColor = "#fff3cd";
  }

  resultadoEl.innerHTML = resultado;
  resultadoEl.style.padding = "12px";
  resultadoEl.style.borderRadius = "8px";

  perguntaEl.style.display = "none";
  btn1.style.display = "none";
  btn2.style.display = "none";
}

// inicia o quiz
carregarPergunta();