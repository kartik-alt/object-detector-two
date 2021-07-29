img="";
img1="";
Objects=[]
status=""
function setup(){
canvas=createCanvas(600,500);
canvas.center();
kartik= ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="status : detecting object";
}

function preload(){
    img=loadImage("dog 8.jpg");
}

function draw(){
image(img ,0 ,0 ,600 ,500);

if(status !=  ""){

for(i=0; i<Objects.length; i++){
    document.getElementById("status").innerHTML="status : object detected";
    percent=floor(Objects[i].confidence*100);
    fill ("red");
    text(Objects[i].label+" "+percent+" %",Objects[i].x , Objects[i].y);
    noFill ();
    stroke("red");

    rect(Objects[i].x, Objects[i].y,Objects[i].width,Objects[i].height);


}

}








}

function modelLoaded(){

    console.log("modelLoaded");
    status = true;

    kartik.detect(img, gotResult);
}

function gotResult(error,results){

if (error) {

    console.log(error);


}

else{

    console.log(results);
    Objects=results;
}
}