'use strict'
var bike = (function() {
    function createBicyclePrototye(){
        var obj = new Obj();
        return obj;
    }

    function Obj() {
        speed = 0;
        function applyBrake(decrement){
            speed -= decrement;
        }
        function speedup(increment){
            speed += increment;
        }
    }

    function createMountainBikeProtoype(obj){
        obj.prototype.gear = 1;
        obj.prototype.setGear = function(gearValue){
            obj.prototype.gear = gearValue;
        }
        return Object.create (prototype);
    }

    function start() {
        var bicyclePrototype = createBicyclePrototye();
        var mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);
        var bicycle = Object.create(bicyclePrototype);
        var mountainBike = Object.create(mountainBikePrototype);
        console.log(bicycle.__proto__);
        console.log(mountainBike.__proto__);
    }
})();

class Obj {
    constructor() {
        this.speed = 0;
    }
     applyBrake(decrement){
        speed -= decrement;
    }
     speedup(increment){
        speed += increment;
    }

    createBicyclePrototye(){
        return new Obj();
    }
}

class MountainBike extends Obj {
    constructor() {
        gear = 1;
    }

    setGear(gearValue){
        this.gear = gearValue;
    }

    createMountainBikeProtoype(){
        return new MountainBike();
    }
}



