
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

const postcard = document.querySelector('#postcard');
const introMessage = document.querySelector('#intro');

const hidePostcard = () => {
  postcard.style = 'display: none;';
  introMessage.style = 'display: block;';
}

const hideInstructions = () => {
  introMessage.style = 'display: none;';
};

postcard.addEventListener('click', hidePostcard);
introMessage.addEventListener('click', hideInstructions);


