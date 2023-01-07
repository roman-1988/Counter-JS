const INITIAL_COUNTER = 0;

function createCounter() {
    return {
        counter: INITIAL_COUNTER,
        increment: function() {
            this.counter++;
        },
        decrement: function() {
            this.counter--;
        },
        reset: function() {
            this.counter = INITIAL_COUNTER;
        },
    };
};