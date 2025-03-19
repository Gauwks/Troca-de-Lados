let mensagemSelecionada = null;

function addMsg() {
    let msg = document.getElementById("texto").value;
    let destino = document.querySelector("input[name='destino']:checked").value;
    if (msg.trim() === "") return;

    let novaMsg = document.createElement("div");
    novaMsg.textContent = msg;
    novaMsg.classList.add("mensagem");

    novaMsg.onclick = function() {
        selecionarMensagem(novaMsg);
    };

    let btnExcluir = document.createElement("button");
    btnExcluir.textContent = "X";
    btnExcluir.classList.add("btn-excluir");
    btnExcluir.onclick = function(event) {
        event.stopPropagation();
        if (mensagemSelecionada === novaMsg) {
            mensagemSelecionada = null;
        }
        novaMsg.remove();
    };

    novaMsg.appendChild(btnExcluir);
    document.getElementById(destino).appendChild(novaMsg);
    document.getElementById("texto").value = "";
}

function selecionarMensagem(mensagem) {
    if (mensagemSelecionada) {
        mensagemSelecionada.style.backgroundColor = "";
    }
    mensagemSelecionada = mensagem;
    mensagemSelecionada.style.backgroundColor = "yellow";
}

function moverSelecionado(destino) {
    if (mensagemSelecionada) {
        document.getElementById(destino).appendChild(mensagemSelecionada);
        mensagemSelecionada.style.backgroundColor = "";
        mensagemSelecionada = null;
    }
}
