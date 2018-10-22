varying vec3 vNormal;
uniform float time;
attribute float vertexDisplacement;

void main() {
	vec3 p = position;

	vec3 center = vec3(0.5);

	float d = distance(center, position);

	//p.z += d;
	//p.z += 10.0 * sin(d/100.0*3.1416);
	p.z += 10.0 * sin(time+d*3.1416/100.0);
	//p.z += vertexDisplacement;


	vNormal = normalMatrix * normalize(normal);
	vec4 modelViewPosition = modelViewMatrix * vec4(p, 1.0);
	gl_Position = projectionMatrix * modelViewPosition;
}
