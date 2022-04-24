let navbar = document.querySelector('.navbar');//sa let se definisu varijable, let se koristi od js verzije ES6(ES2015) koja je uvedena 2015 godine
// let variable postoje smo u okviru block-a tj ovih zagrada {} to je glavna razlika u odnosu na var cilj je sto manje opterecivanje globalnog scope-a
//https://youtu.be/VbxgykVVw4g ako vas bune let i var pogledajte ovo
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');// kada se klikne na meni ikonicu u modu za telefon izadjde searchForm
    searchForm.classList.remove('active');// ako je aplikacija u modu za telefon i otvoren je searchForm prilikom klika na meni ikonicu meni ce se otvoriti i nestace searchForm
}
let searchForm = document.querySelector('.search-form');//sa let se definisu varijable

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');// kada se klikne na lupicu izadjde searchForm
    navbar.classList.remove('active');// ako je aplikacija u modu za telefon i otvoren je meni prilikom klika na lupicu meni ce nestati i otvorice se searchForm
}

window.onscroll = () =>{
    navbar.classList.remove('active');//ako je otvoren meni kada je aplikacija otvorena u modu za telefon meni se prlikom skrolanja gubi
    searchForm.classList.remove('active');//ako je otvoren searcForm prilikom skrolanja se gubi
}
function displayDate(){
    document.getElementById("datum").innerHTML= Date();
        }//funkcija koja prikazuje danasnji datum
//windiw i document su vrste objekata u js-u document je sadrzan u windowsu ako vas buni pogledajte ovo https://youtu.be/pIBKyooZrJQ dokument se uglavnom koristi za stvari koje su vidljive na sajtu kao sto su npr search-btn i menu-btn
//remove je funkcija koja skida klasu navedenu u zagradi sa elementa koji smo izabrali ako je klasa da kazem aktivna npr klasa .header .search-form.active prelazi u .header .search-form a add() bi npr uradio suprotno
//toggle je funkcija koja dodaje klasu active ako je objekat nema i skida je ako je objekat ima. Konkretno ovde je klasa active to moze biti bilo koja druga klasa 
//classList funkcije add, remove, toggle posto ji funkcija replace ali vam ona nije potrebna se koriste da bi se izvrsila neka promena nad css klasama zato se iz liste klasa uzima tj bira odredjenja klasa uz pomoc classList
//querySelector nam sluzi da izaberemo element koji ima isti naziv u css-u npr. #menu-btn, moze se videti da je isto tako zapisan i u css dokumentu ako vas ovo buni pogledati https://youtu.be/3oOKAJTD2F8
// onclick je funkcija koja radi nisto prilikom klika na nesto npr dugme
// funkcije koje se koristi u element.classList property-u su add(), toggle() i remove(). Add() je za dodavanje css klase elemntu koji smo izabrali, 