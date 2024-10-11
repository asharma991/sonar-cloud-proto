export function setupCounter(element) {
  var counter = 0;
  let setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
    counter&&count;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
