const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
  const scene = new BABYLON.Scene(engine);

  // create box
  const box = BABYLON.MeshBuilder.CreateBox("box", {}); //unit cube
  box.scaling.x = 2;
  box.scaling.y = 1.5;
  box.scaling.z = 3;

  //   REUSUABLE CUBIC BOX
  //   const box = BABYLON.MeshBuilder.CreateBox("box", {}); //unit cube
  // box.scaling.x = 2;
  // box.scaling.y = 1.5;
  // box.scaling.z = 3;

  // create  a camera
  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    15,
    new BABYLON.Vector3(0, 0, 0)
  );
  camera.attachControl(canvas, true);

  // add light
  const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(1, 1, 0)
  );

  // create a ground
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 10,
    height: 10,
  });

  // move box above ground
  box.position.y = 0.5; //box created with default size so height is 1

  // add continuous sound
  const sound = new BABYLON.Sound(
    "heroes tonight",
    "https://www.computerhope.com/clouds.mid",
    scene,
    null,
    { loop: true, autoplay: true }
  );

  // for sound to play once
  //     const sound = new BABYLON.Sound("sound", "url to sound file", scene);
  // //Leave time for the sound file to load before playing it
  // sound.play();

  return scene;
};

const scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
  engine.resize();
});
