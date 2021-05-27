var status="";
var object=[];
var img="";
function setup(){
canvas=createCanvas(700,500)
canvas.center()
 objectdetector=ml5.objectDetector("cocossd",modeloaded)
}
function draw(){
    image(img,0,0,700,500)
    fill("red")
    textSize(20)
    text("dog",300,100)
    fill("red")
    textSize(20)
    text("Cat",400,150)
    stroke("red")
    noFill()
    rect(350,70,-250,400)
    rect(600,70,-250,400)
    
}

function preload(){
img=loadImage("dog_cat.jpg")
}
function modeloaded(){
console.log("the model has been loaded")
status=true
objectdetector.detect(img,gotresults)
}
function gotresults(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
    }
}