/********************/
/* HELPER FUNCTIONS */
/********************/
const random = (min, max) => {
  return Math.random() * (+max - +min) + +min;
}

const generateLifeCubes = (count) => {
  for (let i = 0; i < count; i++) {
    let cloneLifeCubeGroup = lifeCubeGroup.clone(true);
    cloneLifeCubeGroup.position.set(random(-200, 200), random(-200, 200), random(-200, 200))
    scene.add(cloneLifeCubeGroup)
  }
}

const generateStars = (count) => {
  for (let i = 0; i < count; i++) {
    let geometry = new THREE.BoxBufferGeometry(.1, .1, .1);
    let material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    let cube = new THREE.Mesh(geometry, material);
    cube.position.set(random(-100, 100), random(-100, 100), random(-100, 100));
    scene.add(cube);
  }
}

const rotateInnerCube = () => {
  innerCube.rotation.x -= ROTATION_SPEED * 3;
  innerCube.rotation.y -= ROTATION_SPEED;
  innerCube.rotation.z -= ROTATION_SPEED;
}

const generatePlanetary = () => {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000);
  pinkPlanetGroup = new THREE.Group();
  greenPlanetGroup = new THREE.Group();
  let sphere = new THREE.Mesh(new THREE.SphereGeometry(5, 20, 20), new THREE.MeshBasicMaterial({ color: 0xf00fff, transparent: true, opacity: 0.5 }));
  pinkPlanetGroup.add(sphere);
  sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 20, 20), new THREE.MeshNormalMaterial({ side: THREE.BackSide }));
  pinkPlanetGroup.add(sphere);
  sphere = new THREE.Mesh(new THREE.SphereGeometry(7, 20, 20), new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 }));
  greenPlanetGroup.add(sphere);
  sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 20), new THREE.MeshNormalMaterial({ side: THREE.BackSide }));
  greenPlanetGroup.add(sphere);
  scene.add(pinkPlanetGroup)
  scene.add(greenPlanetGroup)
  generateStars(1500);
  return { pinkPlanetGroup, greenPlanetGroup }
}

const generateConesGroup = (count) => {
  for (let j = 0; j < count; j++) {
    const subConeGroup = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      let coneGeometry = new THREE.ConeBufferGeometry(1, 2, 64)
      let material = new THREE.MeshNormalMaterial();
      let cone = new THREE.Mesh(coneGeometry, material);
      cone.rotation.z = i;
      cone.position.x = Math.cos(Math.PI * 360 / i) * -3;
      cone.position.y = Math.sin(Math.PI * 360 / i) * -3;
      subConeGroup.add(cone);
    }
    subConeGroup.position.set(Math.round(random(-100, 100)), Math.round(random(-100, 100)), 0)
    conesGroup.add(subConeGroup)
  }
}