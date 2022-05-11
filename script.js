let btnCodificar = document.getElementById("btn-cripto");
let btnDecodificar = document.getElementById("btn-descripto");
let inputMensagem = document.getElementById("input-texto");
let inputMensagemCryptografada = document.getElementById("msg");
let btnLimpar = document.getElementById("#btn-clear");
let btnCopiar = document.getElementById("btn-copy");

function limpar() {
  inputMensagemCryptografada.value = "";
}

function copiar() {
  document.getElementById("msg").select();
  document.execCommand("copy");
}

function encoder(event) {
  let mensagem = inputMensagem.value;
  textoCrypto = "";

  if (/^[a-z ,.!?;:()]+$/g.test(inputMensagem.value)) {
    for (let i = 0; i < mensagem.length; i++) {
      if (mensagem[i] == "e") {
        textoCrypto = textoCrypto + "enter";
      } else if (mensagem[i] == "i") {
        textoCrypto = textoCrypto + "imes";
      } else if (mensagem[i] == "a") {
        textoCrypto = textoCrypto + "ai";
      } else if (mensagem[i] == "o") {
        textoCrypto = textoCrypto + "ober";
      } else if (mensagem[i] == "u") {
        textoCrypto = textoCrypto + "ufat";
      } else {
        textoCrypto = textoCrypto + mensagem[i];
      }
    }
    inputMensagemCryptografada.value = textoCrypto;
  } else {
    inputMensagemCryptografada.value = "Apenas letras minúsculas e sem acento!";
    setTimeout(function () {
      limpar();
    }, 2500);
  }
  mostrarMensagemCripto(event);
}

function decoder(event) {
  event.preventDefault();
  let inputCode = document.getElementById("input-texto").value;
  inputCode = inputCode.replace(/enter/g, "e");
  inputCode = inputCode.replace(/imes/g, "i");
  inputCode = inputCode.replace(/ai/g, "a");
  inputCode = inputCode.replace(/ober/g, "o");
  inputCode = inputCode.replace(/ufat/g, "u");
  document.getElementById("msg").value = inputCode;
  mostrarMensagemCripto(event);
}

function mostrarMensagemCripto(event) {
  document.getElementById("msg").style.display = "block";
  document.getElementById("btn-copy").style.display = "block";
  document.getElementById("btn-clear").style.display = "block";
  document.getElementById("msg-label").style.display = "block";
  document.getElementById("img-msg-cripto").style.display = "none";
  document.getElementById("msg-cripto1").style.display = "none";
  document.getElementById("msg-cripto2").style.display = "none";

  if (event.target.value === "") {
    console.log(event.target);
    document.getElementById("img-msg-cripto").style.display = "block";
  }
}
