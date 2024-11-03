// DOM
const touches = [...document.querySelectorAll('.bouton')]; // Changer '.button' en '.bouton'
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    if (valeur) { // Vérifier si 'valeur' existe
        calculer(valeur);
    }
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '67': // C
                ecran.textContent = "";
                break;
            case '13': // =
                try {
                    const calcul = eval(ecran.textContent);
                    ecran.textContent = calcul;
                } catch (error) {
                    alert('Erreur dans le calcul : ' + error.message);
                }
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message);
});
