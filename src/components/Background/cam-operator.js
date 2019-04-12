import { TweenMax } from "gsap/TweenMax";
function camOperator(camera) {
  let t = 0;
  let angle = 0;
  const RADIUS = 250;
  let isStatic = false;

  function patrol() {
    const y = Math.sin(t * 2) * 100 + 75;
    const x = Math.cos(angle * 1.1) * RADIUS;
    const z = Math.sin(angle * 1.1) * RADIUS;

    TweenMax.to(camera.position, 3, {
      x,
      y,
      z,
      onUpdate: function() {
        camera.lookAt(0, 70, 0);
      },
      onComplete: function() {
        isStatic = false;
      }
    });
  }

  function goto(x, y, z) {
    isStatic = true;

    TweenMax.to(camera.position, 3, {
      x,
      y,
      z,
      onUpdate: function() {
        camera.lookAt(0, 0, 70);
      }
    });
  }

  function onEnterFrame() {
    if (!isStatic) {
      camera.position.y = Math.sin(t * 2) * 100 + 75;
      camera.position.x = Math.cos(angle * 1.1) * RADIUS;
      camera.position.z = Math.sin(angle * 1.1) * RADIUS;
      camera.lookAt(0, 70, 0);
      t += 0.001;
      angle += 0.001;
    }
  }

  return {
    goto,
    patrol,
    onEnterFrame
  };
}

export default camOperator;
