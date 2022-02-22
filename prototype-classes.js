console.log("prototype-classes script loaded");

var Character = function() {
    if (new.target === Character) {
        throw new TypeError("Can't construct Character instances directly.");
    }
    this.x = Math.trunc(Math.random() * 10);
    this.y = Math.trunc(Math.random() * 10);
    Character.count = (Character.count || 0) + 1;
}

Character.prototype.setCoordinates = function (x, y) {
    if (x < 0 || x > 10 || y < 0 || y > 10) {
        throw new RangeError("Coordinates out of bounds (10x10).");
    }
    this.x = x;
    this.y = y;
    console.log(`Coordinates set to x: ${this.x} and y: ${this.y}`);
}

var PlayerCharacter = function() {
    Character.call(this);
}
PlayerCharacter.prototype = Object.create(Character.prototype)
PlayerCharacter.prototype.constructor = PlayerCharacter;

var NonPlayerCharacter = function() {
    Character.call(this);
}
NonPlayerCharacter.prototype = Object.create(Character.prototype)
NonPlayerCharacter.prototype.constructor = NonPlayerCharacter;

const char = new PlayerCharacter();
const npc1 = new NonPlayerCharacter();
const npc2 = new NonPlayerCharacter();

console.log(`Current count: ${Character.count}`);
console.log(char);

char.setCoordinates(3, 3);
console.log(char);

npc1.setCoordinates(0, 12);