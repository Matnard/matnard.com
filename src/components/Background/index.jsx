import React, { Component } from "react";
import styled from "@emotion/styled"
import {
	WebGLRenderer,
	PerspectiveCamera,
	PointLight,
	Scene
} from 'three';
import Sombrero from "./sombrero";


class Background extends Component {

  componentDidMount() {
  
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const NEAR = 0.005;
    const FAR = 10000;
    const FOV = 45;
    
    let renderer = new WebGLRenderer( {
      antialias:true,
      alpha: true,
      canvas: this.elSombrero.current
    } );
  
    renderer.setPixelRatio(window.devidePixelRatio)
    renderer.setSize(WIDTH, HEIGHT);
  
    let camera = new PerspectiveCamera(FOV, WIDTH/HEIGHT, NEAR, FAR);
    window.camera = camera;
  
    let pointLight = new PointLight(0xFFFFFF);
  
  
    let scene = new Scene();
    scene.add(camera);
    scene.add(new Sombrero(renderer, camera, scene));
  
    pointLight.position.set(0,400,400);
    // camera.position.set(-295.487136558543, 103.03964239226575, 172.3230048464714);
    // camera.rotation.set(-0.5389069437879402, -0.9739710596848878, -0.45929780344672005);
  
    camera.position.set(-243.65975166359857, 89.53569100228458, 151.0689694942586);
    camera.rotation.set(-0.21513921305043401, -0.7147675168349603, -0.1422603331606323);
  }
  
  constructor(props) {
    super(props);
    this.elSombrero = React.createRef();
  }
  render() {
    const Canvas = styled.canvas`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    `
    return <Canvas ref={this.elSombrero} />
  }
}

export default Background;