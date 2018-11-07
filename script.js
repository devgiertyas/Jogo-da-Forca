var palavraForca = []
var erro = 0;
var turno = 0;
var palavrastby;
var dica = "";
var letra;
function load() {

    document.querySelector("dialog").open = true
    var btnjogar = document.querySelector("#jogar")
    var testarletra = document.querySelector("#btninformarletra")

    teclado("hidden")

    var btq = document.querySelector("#q").addEventListener("click", GetValue)
    var btnw = document.querySelector("#w").addEventListener("click", GetValue)
    var btne = document.querySelector("#e").addEventListener("click", GetValue)
    var btnr = document.querySelector("#r").addEventListener("click", GetValue)
    var btnt = document.querySelector("#t").addEventListener("click", GetValue)
    var btny = document.querySelector("#y").addEventListener("click", GetValue)
    var btnu = document.querySelector("#u").addEventListener("click", GetValue)
    var btni = document.querySelector("#i").addEventListener("click", GetValue)
    var btno = document.querySelector("#o").addEventListener("click", GetValue)
    var btnp = document.querySelector("#p").addEventListener("click", GetValue)
    var btna = document.querySelector("#a").addEventListener("click", GetValue)
    var btns = document.querySelector("#s").addEventListener("click", GetValue)
    var btnd = document.querySelector("#d").addEventListener("click", GetValue)
    var btnf = document.querySelector("#f").addEventListener("click", GetValue)
    var btng = document.querySelector("#g").addEventListener("click", GetValue)
    var btnh = document.querySelector("#h").addEventListener("click", GetValue)
    var btnj = document.querySelector("#j").addEventListener("click", GetValue)
    var btnk = document.querySelector("#k").addEventListener("click", GetValue)
    var btnl = document.querySelector("#l").addEventListener("click", GetValue)
    var btnl = document.querySelector("#ç").addEventListener("click", GetValue)
    var btnz = document.querySelector("#z").addEventListener("click", GetValue)
    var btnx = document.querySelector("#x").addEventListener("click", GetValue)
    var btnc = document.querySelector("#c").addEventListener("click", GetValue)
    var btnv = document.querySelector("#v").addEventListener("click", GetValue)
    var btnb = document.querySelector("#b").addEventListener("click", GetValue)
    var btnn = document.querySelector("#n").addEventListener("click", GetValue)
    var btnm = document.querySelector("#m").addEventListener("click", GetValue)

}

function teclado(status) {
    var teclado = document.querySelector("#keyboard-container").style.visibility = status;
}

function GetValue(btn) {

    letra = btn.currentTarget.textContent.trim();
    btn.currentTarget.style.filter = "brightness(50%)";
    btn.currentTarget.disabled = true;
    btn.currentTarget.style.transform = "none";
    btn.currentTarget.style.backgroundColor = "#dddddd";
    letra = letra.toLowerCase();
    TestaJogada(letra);

}


function OpenNewDialog() {
    document.querySelector(".menu").open = false
    document.querySelector(".indicarpalavra").open = true
}

function GetPalavraRandom() {
    var rnd = Math.ceil(Math.random() * 4);

    if (rnd === 1) {
        dica = "Dica: Time de Futebol"
        PegaTime();
    }
    else if (rnd === 2) {
        dica = "Dica: Fruta"
        PegaFruta();
    }
    else if (rnd === 3) {
        dica = "Dica: Marca"
        PegaMarca();
    }
    else if (rnd === 4) {
        dica = "Dica: Animais"
        PegaAnimais();
    }

    arrayletras = palavrastby.split("");
    if (palavrastby !== "" || palavrastby !== null) {
        for (i = 0; i < palavrastby.length; i++) {
            if (arrayletras[i] === " "||  arrayletras[i] === "-") {
                palavraForca.push(arrayletras[i])
            } else {             
                palavraForca.push("?")
            }
        }

    }

    teclado("visible")
    document.querySelector("dialog").open = false
    carregarPalavra()
    DesenhaForca(getContext());
    erro = 0;


}

function PegaTime() {
    TIMES = ["ATLETICO-MG","ATLETICO-PR","MONACO","FORTALEZA","SPORT","CEARA","PALMEIRAS","SANTOS","CRUZEIRO","VASCO DA GAMA",
    "BOTAFOGO","PARANA","GOIAS","AVAI","LONDRINA","PONTE PRETA","ATLETICO-GO","VILA NOVA","GUARANI","CRICIUMA",
    "ABC", "ALEMANHA", "AMERICA-MG", "ARGENTINA", "ARGELIA", "ARSENAL", "FLAMENGO", "FLUMINENSE", 
    "GREMIO", "INTERNACIONAL", "BAHIA", "SAO-PAULO", "LIVERPOOL", "FIGUERENSE", "BARCELONA", "JUVENTUS",
        "SANTA-CRUZ", "ZENIT", "CAXIAS", "JUVENTUDE", "CORINTHIANS", "BOTAFOGO", "VASCO", "CHAPECOENSE"];
    var tam = TIMES.length;
    var X = Math.floor(Math.random() * tam);
    palavrastby = TIMES[X];
    palavrastby = palavrastby.toLowerCase()
}

function PegaFruta() {

    frutas = ["ABACATE", "ABACAXI", "AÇAI", "ACEROLA", "AMEIXA", "AMENDOA", "AMORA", "ARAÇA", "BANANA", "CAJU", "CAQUI", "CEREJA", "DAMASCO", "FIGO", "FRAMBOESA", "GOIABA", "JABUTICABA", "JACA", "LARANJA", "MAÇA", "MAMAO", "MANGA", "MARACUJA", "MELANCIA", "MELAO", "MORANGO", "NECTARINA", "PERA", "PESSEGO", "TANGERINA", "UVA"];
    var tam = frutas.length;
    var X = Math.floor(Math.random() * tam);
    palavrastby = frutas[X];
    palavrastby = palavrastby.toLowerCase()
}

function PegaMarca() {

    Marcas = ["AMAZON","APPLE","SAMSUNG","COCA-COLA","INTEL","MERCEDES-BENZ","GILLETTE","LOUIS VUITTON","ORACLE","HONDA"
    ,"ADIDAS","VOLKSWAGEN","SONY","GUCCI","PHILIPS","HYUNDAI","COLGATE","ARMANI","CALVIN KLEIN","HUGO BOSS","LACOSTE", 
    "NIKE", "VANS", "DC", "PENALTI", "UMBRO", "QUIKSILVER", "FIAT", "FORD", "TOYOTA", "BILLABONG", "DIADORA",
        "ELEMENT", "FREEDAY", "GANGSTER", "MIZUNO", "OAKLEY", "PEGADA", "QIX", "REEBOK", "TOPPER"];
    var tam = Marcas.length;
    var X = Math.floor(Math.random() * tam);
    palavrastby = Marcas[X];
    palavrastby = palavrastby.toLowerCase()
}

function PegaAnimais() {

    Animais = ["AGUIA", "BUFALO", "CAMELO", "DONINHA", "ELEFANTE", "FOCA", "GARÇA", "HIPOPOTAMO", "IGUANA", "JAGUATIRICA", "KOALA", "LEAO",
        "MACACO", "NAJA", "OCELOTE", "PANDA", "QUERO-QUERO", "RINOCERONTE", "SURICATA", "TAMANDUA", "URSO-PARDO"];
    var tam = Animais.length;
    var X = Math.floor(Math.random() * tam);
    palavrastby = Animais[X];
    palavrastby = palavrastby.toLowerCase()
}

function getContext() {
    var canvas = document.querySelector("#canvas1")
    var context = canvas.getContext("2d")
    context.fillStyle = "black";
    return context;
}

function DesenhaForca(context) {

    context.fillStyle = "black";
    context.fillRect(50, 450, 250, 2);
    context.fillRect(170, 70, 2, 380);
    context.fillRect(170, 70, 200, 2);
    context.fillRect(370, 70, 2, 80);
}

function DesenhaHead(context) {

    context.beginPath();
    context.arc(370, 190, 40, 0, 2 * Math.PI)
    context.stroke();

}
function DesenhaBody(context) {
    context.fillRect(370, 230, 1, 100);
}
function DesenhaBracoRight(context) {
    context.moveTo(370, 250);
    context.lineTo(420, 240);
    context.stroke();
}
function DesenhaBracoleft(context) {
    context.moveTo(370, 250);
    context.lineTo(320, 240);
    context.stroke();
}
function Desenhalegright(context) {
    context.moveTo(370, 330);
    context.lineTo(410, 360);
    context.stroke();
}
function Desenhalegleft(context) {
    context.moveTo(370, 330);
    context.lineTo(330, 360);
    context.stroke();

}
function DesenhaOlho(context) {
    context.beginPath();
    context.arc(355, 175, 4, 0, 2 * Math.PI)
    context.stroke();

    context.beginPath();
    context.arc(385, 175, 4, 0, 2 * Math.PI)
    context.stroke();
}
function DesenhaNariz(context) {
    context.fillRect(370, 185, 1, 9);
    context.fillRect(370, 194, 3, 1);
}
function DesenhaBoca(context) {
    context.beginPath();
    context.arc(370, 200, 10, 0, 1 * Math.PI)
    context.stroke();
}
function BonecoMorrendoPosicao1(context) {
    LimpaCanvas();
    DesenhaForca(getContext());
    //head
    context.beginPath();
    context.arc(370, 215, 40, 0, 2 * Math.PI)
    context.stroke();
    //body
    context.fillRect(370, 255, 1, 100);
    //braçoright
    context.moveTo(370, 300);
    context.lineTo(420, 260);
    context.stroke();
    //braçoleft
    context.moveTo(370, 300);
    context.lineTo(320, 260);
    context.stroke();
    //pernaright
    context.moveTo(370, 355);
    context.lineTo(410, 400);
    context.stroke();
    //pernaleft
    context.moveTo(370, 355);
    context.lineTo(330, 400);
    context.stroke();
    //olhos
    context.beginPath();
    context.arc(355, 205, 4, 0, 2 * Math.PI)
    context.stroke();

    context.beginPath();
    context.arc(385, 205, 4, 0, 2 * Math.PI)
    context.stroke();
    //nariz
    context.fillRect(370, 210, 1, 9);
    context.fillRect(370, 219, 3, 1);
    //boca
    context.beginPath();
    context.arc(370, 235, 10, 3, 2 * Math.PI)
    context.stroke();

}

function BonecoMorrendoPosicao2(context) {
    LimpaCanvas();
    DesenhaForca(getContext());
    //head
    context.beginPath();
    context.arc(370, 260, 40, 0, 2 * Math.PI)
    context.stroke();
    //body
    context.fillRect(370, 305, 1, 100);
    //braçoright
    context.moveTo(370, 350);
    context.lineTo(420, 310);
    context.stroke();
    //braçoleft
    context.moveTo(370, 350);
    context.lineTo(320, 310);
    context.stroke();
    //pernaright
    context.moveTo(370, 405);
    context.lineTo(410, 420);
    context.stroke();
    //pernaleft
    context.moveTo(370, 405);
    context.lineTo(330, 420);
    context.stroke();
    //olhos
    context.beginPath();
    context.arc(355, 240, 4, 0, 2 * Math.PI)
    context.stroke();

    context.beginPath();
    context.arc(385, 240, 4, 0, 2 * Math.PI)
    context.stroke();
    //nariz
    context.fillRect(370, 245, 1, 9);
    context.fillRect(370, 254, 3, 1);
    //boca
    context.beginPath();
    context.arc(370, 280, 10, 3, 2 * Math.PI)
    context.stroke();
}

function BonecoMorrendoPosicao3(context) {
    LimpaCanvas();
    DesenhaForca(getContext());
    //head
    context.beginPath();
    context.arc(370, 340, 40, 0, 2 * Math.PI)
    context.stroke();
    //body
    context.fillRect(370, 380, 1, 70);
    //braçoright
    context.moveTo(370, 400);
    context.lineTo(420, 410);
    context.stroke();
    //braçoleft
    context.moveTo(370, 400);
    context.lineTo(320, 410);
    context.stroke();
    //olhos
    context.beginPath();
    context.arc(355, 320, 4, 0, 2 * Math.PI)
    context.stroke();

    context.beginPath();
    context.arc(385, 320, 4, 0, 2 * Math.PI)
    context.stroke();
    //nariz
    context.fillRect(370, 330, 1, 9);
    context.fillRect(370, 339, 3, 1);
    //boca
    context.beginPath();
    context.arc(370, 355, 10, 3, 2 * Math.PI)
    context.stroke();
}

function BonecoMorrendoPosicao4(context) {

    LimpaCanvas();

    DesenhaForca(getContext());

    //head
    context.beginPath();
    context.arc(370, 485, 40, 0, 2 * Math.PI)
    context.stroke();

    context.fillStyle = "green";
    context.fillRect(0, 450, 60000, 510);

}
function BonecoMorrendoPosicao5(context) {

    LimpaCanvas();

    DesenhaForca(getContext());

    //head

    context.fillRect(350, 350, 20, 100);
    context.fillRect(310, 370, 100, 20);

    context.fillStyle = "white";
    context.font = "15px Arial";
    context.fillText("R.I.P.", 345, 385);

    context.fillStyle = "green";
    context.fillRect(0, 450, 60000, 510);

}

function LimpaCanvas() {

    var canvas = document.querySelector("#canvas1")
    var context = canvas.getContext("2d")

    context.clearRect(0, 0, canvas.width, canvas.height, false)
}

function CarregaDesenho(erro) {
    switch (erro) {
        case 1:
            DesenhaHead(getContext());
            break;
        case 2:
            DesenhaBody(getContext());
            break;
        case 3:
            DesenhaBracoleft(getContext());
            break;
        case 4:
            DesenhaBracoRight(getContext());
            break;
        case 5:
            Desenhalegleft(getContext());
            break;
        case 6:
            Desenhalegright(getContext());
            break;
        case 7:
            DesenhaOlho(getContext());
            break;
        case 8:
            DesenhaNariz(getContext());
            break;
        case 9:
            DesenhaBoca(getContext());
            erro = 10
            CarregaDesenho(erro);
            document.getElementById("txtdigitarletra").disabled = true
            document.getElementById("btninformarletra").disabled = true
            break;
        case 10:
            loadDesenhodeMorte();
            LoadPalavraCompleta();
            carregabotaoreset();
            break;

    }
}

function loadDesenhodeMorte() {
    startDesenhodeMorte(1);
}

function startDesenhodeMorte(parte) {
    if (parte !== -1)
        setTimeout(() => {
            DesenhodeMorte(parte, startDesenhodeMorte)
        }, 1000);
}

function DesenhodeMorte(parte, callback) {

    switch (parte) {
        case 1:
            BonecoMorrendoPosicao1(getContext())
            break;
        case 2:
            BonecoMorrendoPosicao2(getContext())
            break;
        case 3:
            BonecoMorrendoPosicao3(getContext())
            break;
        case 4:
            BonecoMorrendoPosicao4(getContext())
            break;
        case 5:
            BonecoMorrendoPosicao5(getContext())
            document.querySelector("#btnreset").disabled = false;
            break;
        default:
            callback(-1)
            return

    }

    callback(parte + 1)

}

function Reset() {
    window.location.reload();
    var el = document.querySelector('#btnreset');
    el.parentNode.removeChild(el);
    LimpaCanvas(getContext());
}

function GetPalavra() {
    var palavra = document.querySelector("#txtpalavradaforca") 
    dica = "";
    if (palavra.value === "" || palavra === null) {
        alert("Informe a palavra")
        return;
    }

    arrayletras = palavra.value.split("");
    for (i = 0; i < palavra.value.length; i++) {
        if (arrayletras[i] === " " || arrayletras[i] === "-") {
            palavraForca.push(arrayletras[i])
        } else {             
            palavraForca.push("?")
        }
    }
    teclado("visible")
    document.querySelector(".indicarpalavra").open = false
    palavra.value = "";
    carregarPalavra()
    DesenhaForca(getContext());
    erro = 0;
}

function carregabotaoreset() {
    var texletra = document.querySelector(".digitarPalavra")

    texletra.innerHTML = "<button onclick='Reset()' id='btnreset'  disabled> Jogar Novamente</button>"
}


function TestaJogada(letra) {
    debugger
    var letraserradas = document.querySelector("#txtletraserradas");
    var acertou = false;
    var acertouletra = 0;

    for (var i = 0; i < arrayletras.length; i++) {
        if (arrayletras[i] === letra) {
            palavraForca[i] = letra;
            acertou = true;

            ViraLetra(document.getElementById(i), palavraForca[i])

        }
    }
    if (!acertou) {
        erro++
        CarregaDesenho(erro);
    }

    for (var i = 0; i != palavraForca.length; i++) {
        if (arrayletras[i] === palavraForca[i]) {
            acertouletra++;
        }
    }

    if (acertouletra === arrayletras.length) {
        setTimeout(function () {
            LimpaCanvas(getContext());
            teclado("hidden")
            document.querySelector("#palavratest").style.visibility = "hidden";
            carregabotaoreset();
            document.querySelector("#btnreset").disabled = false;
            document.querySelector(".winner").open = true;
        }, 800)
    }

}

function carregarPalavra() {

    var text = document.querySelector("#palavratest")
    text.innerHTML = ''
    for (i = 0; i < palavraForca.length; i++) {

        var newDiv = document.createElement("div");
        newDiv.setAttribute("class", "traco");
        newDiv.setAttribute("id", i);
        newDiv.innerHTML = palavraForca[i].toUpperCase();
        newDiv.style.transition = "transform 0.3s";

        text.appendChild(newDiv);

    }

    text.innerHTML += "<p>" + dica + "</p>";
}

function LoadPalavraCompleta() {
    palavraForca = arrayletras

    carregarPalavra();
}

function ViraLetra(div, letra) {
    

    div.style.setProperty("transform", "rotateY(90deg)")

    setTimeout(function () {
        div.innerHTML = letra.toUpperCase();
        div.style.setProperty("transform", "rotateY(0deg)")
    }, 300)
}
