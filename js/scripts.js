// store 3 images

var img0 = '..img/cookiebackground.png';
var img1 = '../img/300.jpg';
var img2 = '../img/400.jpg';

// get random #

var max = 3;
var numRand = Math.floor( Math.random() * max );
console.log(numRand);


//display random images

$('#random').attr('src', eval('img' + numRand) );


