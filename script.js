function submit() {
    const MINIMO = 3;
    let nome = document.getElementById("nome").value.toUpperCase();
    let cognome = document.getElementById("cognome").value.toUpperCase();
    let data = document.getElementById("data").value.toUpperCase();
    let sesso = document.getElementsByName("sesso");
    let luogo = document.getElementById("luogo").value.toUpperCase();
    let provincia = document.getElementById("provincia").value.toUpperCase();
    let cf = "";

    function minore(stringaCons, stringaVoc) {
        let j = 0;
        for(let i = stringaCons.length - 1; i <= MINIMO - 1; i++) {
            stringaCons[i] += stringaVoc[j];
            j++;
        }
        return stringaCons;
    }

    /*function vocali(stringa, stringaVoc) {
        for(let i = 0; i < stringa.length; i++) {
            if(stringa[i] == "A" || stringa[i] == "E" || stringa[i] == "I" || stringa[i] == "O" || stringa[i] == "U") {
                stringaVoc += stringa[i];
                stringa = stringa.slice(0, i) + stringa.slice(i + 1);
            }
        }
    }*/

    //cognome
    function surname() {
        let cognomeVoc = "";
        let cognomeCons = "";

        // vocali(cognome, cognomeVoc);

        for(let i = 0; i < cognome.length; i++) {
            if(cognome[i] == "A" || cognome[i] == "E" || cognome[i] == "I" || cognome[i] == "O" || cognome[i] == "U")
                cognomeVoc += cognome[i];
            else
                cognomeCons += cognome[i];
        }

        if(cognomeCons.length >= MINIMO)
            return cognomeCons.slice(0, MINIMO)
        else
            return minore(cognomeCons, cognomeVoc)

        // return cognome.length >= MINIMO ? cognome.slice(0, MINIMO - 1) : minore(cognome, cognomeVoc);
    }

    //nome
    function name() {
        let nomeVoc = "";
        let nomeCons = "";

        // vocali(nome, nomeVoc);

        for(let i = 0; i < nome.length; i++) {
            if(nome[i] == "A" || nome[i] == "E" || nome[i] == "I" || nome[i] == "O" || nome[i] == "U")
                nomeVoc += nome[i];
            else
                nomeCons += nome[i];
        }

        if(nomeCons.length > MINIMO)
            return nomeCons[0] + nomeCons.slice(2, 4);
        else if(nomeCons.length == MINIMO)
            return nomeCons;
        else
            return minore(nomeCons, nomeVoc);
    }

    //anno
    function year() {
        let anno = data.slice(2, 4);
        return anno;
    }

    //mese
    function month() {
        let mesi = ["A", "B", "C", "D", "E", "H", "L", "M", "P", "R", "S", "T"];
        let mese = data.slice(-5, -3);
        if(mese < 10)
            return mesi[mese[1] - 1];
        else
            return mesi[mese - 1];
    }

    // sesso
    function sex() {
        if(sesso[0].checked)
            return 0;
        else
            return 1;
    }

    //data
    function day() {
        let giorno = data.slice(-2);

        if(sex())
            giorno = parseInt(giorno) + 40;

        return giorno;
    }

    //place
    function place() {
        return comuni[luogo];
    }

    cf += surname() + name() + year() + month() + day() + place();
    console.log(cf);
}