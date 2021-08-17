// browser-sync start --server -f -w
let soundObjects = []; 

function preload() {
  let pathPrefix = 'Audio/';
  let keys = Object.keys(sounds); 
  let numFiles = keys.length;
  for (let i = 0; i < numFiles; i++) {
    let s = loadSound(pathPrefix + sounds[keys[i]]);
    soundObjects.push(s); 
  }

  // All sounds files loaded. 
  // Create two buttons for each file. (Play and Stop)
  // And then deploy it to iOS
}


function setup() {
  let keys = Object.keys(sounds);
  let numFiles = keys.length; 
  for (let i = 0; i < numFiles; i++) {
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

// function playA() {
//   soundA.pan(-1);
//   soundA.play();
// }

// function playB() {
//   soundB.play();
// }

// function stopA() {
//   soundB.pan(1);
//   soundA.stop();
// }

// function stopB() {
//   soundB.stop();
// }