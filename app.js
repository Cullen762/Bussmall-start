'user strict';
var imagesArray = [];// array to store images
var index1;//images index of images to be pushed randomly into imagesArray for selection.
var index2;
var index3;
var totalClicks; // total clicks per image should this be stored in a different var?
console.log('one');

//constructor function
function Selection(name, filepath){
  this.name = name;
  this.filepath = filepath;
  imagesArray.push(this);
  this.totalClicksPerImage = 0;
}

//instances of constructor
new Selection('water can', 'IMG2/busmall imgs/water-can.jpg');
new Selection('unicorn','IMG2/busmall imgs/unicorn.jpg');
new Selection('sweep','IMG2/busmall imgs/sweep.png');
new Selection('shark','IMG2/busmall imgs/shark.jpg');
new Selection('pizza scissors','IMG2/busmall imgs/scissors.jpg');
new Selection('pet sweep','IMG2/busmall imgs/pet-sweep.jpg');
new Selection('pen set','IMG2/busmall imgs/pen.jpg');
new Selection('dragon meat','IMG2/busmall imgs/dragon.jpg');
new Selection('duck','IMG2/busmall imgs/dog-duck.jpg');
new Selection('cthulhu','IMG2/busmall imgs/cthulhu.jpg');
new Selection('chair','IMG2/busmall imgs/chair.jpg');
new Selection('keto bubblegum','IMG2/busmall imgs/bubblegum.jpg');
new Selection('breakfast','IMG2/busmall imgs/breakfast.jpg');
new Selection('boots','IMG2/busmall imgs/boots.jpg');
new Selection('bathroom','IMG2/busmall imgs/bathroom.jpg');
new Selection('banana','IMG2/busmall imgs/banana.jpg');
new Selection('bag','IMG2/busmall imgs/bag.jpg');
console.log('two');

//decalre element to be appended to DOM
// add event listener
var imageEl = document.getElementById('busmall-pic');
imageEl.addEventListener('click',randomSelection);
console.log('imageEl');

//this chooses random image
function randomSelection (){
  for( var i = 0 ; i < imagesArray.length;i++){
    //for loop runs through images array
    var randomImage = Math.floor(Math.random() * imagesArray.length);
    //Math. stores random image from array into the var randomImage
    return randomImage;
    imageEl = imagesArray.filepath;
    console.log('loop');
  }

  // how do I push the random images into the imagesArray?
  //"imgEl.src = Goat.allGoats[randomIndex].filepath;" what  is this?
  //img element ? is this what prints it to the page?
  //does this randomly select an image and put it in the imagesArray?
  console.log('function randomSelection');
}

imageEl.appendChild[randomImage];
randomSelection();

//append to the DOM
//begin with funciton to generate random value
//assign that value to represent imgs
// build constructor to push into array the results
// compile and present data of clicks into a readable graph or page?

//pukas
//constructor
//instances
//methods with looks for imgs
//apend to DOM

//***demo code for reference*** I learn better by reverse engineering09jh
// //listener, something to be clicked...events!
// var imgEl = document.getElementById('goat-pic');
//
// imgEl.addEventListener('click', randomGoat);
// //randomly display one of the pictures
//
// function randomGoat() {
//   var randomIndex = Math.floor(Math.random() * Goat.allGoats.length);
//   imgEl.src = Goat.allGoats[randomIndex].filepath;
// }
// randomGoat();
