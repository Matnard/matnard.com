import EulerIntegratedObject from "../euler-integrated-object/euler-integrated-object";
import Victor from "victor";

class MousePositionTimeDifferencial extends EulerIntegratedObject {
	constructor(el = global, maxSpeed = 64, limit = 4) {
		super();
		this.bounds = new Victor(el.width || el.innerWidth, el.height || el.innerHeight);
		this.center = this.bounds.divide(new Victor(2,2));
		this.target = new Victor(0, 0);
		this.mouseForce = new Victor(0, 0);
		this.maxForce = 10;
		this.maxSpeed = maxSpeed;
		this.limit = limit;
		el.addEventListener('mousemove', this.onMove.bind(this));
	}

	update(force) {
		if(this.position.magnitude() < this.bounds.magnitude() * this.limit) {
			this.applyForce(this.mouseForce);
		}
		this.seekWithArrivalBehavior(this.target);
		super.update();
		this.mouseForce = new Victor(0, 0);
	}

	get value() {
		return 1 + this.position.magnitude() / this.bounds.magnitude();
	}

	onMove(e) {
		const mouse = new Victor(e.x, e.y);
		this.mouseForce = mouse.subtract(this.center);
	}
}

export default MousePositionTimeDifferencial;
