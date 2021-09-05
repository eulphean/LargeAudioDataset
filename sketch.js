// browser-sync start --server -f -w
let soundObjects = []; 
let pathPrefix = 'Audio/';
function preload() {
  let keys = Object.keys(sounds); 
  let numFiles = keys.length;
  for (let i = 0; i < 20; i++) {
    let s = loadSound(pathPrefix + sounds[keys[i]]);
    soundObjects.push(s); 
  }

  console.log(soundObjects.length);

  // All sounds files loaded. 
  // Create two buttons for each file. (Play and Stop)
  // And then deploy it to iOS
}


function setup() {
  // Button to load more. 
  let load = createButton('Load');
  load.position(5, 0); 
  load.mousePressed(function() {
    for (let i = 20; i < 40; i++) {
      let s = loadSound(pathPrefix + sounds[keys[i]]);
      soundObjects.push(s); 
    }
    console.log(soundObjects.length);
  });
  
  let newLoad = createButton('NewLoad');
  newLoad.position(80, 0); 
  newLoad.mousePressed(function() {
    for (let i = 40; i < 60; i++) {
      let s = loadSound(pathPrefix + sounds[keys[i]]);
      soundObjects.push(s); 
    }
    console.log(soundObjects.length);
  });

  let finalLoad = createButton('Final Load');
  finalLoad.position(160, 0); 
  finalLoad.mousePressed(function() {
    for (let i = 60; i < 71; i++) {
      let s = loadSound(pathPrefix + sounds[keys[i]]);
      soundObjects.push(s); 
    }
    console.log(soundObjects.length);
  });


  let keys = Object.keys(sounds);
  let numFiles = keys.length; 
  for (let i = 1; i < numFiles; i++) {
    let play = createButton('Play' + i);
    play.position(5, 25 * i);  
    play.mousePressed(function() {
      playFunc(i); 
    });
    let stop = createButton('Stop' + i); 
    stop.position(80, 25*i);
    stop.mousePressed(function() {
      stopFunc(i);
    });
  }
}

function playFunc(i) {
  console.log('Play:' + i);
  let sound = soundObjects[i];
  sound.play();
}

function stopFunc(i) {
  console.log('Stop: ' + i)
  let sound = soundObjects[i];
  sound.stop();
}

function draw() {
  // put drawing code here
}