let coffee = false;
let beenToGate = false;

AFRAME.registerComponent('foo', {
  init: function () {
    this.el.addEventListener('collide', function (e) {
      let id = e.detail.body.el.getAttribute('id');

      var text = document.getElementById('red');
      var attr_text = text.getAttribute('text');

      if (id == 'gate1' || id == 'gate2') {
        if (coffee === true) {
          window.location.href = 'maze.html';
        } else {
          beenToGate = true;
          attr_text.value =
            "The gates to the maze seems to be closed.. Maybe there's                 someone around here that can help";
          text.setAttribute('text', attr_text);

          setTimeout(() => {
            attr_text.value = '';
            text.setAttribute('text', attr_text);
            // window.location.href="end.html"
          }, 2000);

          // document.querySelector('#instructions').style = 'display: block;';
          console.log('get coffee first');
        }
      }

      if (id === 'bench') {
        if (beenToGate) {
          document.querySelector('#instructions2').style = 'display: block;';
        } else {
          document.getElementById('text').innerHTML =
            'Good morning to you, what a                     loveley day';
          document.querySelector('#instructions').style = 'display: block;';
        }
      }
    });
  },
});
