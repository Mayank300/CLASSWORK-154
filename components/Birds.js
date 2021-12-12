AFRAME.registerComponent("birds", {
  inti: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `bird${i}`;
      var x = Math.random() * 3000 + -1000;
      var y = Math.random() * 2 + -1;
      var z = Math.random() * 3000 + -1000;

      var position = { x: x, y: y, z: z };

      this.createBird(id, position);
    }
  },

  createBird: function (id, position) {
    var terrain = document.querySelector("#terrain");
    var bird = document.createElement("a-entity");

    bird.setAttribute("id", id);
    bird.setAttribute("position", position);
    bird.setAttribute("scale", { x: 500, y: 500, z: 500 });
    bird.setAttribute("gltf-model", "../assets/models/flying_bird/scene.gltf");
    bird.setAttribute("animation-mixer", {});
    terrain.appendChild(bird);
  },
});
