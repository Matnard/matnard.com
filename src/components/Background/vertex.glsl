varying float zDisplacement;
varying float distanceToCenter;
uniform float time;
uniform bool noised;
uniform float waveAmplitude;
uniform float noiseAmplitude;
uniform float timeScale;
uniform float waveAmplitudeScale;

#pragma glslify: snoise3 = require(glsl-noise/simplex/3d)

void main() {
	float scaledTime = time * timeScale;
	vec3 p = position;
	vec3 center = vec3(0.5);
	float d = distance(center, position);
	distanceToCenter = d / 200.0;
	float zDis = sin(scaledTime + d * 3.1416 / 100.0);
	float noise = snoise3(vec3(position.x, position.y, scaledTime ));

	if(noised) {
		p.z += waveAmplitude * zDis * waveAmplitudeScale + noise * noiseAmplitude;
	} else {
		p.z += waveAmplitude * zDis * waveAmplitudeScale ;
	}
	zDisplacement = zDis;

	vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);
	gl_Position = projectionMatrix * modelViewPosition;
}
