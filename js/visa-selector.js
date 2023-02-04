const buttonPrimeraVez = document.querySelector('.primera-vez-button');
const contentPrimeraVez = document.querySelector('.primera-vez-content');

const buttonRenovacion = document.querySelector('.renovacion-button');
const contentRenovacion = document.querySelector('.renovacion-content');

const buttonSoloCita = document.querySelector('.solo-cita-button');
const contentSoloCita = document.querySelector('.solo-cita-content');

contentRenovacion.classList.add('none');
contentSoloCita.classList.add('none');

buttonPrimeraVez.addEventListener('click', () => {
    contentPrimeraVez.classList.remove('none');
    contentRenovacion.classList.add('none');
    contentSoloCita.classList.add('none');
});

buttonRenovacion.addEventListener('click', () => {
    contentPrimeraVez.classList.add('none');
    contentRenovacion.classList.remove('none');
    contentSoloCita.classList.add('none');
});

buttonSoloCita.addEventListener('click', () => {
    contentPrimeraVez.classList.add('none');
    contentRenovacion.classList.add('none');
    contentSoloCita.classList.remove('none');
})