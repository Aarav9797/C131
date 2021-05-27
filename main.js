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

    if(status!=""){
        for(I=0;I<object.length;I++){
            fill("red")
            textSize(20)
            text(object[I].label,object[I].x,object[I].y)
            stroke("red")
            noFill()
            rect(object[I].x,object[I].y,object[I].width,object[I].height)
        }
    }
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
        object=result
    }
}