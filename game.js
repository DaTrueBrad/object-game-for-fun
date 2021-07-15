/*This is meant to be a game where you can create characters and interract to see if you can kill the boss, Rick Sanchez, and win! Get his health to 0 and you have succeeded. */
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
  
  let rick = new Char(`Rick`, `Scientist`, 80, 0, 7, 18)
  let sasuke = new Char(`Sasuke`, `Rogue Shinobi`, 140, 0, 12, 12)
  
  console.log(rick)
  console.log(sasuke)
  
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)
  rick.attackMelee(sasuke)