// a class for objects representing individual workout moves
class Move {
    constructor(name, category, reps){
      this.name = name;
      this.category = category;   // muscle groups
      this.reps = reps;

      this.node = document.createElement('div'); // DECIDE: Make the Move node upon instantiation, or upon selection and display?
      this.node.setAttribute('class', 'move'); 
      // todo: append to popup/alert box
    }
}

var exercises = [
  new Move("Sit-Ups", "Core", 30),
  new Move("Crunches", "Core", 30),
  new Move("Bicycle Sit-Ups", "Core", 25),
  new Move('Russian Twists', 'Core', 30),
  new Move("Plank", "Core", "45 seconds"),
  new Move("Squats", "Lower Body", 30),
  new Move('Lunges', 'Lower Body', 20),
  new Move('Chair Lunges', 'Lower Body', 20),
  new Move('Calf Raises', 'Lower Body', 20),
  new Move('Vinyasa', 'Full Body', 5),
  new Move('Football Runs', 'Cardio', '30 seconds'),
  new Move('Glute Bridge', 'Lower Body', 30),
	new Move('Push-Ups', 'Upper Body', 10),
	new Move('Tricep Dips', 'Upper Body', 20),
	new Move('Jumping Jacks', 'Cardio', '25 seconds'),
	new Move('Burpees', 'Cardio', 10),
	new Move('Calf Raises', 'Lower Body', 20),
	new Move('Neck Stretches', 'Stretches', 5),
	new Move('Shoulder Stretches', 'Stretches', 5),
	new Move('Quad Stretches', 'Stretches', 5),
	new Move('High Knees', 'Cardio', '30 seconds'),
	new Move(`Dance Like Nobody's Watching`, 'Cardio', '30 seconds')
];

var selectionMoves = selectMoves();

/* on load, we will invoke a function ->
	* create a variable totalExercises = Exercises.length-1
	* create a cache object -> store all 5 indeces and make sure no same exercise is picked twice
	* create an array SelectionMoves to return 

	* // generate 5 random indeces
	* while (selectionMoves.length < 6){
		*invoke Math.floor(Math.random()*totalExercises) 
	* 
*/

// invoked on load
function selectMoves(){
	var totalOptions = exercises.length;
	var cache = {};
	var result = [];

	while (selectionMoves.length < 6){
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













// alert("Want doom-scrolling time? You'll have to do squats to earn it.");
/*
var myBody = document.querySelector('body');

var popupBox = document.createElement('div');
popupBox.setAttribute('id', 'popupBox')

var popupContents = document.createElement('div');
popupContents.setAttribute('id', 'popupContents');

myBody.appendChild(popupBox);
popupBox.appendChild(popupContents);
popupContents.textContent = 'HI THERE';
*/
console.log("Hi from the end of main.js");