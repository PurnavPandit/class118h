function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/fJDz4V4eW//model.json',modelLoaded);
}
function modelLoaded()
 {
   console.log("modelLoaded!"); 
} 
function draw()
 {
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}