import getFloor from "./floor";

import {
	Scene,
	WebGLRenderTarget,
	LinearFilter,
	NearestFilter,
	MeshBasicMaterial,
	Mesh,
	BoxGeometry
} from 'three';

import { TweenLite, TimelineLite } from 'gsap';
import MousePositionTimeDifferencial from "../../../sun-tzu/src/components/mouse-position-time-differencial/mouse-position-time-differencial";

import Three2dQuad from "../../../sun-tzu/src/components/three-2d-quad/three-2d-quad";
const fragmentShader = require("./bar-transition.glsl");

class Sombrero {
	constructor(renderer, camera, scene) {

		this.quad = new Three2dQuad(fragmentShader);
		global.quad = this.quad;

		this.quad.uniforms.u_progress = { type: "f", value: 0.0 };
		this.quad.uniforms.u_bars = { type: "1i", value: 8 };

		this.tl = new TimelineLite();
		this.params = {
			noised: true,
			waveAmplitude: 10, //20
			waveAmplitudeScale: 1,
			noiseAmplitude: 15,
			timeScale: 1, //4
			progress: 100,
			bars: 8,
			scale: ''
		};
		//gui(this.params)
		this.renderer = renderer;
		this.scene = scene;

		this.bufferScene = new Scene();
		this.bufferTexture = new WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: LinearFilter, magFilter: NearestFilter});

		this.camera = camera;
		//this.cameraControls = new GamepadControls( camera );
		this.mouseDiff = new MousePositionTimeDifferencial();


		var boxMaterial = new MeshBasicMaterial({map:this.bufferTexture.texture});
		var boxGeometry2 = new BoxGeometry( 5, 5, 5 );
		this.mainBoxObject = new Mesh(boxGeometry2, boxMaterial);
		this.mainBoxObject.position.z = -10;
		//this.scene.add(this.mainBoxObject);

		this.floor = getFloor(this.params);

		// Set background color
		const background = 'black';
		document.body.style.background = background;
		renderer.setClearColor(background);

		// Hide canvas
		renderer.domElement.style.visibility = 'hidden';

		this.onload();
		this.onWindowResize();
		global.addEventListener( 'resize', () => {
			this.onWindowResize();
		}, false );
	}

	set noised(value) {
		this.params.noised = value;
	}

	raiseAmplitude() {
		TweenLite.to(this.params, 0.35, {
			waveAmplitude: 25
		})
	}

	lowerAmplitude() {
		TweenLite.to(this.params, 0.2, {
			waveAmplitude: 10
		})
	}

	bgTransition() {
		TweenLite.to(this.params, 0.7, {
			progress: (this.params.progress === 0) ? 100 : 0
		})
	}

	onload() {
		console.log('Done loading');

		// Show canvas
		this.renderer.domElement.style.visibility = '';

		// To avoid page pulling and such
		this.renderer.domElement.addEventListener('touchstart', ev => ev.preventDefault());

		//this.bufferScene.add(this.floor);
		this.scene.add(this.floor);
	    this.bufferScene.add( this.quad.mesh );
		requestAnimationFrame(this.onEnterFrame.bind(this));
	}

	onEnterFrame() {
		this.mouseDiff.update();
		this.params.noiseAmplitude = Math.abs(this.mouseDiff.value - 1) * 5;
		this.quad.uniforms.u_progress.value = this.params.progress / 100;
		this.quad.uniforms.u_bars.value = this.params.bars;
		this.quad.update();
		//Rotate the main box too
		this.mainBoxObject.rotation.y += 0.01;
		this.mainBoxObject.rotation.x += 0.01;
		//renderer.render(this.bufferScene, this.camera, this.bufferTexture);
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.onEnterFrame.bind(this));
	}

	onWindowResize(width = global.innerWidth, height = global.innerHeight) {
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( width, height );
		this.quad.uniforms.u_resolution.value.x = this.renderer.domElement.width;
		this.quad.uniforms.u_resolution.value.y = this.renderer.domElement.height;
	}
}

export default Sombrero;
