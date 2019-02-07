// Author: Matnard
// Title: bar transition

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float qinticInOut(float t) {
  return t < 0.5
    ? +16.0 * pow(t, 5.0)
    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;
}

float level(float delay, float completion) {
    return qinticInOut((sin(u_time + delay)  + 1.0) / 2.0);
}

void main() {

    int bars = 10;

    float progress = (sin(u_time) + 1.0) / 2.0;


	vec2 r = vec2(gl_FragCoord.x / u_resolution.x,
				  gl_FragCoord.y / u_resolution.y);

    int currentBar = int(r.x * float(bars));

    float delay = float(currentBar) / float(bars) * 1.5;
	vec3 pixel = (level(delay, progress) > r.y) ? vec3(0.0) : vec3(1.0);


	gl_FragColor = vec4(pixel, 1.0);
}
