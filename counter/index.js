const counter = document.getElementsByClassName("counterValue");
const decrement = document.getElementsByClassName("decrementId");
const increment = document.getElementsByClassName("incrementId");
const input = document.getElementsByClassName("type");
const reset = document.getElementsByClassName("reset");

let count = parseInt(counter[0].textContent);
console.log(input);

increment[0].addEventListener("click", function () {
  if (input[0].value) {
    const incrementValue = parseInt(input[0].value);
    count += incrementValue;
    counter[0].textContent = count;
    console.log(count);
  }
});

decrement[0].addEventListener("click", function () {
  if (input[0].value) {
    const decrementvalue = parseInt(input[0].value);
    count -= decrementvalue;
    counter[0].textContent = count;
    console.log(count);
  }
});

reset[0].addEventListener("click", function () {
  counter[0].textContent = 0;
  count = 0;
  input[0].value = "";
});
