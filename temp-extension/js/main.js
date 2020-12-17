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
  Move("Crunches", "Core", 30, `<img src="https://media.giphy.com/media/ovkV7ubmffHsk/giphy.gif" width="150">`),
  Move("Bicycles", "Core", 25, `<img src="https://media.giphy.com/media/WRWvrP5LhYuYMC78KB/giphy.gif" width="150">`),
  Move('Russian Twists', 'Core', 30, `<img src="https://media.giphy.com/media/1wqpgUlFWnkDmHFxUP/giphy.gif" width="150">`),
  Move("Plank", "Core", "45s", `<img src="https://media.giphy.com/media/3PywN1RF3eLyVTgzTw/giphy.gif" width="150">`),
  Move("Squats", "Lower Body", 30, `<img src="https://media.giphy.com/media/fnmk65werlZFy81pGw/giphy.gif" width="150">`),
  Move('Lunges', 'Lower Body', 20, `<img src="https://media.giphy.com/media/1ncuQASTajJ0lx6Nix/giphy.gif" width="150">`),
  Move('Chair Lunges', 'Lower Body', 20, `<img src="https://media.giphy.com/media/WRjJy7B19Tint5tUqB/giphy.gif width="150">`),
  Move('Vinyasa', 'Full Body', 5, `<img src="https://media.giphy.com/media/WxYw0jSnQeLihiewJI/giphy.gif" width="150">`),
  Move('Football Runs', 'Cardio', '30s', `<img src="https://media.giphy.com/media/65siwUOTfFIt2/giphy.gif" width="150">`),
  Move('Glute Bridge', 'Lower Body', 30, `<img src="https://media.giphy.com/media/WRjJy7B19Tint5tUqB/giphy.gif" width="150">`),
  Move('Push-Ups', 'Upper Body', 10, `<img src="https://media.giphy.com/media/jWlXhoEw9ou8CmrDY7/giphy.gif" width="150">`),
  Move('Tricep Dips', 'Upper Body', 20, `<img src="https://media.giphy.com/media/3oEhmHrgKprsZeAtVu/giphy.gif" width="150">`),
  Move('Jumping Jacks', 'Cardio', '25s', `<img src="https://media.giphy.com/media/28etK3CCOH9CDrAqmX/giphy.gif" width="150">`),
  Move('Burpees', 'Cardio', 10, `<img src="https://media.giphy.com/media/xB2C6a8OvCNuclFbrb/giphy.gif" width="150">`),
  Move('Calf Raises', 'Lower Body', 20, `<img src="https://media.giphy.com/media/2wXXVCek2NfkneGqz9/giphy.gif" width="150">`),
  // Move('Neck Stretches', 'Stretches', '5 circles per side', `<iframe src="https://giphy.com/embed/WRjJy7B19Tint5tUqB" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  // Move('Shoulder Stretches', 'Stretches', 5, `<iframe src="https://giphy.com/embed/JqDK8THyhwyvtArMD6" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  // Move('Quad Stretches', 'Stretches', 5, `<iframe src="https://giphy.com/embed/jnUHswVyBckGgkqBoX" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  // Move('High Knees', 'Cardio', '30s', `<iframe src="https://giphy.com/embed/PSn1x0R2Hqg3kComAK" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move(`Dance Like Nobody's Watching`, 'Cardio', '30s', `<img src="https://media.giphy.com/media/j3gsT2RsH9K0w/giphy.gif" width="150">`),
  // Move('Side Squats', 'Lower Body', 30, `<iframe src="https://giphy.com/embed/XdDA2KXw3s2mSUWDI2" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  // Move('Side Plank Dips', 'Core', '30 per side', `<iframe src="https://giphy.com/embed/Ws9dUXg0RjsylJkauy" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  // Move('Leg Raise', 'Lower Body', '20 per side', `<iframe src="https://giphy.com/embed/WRjJy7B19Tint5tUqB" width="150" height="150" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>`),
  Move('Inch Worm', 'Full Body', 10, `<img src="https://media.giphy.com/media/SwyiAfZY3JLLlqVC8X/giphy.gif" width="150">`),
  Move('Rotating Side Planks', 'Full Body', '10 per side', `<img src="https://media.giphy.com/media/dyYQX1Ze9mjXHPsFLN/giphy.gif" width="150"">`),
  Move('Chair Dips', 'Upper Body', 25, `<img src="https://media.giphy.com/media/3oEhmHrgKprsZeAtVu/giphy.gif" width="150">`),
  Move('Flamingo Flow', 'Core', '5 per side', `<img src="https://media.giphy.com/media/VEmahOAi5wq1XRsHfw/giphy.gif" width="150">`),
  Move('Donkey Kick', 'Lower Body', '15 per side', `<img src="https://media.giphy.com/media/FeKkg08Se3AXu/giphy.gif" width="150">`)
  
];

function selectMoves(){
	var totalOptions = exercises.length;
	var result = [];

	while (result.length < 4){
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
  var message = `
      <div style="display:block;">
        <p style="font-weight:bold; font-size: 30px !important; margin:10px 0 30px 0">BodyHack</p>
        <p style="font-size:20px; margin:10px 0 30px 0">To access this page, first complete this workout:</p>
      </div>`

  message += `<table id="bodyhacktable" style="margin: 0 auto; text-align:center !important"><tr>`
    for(let i = 0; i < 2; i++) {
      var move = selection[i];
      message += 
      `<td style="text-align:center !important">
        <p style="font-size: 28px !important;font-weight:bold; margin:10px 0">${move.name} x ${move.reps}</p> 
        <p style="font-size:20px; margin:10px 0 30px 0"><b>Category:</b> ${move.category}</p>
        <div>${move.gif}</div>
      </td>`

    }

    message +=`</tr><tr>`

    for(let j=2; j<4; j++) {
      var move = selection[j];
      message += 
      `<td style="text-align:center !important">
        <p style="font-size: 28px !important;font-weight:bold; margin:10px 0">${move.name} x ${move.reps}</p> 
        <p style="font-size:20px; margin:10px 0 30px 0"><b>Category:</b> ${move.category}</p>
        <div>${move.gif}</div>
      </td>`
    }
    message +=`</tr></table>`
  // message += `</div>`
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
  z-index: 10000 !important;
  text-align: center !important;
  padding: 100px 0;
  font-size: 28px !important;
  over-flow: auto;
  `

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
  display: block !important;
  z-index: 10001 !important;
  border-radius: 4px;
  margin-top: 30px;
  margin-left: 250px;
  `;

if(document.querySelector('#blocker') === null) {
  orgBody.insertAdjacentElement('afterbegin', div);
  var table = document.querySelector('#bodyhacktable')
  var tr = document.createElement('tr');
  // var buttn = document.getElementById(`#go-away-btn`)
  tr.append(btn);
  // tr.style.textAlign = 'center';
  table.firstChild.appendChild(tr);

  btn.addEventListener('click', () => {
    document.querySelector('#blocker').style.display = 'none';
    console.log('clicked');
  });
}





// disableScroll();  // disables scroll using method pasted above
   // trying to append to <tbody>
// btn.style.display = 'none';

// TODO: Make delay 90k milliseconds -- or maybe just 20k ms for the demo.
// setTimeout(function(){
  // console.log(btn);
  // btn.addEventListener('click', () => {
  //   div.style.display = 'none';
  // });
  // var newheader = document.createElement('h1')
  // newheader.innerText="Hi from Timeout";
  // div.appendChild(newheader);
  // solution: display a button when timer runs out; that timer has ability to get rid of blocker div.
  // const tr = document.createElement('tr');
  // tr.append(btn)
  // table.firstChild.appendChild(tr);   // trying to append to <tbody>
  // btn.style.display = 'block !important';
  // console.log("Hi from timeout");
  // enableScroll(); // undoes scroll disabling using method pasted above
// }, 2000);


console.log("Hi from the end of main.js");