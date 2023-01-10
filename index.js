const INITIAL_COUNTER = 0;

const counter = createCounter(INITIAL_COUNTER);
const view = createView();

console.log(counter.get());

view.render({
    counter: counter.get()
});

