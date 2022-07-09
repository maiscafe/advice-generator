const quote = document.querySelector('.quote');
const btnDice = document.querySelector('.dice');
const adviceId = document.querySelector('.advice');
const xmlQuote = new XMLHttpRequest();

btnDice.addEventListener('click', getAPI);
 
async function getAPI(){
    xmlQuote.open('GET', 'https://api.adviceslip.com/advice');
    xmlQuote.send();
    xmlQuote.addEventListener('load', () => {
        const dataText = JSON.parse(xmlQuote.responseText);
        quote.innerHTML = dataText.slip.advice;
        adviceId.textContent = 'advice #' + dataText.slip.id;
    })
}