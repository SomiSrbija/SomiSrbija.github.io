// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('solar-system').appendChild(renderer.domElement);

// Create the sun
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

// Create a planet
const planetGeometry = new THREE.SphereGeometry(1, 32, 32);
const planetMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const planet = new THREE.Mesh(planetGeometry, planetMaterial);
planet.position.set(10, 0, 0);
scene.add(planet);

// Position the camera
camera.position.z = 20;

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the planet around the sun
    planet.position.x = Math.cos(Date.now() * 0.001) * 10;
    planet.position.z = Math.sin(Date.now() * 0.001) * 10;

    renderer.render(scene, camera);
}

animate();
