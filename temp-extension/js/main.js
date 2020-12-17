// a class for objects representing individual workout moves
function Move(name, category, reps, gif) {
  const newMove = {
    name,
    category, 
    reps,
    gif,
  };

  return newMove;
}

var exercises = [
  Move("Sit-Ups", "Core", 30),
  Move("Crunches", "Core", 30),
  Move("Bicycle Sit-Ups", "Core", 25),
  Move('Russian Twists', 'Core', 30),
  Move("Plank", "Core", "45 seconds"),
  Move("Squats", "Lower Body", 30, `<iframe src="https://giphy.com/embed/fnmk65werlZFy81pGw" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Lunges', 'Lower Body', 20),
  Move('Chair Lunges', 'Lower Body', 20),
  Move('Calf Raises', 'Lower Body', 20),
  Move('Vinyasa', 'Full Body', 5),
  Move('Football Runs', 'Cardio', '30 seconds', `<iframe src="https://giphy.com/embed/65siwUOTfFIt2" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Glute Bridge', 'Lower Body', 30),
  Move('Push-Ups', 'Upper Body', 10, `<iframe src="https://giphy.com/embed/jWlXhoEw9ou8CmrDY7" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Tricep Dips', 'Upper Body', 20),
  Move('Jumping Jacks', 'Cardio', '25 seconds', `<iframe src="https://giphy.com/embed/28etK3CCOH9CDrAqmX" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Burpees', 'Cardio', 10),
  Move('Calf Raises', 'Lower Body', 20),
  Move('Neck Stretches', 'Stretches', 5),
  Move('Shoulder Stretches', 'Stretches', 5),
  Move('Quad Stretches', 'Stretches', 5),
  Move('High Knees', 'Cardio', '30 seconds'),
  Move(`Dance Like Nobody's Watching`, 'Cardio', '30 seconds'),
  Move('Side Squats', 'Lower Body', 30, `<iframe src="https://giphy.com/embed/XdDA2KXw3s2mSUWDI2" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Side Plank Dips', 'Core', '30 per side'),
  Move('Side Lying Leg Raise', 'Lower Body', '20 per side')
];

function selectMoves(){
	var totalOptions = exercises.length;
	var result = [];

	while (result.length < 3){
		var i = Math.floor(Math.random() * totalOptions);
		if (!result.includes[exercises[i]]) {
			result.push(exercises[i])
    } 
	};
	return result;
};

var selectionMoves = selectMoves();

// TODO if time: refactor using reduce()
function buildMessage(selection) {
  let message = `
      <div style="display:block;">
        <p style="font-weight:bold; font-size: 30px; margin:10px 0 30px 0">BodyHack</p>
        <p style="font-size:20px; margin:10px 0 30px 0">To access this page, first complete this workout:</p>
      </div>
      <div style="display:flex;flex-direction: row !important;
      flex-wrap: wrap !important;
      justify-content: center;">`

  selection.forEach(move => {
    message += 
      `<div>
        <p style="font-weight:bold; margin:10px 0">${move.name} x ${move.reps}</p> 
        <p style="font-size:20px; margin:10px 0 30px 0"><b>Category:</b> ${move.category}</p>
        <iframe src="https://giphy.com/embed/XdDA2KXw3s2mSUWDI2" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      </div>`
  })

  message += `</div>`
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
div.innerHTML = `${buildMessage(selectionMoves)}`
div.style = `
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
  display: block !important;  
  height: 100vh !important;
  width: 100vw !important;
  background-color: #ebbab9 !important;
  color: #52414c !important;
  position: fixed !important;
  z-index: 100000 !important;
  text-align: center !important;
  padding: 100px 0;
  font-size: 28px !important;
  over-flow: auto;
  `
//position: relative !important;  margin-top: 20px;
// CLOSE BUTTON
var btn = document.createElement('button');
btn.setAttribute('id', 'go-away-btn');
btn.innerText = 'Close';
btn.style = `
  font-size: 20px;
  padding: 10px 0;
  width: 200px;
  color: #fffaf0;
  background-color: #52414c;
  border: none;
  border-radius: 4px;
  display: block !important;
  position: fixed !important;
  z-index: 10000;
  top: 30px;
  right: 30px;
  `;
btn.addEventListener('click', () => {
  div.style.display = 'none';
});
  
orgBody.insertAdjacentElement('afterbegin', div);
// disableScroll();  // disables scroll using method pasted above


// TODO: Make delay 90k milliseconds -- or maybe just 20k ms for the demo.
setTimeout(function(){
  // solution: display a button when timer runs out; that timer has ability to get rid of blocker div.
  div.appendChild(btn);
  console.log("Hi from timeout");
  // enableScroll(); // undoes scroll disabling using method pasted above
}, 2000);


console.log("Hi from the end of main.js");