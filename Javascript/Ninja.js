class Ninja{
  constructor(name, health=100, speed=3, strength=3){
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName(){
    console.log(this.name);
  }

  showStats(){
    console.log(`Name: ${this.name}`)
    console.log(`Strength: ${this.strength}`)
    console.log(`Speed: ${this.speed}`)
    console.log(`Health: ${this.health}`)
  }

  drinkSake(){
    this.health += 10;
  }
}


const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

class Sensei extends Ninja {
  constructor(name){
    super(name,200,10,10);
    this.wisdom = 10;
  }

  speakWisdom(wiseMessage){
    super.drinkSake();
    console.log(wiseMessage);
  }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom("What one programmer can do in one month, two programmers can do in two months.");
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"