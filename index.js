const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

// Add your code here matching the playground format
const createScene = function () {
  const scene = new BABYLON.Scene(engine);

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

  //   // create box
  //   const box = BABYLON.MeshBuilder.CreateBox("box", {}); //unit cube
  //   box.scaling.x = 2;
  //   box.scaling.y = 1.5;
  //   box.scaling.z = 3;

  //   REUSUABLE CUBIC BOX
  //   const box = BABYLON.MeshBuilder.CreateBox("box", {}); //unit cube
  // box.scaling.x = 2;
  // box.scaling.y = 1.5;
  // box.scaling.z = 3;

  //   //   box positioning
  //   box.position.x = -2;
  //   box.position.y = 4.2;
  //   box.position.z = 0.1;

  //   or box.position = new BABYLON.Vector3(-2, 4.2, 0.1);

  // ORIENTATION - WE ARE TO ROTATAE ALONG 1 AXIS nb: in radians
  //   box.rotation.y = Math.PI / 4;
  //   box.rotation.y = BABYLON.Tools.ToRadians(45);

  const box = BABYLON.MeshBuilder.CreateBox("box", {});
  // move box above ground
  box.position.y = 0.5; //box created with default size so height is 1
  const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {
    diameter: 1.3,
    height: 1.2,
    tessellation: 3,
  });
  roof.scaling.x = 0.75;
  roof.rotation.z = Math.PI / 2;
  roof.position.y = 1.22;

  // create a ground
  const ground = BABYLON.MeshBuilder.CreateGround("ground", {
    width: 10,
    height: 10,
  });
  const material = new BABYLON.StandardMaterial("name", scene);
  //   make gground grass
  const groundMat = new BABYLON.StandardMaterial("groundMat");
  groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
  ground.material = groundMat; //Place the material property of the ground

  // COLORS
  new BABYLON.Color3.Red();
  new BABYLON.Color3.Green();
  new BABYLON.Color3.Blue();
  new BABYLON.Color3.Black();
  new BABYLON.Color3.White();
  new BABYLON.Color3.Purple();
  new BABYLON.Color3.Magenta();
  new BABYLON.Color3.Yellow();
  new BABYLON.Color3.Gray(), new BABYLON.Color3.Teal();

  // texture for ground and box
  const roofMat = new BABYLON.StandardMaterial("roofMat");
  roofMat.diffuseTexture = new BABYLON.Texture(
    "https://assets.babylonjs.com/environments/roof.jpg",
    scene
  );
  const boxMat = new BABYLON.StandardMaterial("boxMat");
  boxMat.diffuseTexture = new BABYLON.Texture(
    "https://www.babylonjs-playground.com/textures/floor.png"
  );
  roof.material = roofMat;
  box.material = boxMat;

  
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

// COLORS
// new BABYLON.Color3.Red();
// new BABYLON.Color3.Green();
// new BABYLON.Color3.Blue();
// new BABYLON.Color3.Black();
// new BABYLON.Color3.White();
// new BABYLON.Color3.Purple();
// new BABYLON.Color3.Magenta();
// new BABYLON.Color3.Yellow();
// new BABYLON.Color3.Gray(),
// new BABYLON.Color3.Teal();
