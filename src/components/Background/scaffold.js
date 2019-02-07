import {
	WebGLRenderer,
	PerspectiveCamera,
	PointLight,
	Scene
} from 'three';

const WIDTH = innerWidth;
const HEIGHT = innerHeight;
const NEAR = 0.005;
const FAR = 10000;
const FOV = 45;


let renderer = new WebGLRenderer( {
	antialias:true,
	alpha: true,
	canvas: document.getElementById('sombrero')
} );

renderer.setPixelRatio(window.devidePixelRatio)
renderer.setSize(WIDTH, HEIGHT);

let camera = new PerspectiveCamera(FOV, WIDTH/HEIGHT, NEAR, FAR);
window.camera = camera;

let pointLight = new PointLight(0xFFFFFF);


let scene = new Scene();
scene.add(camera);
scene.add(pointLight);

pointLight.position.set(0,400,400);
// camera.position.set(-295.487136558543, 103.03964239226575, 172.3230048464714);
// camera.rotation.set(-0.5389069437879402, -0.9739710596848878, -0.45929780344672005);

camera.position.set(-243.65975166359857, 89.53569100228458, 151.0689694942586);
camera.rotation.set(-0.21513921305043401, -0.7147675168349603, -0.1422603331606323);

export {
	renderer,
	scene,
	camera,
	pointLight
};
