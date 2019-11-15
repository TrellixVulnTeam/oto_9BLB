// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.pattern.repeat.empty
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);
var promise = new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/images/green-1x1.png');
    xhr.responseType = 'blob';
    xhr.send();
    xhr.onload = function() {
        resolve(xhr.response);
    };
});
promise.then(function(response) {
    var pattern = ctx.createPattern(response, "");
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 200, 50);
    _assertPixel(offscreenCanvas, 1,1, 0,255,0,255, "1,1", "0,255,0,255");
    _assertPixel(offscreenCanvas, 98,1, 0,255,0,255, "98,1", "0,255,0,255");
    _assertPixel(offscreenCanvas, 1,48, 0,255,0,255, "1,48", "0,255,0,255");
    _assertPixel(offscreenCanvas, 98,48, 0,255,0,255, "98,48", "0,255,0,255");
});

t.done();

});
done();
