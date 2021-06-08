Webcam.set({
    width : 310,
    height : 300,
    image_format : 'png',
    png_quality : 80,

    constraints : {
        facingMode : "environment"
    }
});

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("snap").innerHTML = "<img id='captured' src='" + data_uri + "'>";
    });
}

console.log("ML5 VERSION :" + ml5.version);

classifier = ml5.imageClassifier("MobileNet", modelLoaded);

function modelLoaded() {
    console.log("Model Loaded!")
}

function check() {
    img = document.getElementById("captured")
    classifier.classify(img, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(result);
        document.getElementById("result_text").innerHTML = result[0].label;
    }
}