import {
	Clock,
	ShaderMaterial,
	PlaneBufferGeometry,
	Mesh
} from 'three';
// import { Clock } from 'three/src/core/Clock';
// import { ShaderMaterial } from 'three/src/materials/ShaderMaterial';
// import { PlaneGeometry } from 'three/src/geometries/PlaneGeometry';
// import { Mesh } from 'three/src/objects/Mesh';
const vertexShader = require('./vertex.glsl');
const fragmentShader = require('./fragment.glsl');



function getFloor(params /*= { noised: false, waveAmplitude: 10, noisedWaveAmplitude: 20, noiseAmplitude: 15, timeScale: 1, noisedTimeScale: 4 }*/) {

	let customUniforms = {
		time: {value:0},
		noised: {value: params.noised},
		waveAmplitude: {value: params.waveAmplitude},
		noiseAmplitude: {value: params.noiseAmplitude},
		timeScale: {value: params.timeScale},
		waveAmplitudeScale: {value: params.waveAmplitudeScale}

	};

	let clock = new Clock(true);
	let material = new ShaderMaterial({
		uniforms: customUniforms,
		wireframe: true,
		vertexShader,
		fragmentShader,
		transparent: true
	});

	let geometry = new PlaneBufferGeometry( 500, 500, 64, 64)


	var floor = new Mesh(
		geometry,
		material
	);

	floor.rotation.x = -Math.PI/2;
	floor.position.set(0, 0, 0);

	function updateFloor() {
		material.uniforms['time'].value = clock.getElapsedTime();

		material.uniforms['noised'].value = params.noised;
		material.uniforms['waveAmplitude'].value = params.waveAmplitude;
		material.uniforms['noiseAmplitude'].value = params.noiseAmplitude;
		material.uniforms['timeScale'].value = params.timeScale;
		material.uniforms['waveAmplitudeScale'].value = params.waveAmplitudeScale;
		requestAnimationFrame(updateFloor)
	}

	requestAnimationFrame(updateFloor)

	return floor
}
export default getFloor;
