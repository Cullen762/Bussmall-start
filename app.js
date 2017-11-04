'use strict';

//names of products array, all items array, getters  and total clicks
Item.names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can',
  'wine-glass'];
Item.all = [];
Item.puka = document.getElementById('puka');
Item.viewed = [];
Item.pics = [document.getElementById('left'), document.getElementById('center'), document.getElementById('right')];
Item.count = document.getElementById('count');
Item.total = 0;
console.log('pukas');
//var pathPrefix = 'IMG2/busmall-imgs/' + name;
//constructor function
function Item(name){
  this.name = name;
  this.path = 'IMG2/busmall-img2/' + name + '.jpg';
  this.votes = 0;
  this.views = 0;
  Item.all.push(this);
}
//for loop creates instances
for(var i = 0; i < Item.names.length; i++) {
  new Item(Item.names[i]);
}
//randomize pics
function random() {
  return Math.floor(Math.random() * Item.names.length);
}
//display images
function presentPics() {
  var displayNow = [];
  //left image
  displayNow[0] = random();
  while (Item.viewed.includes(displayNow[0])) {
    console.error('We have seen this before, re-do!');
    displayNow[0] = random();
  }
  //center image
  displayNow[1] = random();
  while(displayNow[0] === displayNow[1] || Item.viewed.includes(displayNow[1])) {
    console.error('another repeat!');
    displayNow[1] = random();
  }
  //right image
  displayNow[2] = random();
  while(displayNow[0] === displayNow[2] || displayNow[1] === displayNow[2] || Item.viewed.includes(displayNow[2])) {
    console.error('Duplicate,encore!');
    displayNow[2] = random();
  }

  //prepare for DOM-enation!!
  for(var i = 0; i < 3; i++) {
    Item.pics[i].src = Item.all[displayNow[i]].path;
    Item.pics[i].id = Item.all[displayNow[i]].name;
    Item.all[displayNow[i]].views += 1;
    Item.viewed[i] = displayNow[i];
    console.log('DOM-enated');
  }
}

//"handle click events", console.Log = concatenates the number of clicks stored in the constructor funciton Item.total and the string 'total clicks'
//begins conditional logic, to control the number of clicks, shutting down the event listener when the number exceeds 24

function mindTheClick(event) {
  console.log(Item.total, 'total clicks');
  if(Item.total > 24) {
    Item.puka.removeEventListener('click',mindTheClick);
    showCount();
  }
  if (event.target.id === 'puka') {
    return alert('Please click on an image');
  }
  Item.total += 1;
  for(var i = 0; i < Item.names.length; i++) {
    if(event.target.id === Item.all[i].name) {
      Item.all[i].votes += 1;
      console.log(event.target.id + ' has ' + Item.all[i].votes + ' votes ' + Item.all[i].views + ' views');
    }
  }
  presentPics();

  // in DOM
  function showCount() {
    console.log('it is here');
    for(var i = 0; i < Item.all.length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = Item.all[i].name + ' has ' + Item.all[i].votes + ' votes in ' + Item.all[i].views + ' views ';
      Item.count.appendChild(liEl);
    }
  }

}

//event listener
Item.puka.addEventListener('click', mindTheClick);
presentPics();
//unexpected end of input?
