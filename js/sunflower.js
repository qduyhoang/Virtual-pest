var countdown =  /* global $ */$("#countdown").countdown360({
	fillStyle: "#8ac575", 
	radius      : 50,
	seconds     : 100,
	fontColor   : '#FFFFFF',
	autostart   : false,
	onComplete  : function () {}
});
countdown.start();

$('#body').css("background-image", "url(../res/sunflower-blossom-bloom-flowers-54267.jpeg)")
var supportedFlag = $.keyframe.isSupported();
$.keyframe.debug = true;

$.keyframe.define([{
	name: 'changeColor',
		'99%':{
			'background-color': 'red'}
		},

		{		
		name: 'shake',
				'10%':{
    'transform': 'translate(0.5px, -1.5px) rotate(-0.5deg)'},
  '20%': {
    'transform': 'translate(0.5px, 1.5px) rotate(1.5deg)' },
  '30%': {
    'transform': 'translate(1.5px, 1.5px) rotate(1.5deg)' },
  '40%': {
    'transform': 'translate(2.5px, 1.5px) rotate(0.5deg)' },
  '50%': {
    'transform': 'translate(0.5px, 2.5px) rotate(0.5deg)' },
  '60%': {
    'transform': 'translate(1.5px, 1.5px) rotate(0.5deg)' },
  '70%': {
    'transform': 'translate(0.5px, 0.5px) rotate(0.5deg)'},
  '80%': {
    'transform': 'translate(-1.5px, -0.5px) rotate(1.5deg)'},
  '90%': {
    'transform': 'translate(0.5px, 0.5px) rotate(1.5deg)' },
  '98%': {
    'transform': 'translate(2.5px, 2.5px) rotate(1.5deg)'},
  
  '0%, 100%': {
    'transform': 'translate(0, 0) rotate(0)',} },
    
		{		
		name: 'electrified',
				'10%':{
    'transform': 'translate(2px, 3px) rotate(-9deg)',
		'opacity' : '1'
				},
  '20%': {
    'transform': 'translate(3px, 3px) rotate(-7deg)',
    'opacity' : '0.71'},
  '30%': {
    'transform': 'translate(2px, 18px) rotate(5deg)' ,
		 'opacity' : '0.83'
  },
  '40%': {
    'transform': 'translate(7px, 18px) rotate(-7deg)',
    'opacity': "0.2"},
  '50%': {
    'transform': 'translate(13x, -14px) rotate(10deg)',
    'opacity': '0.71'},
  '60%': {
    'transform': 'translate(-14px, 20px) rotate(3deg)' },
  '70%': {
    'transform': 'translate(-15px, 17px) rotate(5deg)'},
  '80%': {
    'transform': 'translate(-17px, -1px) rotate(-3deg)',
  	'opacity':'0.62'
  },
  '90%': {
    'transform': 'translate(-4px, 2px) rotate(8deg)',
    'opacity': '0.15'},
  
  '0%, 100%': {
    'transform': 'translate(0, 0) rotate(0)',} }


  

				]);

//set time incrementer
var time = 0;
setInterval( function(){
	if (countdown.getTimeRemaining() > 0){
		time++;
	}
//set time to 0 if tree dies
	else if (countdown.getTimeRemaining() <=0){
		time = 0;
		$("#surviveDay").addClass("red");
		$("#petState").text("GOT SICK FOREVER");
		$("#petState").css("color", "grey");
		cure();
	}
	$("#time").text(time);
}, 1000);

//leveling up depending on time
setInterval(function(){
	if (time > 0 && time <15){
		$("#petLevel").text('SEED');
			//change pet's image depending on pet's level
			if (countdown.getTimeRemaining() >=50 && $("#petState").text()!= "UNDER DISEASE"){
			$("#tree").attr("src", "../res/animated-tree-image-0131.gif");
			}
			else if (countdown.getTimeRemaining() <=0){
			$("#tree").attr("src", "../res/animated-tree-image-0131.gif");
			}
	}
	else if (time >=15 && time<40){
				//collects the state of pet every 6 secs depending on pet's level
			$("#tree").attr("src", "../res/9-sunflower-animated-1.gif");
    	$("petLevel").text('YOUNG SUNFLOWER');
    	if (countdown.getTimeRemaining() >=50 && $("#petState").text()!= "UNDER DISEASE"){
			$("#tree").attr("src", "../res/9-sunflower-animated-1.gif");
			}
			else if (countdown.getTimeRemaining() <=0){
			$("#tree").attr("src", "../res/animated-yellow-flower.gif");
			}
	}
	
	else if (time >=40 && time<70){
    	$("#petLevel").text('SHINY SUNFLOWERS');
    	$("#tree").attr("src", "../res/sunflower4070.gif");
    	if (countdown.getTimeRemaining() >=50 && $("#petState").text()!= "UNDER DISEASE"){
			$("#tree").attr("src", "../res/sunflower4070.gif");
			}
			else if (countdown.getTimeRemaining() <=0){
			$("#tree").attr("src", "../res/animated-yellow-flower.gif");
			}
	}
			
	else if (time >70){
    	$("#petLevel").text('LOTS OF SUNFLOWERS')
    	$("#tree").attr("src", "../res/1-sunflowers-dancing.gif");
     	if (countdown.getTimeRemaining() >=50 && $("#petState").text()!= "UNDER DISEASE"){
			$("#tree").attr("src", "../res/1-sunflowers-dancing.gif");
			}
			else if (countdown.getTimeRemaining() <=0){
			$("#tree").attr("src", "../res/deadsunflowers.jpg");
			}
	}
			
		
},5000);

	
			

var interval;

//tree disease after a random amount of time
function diseaseInterval(){
	if (Math.random()> 0.1){
		countdown.extendTimer(-1);
	}
}

function disease(){
	interval = setInterval(diseaseInterval,50);
	$("#petState").text("UNDER DISEASE");
	$("#petState").css("color", "red");

	//start flashing red background color during desease
	$(".circular.image").playKeyframe({
    name: 'changeColor', // name of the keyframe you want to bind to the selected element
    duration: '2s', // [optional, default: 0, in ms] how long you want it to last in milliseconds
    timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
    iterationCount: 'infinite', //[optional, default:1]  how many times you want the animation to repeat
    direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
    fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    complete: function(){} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
	});
}


setInterval(disease,10000);



function cure(){
//cures the disease
	clearInterval(interval);
	$("#petState").text("CURED");
	$("#petState").css("color", "yellow");	
//stop flashing red background color
	$(".circular.image").resetKeyframe(function()
	{
	$(".circular.image").pauseKeyframe();
	});


}



//random catastrophy
setInterval(function(){
	  if (Math.random()> 0.5){
			//shakes image
			$(".circular.image").playKeyframe({
    	name: 'electrified', // name of the keyframe you want to bind to the selected element
    	duration: '100ms', // [optional, default: 0, in ms] how long you want it to last in milliseconds
    	timingFunction: 'linear', // [optional, default: ease] specifies the speed curve of the animation
    	delay: '0s', //[optional, default: 0s]  how long you want to wait before the animation starts
    	iterationCount: '10', //[optional, default:1]  how many times you want the animation to repeat
    	direction: 'normal', //[optional, default: 'normal']  which direction you want the frames to flow
    	fillMode: 'none', //[optional, default: 'forward']  how to apply the styles outside the animation time, default value is forwards
    	complete: function(){} //[optional] Function fired after the animation is complete. If repeat is infinite, the function will be fired every time the animation is restarted.
			})
			countdown.extendTimer(-30);
			$("#petState").text("GOT STRUCK BY LIGHTNING");
			$("#petState").css("color", "red");
		}
		

},6000);



//every 5 secs: 10% of random photosynthesis that increase life(undeveloped)
setInterval(function(){
		if (Math.random()> 0.9){
			countdown.extendTimer(20);
			console.log("im alive");
		}
	}, 5000);






//collects the state of pet every 6 secs.
setInterval(function(){
	if (countdown.getTimeRemaining() >=50 && $("#petState").text()!= "UNDER DISEASE"){
		$("#petState").text("HAPPY");
		$("#petState").css("color", "green");
	}

	else if (countdown.getTimeRemaining() <50 && countdown.getTimeRemaining()>=1 && $("#petState").text()!= "UNDER DISEASE">0)  {
		$("#petState").text("THIRSTY");
		$("#petState").css("color", "red");
	}

},5000);




//reset game
function reset(){
	countdown.start();
	time = 0
	$("#tree").attr("src", "../res/animated-tree-image-0131.gif");
	$("#surviveDay").removeClass("red");
	cure();
}
function feed(){
	countdown.extendTimer(5);
}


