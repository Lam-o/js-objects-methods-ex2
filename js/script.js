const bird = {
  name: "Eliza",
  type: "Budgie",
  hungerScale: 5, // Scale from 0 (full) to 10 (starving)
  isHappy: function () {
    if (this.hungerScale <= 3) {
      return true;
    } else {
      return false;
    }
  }
};

bird.eat = function() {
  if (this.hungerScale === 0) {
    console.log(`${this.name} is full and cant eat more`);
  } else {
    this.hungerScale -= 1;
    console.log("Yummmmmmmy yum !");
  }
};

bird.eat()
//console.log(bird.isHappy());

bird.eat()
//console.log(bird.isHappy());

bird.eat()
//console.log(bird.isHappy);

bird.eat()
//console.log(bird.isHappy);

bird.eat()
console.log(bird.isHappy);






