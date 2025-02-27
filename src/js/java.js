document.getElementById("getCatFact").addEventListener("click", async function(){
    const response = await fetch("https://catfact.ninja/fact");
    const data =  await response.json();
    document.getElementById("catFact").innerText = data.fact;
});

const CsFacts = [
    "CS2 tika izlaists 2023. gadā kā Counter-Strike: Global Offensive turpinājums.",
    "Source 2 dzinējs uzlaboja vizuālos efektus un fiziku.",
    "Dūmu granātas CS2 reaģē uz apkārtējo vidi reāllaikā.",       
    "CS2 piedāvā atjauninātu matchmaking sistēmu.",
    "Daži spēlētāji joprojām dod priekšroku CS:GO salīdzinājumā ar CS2.",
    "Valve ieviesa jaunu anti-cheat sistēmu CS2.",
    "Spēles optimizācija joprojām ir liela problēma.",
    "CS2 kartes ir atjaunotas, izmantojot Source 2 dzinēju.",
    "FPS kritumi ir viena no visbiežāk sastopamajām sūdzībām.",
    "CS2 izmaiņas ieroču mehānikā izraisīja diskusijas starp spēlētājiem.",
    "Valve turpina izlaist atjauninājumus, lai uzlabotu spēli.",
    "CS2 sacensību spēļu režīms ir balstīts uz jaunu reitingu sistēmu.",
    "Skaņas efekti CS2 ir pilnībā pārstrādāti.",
    "Daži spēlētāji ziņo par trāpījumu reģistrācijas problēmām.",
    "Kopienas kartes tagad ir vieglāk integrēt Source 2 darbnīcā.",
    "Animācijas ir kļuvušas plūstošākas, pateicoties jaunajam dzinējam.",
    "CS2 serveri joprojām piedzīvo pārslogojumus augstas aktivitātes laikā.",
    "Spēlētāji pieprasa labākas pretkrāpšanas metodes.",
    "CS2 uzlaboja apgaismojuma un ēnu efektus.",
    "Jaunās hitbox sistēmas precizitāte ir pretrunīgi vērtēta.",
    "CS2 augsta grafiskā kvalitāte var prasīt jaudīgākus datorus.",
    "Valve piedāvā jaunas skina animācijas CS2.",
    "Granātu lidojuma trajektorija ir mainīta, salīdzinot ar CS:GO.",
    "CS2 ir atjaunināta radara un HUD sistēma.",
    "Spēlētājiem ir pretrunīgi viedokļi par izmaiņām kustības mehānikā.",
    "Kopiena aktīvi veido modifikācijas un uzlabojumus CS2.",
    "Jaunas animācijas un modeļi ietekmē spēles vizuālo pieredzi.",
    "CS2 demo sistēma ir uzlabota, lai atvieglotu spēļu analīzi.",
    "Valve turpina eksperimentēt ar balansa izmaiņām ieročos.",
    "Kopiena joprojām cer uz labākiem serveriem un veiktspēju."
];

document.getElementById("getCsFact").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * CsFacts.length);
    document.getElementById("CSFact").innerText = CsFacts[randomIndex];
});