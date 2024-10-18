import './style.css'

const quoteBtn = document.querySelector('#quote-btn')
const catInput = document.querySelector<HTMLInputElement>('#catagory-input')

async function getQuote() {

  const quoteOutput = document.querySelector<HTMLElement>('.quote')
  const catagory = catInput?.value;
  const responseObj = await fetch(`/api/quotes?cat=${catagory}`);
  const data = await responseObj.json();

  if (data.quote && quoteOutput) {
    quoteOutput.style.color = 'initial';
    quoteOutput.innerText = `"${data.quote}"`;
  } else if (data.message && quoteOutput) {
    quoteOutput.style.color = 'red';
    quoteOutput.innerText = data.message;
  }
  
}


quoteBtn?.addEventListener('click', getQuote);
catInput?.addEventListener('keydown', (eventObj) => {
  if (eventObj.key === 'Enter') {
    getQuote();
  }
});