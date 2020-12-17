
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
  let message = `To access this page, first complete this workout: \n`

  selection.forEach(move => {
    message += `\n ${move.name} — Category: ${move.category} — Reps: ${move.reps}`
  })

  message += `\n You got this!`
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
var myAlert = once(alert);
myAlert(buildMessage(selectionMoves));


console.log("Hi from the end of main.js");