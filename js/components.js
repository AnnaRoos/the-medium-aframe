AFRAME.registerComponent('change-perspective', {
  schema: {
    target: { type: 'selector', default: '' },
  },
  init: function () {
    var self = this;
    this.eventHandlerFn = function () {
      if (self.data.target.object3D.position.y < 0) {
        self.data.target.object3D.position.y += 1.2;
        self.el.emit('perspective', { changed: true });
      } else if (self.data.target.object3D.position.y === 0) {
        self.data.target.object3D.position.y -= 1.2;
      }
    };
  },
  update: function (oldData) {
    const el = this.el;
    el.removeEventListener('click', this.eventHandlerFn);
    el.addEventListener('click', this.eventHandlerFn);
  },
});

AFRAME.registerComponent('fade-away', {
  init: function () {
    const el = this.el;
    const data = this.data;
    el.sceneEl.addEventListener('perspective', function () {
      el.addEventListener('click', function () {
        el.setAttribute('animation', {
          property: 'material.opacity',
          from: 1,
          to: 0,
          dur: 1500,
        });
        el.emit('invisible', { changed: true });
      });
    });
  },
});

/* AFRAME.registerComponent('fly', {
  schema: {
    target: { type: 'selector', default: '' },
  },
  init: function () {
    var self = this;

    this.eventHandlerFn = function (event) {
      let id = event.detail.body.el.getAttribute('id');
      if (id === 'grounded-pig') {
        const flyingPig = document.createElement('a-gltf-model');
        flyingPig.setAttribute('src', '#pig');
        flyingPig.setAttribute('position', { x: 4, y: 3, z: -4.5 });
        flyingPig.setAttribute('body', { type: 'static' });
        flyingPig.setAttribute('scale', { x: 0.5, y: 0.5, z: 0.5 });
        flyingPig.setAttribute('animation', {
          property: 'rotation',
          to: { x: 0, y: 360, z: 0 },
          dur: 2000,
          loop: true,
          easing: 'linear',
        });
        self.el.sceneEl.appendChild(flyingPig);
        self.el.sceneEl.removeChild(self.data.target);
      }
    };
  },
  update: function (oldData) {
    const el = this.el;
    const data = this.data;
    el.sceneEl.addEventListener('invisible', function () {
      
    });
    el.addEventListener('collide', this.eventHandlerFn);
  },
}); */

AFRAME.registerComponent('fly', {
  schema: {
    target: { type: 'selector', default: '' },
  },

  update: function (oldData) {
    const el = this.el;
    const data = this.data;
    el.sceneEl.addEventListener('invisible', function () {
          el.addEventListener('collide', function (event) {
            let id = event.detail.body.el.getAttribute('id');
            if (id === 'grounded-pig') {
              const flyingPig = document.createElement('a-gltf-model');
              flyingPig.setAttribute('src', '#pig');
              flyingPig.setAttribute('position', { x: 4, y: 3, z: -4.5 });
              flyingPig.setAttribute('body', { type: 'static' });
              flyingPig.setAttribute('scale', { x: 0.5, y: 0.5, z: 0.5 });
              flyingPig.setAttribute('animation', {
                property: 'rotation',
                to: { x: 0, y: 360, z: 0 },
                dur: 2000,
                loop: true,
                easing: 'linear',
              });
              el.sceneEl.appendChild(flyingPig);
              el.sceneEl.removeChild(data.target);
            }
          });
    });

  },
});

