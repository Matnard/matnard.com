import Victor from 'victor';

class EulerIntegratedObject {
	constructor(position = new Victor(0,0), maxForce = 0.08, maxSpeed = 6) {
		this.position = position;
		this.velocity = new Victor(0, 0);
		this.acceleration = new Victor(0, 0);
		this.maxForce = maxForce;
		this.maxSpeed = maxSpeed;
	}

	update() {
		this.velocity.add(this.acceleration);

		if(this.velocity.lengthSq() > this.maxSpeed * this.maxSpeed) {
			this.velocity.normalize().multiply(new Victor(this.maxSpeed, this.maxSpeed))
		}

		this.position.add(this.velocity);
		this.acceleration.multiply(new Victor(0, 0));
	}

	applyForce(force) {
		this.acceleration.add(force);
	}

	seek(target) {
		let desired = target.subtract(this.position);
		desired.normalize();
		desired.multiply(new Victor(this.maxSpeed, this.maxSpeed));
		let steer = desired.subtract(this.velocity);

		if(steer.lengthSq() > this.maxForce * this.maxForce) {
			steer.normalize().multiply(new Victor(this.maxForce, this.maxForce))
		}

		this.applyForce(steer);
	}

	seekWithArrivalBehavior(target, distance = 200) {
		let steer;
		let desired = target.subtract(this.position);
		let d = desired.magnitude();

		desired.normalize();

		if (d < distance) {
			//let arriveSpeed = map(d, 0, 200, 0, this.maxSpeed); //
			let arriveSpeed = (this.maxSpeed/distance) * d;
			desired.multiply(new Victor(arriveSpeed, arriveSpeed));
		} else {
			desired.multiply(new Victor(this.maxSpeed, this.maxSpeed));
		}

		steer = desired.subtract(this.velocity);
		if(steer.lengthSq() > this.maxForce * this.maxForce) {
			steer.normalize().multiply(new Victor(this.maxForce, this.maxForce))
		}



		this.applyForce(steer);
	}
}

export default EulerIntegratedObject;
