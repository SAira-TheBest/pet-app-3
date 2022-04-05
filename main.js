video =""
status1 =""
objects = []
var speechRecognition = window.webkitSpeechRecognition;
var recognition = new speechRecognition();

function preload(){
    video=createVideo("video.mp4")
    video.hide()
}

function setup(){
 canvas = createCanvas(480, 340)
 canvas.center()
}

function draw(){
    image(video, 0, 0, 480, 340)

    if(status1 !=""){
        objectDetector.detect(video, gotResults)
        for(i=0 ; i < objects.length; i++)
        {
           document.getElementById("status").innerHTML = "Status: Objects Detected"
           document.getElementById("number_of_objects").innerHTML = "Number of objects detected: " + objects.length
           
           fill("red")
           percent = floor(objects[i].confidence * 100)
           text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y  + 15)
           noFill()
           stroke("red")
           rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }
}

function gotResults(error,results)
{
   if(error)
   {
     console.log(error)
   }

   console.log(results)
   objects = results
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
    document.getElementById("input").value

    if(objects[i].label== object.name){
    videoLiveView.stop()
    objectDetector.detect(gotResults)
    document.getElementById("object_status").innerHTML = "OBJECT FOUND" 
    var SpeechSynthesisUtterance;("text")
    objectDetector.start()
    }
    else{
        document.getElementById("object_status").innerHTML = "OBJECT NOT FOUND"
    }
}

function modelLoaded(){
    console.log("model has been loaded")
    status1 = true
    video.loop()
    video.speed(1)
    video.volume(0)
}



function modelLoaded(){
    console.log("model has been loaded")
    status1 = true
}


