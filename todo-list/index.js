const isInput = document.getElementById("input1");
const list = document.querySelector(".list");
const emptyMessage = document.getElementById("empty-message");

// console.log(list.children.length);

isInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();

    const data = event.target.value.trim();
    if (data) {
      const listItem = document.createElement("li");

      const listInput = document.createElement("p");
      listInput.textContent = data;

      const deleteIcon = document.createElement("i");
      deleteIcon.className = "fa-solid fa-trash delete-icon";
      deleteIcon.addEventListener("click", function (event) {
        listItem.remove();
        console.log(listInput.length);
        updateEmptyMessage();
      });

      const editIcon = document.createElement("i");
      editIcon.className = "fa-solid fa-pencil edit-icon";
      EditFunction(editIcon, listInput);

      listItem.appendChild(listInput);
      listItem.appendChild(editIcon);
      listItem.appendChild(deleteIcon);

      list.appendChild(listItem);

      event.target.value = "";
      updateEmptyMessage();
    } else {
      alert("no data");
    }
  }
});

function updateEmptyMessage() {
  if (list.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

function EditFunction(editIcon, listInput) {
  function handleEditClick(event) {
    const parentLiTag = event.target.parentElement;
    const inputtag = document.createElement("input");
    inputtag.type = "text";
    inputtag.value = listInput.textContent;

    editIcon.className = "fa-solid fa-floppy-disk";

    parentLiTag.replaceChild(inputtag, listInput);
    inputtag.focus();

    inputtag.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        saveChanges(inputtag, parentLiTag, editIcon);
      }
    });

    inputtag.addEventListener("blur", function () {
      saveChanges(inputtag, parentLiTag, editIcon);
    });
  }

  editIcon.addEventListener("click", handleEditClick);
}

function saveChanges(inputtag, parentLiTag, editIcon) {
  const paragraph = document.createElement("p");
  paragraph.textContent = inputtag.value;

  parentLiTag.replaceChild(paragraph, inputtag);
  editIcon.className = "fa-solid fa-pencil edit-icon";

  EditFunction(editIcon, paragraph);
}
