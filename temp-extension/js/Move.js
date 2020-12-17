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