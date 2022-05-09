const inputTexto = document.querySelector(".texto-principal");
const mensagem = document.querySelector(".texto-resultado");
const copiar = document.querySelector(".copiar");
const nenhumTexto = document.querySelector(".nenhum-texto");
const textoNenhum = document.querySelector(".texto-nenhum");

/* lógica para encriptar */
function botaoCripto() {

    if (inputTexto.value == 0) {
        alert("Por favor, digite um texto para ser encriptado.");
    } else if (inputTexto.value != 0) {
        const textoEncriptado = encriptar(inputTexto.value);
        mensagem.value = textoEncriptado;
        nenhumTexto.style.display = "none";
        textoNenhum.style.display = "none";
    }
}

function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

/* lógica para desencriptar */
function botaoDescripto() {

    if (inputTexto.value == 0) {
        alert("Por favor, digite um texto para ser desencriptado.")
    } else if (inputTexto.value != 0) {
        const textoEncriptado = desencriptar(inputTexto.value); // Mesma coisa que lá em cima
        mensagem.value = textoEncriptado;
        nenhumTexto.style.display = "none";
        textoNenhum.style.display = "none";
    }
}

function desencriptar(stringEncriptada) {

    let matrizCodigo = [["enter", "e"],["imes", "i"],["ai", "a"],["ober", "o"],["ufat", "u"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

/* lógica para desencriptar */
function botaoCopiar() {

    if (mensagem.value == "") {
        mensagem.placeholder = "Não encontramos mensagem";
        mensagem.style.backgroundImage = "none";
    } else {
        navigator.clipboard.writeText(mensagem.value); 
        mensagem.value = "";
        inputTexto.value = "";
        mensagem.placeholder = "Copiamos o texto";
    }
}