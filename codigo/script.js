var textInput = document.querySelector("#input-text");
var outInput = document.querySelector("#output");

function criptografia()
{
    var text = textInput.value;
    var resultadoCriptografia = text.replace(/e/g, "enter").replace(/i/g, "imes")
    .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultadoCriptografia + 
    '</textarea>' + '<button class= "btn-copiar" id= "copiar" onclick="copiar()">Aperte aki</button>'   
}

function descriptografia()
{
    var text = textInput.value;
    var resultadoDescriptografia = text.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text">' + resultadoDescriptografia + 
    '</textarea>' + '<button class="btn-copiar" id= "copiar" onclick="copiar()">Aperte aki</button>'
}

function copiar()
{
    var textCopiar = document.getElementById('input-text');
    
    textCopiar.select();
    document.execCommand('copy');
    alert("Você agora tem a sua mensagem secreta! É isso aí!! :)");
}