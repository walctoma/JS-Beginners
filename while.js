'use: strict';

////////////////////////////////////

let rep = 1;
while (rep <= 10) {
    console.log(`While: wykoanie x ${rep}`);
    rep++;
};

// Symulacja zutu kością K6

let diece = Math.trunc(Math.random() * 6) + 1; // DEKLARACJA 
// PLUS 1 jest ponieważ zmienna pseudo losowa daje wynik między 0 a 1 wiec zaokrąglenia byłby od 0 do 5;
// trunc to metoda służoca do tworzenia liczb całkowitcy
console.log(diece);

// wykonywanie pętli do momemntu wynika 6 na kości: 
while (diece !== 6) {
    console.log(`Wylosowana Liczba to: ${diece}`);

    // KOLEJNY RZUT KOŚCIĄ, INACZEJ WARTOŚĆ BYŁABY NIE ZMIENNA :
    diece = Math.trunc(Math.random() * 6) + 1;

    if (diece === 6) console.log('Jetseśmy bogaci!');
};
