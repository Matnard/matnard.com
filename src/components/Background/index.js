import React, { Component } from "react";
import { WebGLRenderer, PerspectiveCamera, PointLight, Scene } from "three";
import MousePositionTimeDifferencial from "../mouse-position-time-differencial/mouse-position-time-differencial";
//import GamepadControls from "./third-party/THREE.GamepadControls";
import getFloor from "./floor";
import camOperator from "./cam-operator";
//import gui from "./gui";

import camPositions from "./jeromes-pick.json";

class Background extends Component {
  componentDidMount() {
    const WIDTH = window.innerWidth;
    const HEIGHT = window.innerHeight;
    const NEAR = 0.005;
    const FAR = 10000;
    const FOV = 45;

    this.renderer = new WebGLRenderer({
      antialias: true,
      alpha: true,
      canvas: this.elSombrero.current
    });

    this.params = {
      noised: true,
      waveAmplitude: 10, //20
      waveAmplitudeScale: 1,
      noiseAmplitude: 2,
      timeScale: 1, //4
      progress: 100,
      bars: 8,
      scale: ""
    };

    this.camParams = {
      tx: -295.487136558543,
      ty: 103.03964239226575,
      tz: 172.3230048464714,
      rx: -0.5389069437879402,
      ry: -0.9739710596848878,
      rz: -0.45929780344672005
    };

    //this.gui = gui(this.camParams);

    this.renderer.setPixelRatio(window.devidePixelRatio);
    this.renderer.setSize(WIDTH, HEIGHT);

    this.devCam = new PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR, FAR);
    this.camera = new PerspectiveCamera(FOV, WIDTH / HEIGHT, NEAR, FAR);
    window.camera = this.camera;
    window.devCam = this.devCam;

    //this.gc = new GamepadControls(this.devCam);

    this.pointLight = new PointLight(0xffffff);

    this.scene = new Scene();
    this.scene.add(this.camera);
    this.operator = camOperator(this.camera);
    window.operator = this.operator;
    this.pointLight.position.set(0, 400, 400);

    this.camera.position.set(
      this.camParams.tx,
      this.camParams.ty,
      this.camParams.tz
    );
    this.camera.rotation.set(
      this.camParams.rx,
      this.camParams.ry,
      this.camParams.rz
    );

    this.mouseDiff = new MousePositionTimeDifferencial();
    this.floor = getFloor(this.params);

    // Set background color
    const background = "black";
    document.body.style.background = background;
    this.renderer.setClearColor(background);
    // Hide canvas
    this.renderer.domElement.style.visibility = "hidden";
    this.onload();
    this.setResizeListener();
  }

  setResizeListener() {
    const delay = 10;
    this.onResize = this.onWindowResize.bind(this);
    const originalResize = this.onResize;

    let resizeTaskId = null;

    this.resizeCallback = evt => {
      if (resizeTaskId !== null) {
        clearTimeout(resizeTaskId);
      }

      resizeTaskId = setTimeout(() => {
        resizeTaskId = null;
        originalResize();
      }, delay);
    };

    window.addEventListener("resize", this.resizeCallback);
  }

  componentWillReceiveProps(newProps) {
    switch (newProps.page.pathname) {
      case "/about": {
        this.operator.goto({ position: this.positions[4], duration: 5 });
        break;
      }

      case "/contact": {
        this.operator.goto({ position: this.positions[5], duration: 5 });
        break;
      }

      case "/past-projects": {
        this.operator.goto({ position: this.positions[2], duration: 5 });
        break;
      }

      case "/lab": {
        this.operator.goto({ position: this.positions[7], duration: 5 });
        break;
      }

      default:
        this.operator.patrol();
    }
  }

  constructor(props) {
    super(props);
    this.elSombrero = React.createRef();

    this.positions = Object.values(camPositions.remembered).map(
      position => position["0"]
    );
  }

  onEnterFrame() {
    this.mouseDiff.update();
    this.params.noiseAmplitude = Math.abs(this.mouseDiff.value - 1) * 2;

    this.operator.onEnterFrame();
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.onEnterFrame.bind(this));
  }

  onload() {
    // Show canvas
    this.renderer.domElement.style.visibility = "";

    // To avoid page pulling and such
    this.renderer.domElement.addEventListener("touchstart", ev =>
      ev.preventDefault()
    );

    //this.bufferScene.add(this.floor);
    this.scene.add(this.floor);
    requestAnimationFrame(this.onEnterFrame.bind(this));
  }

  onWindowResize(width = global.innerWidth, height = global.innerHeight) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
  }

  render() {
    return (
      <canvas
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -1
        }}
        ref={this.elSombrero}
      />
    );
  }
}

export default Background;
