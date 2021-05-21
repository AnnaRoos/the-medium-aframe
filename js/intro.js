const introMessage = document.querySelector('#intro');

const hideInstructions = () => {
  introMessage.style = 'display: none;';
};

introMessage.addEventListener('click', hideInstructions);

/* window.addEventListener('load', (event) => {
  introMessage.style = 'display: block';
}); */