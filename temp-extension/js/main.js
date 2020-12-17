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


var orgBody = document.querySelector('body');
// var bodyChildren = orgBody.children;
// var clonedChildren = new HTMLCollection();
// for (let i = 0; i < bodyChildren.length; i++) {
//   clonedChildren.add(bodyChildren[i].cloneNode())
// }

// var orgBodyInnerHTML = orgBody.innerHTML;

// console.log(`what's in your div, body? `, orgBody);
// console.log(`show me your inner self `, orgBodyInnerHTML);

// orgBody.children.style.display = 'none';
// orgBody.innerHTML = 
var div = document.createElement('div');
div.style = `
  height: 100vh;
  width: 100vh;
  background-color: #ebbab9;
  color: #52414c;
  z-index: 100000;
  text-align: center;
  padding: 100px;
  overflow: hidden;
  `
/*div.style.height = "100vh"
div.style.width = "100vh"
div.style.backgroundColor = "#ebbab9";
div.style.color = "#52414c";
div.style.zIndex = "10000";
*/

div.innerHTML =
  `<div id="#popupBox">
      <div id="#popupContents">
        ${buildMessage(selectionMoves)}
      </div>
    </div>`
  
// function replacePage(){
//   console.log(`i'm still here~ `, orgBodyInnerHTML);
//   orgBody.innerHTML = orgBodyInnerHTML;
// }

orgBody.insertAdjacentElement('afterbegin', div);
orgBody.style.overflow = "hidden"

// TODO: Make delay 90k milliseconds.
// setTimeout(replacePage, 20000);

// var myAlert = once(alert);
// myAlert(buildMessage(selectionMoves));


console.log("Hi from the end of main.js");