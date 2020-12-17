// a class for objects representing individual workout moves
function Move(name, category, reps) {
  const newMove = {
    name,
    category, 
    reps
  };

  return newMove;
  
}

var exercises = [
  Move("Sit-Ups", "Core", 30),
  Move("Crunches", "Core", 30),
  Move("Bicycle Sit-Ups", "Core", 25),
  Move('Russian Twists', 'Core', 30),
  Move("Plank", "Core", "45 seconds"),
  Move("Squats", "Lower Body", 30),
  Move('Lunges', 'Lower Body', 20),
  Move('Chair Lunges', 'Lower Body', 20),
  Move('Calf Raises', 'Lower Body', 20),
  Move('Vinyasa', 'Full Body', 5),
  Move('Football Runs', 'Cardio', '30 seconds'),
  Move('Glute Bridge', 'Lower Body', 30),
  Move('Push-Ups', 'Upper Body', 10),
  Move('Tricep Dips', 'Upper Body', 20),
  Move('Jumping Jacks', 'Cardio', '25 seconds'),
  Move('Burpees', 'Cardio', 10),
  Move('Calf Raises', 'Lower Body', 20),
  Move('Neck Stretches', 'Stretches', 5),
  Move('Shoulder Stretches', 'Stretches', 5),
  Move('Quad Stretches', 'Stretches', 5),
  Move('High Knees', 'Cardio', '30 seconds'),
  Move(`Dance Like Nobody's Watching`, 'Cardio', '30 seconds')
];

// invoked on load
function selectMoves(){
	var totalOptions = exercises.length;
	var cache = {};
	var result = [];

	while (result.length < 4){
		var i = Math.floor(Math.random() * totalOptions);
		if (!cache[i]) {
			cache[i] = exercises[i];
			result.push(exercises[i])
		} else {
			i = Math.floor(Math.random() * totalOptions);
		}
	};
	return result;
};

var selectionMoves = selectMoves();

// TODO if time: refactor using reduce()
function buildMessage(selection) {
  let message = `To access this page, first complete this workout: <br>`

  selection.forEach(move => {
    message += `<br> ${move.name} — Category: ${move.category} — Reps: ${move.reps}`
  })

  message += `<br><br> You got this!`
  return message;
}

function once(cb) {
  var alerted = 0;

  function inner(arg) {
    if (alerted < 1) {
      alerted++;
      return cb(arg);
    } 
    else return;
  }

  return inner;
}

// PREVENT SCROLLING

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

var orgBody = document.querySelector('body');

var div = document.createElement('div');
div.setAttribute('id', 'blocker');
div.style = `
  height: 100vh;
  width: 100vw;
  background-color: #ebbab9;
  color: #52414c;
  z-index: 100000;
  text-align: center;
  padding: 100px;
  overflow: hidden;
  `


div.innerHTML =
  `<div id="#popupBox">
      <div id="#popupContents">
        ${buildMessage(selectionMoves)}
      </div>
    </div>`
  
orgBody.insertAdjacentElement('afterbegin', div);

// TODO: Make delay 90k milliseconds.
setTimeout(function(){
  orgBody.removeChild(document.querySelector('#blocker'));
  alert("No pain, no gain! Great job. Happy doom-scrolling!");
}, 20000);
// TODO: Do we need to undo scroll by disabling by removing event listeners?

console.log("Hi from the end of main.js");