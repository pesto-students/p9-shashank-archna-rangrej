function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
    let message=`Count is ${count}`;

    function log() {
        console.log(message);
    }
    return[increment,log];
}
const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged? 

/* 
Ans. Count is 0 is logged in the console.
increment() function has been called 3 times. So, count value is 3.

message variable exists within the createIncrement() scope. It's initial value is `Count is 0.`
However, count variable has been incremented 3 times, message variable holds the count value 0.

log() function is a closure that takes message variable from the createIncrement() scope.
So, console.log(message) logs  `Count is 0`.

*/