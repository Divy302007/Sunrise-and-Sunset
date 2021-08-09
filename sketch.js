const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "sunrise.png";

function preload(){
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
}

function draw(){
    //add condition to check if any backgrond image is there to add
    if(backgroundImg){
        background(backgroundImg)
    }

    Engine.update(engine);


}

async function getBackgroundImg(){
    
    //write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJson = await response.json()
    console.log("Time",responseJson)

    //write code slice the datetime 
    var datetime = responseJson.datetime
    var hour = datetime.slice(11,13)

    console.log(hour)

    if(hour>=04&&hour<=16){
        bg = "sunrise.png"
    }else if(hour>=16&&hour<=03){
        bg = "sunset.png"
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}