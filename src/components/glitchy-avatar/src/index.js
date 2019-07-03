import * as THREE from "three";
//import * as dat from "dat.gui";



class ThreeWrap {
    constructor(el, beforeInitFn) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera( 75, el.width/el.height, 0.1, 1000 );

        this.renderer = new THREE.WebGLRenderer({
            canvas: el,
            alpha: true
        });
        this.renderer.setSize(el.width, el.height );
        // this.gui = new dat.GUI();

        this.guied = [];
        beforeInitFn.call(this);
        this.init({scene: this.scene, camera: this.camera, addToScene: this.addToScene.bind(this)});
        
        
        this.guied.forEach(x => {
            this.gui.addFolder(x.gui.folderName);
            Object.keys(x.gui.params)
            .forEach(key => {
                let meta = x.gui.meta[key] || []
                this.gui.add(x.gui.params, key, ...meta)
            })
        })
        this.camera.position.z = 5;

        this.animate = this.animate.bind(this);
        this.animate();
    }

    onResize() {

    }

    addToScene(obj) {
        if(obj.hasGui) {
            this.guied.push(obj)
        }

        this.scene.add(obj);
    }

    init({scene}) {
        
    }

    onEnterFrame({camera}){
      
    }

    animate() {
        requestAnimationFrame( this.animate );


        this.guied.forEach(x => {
            x.updateWithGuiValues()
        });

        this.onEnterFrame({
            scene: this.scene,
            camera: this.camera
        })

        this.renderer.render( this.scene, this.camera );
    };
}

export default ThreeWrap