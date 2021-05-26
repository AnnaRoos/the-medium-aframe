
window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

const introMessage = document.querySelector('#intro');

const hideInstructions = () => {
  introMessage.style = 'display: none;';
};

introMessage.addEventListener('click', hideInstructions);


