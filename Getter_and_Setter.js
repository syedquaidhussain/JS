// It can be smart to use getters and setters for your properties, especially if we
//  want to do something special with the value before returning them, or before you set them.

// To add getters and setters in the class, use the get and set keywords.


class Car{
    constructor(name,color){
        this._carName = name;
        this._color = color;
    }

    // getter
    get carName(){
      console.log("Car name is ",this._carName)
    }

    // setter
    set carName(x) {
        this._carName = x;
    }
}


const myCar = new Car("Mercedez","black") ;
myCar.carName;


myCar.carName = "polo";
myCar.carName;

// Note:-
//1. even if the getter is a method, we do not use parentheses when we want to get the property value.
//2. we can also use underscore before property name 
//3. The name of the getter/setter method cannot be the same as the name of the property, in this case carname.
// 4. Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

