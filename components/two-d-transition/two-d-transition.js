import {
	Camera,
	Scene,
	WebGLRenderer
} from 'three';

const fragmentShader = require('./bar-transition.frag');


import Three2dQuad from "/sun-tzu/src/components/three-2d-quad/three-2d-quad";
const quad = new Three2dQuad(fragmentShader);


class TwoDTransition {

	constructor(renderer) {
		this.camera = new Camera();
		this.camera.position.z = 1;

		this.scene = new Scene();

		this.scene.add( quad.mesh );
		this.renderer = renderer;

		this.onWindowResize();
		global.addEventListener( 'resize', this.onWindowResize.bind(this), false );

	}

	onWindowResize( event ) {
		this.renderer.setSize( window.innerWidth, window.innerHeight );
		quad.uniforms.u_resolution.value.x = this.renderer.domElement.width;
		quad.uniforms.u_resolution.value.y = this.renderer.domElement.height;
	}

	render() {
		quad.update()
		this.renderer.render( this.scene, this.camera );
	}
}


export default TwoDTransition;
