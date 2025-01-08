const leftData = document.getElementsByClassName("left")[0];
const rightData = document.getElementsByClassName("right")[0];
const doubleleft = document.getElementsByClassName("doublegreater")[0];
const left = document.getElementsByClassName("greater")[0];
const right = document.getElementsByClassName("smaller")[0];
const doubleright = document.getElementsByClassName("doublesmaller")[0];

let checkboxes = document.querySelectorAll(".check-box");
checkboxes.forEach((checkbox) => {
  left.disabled = true;
  right.disabled = true;
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      if (event.target.parentElement.parentElement === leftData) {
        right.disabled = false;
      }
      if (event.target.parentElement.parentElement === rightData) {
        left.disabled = false;
      }
    } else {
      left.disabled = true;
      right.disabled = true;
    }
  });
});

left.addEventListener("click", function () {
  let leftArray = [];
  let children = Array.from(rightData.children);
  console.log(children);

  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let selectedchild = child.querySelector('input[type="checkbox"]');

    if (selectedchild && selectedchild.checked) {
      leftArray.push(child);
      selectedchild.checked = !selectedchild.checked;
    }
    if (leftArray.length > 0) {
      for (let index = 0; index < leftArray.length; index++) {
        leftData.append(leftArray[index]);
      }
    }
  }
  left.disabled = true;
});

doubleleft.addEventListener("click", function () {
  while (rightData.firstElementChild) {
    leftData.appendChild(rightData.firstElementChild);
  }
});

right.addEventListener("click", function () {
  let rightArray = [];
  let children = Array.from(leftData.children);
  for (let i = 0; i < children.length; i++) {
    let child = children[i];
    let selectedchild = child.querySelector('input[type="checkbox"]');

    if (selectedchild && selectedchild.checked) {
      rightArray.push(child);
      selectedchild.checked = !selectedchild.checked;
    }
    if (rightArray.length > 0) {
      for (let index = 0; index < rightArray.length; index++) {
        rightData.append(rightArray[index]);
      }
    }
  }
  right.disabled = true;
});

doubleright.addEventListener("click", function () {
  while (leftData.firstElementChild) {
    rightData.appendChild(leftData.firstElementChild);
  }
});
