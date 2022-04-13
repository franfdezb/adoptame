function filterWords(texto) {
    swWords = false;
    msgError = "";

    numLetras = texto.length;
    numMayusculas = 0;
    for (i = 0; i < numLetras; i++)
        if (texto.charAt(i) >= 'A' && texto.charAt(i) <= 'Z' && texto.charAt(i) != 'D')
            numMayusculas++;
    if (numLetras > 15 && numMayusculas > numLetras / 2) {
        swWords = true;
        msgError = "Error: Aprenda a escribir. Está usando demasiadas mayúsculas.\n\nRevise su mensaje y vuelva a intentarlo, por favor.";
    } else {
        textoLower = texto.toLowerCase();
        textoLower = " " + textoLower + " ";
        textoLower = textoLower.replace("\n", " ");
        textoLower = textoLower.replace(".", " ");
        textoLower = textoLower.replace(",", " ");
        textoLower = textoLower.replace(":", " ");
        textoLower = textoLower.replace("?", " ");
        textoLower = textoLower.replace("!", " ");
        textoLower = textoLower.replace("¿", " ");
        textoLower = textoLower.replace("¡", " ");
        textoLower = textoLower.replace(";", " ");
        Wordsseed = new Array("tonto");
        for (i = 0; i < Wordsseed.length; i++) {
            if (textoLower.indexOf(" " + Wordsseed[i] + " ") != -1) {
                swWords = true;
                msgError = "Error: Aprenda a escribir. \"" + Wordsseed[i] + "\" no es una palabra válida.\n\nRevise su mensaje y vuelva a intentarlo, por favor."
                break;
            }
        }
    }
    if (swWords) {
        alert(msgError);
        return false;
    }
    return true;
}