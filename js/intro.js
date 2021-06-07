
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

  const play = () => {
    window.removeEventListener('click', play);
    window.removeEventListener('touchstart', play);
    document
      .querySelector('a-sound').components.sound.playSound();
  };
  window.addEventListener('click', play);
  window.addEventListener('touchstart', play);
