class CustomPromise {
    constructor(fn) {
        this.promiseState = 'PENDING';
        this.resolver = this.resolver.bind(this);
        this.rejector = this.rejector.bind(this);
        this.thenfn = () => {};
        this.catchfn = () => {};
        fn(this.resolver, this.rejector);
    }

    resolver(data) {
        if (this.promiseState === 'PENDING') {
            this.thenfn(data);
        }
        this.promiseState = 'FULFILLED';
    }

    rejector(data) {
        if (this.promiseState === 'PENDING') {
            this.catchfn(data);
        }
        this.promiseState = 'REJECTED';
    }

    then(thenfn) {
        console.log('Then');
        this.thenfn = thenfn;
        return this;
    }

    catch(catchfn) {
        console.log('Catch');
        this.catchfn = catchfn;
        return this;
    }
}

function getNumber() {
    return new CustomPromise((resolve, reject) => {
        setTimeout(() => {
            const number = Math.random() * 100;
            if (number % 5 === 0) {
                reject(`Rejected with number: ${number}`);
            } 
            resolve(`Resolve with number: ${number}`);
        }, 2000);
        
    });
}

getNumber().then((val) => console.log(val)).catch((err) => console.log(err));