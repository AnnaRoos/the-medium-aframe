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
      });
    });
  },
});

