function addMsg(){
    let msg = document.getElementById("texto").value;
    if (msg.trim() === "") return; 

    let novaMsg = document.createElement("p"); 
    novaMsg.classList.add("mensagem"); 
    novaMsg.textContent = msg; 

    document.getElementById("a").appendChild(novaMsg); 
    document.getElementById("texto").value = ""; 
}

function enviarB(){
    let mensagensA = document.querySelectorAll("#a .mensagem");
    if (mensagensA.length === 0) return; 

    mensagensA.forEach(msg => {
        document.getElementById("b").appendChild(msg);
    });
}

function enviarA(){
    let mensagensB = document.querySelectorAll("#b .mensagem");
    if (mensagensB.length === 0) return; 

    mensagensB.forEach(msg => {
        document.getElementById("a").appendChild(msg);
    });
}

function limpar() {
    document.querySelectorAll("#a .mensagem").forEach(msg => msg.remove());
    document.querySelectorAll("#b .mensagem").forEach(msg => msg.remove());
}