
/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/

const entrada = document.querySelector('input');
const saida = document.getElementById('msg');
const btnE = document.getElementById('btn-cripto');
const label = document.querySelector('label');
const msgTitulo = document.querySelector('h2');
const btnS = document.getElementById('btn-descripto');

entrada.addEventListener("focus", atualizaObjetos);
entrada.addEventListener("input", filtrarCaracters);
entrada.addEventListener("mousedown",atualizarF5);
btnE.addEventListener("click", criptografarPalavra);
btnS.addEventListener("click", descriptografarPalavra);


var textoOriginal = "";
var textoCodificado = "";
var chave = ['a','e','i','o','u'];
var codf = ["ai","enter","imes","ober","ufate"];

//filtro de caracteres proibidos
function filtrarCaracters() {

    var caracterE = entrada.value.match(/\W/g); // extraindo os caracteres especiais .....
    var letraM = entrada.value.match(/[A-Z]/g); // extraindo as letras maiusculas
    var num = entrada.value.match(/[0-9]/g);
    for(let i = 0; i < entrada.value.length;i++){

        if(caracterE == null && letraM == null && num == null){
            atualizaObjetos();
            break;
        } else {
            alterarObjetos();
            break;
        }
    }
}
// cripitografar a palavra
function criptografarPalavra(){
    if(entrada.value == ""){
        atualizarF5();
    }else {
    saida.value = textoCriptografado(entrada.value);
    btnS.style.backgroundColor = "green";
    btnE.style.backgroundColor = "blue";
    entrada.value = "";
    }
}
// descripitografar a palavra
function descriptografarPalavra(){

    msgTitulo.style.color = 'green';
    msgTitulo.textContent = "Mensagem Descriptografada";
    saida.value = textodesCriptografado(textoCodificado);
}

function textoCriptografado(texto){

    for(var ch = 0; ch < texto.length; ch++){
        if(chave.includes(texto[ch])){

            for(let i = 0;i < chave.length;i++){
                if(texto[ch] == chave[i]){
                    textoCodificado =  textoCodificado + codf[i];
                    break;
                }
            }
        }else{
            textoCodificado =  textoCodificado + texto[ch];
        }
    }
    return textoCodificado;
}

function textodesCriptografado(textoCodificado){
    textoOriginal = textoCodificado.replace(/ai/g,'a')
                    .replace(/imes/g,'i')
                    .replace(/enter/g,'e')
                    .replace(/ober/g,'o')
                    .replace(/ufate/g,'u')
    return textoOriginal;
}

function atualizaObjetos(){

    label.style.color = 'black';
    btnE.disabled = false;
    btnE.style.backgroundColor = "green";
}

function alterarObjetos(){
    label.style.color = 'red';
    entrada.focus();
    btnE.disabled = true;
    btnE.style.backgroundColor ="silver";
}

function atualizarF5(){
    btnS.style.backgroundColor = "blue";
    msgTitulo.textContent = "Mensagem Criptografada";
    msgTitulo.style.color = "black";
    saida.value= "";
    textoCodificado = "";
}
