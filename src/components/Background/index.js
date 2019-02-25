import React, { Component } from "react";
import styled from "@emotion/styled"
import {
	WebGLRenderer,
	PerspectiveCamera,
	PointLight,
  Scene

} from 'three';
import MousePositionTimeDifferencial from "../mouse-position-time-differencial/mouse-position-time-differencial";

import getFloor from "./floor";


class Background extends Component {

  componentDidMount() {
  
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const NEAR = 0.005;
    const FAR = 10000;
    const FOV = 45;
    
    this.renderer = new WebGLRenderer( {
      antialias:true,
      alpha: true,
      canvas: this.elSombrero.current
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
  
    this.renderer.setPixelRatio(window.devidePixelRatio)
    this.renderer.setSize(WIDTH, HEIGHT);
  
    this.camera = new PerspectiveCamera(FOV, WIDTH/HEIGHT, NEAR, FAR);
    window.camera = this.camera;
  
    this.pointLight = new PointLight(0xFFFFFF);
  
  
    this.scene = new Scene();
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
  
  constructor(props) {
    super(props);
  
    this.elSombrero = React.createRef();
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

  render() {
    const Canvas = styled.canvas`
    width: 100vw;
    height: 100vh;
    /*position: fixed;*/
    top: 0;
    left: 0;
    `
    return <p />
  }
}

export default Background;