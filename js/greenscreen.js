/*
 * Add code here to create a composite of two images by replacing the green pixels in the foreground image.
 *
 * Author: Ryan Ferner
 */
// useful function to clear the contents of a given canvas
var foregroundImage = null;
var backgroundImage = null;
var compositeImage = null;
var fgcanvas = document.getElementById('fgcanvas');
var bgcanvas = document.getElementById('bgcanvas');
var canvas3 = document.getElementById('canvas3');


document.getElementById('bgInput').addEventListener('change', load1stImage, false);
document.getElementById('fgInput').addEventListener('change', load2ndImage, false);
document.getElementById('threshold').addEventListener('input', greenscreen, false);
document.getElementById('create').addEventListener('change', greenscreen, false);
document.getElementById('clear').addEventListener('change', clearCanvas, false);


function load1stImage() {
    var file = document.getElementById('bgInput');
    foregroundImage = new SimpleImage(file);
    foregroundImage.setSize(bgcanvas.width, bgcanvas.height);
    console.log("mein gott");
    foregroundImage.drawTo(fgcanvas);
}

function load2ndImage() {
    var file = document.getElementById('fgInput');
    backgroundImage = new SimpleImage(file);
    backgroundImage.setSize(bgcanvas.width, bgcanvas.height);
    backgroundImage.drawTo(bgcanvas);
}

function clearCanvas(canvas) {
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function greenscreen(threshold) {
        if (foregroundImage == null) {
        alert('Original image not loaded');
    }
        if (backgroundImage == null) {
        alert('background image not loaded');
    }
    threshold = document.getElementById('threshold').value;
    deGreening(threshold);
    // given foreground and background images, make a new image of the canvas size

    // For each pixel in foreground image

        // if current pixel is green enough,

            // set output image's corresponding pixel to bgImage's pixel at same position

        // Otherwise,

            // set output image's corresponding pixel to current pixel

    // return resulting image
    
    compositeImage.drawTo(fgcanvas);
}

function deGreening(threshold){
    compositeImage = new SimpleImage(file);

    return compositeImage;
}