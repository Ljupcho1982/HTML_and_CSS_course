/*
Student Name:Ljupcho Shemov
File Name: script.js
Date:14.04.2022
*/ 

//Global variables
var video=document.getElementById("example");
var videoSource=document.getElementById("vid-src");
var descriptionSource=document.getElementById("despsrc");
video.style.width = "500px";
video.style.height = "300px";

//Fuction to display the burpees example video

function burpees () {
    console.log("test");
    videoSource.src="media/burpees.mp4";
    video.style.display="block";
   
    video.load();
       
}
function climbers () {
    console.log("test");
    videoSource.src="media/climbers.mp4";
    video.style.display="block";
   
    video.load();
       
}



