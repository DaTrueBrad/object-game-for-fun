class Char {
    constructor(name, role, health, defense, meleeMove, rangeMove) {
      this.name = name
      this.role = role
      this.health = health
      this.defense = defense
      this.meleeMove = meleeMove
      this.rangeMove = rangeMove
    }
    attackMelee(otherChar){
      if(this.meleeMove >= otherChar.health){
        otherChar.health = 0;
        console.log(`${this.name} totally just killed ${otherChar.name}! End of Match!`)
      } else {
        otherChar.health -= this.meleeMove;
        console.log(`${this.name} just landed a hit! ${otherChar.name}\'s health is now ${otherChar.health}!'`)
      }
    }
    attackRange(otherChar){
      if(this.rangeMove >= otherChar.health){
        otherchar.health = 0;
        console.log(`${this.name} totally just killed ${otherChar.name}! End of Match!`)
      } else {
        otherChar.health -= this.rangeMove;
        console.log(`${this.name} just landed a hit! ${otherChar.name}\'s health is now ${otherChar.health}!'`)
      }
    }
  }
  const readline = require('readline')
  
  let rick = new Char(`Rick`, `Scientist`, 80, 0, 7, 18)
  let sasuke = new Char(`Sasuke`, `Rogue Shinobi`, 140, 0, 12, 12)
  
  console.log(rick)
  console.log(sasuke)
  
  rick.attackMelee(sasuke)
  
  //Line 29 and the code below needs to be adapted for user input for attack. Loop through both rick and sasuke until one of them is dead.//
  
  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
  reader.question("Who's turn is it now?", function(num){
      if (+num === 12){
          console.log("That's Adam's favorite!")
      } else {
          console.log("Womp womp thanks for playing")
      }
      reader.close();
  })