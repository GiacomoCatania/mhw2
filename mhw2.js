
const cuore = document.getElementById('cuore');

function aggiungiMiPiace() {
  if (cuore.dataset.state === "on") {
    cuore.src = 'notifiche.svg';
    cuore.dataset.state = "off";
  } else {
    cuore.src = 'notificheColored.svg';
    cuore.dataset.state = "on";
  }
}

cuore.addEventListener('click', aggiungiMiPiace);

  

  const preferiti = document.getElementById('preferiti');
  let isColoredpreferiti = false;
  function aggiungiSalvati() {
    if (isColoredpreferiti) {
      preferiti.src = 'salvati.svg';
      isColoredpreferiti = false;
    } else {
      preferiti.src = 'salvatiColored.svg';
      isColoredpreferiti = true;
    }
  }
  preferiti.addEventListener('click', aggiungiSalvati);



  const testoContainer = document.getElementById('testo-descrizione-post');
  const testoOriginale = testoContainer.textContent;
  const lunghezzaTroncata = 100;
  
  function mostraTestoCompleto(event) {
    testoContainer.textContent = testoOriginale;
  }
  
  if (testoOriginale.length > lunghezzaTroncata) {
    const testoTroncato = testoOriginale.substring(0, lunghezzaTroncata) + '... ';
    const leggiDiPiu = document.createElement('a');
    leggiDiPiu.textContent = 'altro';
    leggiDiPiu.classList.add('leggi-di-piu');
  
    testoContainer.textContent = testoTroncato;
    testoContainer.appendChild(leggiDiPiu);
  
    leggiDiPiu.addEventListener('click', mostraTestoCompleto);
  }






const tastoMostraSuggeriti = document.getElementById('tasto-mostra-suggeriti');
const accountConsigliatoDivs = document.querySelectorAll('.account-consigliato');

tastoMostraSuggeriti.addEventListener('click',  mostraSuggeriti )
    
    
 function mostraSuggeriti(){
  for (let i = 4; i < accountConsigliatoDivs.length; i++) {
    accountConsigliatoDivs[i].style.display = 'none';
  }

  for (let i = 4; i < accountConsigliatoDivs.length; i++) {
    accountConsigliatoDivs[i].style.display = 'flex'; 
  }

 
  tastoMostraSuggeriti.textContent = 'Mostra meno';


  tastoMostraSuggeriti.addEventListener('click', nascondiSuggeriti);
  tastoMostraSuggeriti.removeEventListener('click', mostraSuggeriti);
  
};

function nascondiSuggeriti() {
    for (let i = 4; i < accountConsigliatoDivs.length; i++) {
      accountConsigliatoDivs[i].style.display = 'none'; 
    }
  
    
    tastoMostraSuggeriti.textContent = 'Mostra tutti';
  
    
    tastoMostraSuggeriti.addEventListener('click', mostraSuggeriti);
    tastoMostraSuggeriti.addEventListener('click', nascondiSuggeriti);
  }


function consigliatiIniziali(){
  for (let i = 0; i < 4; i++) {
    accountConsigliatoDivs[i].style.display = 'flex';
  }
};
document.addEventListener('DOMContentLoaded', consigliatiIniziali);





const foto = document.getElementById('immaginePost');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
let isPrimaFoto = true;
function scorri1() {
  if (isPrimaFoto) {
    foto.src = 'foto1.jpg';
    isPrimaFoto = false;
    prevButton.style.display = "flex" ;
    nextButton.style.display = "none";
  }
}
function scorri2() {
    if (!isPrimaFoto) {
      foto.src = 'foto2.jpg';
      isPrimaFoto = true;
      prevButton.style.display = "none" ;
      nextButton.style.display = "flex";
    }
  }
nextButton.addEventListener('click', scorri1);
prevButton.addEventListener('click', scorri2);





