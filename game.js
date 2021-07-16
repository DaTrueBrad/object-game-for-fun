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
        otherChar.health = 0;
        console.log(`${this.name} totally just killed ${otherChar.name}! End of Match!`)
      } else {
        otherChar.health -= this.rangeMove;
        console.log(`${this.name} just landed a hit! ${otherChar.name}\'s health is now ${otherChar.health}!'`)
      }
    }
  }
const { rawListeners } = require('process')
  const readline = require('readline')
  
  let rick = new Char(`Rick`, `Scientist`, 80, 0, 7, 18)
  let sasuke = new Char(`Sasuke`, `Rogue Shinobi`, 140, 0, 12, 12)
  
  // console.log(rick)
  // console.log(sasuke)
  
  // rick.attackMelee(sasuke)
  
  //Line 29 and the code below needs to be adapted for user input for attack. Loop through both rick and sasuke until one of them is dead.//
  
  const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })
  
function askQuestion(string, character){
  return new Promise(resolve => reader.question(string, function(answer){
    if (answer === `melee`){
      if(character === "Rick"){
        rick.attackMelee(sasuke)
        console.log("Rick hit Sasuke with his car!")
        // console.log(`Sasuke's health is now ${sasuke.health}`)
      } else {
        sasuke.attackMelee(rick)
        console.log("Sasuke punched rick!")
      }

    } else if(answer === `range`) {
        if(character === "Rick"){
          rick.attackRange(sasuke)
          console.log("Rick lasered Sasuke!")
          // console.log(`Sasuke's health is now ${sasuke.health}`)
        } else {
          sasuke.attackRange(rick)
          console.log("Sasuke fireballed Rick!")
          
      }
    }
    // reader.close()
    resolve()
  }))
}

  // reader.question("Who's turn is it now?", function(num){
  //     if (+num === 12){
  //         console.log("That's Adam's favorite!")
  //     } else {
  //         console.log("Womp womp thanks for playing")
  //     }
  //     reader.close();
  // })
async function startFight(){
  for(let i = 0; i < 10000; i++){
    console.log(sasuke)
    console.log(rick)
    if(sasuke.health <= 0 || rick.health <= 0){
      console.log(`Match Over!`)
      reader.close()
      break;
    }
    async function rickMove(){
      await askQuestion("Rick, what move would you like: Melee or Range?","Rick")
      // reader.question("Rick, what move would you like: Melee or Range?", function(answer){
      //   if (answer == `melee`){
      //     rick.attackMelee(sasuke)
      //       // console.log("Sasuke used Lion's Barrage on Rick!")
      //       // console.log(`Rick's health is now ${rick.health}`)
      //   } else if(answer == `range`) {
      //       rick.attackRange(sasuke)
      //       // console.log("Sasuke cast fireball-jutsu on Rick!")
      //       // console.log(`Rick's health is now ${rick.health}`)
      //   }
      // })
    }
    await rickMove()
    async function sasukeMove(){
      await askQuestion("Sasuke, what move would you like: Melee or Range?","Sasuke")
      // reader.question("Sasuke, what move would you like: Melee or Range?", function(answer){
      //   if (answer == `melee`){
      //     sasuke.attackMelee(rick)
      //       // console.log("Sasuke used Lion's Barrage on Rick!")
      //       // console.log(`Rick's health is now ${rick.health}`)
      //   } else if(answer == `range`) {
      //       sasuke.attackRange(rick)
      //       // console.log("Sasuke cast fireball-jutsu on Rick!")
      //       // console.log(`Rick's health is now ${rick.health}`)
      //   }
      // })
    }
   await sasukeMove()
  }
}
startFight()