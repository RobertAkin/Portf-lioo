// ─── VALIDAÇÃO DE ENTRADA ───
let num;
do {
    num = prompt("Para entrar no site, diga um número par: ");
    if (num % 2 !== 0) {
        alert("Não deu certo, esse número não é par. Só aceito números pares!");
    }
} while (num % 2 !== 0);

// ─── CONFIGURAÇÕES INICIAIS ───
const DATAATUAL = new Date();

// ─── PREENCHIMENTO DE DADOS PESSOAIS ───
const NOME = "Robert Bernardo Maciel";
let tituloProfissional = "Desenvolvimento de Sistema / Ator";
let minhaBio = "Uma pessoa cansada porém gente boa"; 
let anoFormatura = 2026; 

document.getElementById("meuNome").innerText = NOME;
document.getElementById("tituloProfissional").innerText = tituloProfissional;
document.getElementById("minhaBio").innerText = minhaBio;
document.getElementById("anoFormatura").innerText = "Ano de Formatura: " + anoFormatura;

// ─── INFORMAÇÕES DE CARREIRA ───
let carreira = {
    Estudante: "TI & Teatro",
    Núcleo: "Divino Tablado",
    Peça_Atual: "Eu sei quem está me olhando",
    Próxima_Estreia: "20 de Junho",
    Local: "Auditório Sest Senat"
};

const divCarreira = document.createElement("div");
divCarreira.innerHTML = "<h3>Ficha de Carreira Artística</h3>"; 

for (let chave in carreira) {
    let nomeBonito = chave.replace("_", " ");
    divCarreira.innerHTML += `<p><strong>${nomeBonito}:</strong> ${carreira[chave]}</p>`;
}
document.querySelector("main").appendChild(divCarreira);

// ─── STATUS DE HABILIDADES ───
let habilidades = ["Lógica", "HTML/CSS", "Python", "Presença de Palco", "Memorização de Texto"];
const divHab = document.createElement("div");
divHab.innerHTML = "<h3>Habilidades & Desenvolvimento</h3>"; 

for (let item of habilidades) {
    if (item === "Lógica" || item === "Memorização de Texto" || item === "Presença de Palco") {
        divHab.innerHTML += `<p>🚀 ${item} - Em Evolução</p>`;
    } else {
        divHab.innerHTML += `<p>📚 ${item} - Estudando</p>`;
    }
}
document.querySelector("main").appendChild(divHab);

// ─── PREPARAÇÃO PARA ESTREIA ───
function cronogramaEnsaio(horasPorSessao) {
    return function (totalDeSemanas) {
        return horasPorSessao * totalDeSemanas;
    }
}

const calcularHorasTeatro = cronogramaEnsaio(2); 
let totalHorasEstreia = calcularHorasTeatro(5);

const divEstreia = document.createElement("div");
divEstreia.style.marginTop = "20px";
divEstreia.style.padding = "15px";
divEstreia.style.border = "2px solid #c7a6ba";
divEstreia.style.borderRadius = "8px";
divEstreia.style.background = "rgba(0, 0, 0, 0.2)";

divEstreia.innerHTML = `
    <h3>🎭 Próxima Estreia: "Eu sei quem está me olhando"</h3>
    <p><strong>Núcleo:</strong> O Divino Tablado</p>
    <p><strong>Data:</strong> 20 de Junho</p>
    <p><strong>Ensaio:</strong> Quintas, das 19h às 21h</p>
    <p><strong>Carga Horária de Ensaio:</strong> Faltam ${totalHorasEstreia} horas de preparação técnica!</p>
`;
document.querySelector("main").appendChild(divEstreia);

// ─── CÁLCULO DE TEMPO PARA FORMATURA ───
let dataFormatura = new Date(2026, 11, 15); 
let diferenca = dataFormatura - DATAATUAL;
let diasRestantesTotal = Math.ceil(diferenca / (1000 * 60 * 60 * 24));
let mesesRestantes = Math.floor(diasRestantesTotal / 30);

document.getElementById("tempoFormatura").innerText = 
    `Faltam ${mesesRestantes % 12} mês(es) e ${diasRestantesTotal % 30} dia(s) para a formatura 🎓`;


// ─── MODO CLARO / ESCURO / TRANSPARENTE ───
const botaoModo = document.getElementById("modoClaro/Escuro");
const containerMain = document.querySelector("main");

let modoAtual = "transparente"; 

function atualizarEstiloModo() {
    // Remove todas as classes de modo para evitar conflitos
    containerMain.classList.remove("modo-transparente-tema", "modo-claro-tema", "modo-escuro-tema");

    if (modoAtual === "transparente") {
        containerMain.classList.add("modo-transparente-tema");
        botaoModo.textContent = "Mudar para Modo Claro";
    } 
    else if (modoAtual === "claro") {
        containerMain.classList.add("modo-claro-tema");
        botaoModo.textContent = "Mudar para Modo Escuro";
    } 
    else if (modoAtual === "escuro") {
        containerMain.classList.add("modo-escuro-tema");
        botaoModo.textContent = "Mudar para Modo Transparente";
    }
}

atualizarEstiloModo();

botaoModo.addEventListener("click", function() {
    if (modoAtual === "transparente") {
        modoAtual = "claro";
    } else if (modoAtual === "claro") {
        modoAtual = "escuro";
    } else if (modoAtual === "escuro") {
        modoAtual = "transparente";
    }
    atualizarEstiloModo();
});


// ─── QUIZ DE PÁGINAS ───
const resultadoQuiz = document.getElementById("resultado-quiz");

let perguntaAtual = 0; 
let pontosEstetica = 0;
let pontosLogica = 0;

const estiloBotaoQuiz = `
    width: 85%; 
    max-width: 450px; 
    padding: 12px 15px; 
    margin: 8px auto; 
    border-radius: 8px; 
    border: none; 
    background-color: #f5b8dd; 
    color: #000; 
    font-weight: bold; 
    cursor: pointer; 
    display: block;
    font-size: 14px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    transition: 0.3s ease;
`;

function carregarPaginaQuiz() {
    if (perguntaAtual === 0) {
        resultadoQuiz.innerHTML = `
            <div style="text-align: center; margin-bottom: 15px;">
                <strong> Bem-vindo ao meu Quiz!</strong><br><br>
                Antes de explorar meu portfólio, que tal descobrir qual lado seu combina mais com a minha jornada entre o TI e o Teatro?
            </div>
            <button id="quiz-sim" class="botao-quiz-dinamico" style="${estiloBotaoQuiz}">Sim, iniciar o Quiz! 🎮</button>
            <button id="quiz-nao" class="botao-quiz-dinamico" style="${estiloBotaoQuiz}">Não, pular o Quiz ✕</button>
        `;

        document.getElementById("quiz-sim").addEventListener("click", function() {
            perguntaAtual = 1;
            carregarPaginaQuiz();
        });

        document.getElementById("quiz-nao").addEventListener("click", function() {
            perguntaAtual = -1; 
            carregarPaginaQuiz();
        });
    }
    else if (perguntaAtual === -1) {
        resultadoQuiz.innerHTML = `
            <div style="text-align: center;">
                <strong>⚙️ Modo Livre Ativado!</strong><br><br>
                Sem problemas! Sinta-se livre para explorar o restante do portfólio usando as outras funções da página. Se mudar de ideia, basta recarregar! 😉
            </div>
        `;
    }
    else if (perguntaAtual === 1) {
        montarHTMLPergunta(
            "1. Qual ambiente combina mais com o seu estilo de criação?",
            "Um cômodo com luzes, cores bonitas e sombras.",
            "Um cômodo escuro com o monitor brilhando em tema Dark."
        );
    } 
    else if (perguntaAtual === 2) {
        montarHTMLPergunta(
            "2. O título 'Eu sei quem está me olhando' te lembra o quê?",
            "Um espírito obsessor observando.",
            "Um hacker observando sua vítima pela webcam."
        );
    } 
    else if (perguntaAtual === 3) {
        montarHTMLPergunta(
            "3. Se a sua mente fosse uma música com visual marcante, ela seria:",
            "Uma performance cheia de expressões e sentimentos.",
            "Um algoritmo perfeitamente alinhado, com cores neutras."
        );
    } 
    else if (perguntaAtual === 4) {
        montarHTMLPergunta(
            "4. Na hora de resolver um problema difícil, você:",
            "Usa a intuição e a criatividade para achar uma saída fora da caixa.",
            "Analisa a estrutura linha por linha com paciência até decifrar o erro."
        );
    } 
    else if (perguntaAtual === 5) {
        montarHTMLPergunta(
            "5. Para você, qual é a melhor forma de contar uma história?",
            "Através dos gestos, de falas marcantes com entonação.",
            "Através de uma forma séria, olhando no olho para contar logo a história."
        );
    } 
    else {
        if (pontosEstetica > pontosLogica) {
            resultadoQuiz.innerHTML = `
                <div style="text-align: center;">
                    <strong>🎭 Perfil Dominante: Mais Criativo!</strong><br><br>
                    Seu foco principal está na estética, na expressão e no mistério. Você transforma o mundo em seu palco e brilha a cada dia!
                </div>
            `;
        } else {
            resultadoQuiz.innerHTML = `
                <div style="text-align: center;">
                    <strong>💻 Perfil Dominante: Mais Lógico!</strong><br><br>
                    Sua mente é guiada pela lógica oculta por trás das telas. Você gosta de entender a estrutura das coisas e construir as engrenagens que fazem a vida fluir perfeitamente!
                </div>
            `;
        }
    }
}

function montarHTMLPergunta(enunciado, opcaoCriativa, opcaoLogica) {
    resultadoQuiz.innerHTML = `
        <div style="text-align: center; margin-bottom: 15px;">
            <strong>${enunciado}</strong>
        </div>
        <button id="op-criativa" class="botao-quiz-dinamico" style="${estiloBotaoQuiz}">${opcaoCriativa}</button>
        <button id="op-logica" class="botao-quiz-dinamico" style="${estiloBotaoQuiz}">${opcaoLogica}</button>
    `;

    document.getElementById("op-criativa").addEventListener("click", function() {
        pontosEstetica++;
        perguntaAtual++;
        carregarPaginaQuiz();
    });

    document.getElementById("op-logica").addEventListener("click", function() {
        pontosLogica++;
        perguntaAtual++;
        carregarPaginaQuiz();
    });
}

carregarPaginaQuiz();

// ─── TABELA DE SKILLS (WHILE + IF/ELSE) ───
let minhasSkills = ["Esforço", "Coragem", "Sociabilidade", "Criatividade", "Trabalho em Equipe"];
let counter = 0; 
const divSkills = document.createElement("div");
let tabelaSkills = "<h3>Minhas Skills</h3><table border='1' style='width: 100%; border-collapse: collapse;'>";

while (counter < minhasSkills.length) {
    let descricao = "";
    if (minhasSkills[counter] === "Esforço") descricao = "Foco total em entregar resultados.";
    else if (minhasSkills[counter] === "Coragem") descricao = "Enfrento desafios e novas tecnologias.";
    else if (minhasSkills[counter] === "Sociabilidade") descricao = "Boa comunicação com o time.";
    else if (minhasSkills[counter] === "Criatividade") descricao = "Soluções fora da caixa.";
    else if (minhasSkills[counter] === "Trabalho em Equipe") descricao = "Colaboração e escuta ativa.";

    tabelaSkills += `<tr><td style='padding:10px;'><strong>${minhasSkills[counter]}</strong></td><td style='padding:10px;'>${descricao}</td></tr>`;
    counter++; 
}
tabelaSkills += "</table>";
divSkills.innerHTML = tabelaSkills;
document.querySelector("main").appendChild(divSkills);

// ─── SEÇÃO DE PROJETOS E TEATRO ───
let projetosTI = [
    { nome: "Sistema de Estacionamento", stack: "Python", desc: "Gestão de vagas e valores." },
    { nome: "Siri Cascudo (Hamburgueria)", stack: "Python", desc: "Gerenciamento de pedidos." }
];
const divProjetos = document.createElement("div");
divProjetos.innerHTML = "<h2>Projetos de TI</h2>";
projetosTI.forEach(p => {
    divProjetos.innerHTML += `<div class="card-dev" style="border: 1px solid rgba(255,255,255,0.2); padding: 10px; margin: 10px 0;">
        <h3>${p.nome}</h3><p>${p.desc} | <strong>Stack:</strong> ${p.stack}</p></div>`;
});
document.querySelector("main").appendChild(divProjetos);

// ─── FUNÇÃO DE REFLEXÃO ───
function mostrarFraseReflexao() {
    const elementoTexto = document.getElementById("texto-reflexao");
    elementoTexto.innerHTML = `"A gente precisa morrer <br> de vez em quando <br> Para descobrir pelo que <br> Está vivendo"`;
    elementoTexto.style.fontWeight = "bold";
}
document.getElementById("btn-reflexao").addEventListener("click", mostrarFraseReflexao);

// ─── SISTEMA DE PARES ───
for (let i = 0; i <= 20; i++) {
    let tipo = (i % 2 === 0) ? "Par" : "Ímpar";
    console.log(`${i} - ${tipo}`); 
}


// ─── ATIVIDADE DE CAIXA ───
const caixa = document.getElementById("caixa");
const input = document.getElementById("nome");
const botaoEnviar = document.getElementById("enviar");

botaoEnviar.addEventListener("click", function () {
    let texto = input.value.trim();

    if (texto !== "") {
        console.log(texto);
        const novoItem = document.createElement("li");
        novoItem.textContent = `🎭 ${texto} marcou presença no portfólio!`;

        let lista = caixa.querySelector("ul");
        if (!lista) {
            lista = document.createElement("ul");
            caixa.appendChild(lista);
        }
        lista.appendChild(novoItem);
        caixa.classList.add("caixa-sucesso-rosa");
        input.value = "";
    }
});

// ─── BUSCA DE MÚSICAS (MELANIE MARTINEZ) ───
document.getElementById('btn-buscar-letras').addEventListener('click', function() {
    const nomeMusica = document.getElementById('input-musica').value;
    
    if (nomeMusica.trim() !== "") {

        const urlFinal = `https://www.google.com/search?q=Melanie+Martinez+${encodeURIComponent(nomeMusica)}+letra`;
        
        window.open(urlFinal, '_blank');
    } else {
        alert("Por favor, digite o nome de uma música!");
    }
});