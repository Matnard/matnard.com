// Author: Matnard
// Title: bar transition

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_progress;
uniform int u_bars;

//#pragma glslify: ease = require(glsl-easings/back-in-out)
// #pragma glslify: ease = require(glsl-easings/back-in)
// #pragma glslify: ease = require(glsl-easings/back-out)
// #pragma glslify: ease = require(glsl-easings/bounce-in-out)
// #pragma glslify: ease = require(glsl-easings/bounce-in)
// #pragma glslify: ease = require(glsl-easings/bounce-out)
// #pragma glslify: ease = require(glsl-easings/circular-in-out)
#pragma glslify: ease = require(glsl-easings/circular-in)
// #pragma glslify: ease = require(glsl-easings/circular-out)
// #pragma glslify: ease = require(glsl-easings/cubic-in-out)
// #pragma glslify: ease = require(glsl-easings/cubic-in)
// #pragma glslify: ease = require(glsl-easings/cubic-out)
// #pragma glslify: ease = require(glsl-easings/elastic-in-out)
// #pragma glslify: ease = require(glsl-easings/elastic-in)
// #pragma glslify: ease = require(glsl-easings/elastic-out)
// #pragma glslify: ease = require(glsl-easings/exponential-in-out)
// #pragma glslify: ease = require(glsl-easings/exponential-in)
// #pragma glslify: ease = require(glsl-easings/exponential-out)
// #pragma glslify: ease = require(glsl-easings/linear)
// #pragma glslify: ease = require(glsl-easings/quadratic-in-out)
// #pragma glslify: ease = require(glsl-easings/quadratic-in)
// #pragma glslify: ease = require(glsl-easings/quadratic-out)
// #pragma glslify: ease = require(glsl-easings/quartic-in-out)
// #pragma glslify: ease = require(glsl-easings/quartic-in)
// #pragma glslify: ease = require(glsl-easings/quartic-out)
// #pragma glslify: ease = require(glsl-easings/quintic-in-out)
// #pragma glslify: ease = require(glsl-easings/quintic-in)
// #pragma glslify: ease = require(glsl-easings/quintic-out)
// #pragma glslify: ease = require(glsl-easings/sine-in-out)
// #pragma glslify: ease = require(glsl-easings/sine-in)
// #pragma glslify: ease = require(glsl-easings/sine-out)

float delay(int currentBar, int bars) {
    // return float(currentBar) / float(bars);
    return pow(1.6180339887498948482, float(currentBar));
}

float level(float completion, int currentBar, int bars) {

    float firstDelay = delay(1, bars + 1);
    float lastDelay = delay(bars + 1, bars + 1);
    float delay = delay(currentBar + 1, bars + 1);

    return 0.5 * delay;
    //return ((1.0 + delay ) * completion / lastDelay) ;
}

void main() {

    int bars = u_bars;

    float progress = u_progress;//(sin(u_time) + 1.0) / 2.0;


	vec2 r = gl_FragCoord.xy / u_resolution.xy;

    int currentBar = int(r.x * float(bars));


    if(level(progress, currentBar, bars) < r.y) {
        gl_FragColor = vec4(vec3(1.0), 1.0);
    } else {
        discard;
    }
}
