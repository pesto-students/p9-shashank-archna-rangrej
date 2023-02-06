var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(`${ownerName}, this is your car:  ${this.registrationNumber} ${this.brand}`);
    }
}

var carDetails = car.displayDetails.bind(car, 'Vivan');
carDetails();
/* bind() method creates a new function where "this" refers to the parameter car. 
   This way bind() method enables calling a function with specified "this" value.
   bind() method use second argument as parameter to dispalyDetails function.
*/
car.displayDetails.call(car, 'Aman');

/* The first parameter in call() method sets the "this" value, which is the object car
    The rest of the parameters are the arguments to the actual function.
*/

car.displayDetails.apply(car, ['Aman']);

/* apply() method similar to the call()
    The difference is, the call() accept the arguments as a list, whereas 
    apply() accept the arguments as an array.
*/




