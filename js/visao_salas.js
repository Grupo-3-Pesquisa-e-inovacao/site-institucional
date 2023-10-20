
function abrirModal() {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("containerSalas").style.display = "none";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("containerSalas").style.display = "flex";
}


function adicionarSala() {
    const nomeSala = document.getElementById("inputNomeSala").value;
    const quantidadeDispositivos = document.getElementById("inputQuantidadeDispositivos").value;

    if (nomeSala && quantidadeDispositivos) {
        const novaSala = criarNovaSala(nomeSala, quantidadeDispositivos);

        // Adiciona a nova sala ao miniContainerSalas
        const miniContainerSalas = document.getElementById("miniContainerSalas");
        miniContainerSalas.appendChild(novaSala);

        // Feche o modal
        fecharModal();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function criarNovaSala(nomeSala, quantidadeDispositivos) {
    // Crie um novo elemento de sala
    const novaSalaDiv = document.createElement("div");
    novaSalaDiv.className = "salas";

    var menorQtdDeMaquinas = 3;
    var maiorQtdDeMaquinas = quantidadeDispositivos;
    var Intervalo = maiorQtdDeMaquinas - menorQtdDeMaquinas;
    var numeroAleatorio = parseInt(Math.random() * Intervalo + 3);

    // Defina o conteúdo da sala
    novaSalaDiv.innerHTML = `
    <a href="./dashboard_computadores_sala.html">
    <div class="nomeSala">${nomeSala}</div>
    <div class="Alerta">
        <div class="dados">
            <div class="tituloDados" id="cpu"><span style="font-weight: bold;"> CPU:</span></div>
            <div class="tituloDados" id="disco"><span style="font-weight: bold;">Disco:</span></div>
            <div class="tituloDados" id="ram"><span style="font-weight: bold;">Ram:</span></div>
            <div class="tituloDados" id="rede"><span style="font-weight: bold;">Rede:</span></div>
            <div class="tituloDados"><span style="font-weight: bold;">Marca:</span><span>
                    LENOVO</span> </div>
            <div class="tituloDados"><span style="font-weight: bold;">Modelo:</span><span> p112f
                </span></div>

        </div>
    </div>
</a>
    `;

    // Função para atualizar os ícones de alerta a cada 5 segundos
    function atualizarIconesAlerta() {
        const icones = novaSalaDiv.querySelectorAll(".tituloDados img");
        for (let i = 0; i < icones.length; i++) {
            var iconeSorteado = Math.random();
            var novoIcone;
    
            if (iconeSorteado < 0.33) {
                novoIcone = "../../assets/assets-dashboard/alert-amarelo.svg";
            } else if (iconeSorteado < 0.66) {
                novoIcone = "../../assets/assets-dashboard/dangerous.svg";
            } else {
                novoIcone = "../../assets/assets-dashboard/alert-verde.svg";
            }
    
            icones[i].src = novoIcone;
        }
    }

    // Chame a função para atualizar os ícones de alerta inicialmente
    atualizarIconesAlerta();

    // Use setInterval para atualizar os ícones a cada 5 segundos
    setInterval(atualizarIconesAlerta, 5000);

    return novaSalaDiv;
}


// CÓDIGO PARA GERAR DADOS ALEATÓRIOS DE CPU, RAM, REDE E DICO

function atualizarNumeroAleatorio(sala, numeroAleatorioRAM, numeroAleatorioRede, numeroAleatorioDisco, numeroAleatorioCPU) {
const cpuElement = sala.querySelector("#cpu");
const discoElement = sala.querySelector("#disco");
const ramElement = sala.querySelector("#ram");
const redeElement = sala.querySelector("#rede");

// Lógica para definir a cor do texto para a CPU
if (numeroAleatorioCPU > 70) {
    cpuElement.innerHTML = "<span style='font-weight: bold'>CPU: </span> <span style='color: red'>" + numeroAleatorioCPU + "%</span>";
} else if (numeroAleatorioCPU < 50) {
    cpuElement.innerHTML = "<span style='font-weight: bold'>CPU: </span> <span style='color: green'>" + numeroAleatorioCPU + "%</span>";
} else {
    cpuElement.innerHTML = "<span style='font-weight: bold'>CPU: </span> <span style='color: yellow'>" + numeroAleatorioCPU + "%</span>";
}

// Lógica para definir a cor do texto para o Disco
if (numeroAleatorioDisco > 75) {
    discoElement.innerHTML = "<span style='font-weight: bold'>Disco: </span> <span style='color: red'>" + numeroAleatorioDisco + "%</span>";
} else if (numeroAleatorioDisco < 40) {
    discoElement.innerHTML = "<span style='font-weight: bold'>Disco: </span> <span style='color: green'>" + numeroAleatorioDisco + "%</span>";
} else {
    discoElement.innerHTML = "<span style='font-weight: bold'>Disco: </span> <span style='color: yellow'>" + numeroAleatorioDisco + "%</span>";
}

// Lógica para definir a cor do texto para a RAM
if (numeroAleatorioRAM > 80) {
    ramElement.innerHTML = "<span style='font-weight: bold'>Ram: </span> <span style='color: red'>" + numeroAleatorioRAM + "%</span>";
} else if (numeroAleatorioRAM < 55) {
    ramElement.innerHTML = "<span style='font-weight: bold'>Ram: </span> <span style='color: green'>" + numeroAleatorioRAM + "%</span>";
} else {
    ramElement.innerHTML = "<span style='font-weight: bold'>Ram: </span> <span style='color: yellow'>" + numeroAleatorioRAM + "%</span>";
}

// Lógica para definir a cor do texto para a Rede
if (numeroAleatorioRede > 75) {
    redeElement.innerHTML = "<span style='font-weight: bold'>Rede: </span> <span style='color: red'>" + numeroAleatorioRede + "%</span>";
} else if (numeroAleatorioRede < 40) {
    redeElement.innerHTML = "<span style='font-weight: bold'>Rede: </span> <span style='color: green'>" + numeroAleatorioRede + "%</span>";
} else {
    redeElement.innerHTML = "<span style='font-weight: bold'>Rede: </span> <span style='color: yellow'>" + numeroAleatorioRede + "%</span>";
}
}


// Intervalo de 5 segundos para atualizar as salas
setInterval(function () {
    const miniContainerSalas = document.getElementById("miniContainerSalas");
    const salas = miniContainerSalas.querySelectorAll(".salas");

    salas.forEach(function (sala) {
        const numeroAleatorioCPU = Math.floor(Math.random() * 100) + 1;
        const numeroAleatorioRAM = Math.floor(Math.random() * 100) + 1;
        const numeroAleatorioRede = Math.floor(Math.random() * 100) + 1;
        const numeroAleatorioDisco = Math.floor(Math.random() * 100) + 1;
        atualizarNumeroAleatorio(sala, numeroAleatorioCPU, numeroAleatorioRAM, numeroAleatorioRede, numeroAleatorioDisco );
    });
}, 1000); // 5 segundos