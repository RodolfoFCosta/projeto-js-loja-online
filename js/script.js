let tentativas = 6;
let palavraSecretaCategoria;
let palavraSecretaSort;
let listaDinamica = [];
let jogarNovamente = true;

const palavras = [

    palavra001 = {
        nome: "PIRATININGA",
        categoria: "LUGARES"
    },

    palavra002 = {
        nome: "GANIMEDES",
        categoria: "SATELITE"
    },

    palavra003 = {
        nome: "NAMIBIA",
        categoria: "LUGARES"
    },

    palavra004 = {
        nome: "MIANMAR",
        categoria: "LUGARES"
    },

    palavra005 = {
        nome: "EQUADOR",
        categoria: "LUGARES"
    },

    palavra006 = {
        nome: "HELLOWEN",
        categoria: "MUSICA"
    },

    palavra007 = {
        nome: "MANOWAR",
        categoria: "MUSICA"
    },

    palavra008 = {
        nome: "KORZUS",
        categoria: "MUSICA"
    },

    palavra009 = {
        nome: "AERONAVE",
        categoria: "VEICULOS"
    },

    palavra010 = {
        nome: "MOTORHOMER",
        categoria: "VEICULOS"
    },

    palavra011 = {
        nome: "SUBARU",
        categoria: "CARRO"
    },

    palavra012 = {
        nome: "JAMAICA",
        categoria: "LUGARES"
    },

    palavra013 = {
        nome: "AFEGANISTAO",
        categoria: "LUGARES"
    },

    palavra014 = {
        nome: "MOTORHEAD",
        categoria: "MUSICA"
    },

    palavra015 = {
        nome: "CHECHENIA",
        categoria: "LUGARES"
    },

    palavra016 = {
        nome: "CREGUENHEM",
        categoria: "LUGARES"
    },

    palavra017 = {
        nome: "OS INFILTRADOS",
        categoria: "TV E CINEMA"
    },

    palavra018 = {
        nome: "SPACE TODAY",
        categoria: "TV E CINEMA"
    },

    palavra019 = {
        nome: "O FISICO TURISTA",
        categoria: "TV E CINEMA"
    },

    palavra020 = {
        nome: "OS BONS COMPANHEIROS",
        categoria: "TV E CINEMA"
    },

    palavra021 = {
        nome: "DUNA",
        categoria: "TV E CINEMA"
    },
];


criarPalavraSecreta()
function criarPalavraSecreta() {
    const indexPalavra = parseInt(Math.random() * palavras.length)

    palavraSecretaSort = palavras[indexPalavra].nome;
    palavraSecretaCategoria = palavras[indexPalavra].categoria;

}


mostrarPalavra();
function mostrarPalavra() {
    const categoria = document.getElementById("categoria");
    categoria.innerHTML = palavraSecretaCategoria;

    const palavraTela = document.getElementById("palavra-secreta");
    palavraTela.innerHTML = '';

    for (i = 0; i < palavraSecretaSort.length; i++) {

        if (listaDinamica[i] == undefined) {

            if (palavraSecretaSort[i] == " ") {

                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"
            } else {
                listaDinamica[i] = "&nbsp;"
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"
            }

        } else {
            if (palavraSecretaSort[i] == " ") {
                listaDinamica[i] = " ";
                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letrasEspaco'>" + listaDinamica[i] + "</div>"

            } else {

                palavraTela.innerHTML = palavraTela.innerHTML + "<div class='letras'>" + listaDinamica[i] + "</div>"

            }

        }
    }
}


function verifcaLetraEscolhida(letra) {
    document.getElementById("tecla-" + letra).disabled = true;
    if (tentativas > 0) {
        mudarStyleLetra("tecla-" + letra, false);
        comparaListas(letra);
        mostrarPalavra();
    }

}

function mudarStyleLetra(tecla, cond) {
    if (cond == false) {
        document.getElementById(tecla).style.background = "#540054";
        document.getElementById(tecla).style.color = "#fff";
    } else {
        document.getElementById(tecla).style.background = "#0cef0c";
        document.getElementById(tecla).style.color = "#fff";
    }

}

function comparaListas(letra) {

    const pos = palavraSecretaSort.indexOf(letra);
    if (pos < 0) {
        tentativas--;
        carregaImg();

        if (tentativas == 0) {
            abreModal("Ops!", "Não foi dessa vez... A palavra correta era <br>" + palavraSecretaSort);
            botaoReiniciarNovoJogo()
        }

    } else {
        mudarStyleLetra("tecla-" + letra, true);
        for (i = 0; i < palavraSecretaSort.length; i++) {

            if (palavraSecretaSort[i] == letra) {
                listaDinamica[i] = letra;
            }
        }
    }

    let vitoria = true;
    for (i = 0; i < palavraSecretaSort.length; i++) {

        if (palavraSecretaSort[i] != listaDinamica[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        abreModal("PARABÉNS!", " Você Venceu (❁´◡`❁)");
        tentativas = 0;
        botaoReiniciarNovoJogo()
    }
};

async function botaoReiniciarNovoJogo() {
    while (jogarNovamente == true) {
        document.getElementById("btn-restart").style.backgroundColor = '#aaa';
        document.getElementById("btn-restart").style.scale = 1.3;
        await atraso(500)
        document.getElementById("btn-restart").style.backgroundColor = '#fdfdfd';
        document.getElementById("btn-restart").style.scale = 1;
        await atraso(300)
    }
}

async function atraso(tempo) {
    return new Promise(x => setTimeout(x, tempo));
}

function carregaImg() {
    switch (tentativas) {
        case 5:
            document.getElementById("imagem").style.background = "url('./img/forca01.png')";
            break;

        case 4:
            document.getElementById("imagem").style.background = "url('./img/forca02.png')";
            break;

        case 3:
            document.getElementById("imagem").style.background = "url('./img/forca03.png')";
            break;

        case 2:
            document.getElementById("imagem").style.background = "url('./img/forca04.png')";
            break;

        case 1:
            document.getElementById("imagem").style.background = "url('./img/forca05.png')";
            break;

        case 0:
            document.getElementById("imagem").style.background = "url('./img/forca06.png')";
            break;

        default:
            document.getElementById("imagem").style.background = "url('./img/forca.png')";
            break;
    }
}

function abreModal(titulo, msg) {

    let modalTitulo = document.getElementById('exampleModalLabel');
    modalTitulo.innerText = titulo;

    let modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = msg;

    $("#myModal").modal({
        show: true
    });
}

let btnReiniciar = document.querySelector('#btn-restart');
btnReiniciar.addEventListener('click', (e) => {
    location.reload();
})

