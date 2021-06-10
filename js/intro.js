window.addEventListener('load', () => {
  document.body.classList.remove('loading');
});

const postcard = document.querySelector('#postcard');
const introMessage = document.querySelector('#intro');

const hidePostcard = () => {
  postcard.style = 'display: none;';
  introMessage.style = 'display: block;';
};

const hideInstructions = () => {
  introMessage.style = 'display: none;';
};

postcard.addEventListener('click', hidePostcard);
introMessage.addEventListener('click', hideInstructions);

backgroundMusic = document.querySelector('a-sound');

const play = () => {
  window.removeEventListener('click', play);
  window.removeEventListener('touchstart', play);
  backgroundMusic.components.sound.playSound();
};

backgroundMusic.addEventListener('loaded', () => {
  window.addEventListener('click', play);
  window.addEventListener('touchstart', play);
});
