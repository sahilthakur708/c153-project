//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z
      });
    }
  });
  AFRAME.registerComponent('diver-rotation-reader', {
    schema: {
      speed_of_rotation: { type: 'number', default: 0 },
      speed_of_position: { type: 'number', default: 0 }
    },
    init: function () {
      window.addEventListener('keydown', (e) => {
        this.data.speed_of_rotation = this.el.getAttribute('rotation')
        this.data.speed_of_position = this.el.getAttribute("position")
        var rotation = this.data.speed_of_rotation
        var position = this.data.speed_of_position
        if (e.key === "ArrowRight") {
          if (rotation.x < 10) {
            rotation.x += 0.5
            this.el.setAttribute("rotation", rotation)
          }
        }
        if (e.key === "ArrowLeft") {
          if (rotation.x > -10) {
            rotation.x -= 0.5
            this.el.setAttribute("rotation", rotation)
          }
        }
        if (e.key === "ArrowUp") {
          if (rotation.z < 20) {
            rotation.z += 0.5
            this.el.setAttribute('rotation', rotation)
          }
          if (position.y < 2) {
            position.y += 0.01
            this.el.setAtrribute('position', position)
          }
        }
        if (e.key === "ArrowDown") {
          if (rotation.z > -10) {
            rotation.z -= 0.5
            this.el.setAttribute('rotation', rotation)
          }
          if (position.y > -2) {
            position.y -= 0.01
            this.el.setAttribute("position", position)
          }
        }
      })
    }
  })
  
  
  
  