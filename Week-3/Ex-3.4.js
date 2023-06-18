function createStack() {
    const items = [];
    return {
        push(item) { 
            this.items.push(item);
        },
        pop() {
            return this.items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);// => [10]
stack.items = [10,100,1000];// Encapsultion broken;

/* In this example, The stack works as expected. Anyone can modify the items array directly
because stack.items property is exposed.

It breaks the encapsulation of the stack. Only push() and pop() methods should be public.
stack.items shouldn't be accesible.
*/

// Refactor the code

function createStack() {
    const items = [];
    return {
        push(item) { 
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log(stack.items);// => undefined

/* items variable is now inside the createStack() scope.
   Now items is  a private variable and the stack is encapsulated. 
   Only push () and pop() are public.
   
   So, stack.items is not accessible and stack.items is undefined.   */



