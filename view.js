function createView() {
    const counterNode = document.querySelector(".js-counter");
    const incrementBtnNode = document.querySelector(".js-increment-btn");
    const decrementBtnNode = document.querySelector(".js-decrement-btn");
    const resetBtnNode = document.querySelector(".js-reset-btn");

    return {
        render({counter}) {
            counterNode.innerHTML = counter;
        }
    }
}