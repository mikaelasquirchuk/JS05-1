function Plant(name, growthRate) {
  // this = {};
  this.isAlive = true;
  this.name = name;
  this.growthRate = growthRate;
  this.grow = function() {
    var msg = `The ${this.name} is growing ${this.growthRate}`;
    console.log(msg);
  };
  // return this;
}

var p1 = new Plant("Hoya Carnosa", "slowly");
var p2 = new Plant("Epipremnum Aureum", "quickly");
