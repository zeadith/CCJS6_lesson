//Napisz kod, ktory:

//1.przypisze do zmiennej "logo" obrazek GGC.
var logo = document.getElementById('ggc-logo');

//2. doda klasę "active" do obiektu kryjącego się pod zmienną "logo".
logo.classList.add('active');

//3. przypisze do zmiennej "name" element <strong> z tekstem "IMIĘ_I_NAZWISKO".
//var name = document.getElementsByTagName('strong')[0]; 
//pierwszy element tablicy
var foo = document.getElementById('nazwa');
foo.innerText = "IMIĘ_I_NAZWISKO";
//console.log(foo);

//4. zamieni tekst "IMIĘ_I_NAZWISKO" na Twoje imię i nazwisko.
foo.innerText = "Kasia Zadurska";
//5.  przypisze do zmiennej "section2" drugą sekcję z zadaniami.
//olac to zadanie
var section2 = document.querySelector('[data-set="2"]');


//6. usunie klasę "hidden" z obiektu kryjącego się pod zmienną "section2".
section2.classList.remove('hidden');

//czesc dwa
//Napisz kod, który

//ukryje listę zadań z części pierwszej.
var section1 = document.querySelector('[data-set="1"]');
section1.classList.add('hidden');

//Doda obrazek na stronę

//Stworzy nowy element <img /> (obrazek).

var newImage = document.createElement('img');

//Ustawi mu atrybut src gdzie wartość będzie "./gfx/code.png".
newImage.setAttribute('src','./gfx/code.png');
//z prezentacji na zajeciach:
//var img = document.createElement('img');
//img.src = 'http://codecarrotsjs.github.io/gfx/ggc_logo.svg';

//Następnie doda go na stronę do elementu o id "code".
var elemCode = document.getElementById('code');
elemCode.appendChild(newImage);


//Odblokuj dostęp do kolejnej sekcji:
//Ustaw elementowi "#code" styl "background-color" na biały.
//elemCode.setAttribute('background-color', 'white');
elemCode.style.backgroundColor = 'white';

//Ustaw obrazkowi w kontenerze "#code" styl "margin-left" na "-510px".
elemCode.firstChild.style.marginLeft = '-510px';

//BRAWO, ZNASZ KOD DOSTĘPU!
//bhawo ja!

//Napisz kod, który

//doda na stronę element <button>, który posiada jakiś tekst.
var myButton = document.createElement('button');
myButton.innerText = 'Mój epicki przycisk';
document.body.appendChild(myButton);





//nasłuchuje zdarzenia kliknięcia w button, niech po kliknięciu wykona się funkcja trick.
myButton.addEventListener('click', function(){
    trick();
});

//dodaj drugi button, tylko po jego kliknięciu niech wykona się funkcja iamdone
var mySecondButton = document.createElement('button');
mySecondButton.innerText = 'Mój drugi epicki przycisk';
document.body.appendChild(mySecondButton);

mySecondButton.addEventListener('click', function(){
    iamdone();
});