varying float zDisplacement;
varying float distanceToCenter;

#pragma glslify: map = require(glsl-map)

void main(void)	{
	float h = map(zDisplacement, 0.0, 1.0, 0.3, 0.5);
	vec3 color = vec3(1.0);
	vec3 p = mix(color, vec3(0.0), distanceToCenter);
	gl_FragColor  = vec4(p, 1.0);
}
