const parole = ["salame", "catamarano", "bamba", "poltiglia", "paglia", "onomatopea", "contrario", "destrosio", "moltitudine", "finestra"];

let letteraA = document.getElementById("a");
let letteraB = document.getElementById("b");
let letteraC = document.getElementById("c");
let letteraD = document.getElementById("d");
let letteraE = document.getElementById("e");
let letteraF = document.getElementById("f");
let letteraG = document.getElementById("g");
let letteraH = document.getElementById("h");
let letteraI = document.getElementById("i");
let letteraJ = document.getElementById("j");
let letteraK = document.getElementById("k");
let letteraL = document.getElementById("l");
let letteraM = document.getElementById("m");
let letteraN = document.getElementById("n");
let letteraO = document.getElementById("o");
let letteraP = document.getElementById("p");
let letteraQ = document.getElementById("q");
let letteraR = document.getElementById("r");
let letteraS = document.getElementById("s");
let letteraT = document.getElementById("t");
let letteraU = document.getElementById("u");
let letteraV = document.getElementById("v");
let letteraW = document.getElementById("w");
let letteraX = document.getElementById("x");
let letteraY = document.getElementById("y");
let letteraZ = document.getElementById("z");
const parolaContainer = document.getElementById("parolaUser");
const cancella = document.getElementById("cancella");
const invia = document.getElementById("invia");
const parolaDaIndovinare = document.getElementById("parolaDaIndovinare");
const vite = document.getElementById("vite");
const reload = document.getElementById("reload");
let immagine = document.getElementById("img");
const tastieraContainer = document.getElementById("tastiera-container");

vite.textContent = 6;
let punteggio = 0;
let array = [];

function getParola() {
  let numero = Math.floor(Math.random() * parole.length);
  parolaDaIndovinare.textContent = parole[numero];
  parolaDaIndovinare.textContent.split("").forEach((lettera) => {
    const paragrafoContainer = document.createElement("p");
    paragrafoContainer.textContent = "_";
    parolaContainer.appendChild(paragrafoContainer);
  });
}

function gestisciClick(lettera) {
  lettera.addEventListener("click", function () {
    const letteraCliccata = lettera.textContent.toLowerCase();
    const parolaSegreta = parolaDaIndovinare.textContent;
    const lettereParola = parolaSegreta.split("");
    console.log(lettereParola);
    console.log(lettereParola.includes(letteraCliccata));

    if (lettereParola.includes(letteraCliccata)) {
      lettereParola.forEach((letteraParola, index) => {
        if (letteraParola === letteraCliccata) {
          parolaContainer.children[index].textContent = letteraCliccata;
          console.log(lettereParola);
          array.push(letteraCliccata);
          console.log(array);
          if (confrontoArray(lettereParola, array)) {
            parolaContainer.textContent = "Hai Vinto!";
            tastieraContainer.classList.add("hidden");
            setTimeout(() => {
              location.reload();
            }, 3000);
          }
        }
      });
      lettera.style.color = "green";
      lettera.style.borderColor = "green";
      lettera.style.backgroundColor = "#003300";
    } else {
      lettera.style.color = "red";
      lettera.style.borderColor = "red";
      lettera.style.backgroundColor = "#4d2c2c";
      punteggio++;
      let risultato = 6 - punteggio;
      vite.textContent = risultato;
      console.log(risultato);
      if (risultato == 0) {
        immagine.src = "assets/errore6.png";
        parolaContainer.textContent = "Hai perso..";
        tastieraContainer.classList.add("hidden");
        setTimeout(() => {
          location.reload();
        }, 3000);
      } else if (risultato == 1) {
        vite.style.color = "red";
        immagine.src = "assets/errore5.png";
      } else if (risultato == 2) {
        immagine.src = "assets/errore4.png";
      } else if (risultato == 3) {
        immagine.src = "assets/errore3.png";
      } else if (risultato == 4) {
        immagine.src = "assets/errore2.png";
      } else if (risultato == 5) {
        immagine.src = "assets/errore1.png";
      }
    }
  });
}

reload.addEventListener("click", function () {
  location.reload();
});

function confrontoArray(array1, array2) {
  const arrayOrdinato1 = array1.slice().sort();
  const arrayOrdinato2 = array2.slice().sort();

  if (arrayOrdinato1.length == arrayOrdinato2.length) {
    return true;
  }
}

gestisciClick(letteraA);
gestisciClick(letteraB);
gestisciClick(letteraC);
gestisciClick(letteraD);
gestisciClick(letteraE);
gestisciClick(letteraF);
gestisciClick(letteraG);
gestisciClick(letteraH);
gestisciClick(letteraI);
gestisciClick(letteraJ);
gestisciClick(letteraK);
gestisciClick(letteraL);
gestisciClick(letteraM);
gestisciClick(letteraN);
gestisciClick(letteraO);
gestisciClick(letteraP);
gestisciClick(letteraQ);
gestisciClick(letteraR);
gestisciClick(letteraS);
gestisciClick(letteraT);
gestisciClick(letteraU);
gestisciClick(letteraV);
gestisciClick(letteraW);
gestisciClick(letteraX);
gestisciClick(letteraY);
gestisciClick(letteraZ);
getParola();
