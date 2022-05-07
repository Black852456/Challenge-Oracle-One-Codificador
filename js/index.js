/*textarea*/
var recibimiento = document.querySelector(".recibimiento_texto");

/*botones*/
var boton_codificador = document.querySelector(".codificar");
var boton_desencriptador = document.querySelector(".desencriptar");
var boton_copiar = document.querySelector(".copiar");




/*textarea que recibe la codificacion o descodificacion segun sea el caso*/
var contenido_copiar = document.querySelector(".ContenidoCopiar");

/*bloque de informacion que contiene la informacion del resultado*/
var Bloque_Contenido = document.querySelector(".div-resultado_contenido");

/*bloque que se muestra por defecto en el inicio de la pantalla*/
var contenido_inicial = document.querySelector(".contenido-inicial");

/*div que recibe el texto codificado o descodificado*/
var mostrar_contenido = document.querySelector(".resultado");



function Diccionario(letra) {
    switch (letra) {
        case "a":
            return "ai";
            break;

        case "e":
            return "enter";
            break;

        case "i":
            return "imes";
            break;

        case "o":
            return "ober";
            break;

        case "u":
            return "ufat";
            break;

        default:
            return letra;
    }

}

function Codificar(frase) {
    let fraseNew = "";
    for (var i = 0; i < frase.length; i++) {
        var Letra = Diccionario(frase[i]);
        console.log(Letra);
        fraseNew = fraseNew + Letra;
    }
    return fraseNew;
}

function Descodificar(frase) {
    let fraseNew = "";
    for (var i = 0; i < frase.length; i++) {
        if (frase[i] == "a") {
            fraseNew = fraseNew + frase[i];
            i++;
        } else if (frase[i] == "o") {
            fraseNew = fraseNew + frase[i];
            i = i + 3;
        } else if (frase[i] == "e") {
            fraseNew = fraseNew + frase[i];
            i = i + 4;
        } else if (frase[i] == "i") {
            fraseNew = fraseNew + frase[i];
            i = i + 3;
        } else if (frase[i] == "u") {
            fraseNew = fraseNew + frase[i];
            i = i + 3;
        } else {
            fraseNew = fraseNew + frase[i];
        }
    }
    return fraseNew;
}



boton_codificador.addEventListener("click", function (event) {
    if (recibimiento.value.trim().length > 0) {
        
        contenido_inicial.setAttribute("style", "display:none;");
        Bloque_Contenido.setAttribute("style", "display:block;");
        
        let Contenido_Codificacion = Codificar(recibimiento.value);
        
        mostrar_contenido.textContent = Contenido_Codificacion;
        
        contenido_copiar.value = Contenido_Codificacion;
        
    } else {
        contenido_inicial.setAttribute("style", "display:block;");
        Bloque_Contenido.setAttribute("style", "display:none;");
    }
});


boton_desencriptador.addEventListener("click", function (event) {
    if (recibimiento.value.trim().length > 0) {
        
        contenido_inicial.setAttribute("style", "display:none;");
        Bloque_Contenido.setAttribute("style", "display:block;");
        
        let Contenido_Descodificacion = Descodificar(recibimiento.value);
        
        mostrar_contenido.textContent = Contenido_Descodificacion;
        
        contenido_copiar.value = Contenido_Descodificacion;
        
    } else {
        contenido_inicial.setAttribute("style", "display:block;");
        Bloque_Contenido.setAttribute("style", "display:none;");
    }
});


boton_copiar.addEventListener("click", function (event) {
    navigator.clipboard.writeText(contenido_copiar.value).then(function () {
        alert("Contenido Copiado");
    }, function () {
        alert("Error en el copiado Intente de Nuevo");
    });
});
