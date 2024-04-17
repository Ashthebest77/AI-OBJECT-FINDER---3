//WILL BE FILLED IN NEXT CLASS - akshata
status =""
input_text
function setup() {
    canvas = createCanvas(480,380);
    canvas.center();   
    video = createCapture(VIDEO);
    video.hide();
}
 function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("objectFinder").value;
}
 function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
 }
 function draw() {
    image(video, 0, 0, 480, 380);
    if(status != ""){
        object_detector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            console.log(objects.length);
            fill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15);
            noFill();
            stroke("FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if(objects[i].label == objectFinder){
            video.stop();
           //wait 
            objectDetector.detect(gotResults);
            document.getElementById("object_found").innerHTML = input_text
        }
        }
    }
 }
  function gotResult() {
    if(error){
        console.log(error)
    }
    console.log(results);
    objects = results;
  }