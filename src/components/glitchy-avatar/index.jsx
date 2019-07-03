import ThreeWrap from "./src";
import { TextureLoader } from "three";
import React, { Component } from "react";
import GlitchyQuad from "./src/hud-quad";

class App extends ThreeWrap {

    constructor(canvas, src) { 
        super(canvas, function () { 
            this.src = src;
        });
    }
    
    init({ scene }) {
        console.log(this)
        console.log('////', this.src)
        this.startTime = Date.now();        
        const loader = new TextureLoader();
        loader.load(this.src, (texture) => {
            this.glitchyQuad = new GlitchyQuad(texture);
            scene.add(this.glitchyQuad);
        });
    }

    onEnterFrame(){
        var elapsedMilliseconds = Date.now() - this.startTime;
        var elapsedSeconds = elapsedMilliseconds / 1000;
        if (this.glitchyQuad) {
            this.glitchyQuad.material.uniforms.time.value = 60 * elapsedSeconds;
        }
    }
}


class GlitchyAvatar extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    componentDidMount() { 
        new App(this.myRef.current, this.props.src);
    }
    
    render() {
        return <canvas className={this.props.className} ref={this.myRef} style={{}} />;
    }
}

export default GlitchyAvatar;