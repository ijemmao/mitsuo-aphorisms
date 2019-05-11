function CustomSinCurve(scale, type) {

  THREE.Curve.call(this);

  this.scale = (scale === undefined) ? 1 : scale;
  this.type = type;
}

CustomSinCurve.prototype = Object.create(THREE.Curve.prototype);
CustomSinCurve.prototype.constructor = CustomSinCurve;

CustomSinCurve.prototype.getPoint = function (t) {
  let tx = 1 * t * 3 - 1.5;
  let ty = 0;
  if (this.type === 'first') {
    ty = Math.cos(Math.sin(time / 5) * Math.PI * t) * Math.sin(Math.cos(time / 5) * Math.PI * t);
  } else if (this.type === 'second') {
    ty = Math.cos(Math.cos(time / 5) * Math.PI * t) * Math.sin(Math.sin(time / 5) * Math.PI * t);
  }
  let tz = 1;

  return new THREE.Vector3(tx, ty, tz).multiplyScalar(this.scale);

};