import {
    PlaneGeometry,
    ShaderMaterial,
    DoubleSide,
    Mesh
} from "three";

import fragmentShader from "./fragment.glsl";
import vertexShader from "./vertex.glsl";

var geometry = new PlaneGeometry(2,2);
var getMaterial = function (texture) { 
    return new ShaderMaterial({
        flatShading: true,
        side: DoubleSide,
        fragmentShader,
        vertexShader,
        uniforms: {
            "playhead": {
                value: 0.8
            },
            "scaleX": {
                value: 4.3
            },
            "scaleY": {
                value: 1.8
            },
            "definition": {
                value: 0.05
            },
            "base": {
                value: 64
            },
            "baseScale": {
                value: 2.1
            },
            "texture": {
                value: texture
            },
            "displacement": {
                value: 0.5
            },
            "showNoise": {
                value: false
            },
            "time": {
                value: 0
            }
        }
    });
}


export default function (texture) {
    let material = getMaterial(texture);
    material.transparent = true;
    return new Mesh(geometry, material);
};
