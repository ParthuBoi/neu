img ='';
status = "";
object = [];
function preload(){
    img = loadImage("dog_cat.jpg");

}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects ";
}

function draw(){
    image(img,0,0,640,420);
    if(status != ""){
        for(i = 0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("red");
             percent = floor(object[i].confidence * 100);
             text(object[i].label + " " + percent + "%",object[i].x + 15, object[i].y + 15)
             fill("red");
             noFill();
             stroke("red");
             rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

function modelLoaded(){
    console.log("Model is Initialised");
    objectDetector.detect(img, gotResults);
    status = true;
}

function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    object = results;
}