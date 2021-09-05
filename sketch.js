// browser-sync start --server -f -w
let soundObjects = []; 
let pathPrefix = 'Audio/';
let keys;
let numFiles; 
function preload() {
  keys = Object.keys(sounds); 
  numFiles = keys.length; 
}

function loadNextSound(i) {
  let s = loadSound(pathPrefix + sounds[keys[i]], function() {
    soundObjects.push(s); 
    console.log('Sound Loaded: ' + i); 
    if (i < 48) {
      i = i + 1; 
      loadNextSound(i); 
    }
  }); 
}

function setup() {
  loadNextSound(0);
  console.log(soundObjects.length); 
  
  let load = createButton('Load');
  load.position(5, 0); 
  load.mousePressed(function() {
    loadRestSound(49);
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

function loadRestSound(i) {
  let s = loadSound(pathPrefix + sounds[keys[i]], function() {
  soundObjects.push(s); 
  console.log('Sound Loaded: ' + i); 
    if (i < 70) {
      i = i + 1; 
      loadRestSound(i); 
    }
  }); 
}

function playFunc(i) {
  console.log('Play:' + i);
  let sound = soundObjects[i]; 
  console.log(sound);
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