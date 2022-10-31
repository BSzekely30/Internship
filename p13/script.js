const arr = [
  { id: 0, value: "Read a Book" },
  { id: 1, value: "Take a Walk" },
];

onload = () => {
  render();
};

function render() {
  renderHeading();
  renderListContainer();
}

function renderHeading() {
  const h1Element = document.createElement("h1");
  h1Element.innerHTML = "To-Do List";
  document.getElementById("container").appendChild(h1Element);
}

function renderListContainer() {
  const listContainerElement = document.createElement("div");
  listContainerElement.classList.add("list-container");
  listContainerElement.setAttribute("id", "list-container");
  document.getElementById("container").appendChild(listContainerElement);

  renderInputContainer();
  renderList();
}

function renderInputContainer() {
  const inputContainerElement = document.createElement("div");
  inputContainerElement.classList.add("input-container");
  inputContainerElement.setAttribute("id", "input-container");
  document.getElementById("list-container").appendChild(inputContainerElement);

  renderInput();
  renderButton();
}

function renderInput() {
  const inputElement = document.createElement("input");
  inputElement.setAttribute("id", "userinput");
  inputElement.setAttribute("type", "text");
  inputElement.setAttribute("name", "todo");
  inputElement.setAttribute("placeholder", "What Will You Do?");
  document.getElementById("input-container").appendChild(inputElement);
}

function renderButton() {
  const buttonElement = document.createElement("button");
  buttonElement.innerHTML = "Add";
  buttonElement.setAttribute("id", "add");
  buttonElement.classList.add("btn");

  buttonElement.addEventListener("click", () => {
    const list = document.getElementById("todo-container");
    const input = document.getElementById("userinput");
    const inputValue = input.value;
    
      if (inputValue) {
        const listItem = list.querySelector("li");
        const newListItem = listItem.cloneNode(true);
        const pElem = newListItem.querySelector(".item");
        pElem.innerHTML = inputValue;

        arr.push({
          id:arr.length+1,
          value:inputValue
        });

        renderLiItems();
      }
    });
  document.getElementById("input-container").appendChild(buttonElement);
}

function renderList() {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("id", "todo-container");
  ulElement.classList.add("list-items");
  document.getElementById("list-container").appendChild(ulElement);

  renderLiItems();
}

function renderLiItems() {
  document.getElementById("todo-container").innerHTML = "";

  if (arr.length) {
    arr.forEach((element) => {
      const liElement = document.createElement("li");
      liElement.classList.add("row");
      liElement.setAttribute("id", "row");

      const checkBox = document.createElement('input');
      checkBox.setAttribute('type','checkbox');
      checkBox.classList.add('check');
      liElement.appendChild(checkBox);

      const inputElement = document.createElement("p");
      inputElement.classList.add("item");
      inputElement.innerHTML = element.value;
      liElement.appendChild(inputElement);

      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "Delete";
      buttonElement.classList.add("delete");

      liElement.appendChild(buttonElement);

      buttonElement.addEventListener("click", function () {
      buttonElement.parentNode.remove();
      });

      document.getElementById("todo-container").appendChild(liElement);
    });
  }
}


// const addBtn = document.getElementById("add");

// addBtn.addEventListener("click", () => {
//   const list = document.getElementById("todo-container");
//   const input = document.getElementById("userinput");
//   const inputValue = input.value;

//   if (inputValue) {
//     const listItem = list.querySelector("li");
//     const newListItem = listItem.cloneNode(true);
//     const pElem = newListItem.querySelector(".item");
//     pElem.innerHTML = inputValue;

//     const delBtn = newListItem.querySelector(".delete");
//     list.append(newListItem);
//     handleDelete(delBtn);
//   }
// });

// function handleDelete(button) {
//   button.addEventListener("click", function () {
//     button.parentNode.remove();
//   });
// }

// const delBtns = document.querySelectorAll(".delete");

// delBtns.forEach((button) => {
//   handleDelete(button);
// });

// const checks = document.querySelectorAll(".check");
// function handleCheck(element) {
//   element.addEventListener("click", function () {
//     console.log("orice");
//     // TODO: toggle class 'complete' to li item
//   });
// }

// // TODO: call handleCheck for each checkbox
