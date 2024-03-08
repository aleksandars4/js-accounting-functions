function transformisiRecenicu(originalnaRecenica) {
    let novaRecenica = originalnaRecenica.replace(/ /, " - ") + ";";
    return novaRecenica;
}

// Primer sa jednom recenicom
//let originalnaRecenica = "489584 Scheduled payment date 1/6/24";
//let novaRecenica = transformisiRecenicu(originalnaRecenica);
//console.log(novaRecenica);

// Primer sa vise recenica
let recenice = ['477727 Scheduled payment date 12/14/23',
'477748 Scheduled payment date 12/18/23',
'477651 Scheduled payment date 12/18/23',
'478504 Scheduled payment date 12/14/23',
'478301 Scheduled payment date 12/14/23',
];

let transformisaneRecenice = recenice.map(transformisiRecenicu);

// Ispis rezultata
transformisaneRecenice.forEach((novaRecenica, index) => {
    console.log(`${index + 1}: ${novaRecenica}`);
});

//FUNKCIJA ZA UREDJIVANJE DAILY-ja
