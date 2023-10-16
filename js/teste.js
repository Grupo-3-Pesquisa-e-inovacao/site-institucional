function criarNovaSala(nomeSala, quantidadeDispositivos) {
    // Crie um novo elemento de sala
    const novaSalaDiv = document.createElement("div");
    novaSalaDiv.className = "salas";

    // Defina o conteúdo da sala
    novaSalaDiv.innerHTML = `
        <div class="nomeSala">${nomeSala}</div>
        <div class="Alerta">
            <div class="dados">
                <div class="tituloDados" id="alertaPc">DESKTOP-DOUGLAS <img src="" alt=""></div>
                <div class="tituloDados" id="alertaPc">DESKTOP-FELIPE <img src="" alt=""></div>
                <div class="tituloDados" id="alertaPc">DESKTOP-MELISSA <img src="" alt=""></div>
                <div class="tituloDados"><span style="color: gray; font-size: 10px;">0 de ${quantidadeDispositivos} máquinas ligadas</span></div>
            </div>
        </div>
    `;

    // Função para atualizar os ícones de alerta a cada 5 segundos
    function atualizarIconesAlerta() {
        novaSalaDiv.querySelectorAll(".tituloDados img").forEach(function (icone) {
            var iconeSorteado = Math.random();
            if (iconeSorteado < 0.33) {
                icone.src = "../../assets/assets-dashboard/alert-verde.svg";
            } else if (iconeSorteado < 0.66) {
                icone.src = "../../assets/assets-dashboard/alert-amarelo.svg";
            } else if (iconeSorteado < 1) {
                icone.src = "../../assets/assets-dashboard/alert-vermelho.svg";
            }
        });
    }

    // Chame a função para atualizar os ícones de alerta inicialmente
    atualizarIconesAlerta();

    // Use setInterval para atualizar os ícones a cada 5 segundos
    setInterval(atualizarIconesAlerta, 5000);

    return novaSalaDiv;
}









function criarNovaSala(nomeSala, quantidadeDispositivos) {
    // Crie um novo elemento de sala
    const novaSalaDiv = document.createElement("div");
    novaSalaDiv.className = "salas";

    document.getElementsByClassName("iconAlerta")
    
    var menorQtdDeMaquinas = 1;
    var maiorQtdDeMaquinas = quantidadeDispositivos;
    var Intervalo = maiorQtdDeMaquinas - menorQtdDeMaquinas;

    var numeroAleatorio = parseInt(Math.random() * Intervalo);
    var iconeSorteado = Math.random();
    var iconeAlerta;
    

    if (iconeSorteado < 0.25) {
        iconeAlerta = '<img src="../../assets/assets-dashboard/alert-verde.svg" alt="">';
    } else if (iconeSorteado < 0.5) {
        iconeAlerta = '<img src="../../assets/assets-dashboard/alert-amarelo.svg" alt="">';
    } else if (iconeSorteado < 0.75) {
        iconeAlerta = '<img src="../../assets/assets-dashboard/alert-vermelho.svg" alt="">';
    } else {
        iconeAlerta = '';
    }

    


    // Defina o conteúdo da sala
    novaSalaDiv.innerHTML = `
    <div class="nomeSala">${nomeSala}</div>
    <div class="Alerta">
            <div class="dados">
                <div class="tituloDados" id="alertaPc">DESKTOP-DOUGLAS ${iconeAlerta}</div>
                <div class="tituloDados" id="alertaPc">DESKTOP-FELIPE ${iconeAlerta}</div>
                <div class="tituloDados" id="alertaPc">DESKTOP-MELISSA ${iconeAlerta}</div>
                <div class="tituloDados"><span style="color: gray; font-size: 10px;">${numeroAleatorio} de ${quantidadeDispositivos} máquinas ligadas</span></div>
            </div>
        <div class="iconAlerta">
            ${iconeAlerta}
        </div>
    </div>
    `;

    
    return novaSalaDiv;
}