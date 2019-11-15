// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.bezierCurveTo.nonfinite
// Description:bezierCurveTo() with Infinity/NaN is ignored
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("bezierCurveTo() with Infinity/NaN is ignored");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.bezierCurveTo(Infinity, 50, 0, 50, 0, 50);
ctx.bezierCurveTo(-Infinity, 50, 0, 50, 0, 50);
ctx.bezierCurveTo(NaN, 50, 0, 50, 0, 50);
ctx.bezierCurveTo(0, Infinity, 0, 50, 0, 50);
ctx.bezierCurveTo(0, -Infinity, 0, 50, 0, 50);
ctx.bezierCurveTo(0, NaN, 0, 50, 0, 50);
ctx.bezierCurveTo(0, 50, Infinity, 50, 0, 50);
ctx.bezierCurveTo(0, 50, -Infinity, 50, 0, 50);
ctx.bezierCurveTo(0, 50, NaN, 50, 0, 50);
ctx.bezierCurveTo(0, 50, 0, Infinity, 0, 50);
ctx.bezierCurveTo(0, 50, 0, -Infinity, 0, 50);
ctx.bezierCurveTo(0, 50, 0, NaN, 0, 50);
ctx.bezierCurveTo(0, 50, 0, 50, Infinity, 50);
ctx.bezierCurveTo(0, 50, 0, 50, -Infinity, 50);
ctx.bezierCurveTo(0, 50, 0, 50, NaN, 50);
ctx.bezierCurveTo(0, 50, 0, 50, 0, Infinity);
ctx.bezierCurveTo(0, 50, 0, 50, 0, -Infinity);
ctx.bezierCurveTo(0, 50, 0, 50, 0, NaN);
ctx.bezierCurveTo(Infinity, Infinity, 0, 50, 0, 50);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, 50, 0, 50);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, Infinity, 0, 50);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, Infinity, Infinity, 50);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, Infinity, 0, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, 50, Infinity, 50);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, 50, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, Infinity, 50, 0, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, 0, Infinity, 0, 50);
ctx.bezierCurveTo(Infinity, Infinity, 0, Infinity, Infinity, 50);
ctx.bezierCurveTo(Infinity, Infinity, 0, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, 0, Infinity, 0, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, 0, 50, Infinity, 50);
ctx.bezierCurveTo(Infinity, Infinity, 0, 50, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, Infinity, 0, 50, 0, Infinity);
ctx.bezierCurveTo(Infinity, 50, Infinity, 50, 0, 50);
ctx.bezierCurveTo(Infinity, 50, Infinity, Infinity, 0, 50);
ctx.bezierCurveTo(Infinity, 50, Infinity, Infinity, Infinity, 50);
ctx.bezierCurveTo(Infinity, 50, Infinity, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, 50, Infinity, Infinity, 0, Infinity);
ctx.bezierCurveTo(Infinity, 50, Infinity, 50, Infinity, 50);
ctx.bezierCurveTo(Infinity, 50, Infinity, 50, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, 50, Infinity, 50, 0, Infinity);
ctx.bezierCurveTo(Infinity, 50, 0, Infinity, 0, 50);
ctx.bezierCurveTo(Infinity, 50, 0, Infinity, Infinity, 50);
ctx.bezierCurveTo(Infinity, 50, 0, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, 50, 0, Infinity, 0, Infinity);
ctx.bezierCurveTo(Infinity, 50, 0, 50, Infinity, 50);
ctx.bezierCurveTo(Infinity, 50, 0, 50, Infinity, Infinity);
ctx.bezierCurveTo(Infinity, 50, 0, 50, 0, Infinity);
ctx.bezierCurveTo(0, Infinity, Infinity, 50, 0, 50);
ctx.bezierCurveTo(0, Infinity, Infinity, Infinity, 0, 50);
ctx.bezierCurveTo(0, Infinity, Infinity, Infinity, Infinity, 50);
ctx.bezierCurveTo(0, Infinity, Infinity, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(0, Infinity, Infinity, Infinity, 0, Infinity);
ctx.bezierCurveTo(0, Infinity, Infinity, 50, Infinity, 50);
ctx.bezierCurveTo(0, Infinity, Infinity, 50, Infinity, Infinity);
ctx.bezierCurveTo(0, Infinity, Infinity, 50, 0, Infinity);
ctx.bezierCurveTo(0, Infinity, 0, Infinity, 0, 50);
ctx.bezierCurveTo(0, Infinity, 0, Infinity, Infinity, 50);
ctx.bezierCurveTo(0, Infinity, 0, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(0, Infinity, 0, Infinity, 0, Infinity);
ctx.bezierCurveTo(0, Infinity, 0, 50, Infinity, 50);
ctx.bezierCurveTo(0, Infinity, 0, 50, Infinity, Infinity);
ctx.bezierCurveTo(0, Infinity, 0, 50, 0, Infinity);
ctx.bezierCurveTo(0, 50, Infinity, Infinity, 0, 50);
ctx.bezierCurveTo(0, 50, Infinity, Infinity, Infinity, 50);
ctx.bezierCurveTo(0, 50, Infinity, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(0, 50, Infinity, Infinity, 0, Infinity);
ctx.bezierCurveTo(0, 50, Infinity, 50, Infinity, 50);
ctx.bezierCurveTo(0, 50, Infinity, 50, Infinity, Infinity);
ctx.bezierCurveTo(0, 50, Infinity, 50, 0, Infinity);
ctx.bezierCurveTo(0, 50, 0, Infinity, Infinity, 50);
ctx.bezierCurveTo(0, 50, 0, Infinity, Infinity, Infinity);
ctx.bezierCurveTo(0, 50, 0, Infinity, 0, Infinity);
ctx.bezierCurveTo(0, 50, 0, 50, Infinity, Infinity);
ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();
_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 90,45, 0,255,0,255, "90,45", "0,255,0,255");

t.done();

});
done();
