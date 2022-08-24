let pisteet = 0

pisteet = pisteet + localStorage.getItem('pisteet')

pisteet = parseInt(pisteet);

console.log(pisteet)

setInterval(tallenna, 1000);

// Alustava hinnasto
let hoboJuomaHinta = 10
let kelaTuetHinta = 50
let kaljarekkaHinta = 250
let klikkausBoosterHinta = 100
let klikkausBoosterMegaHinta = 200
let klikkausBoosterExtremeHinta = 500
let klikkausBoosterXtremeHinta = 1000

let klikkausVoima = 1 // Alustava määrä paljon kaljaa saa per klikkaus

let pisteitaSekunnissa = 0 // Muuttuja johon tallennetaan monta kaljaa sekunnissa tuotetaan

setInterval(naytaPisteet, 1); // Päivittää pistemäätän joka millisekunnin välein

function klikkaus() { // Funktio käynnistyy hobon klikkaamisella
    pisteet = pisteet + klikkausVoima
    document.getElementById("virheTeksti").innerHTML = ""; // Alustaa virhetekstin
}

function hoboJuoma() { // Funktio jos käyttäjä ostaa Hobo Juoman
    if (pisteet >= hoboJuomaHinta) { // Tarkistaa onko kaljaa riittävästi
        pisteet = pisteet - hoboJuomaHinta
        hoboJuomaHinta = hoboJuomaHinta + 10
        pisteitaSekunnissa = pisteitaSekunnissa + 1
        lisaaHoboJuomaPisteet()
        setInterval(lisaaHoboJuomaPisteet, 1000); // Laukaisee funktion joka sekunnin välein
        document.getElementById("virheTeksti").innerHTML = ""
    } else {
        document.getElementById("virheTeksti").innerHTML = "Ei riittävästi kaljaa"
    }
}
function lisaaHoboJuomaPisteet() {
    pisteet++
}

function kelaTuet() {
    if (pisteet >= kelaTuetHinta) {
        pisteet = pisteet - kelaTuetHinta
        kelaTuetHinta = kelaTuetHinta + 50
        pisteitaSekunnissa = pisteitaSekunnissa + 5
        lisaaKelaTuetPisteet()
        setInterval(lisaaKelaTuetPisteet, 1000);
        document.getElementById("virheTeksti").innerHTML = ""
    } else {
        document.getElementById("virheTeksti").innerHTML = "Ei riittävästi kaljaa"
    }
}
function lisaaKelaTuetPisteet() {
    pisteet = pisteet + 5
}

function kaljaRekka() { // 250
    if (pisteet >= kaljarekkaHinta) {
        pisteet = pisteet - kaljarekkaHinta
        kaljarekkaHinta = kaljarekkaHinta + 250
        pisteitaSekunnissa = pisteitaSekunnissa + 25
        lisaaKaljaRekkaPisteet()
        setInterval(lisaaKaljaRekkaPisteet, 1000);
        document.getElementById("viheTeksti").innerHTML = ""
    } else {
        document.getElementById("virheTeksti").innerHTML = "Ei riittävästi kaljaa"
    }
}
function lisaaKaljaRekkaPisteet() {
    pisteet = pisteet + 25
}

function tallenna() {
    localStorage.setItem('pisteet', pisteet)
}

// Klikkaus boosterit
function klikkausBooster() {
    if (pisteet >= klikkausBoosterHinta) { // Tarkistaa että kaljaa (pisteitä) on riittävästi
        pisteet = pisteet - klikkausBoosterHinta
        klikkausBoosterHinta = klikkausBoosterHinta + 100
        klikkausVoima = klikkausVoima + 1
    }
}
function klikkausBoosterMega() { // 200 Kaljaa
    if (pisteet >= klikkausBoosterMegaHinta) {
        pisteet = pisteet - klikkausBoosterMegaHinta
        klikkausBoosterMegaHinta = klikkausBoosterMegaHinta + 200
        klikkausVoima = klikkausVoima + 5
    }
}
function klikkausBoosterExtreme() { // 500 kaljaa
    if (pisteet >= klikkausBoosterExtremeHinta) {
        pisteet = pisteet - klikkausBoosterExtremeHinta
        klikkausBoosterExtremeHinta = klikkausBoosterExtremeHinta + 500
        klikkausVoima = klikkausVoima + 25
    }
}
function klikkausBoosterXtreme() { // 1000 kaljaa
    if (pisteet >= klikkausBoosterXtremeHinta) {
        pisteet = pisteet - klikkausBoosterXtremeHinta
        klikkausBoosterXtremeHinta = klikkausBoosterXtremeHinta + 1000
        klikkausVoima = klikkausVoima + 100
    }
}

function naytaPisteet() { // Funktio joka päivittää tiedot millisekunnin välein
    document.getElementById("klikkausTeho").innerHTML = "KlikkausTeho: " + klikkausVoima
    document.getElementById("piste").innerHTML = pisteet + " kaljaa"
    document.getElementById("pisteetSekunnis").innerHTML = pisteitaSekunnissa + " kaljaa /s"
    document.getElementById("hoboJuomaHintaNosto").innerHTML = "Hobo juoma " + hoboJuomaHinta + " kaljaa (+1 kalja / s)"
    document.getElementById("kelaTuetHintaNosto").innerHTML = "Kela tuet " + kelaTuetHinta + " kaljaa (+5 kaljaa / s)"
    document.getElementById("kaljaRekkaHintaNosto").innerHTML = "Kalja rekka " + kaljarekkaHinta + " kaljaa (+25 kaljaa / s)"
    document.getElementById("klikkausBoosteriHintaNosto").innerHTML = "Klikkaus Booster <br>" + klikkausBoosterHinta + " kaljaa"
    document.getElementById("klikkausBoosteriMegaHintaNosto").innerHTML = "Klikkaus Booster Mega <br>" + klikkausBoosterMegaHinta + " kaljaa"
    document.getElementById("klikkausBoosteriExtremeHintaNosto").innerHTML = "Klikkaus Booster Extreme <br>" + klikkausBoosterExtremeHinta + " kaljaa"
    document.getElementById("klikkausBoosteriXXXTREMEHintaNosto").innerHTML = "Klikkaus Booster XXXTreme <br>"  + klikkausBoosterXtremeHinta + " kaljaa"
}