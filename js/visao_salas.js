
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

        // Adicione a nova sala ao miniContainerSalas
        const miniContainerSalas = document.getElementById("miniContainerSalas");
        miniContainerSalas.appendChild(novaSala);

        // Gerar números aleatórios entre 1 e 100
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        
        // Atualizar a sala com o número aleatório
        atualizarNumeroAleatorio(novaSala, numeroAleatorio);

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

    // Defina o conteúdo da sala
    novaSalaDiv.innerHTML = `
        <div class="nomeSala">${nomeSala}</div>
        <div class="Alerta">
            <div class="dados">
                <div class="tituloDados" id="cpu">CPU: %</div>
                <div class="tituloDados" id="disco">Disco: %</div>
                <div class="tituloDados" id="ram">RAM: %</div>
                <div class="tituloDados" id="rede">Rede: %</div>
            </div>
            <div class="iconAlerta">
                <img src="../../assets/assets-dashboard/check-bold.svg" alt="">
            </div>
        </div>
    `;

    return novaSalaDiv;
}

function atualizarNumeroAleatorio(sala, numeroAleatorioRAM, numeroAleatorioRede, numeroAleatorioDisco, numeroAleatorioCPU) {
const cpuElement = sala.querySelector("#cpu");
const discoElement = sala.querySelector("#disco");
const ramElement = sala.querySelector("#ram");
const redeElement = sala.querySelector("#rede");

// Lógica para definir a cor do texto para a CPU
if (numeroAleatorioCPU > 70) {
    cpuElement.innerHTML = "CPU: <span style='color: red'>" + numeroAleatorioCPU + "%</span>";
} else if (numeroAleatorioCPU < 50) {
    cpuElement.innerHTML = "CPU: <span style='color: green'>" + numeroAleatorioCPU + "%</span>";
} else {
    cpuElement.innerHTML = "CPU: <span style='color: yellow'>" + numeroAleatorioCPU + "%</span>";
}

// Lógica para definir a cor do texto para o Disco
if (numeroAleatorioDisco > 75) {
    discoElement.innerHTML = "Disco: <span style='color: red'>" + numeroAleatorioDisco + "%</span>";
} else if (numeroAleatorioDisco < 40) {
    discoElement.innerHTML = "Disco: <span style='color: green'>" + numeroAleatorioDisco + "%</span>";
} else {
    discoElement.innerHTML = "Disco: <span style='color: yellow'>" + numeroAleatorioDisco + "%</span>";
}

// Lógica para definir a cor do texto para a RAM
if (numeroAleatorioRAM > 80) {
    ramElement.innerHTML = "RAM: <span style='color: red'>" + numeroAleatorioRAM + "%</span>";
} else if (numeroAleatorioRAM < 55) {
    ramElement.innerHTML = "RAM: <span style='color: green'>" + numeroAleatorioRAM + "%</span>";
} else {
    ramElement.innerHTML = "RAM: <span style='color: yellow'>" + numeroAleatorioRAM + "%</span>";
}

// Lógica para definir a cor do texto para a Rede
if (numeroAleatorioRede > 75) {
    redeElement.innerHTML = "Rede: <span style='color: red'>" + numeroAleatorioRede + "%</span>";
} else if (numeroAleatorioRede < 40) {
    redeElement.innerHTML = "Rede: <span style='color: green'>" + numeroAleatorioRede + "%</span>";
} else {
    redeElement.innerHTML = "Rede: <span style='color: yellow'>" + numeroAleatorioRede + "%</span>";
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
}, 5000); // 5 segundos