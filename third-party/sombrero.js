
// import {WebGLRenderer} from 'three/src/renderers/WebGLRenderer';
// import {PerspectiveCamera} from 'three/src/cameras/PerspectiveCamera';
// import {PointLight} from 'three/src/lights/PointLight';
// import {Scene} from 'three/src/scenes/Scene';
import MousePositionTimeDifferencial from "./mouse-position-time-differencial/mouse-position-time-differencial";

import getFloor from "./floor";


class Background {

  componentDidMount() {
  
    const WIDTH = global.innerWidth;
    const HEIGHT = global.innerHeight;
    const NEAR = 0.005;
    const FAR = 10000;
    const FOV = 45;
    
    this.renderer = new global.THREE.WebGLRenderer( {
      antialias:true,
      alpha: true,
      canvas: this.canvas
    } );

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
  
    this.renderer.setPixelRatio(global.devidePixelRatio)
    this.renderer.setSize(WIDTH, HEIGHT);
  
    this.camera = new global.THREE.PerspectiveCamera(FOV, WIDTH/HEIGHT, NEAR, FAR);
    global.camera = this.camera;
  
    this.pointLight = new global.THREE.PointLight(0xFFFFFF);
  
  
    this.scene = new global.THREE.Scene();
    this.scene.add(this.camera);
    //scene.add(new Sombrero(renderer, camera, scene));
    
  
    this.pointLight.position.set(0,400,400);
    this.camera.position.set(-295.487136558543, 103.03964239226575, 172.3230048464714);
    this.camera.rotation.set(-0.5389069437879402, -0.9739710596848878, -0.45929780344672005);
  

    this.mouseDiff = new MousePositionTimeDifferencial();
		this.floor = getFloor(this.params);


    // Set background color
		const background = 'black';
		document.body.style.background = background;
		this.renderer.setClearColor(background);
		// Hide canvas
		this.renderer.domElement.style.visibility = 'hidden';
    this.onload();
		this.onWindowResize();

  }
  
  constructor() {
    
    
    let canvas = document.createElement('canvas');
    document.body.prepend(canvas)
    this.canvas = canvas;
    document.body.prepend(canvas)
    canvas.style.width="100vw"
    canvas.style.height="100vh"
    canvas.style.position="fixed";
    canvas.style.top=0;
    canvas.style.left=0;
    canvas.style.zIndex= -1;


    this.componentDidMount()
  }

  onEnterFrame() {
		this.mouseDiff.update();
		this.params.noiseAmplitude = Math.abs(this.mouseDiff.value - 1) * 5;
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.onEnterFrame.bind(this));
	}

  onload() {
		console.log('Done loading');

		// Show canvas
		this.renderer.domElement.style.visibility = '';

		// To avoid page pulling and such
		this.renderer.domElement.addEventListener('touchstart', ev => ev.preventDefault());

		//this.bufferScene.add(this.floor);
		this.scene.add(this.floor);
		requestAnimationFrame(this.onEnterFrame.bind(this));
  }
  
  onWindowResize(width = global.innerWidth, height = global.innerHeight) {
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
		this.renderer.setSize( width, height );
	}

}

var optimizedResize = (function() {

  var callbacks = [],
      running = false;

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      if (global.requestAnimationFrame) {
        global.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(function(callback) {
      callback();
    });

    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function(callback) {
      if (!callbacks.length) {
        global.addEventListener('resize', resize);
      }
      addCallback(callback);
    }
  }

}());


document.addEventListener('DOMContentLoaded', function() {
  let bg = new Background();
  optimizedResize.add(function() {
    bg.onWindowResize()
  });
})