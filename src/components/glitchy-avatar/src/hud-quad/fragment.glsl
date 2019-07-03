#pragma glslify: snoise2 = require(glsl-noise/simplex/2d)

varying vec2 vUv;
uniform float playhead;
uniform float scaleX;
uniform float scaleY;
uniform float definition;
uniform float base;
uniform float baseScale;
uniform sampler2D texture;
uniform float displacement;
uniform bool showNoise;
uniform float time;

void main() {
    vec2 uv = vUv;
    float baseFrac = floor(base / baseScale);
    vec3 white = vec3(1.0);

    uv /= vec2(scaleX, scaleY);

    vec2 p = (floor(uv * base) / base) / definition;
    vec2 p1 = (floor(uv * baseFrac) / baseFrac) / definition;

    float noise = (snoise2(p) * 0.5 + 0.5) * 0.5;
    noise += (snoise2(p1) * 0.5 + 0.5) * 0.5;

   
    float brightness = playhead - noise;

    float noisedPlayhead = (snoise2(vec2(time * 0.1)) * 0.3 + 0.3 ) ;
    
    noisedPlayhead = clamp(noisedPlayhead + playhead, 0.0, 1.0);

    float d = ((displacement * noise) / noisedPlayhead) - displacement * noise;
    
    //float xLookup = (vUv.x + d > 1.0) ? 1.0 - d : vUv.x + d;
    float xLookup = (vUv.x + d > 1.0) ? 1.0 - vUv.x + d : vUv.x + d;


    vec4 color = texture2D(texture, vec2(xLookup, vUv.y));
    //float alpha = ( vUv.x + d > 1.0) ? 0.0 : 1.0;
    float alpha = 1.0 / abs(d);
    


    if(showNoise) {
        color = vec4(vec3(d), 1.0);
    }

    gl_FragColor = vec4(color.rgb, alpha);
    if ( color.a < 0.5 ) discard;
}
