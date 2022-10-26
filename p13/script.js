// function addButton () {
//     const inputValue = document.getElementById('userinput').value;
//     const listItem = document.getElementById('todo-container');
//     const li=document.createElement('li');
//     const deleteButton = document.createElement('button');
//     const p=document.createElement('p');
//     li.appendChild(p);
//     p.classList.add('item');
//     deleteButton.classList.add("delete");
//     deleteButton.innerHTML='Delete';
//     li.appendChild(deleteButton);
//     p.innerHTML=inputValue;
//     listItem.appendChild(li);
//     deleteButton.setAttribute('onclick','onDeleteButtonClicked(this)');
// }

// function onDeleteButtonClicked(deleteButtonElement) {
//     const liElement = deleteButtonElement.parentElement;
//     liElement.remove();
// }


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
  document.getElementById("input-container").appendChild(buttonElement);
}

function renderList() {
  const ulElement = document.createElement("ul");
  ulElement.setAttribute("id", "todo-container");
  ulElement.classList.add("list-items");
  document.getElementById("list-container").appendChild(ulElement);

  renderListItem();
}

function renderListItem() {
  const liElement = document.createElement("li");
  liElement.classList.add("row");
  liElement.setAttribute("id", "row");
  document.getElementById("todo-container").appendChild(liElement);
  renderLiItems();
}

function renderLiItems() {
  if (arr.length) {
    arr.forEach((element) => {
      const inputElement = document.createElement("p");
      inputElement.classList.add("item");
      inputElement.innerHTML = element.value;
      document.getElementById("row").appendChild(inputElement);

      const buttonElement = document.createElement("button");
      buttonElement.innerHTML = "Delete";
      buttonElement.classList.add("delete");
      document.getElementById("row").appendChild(buttonElement);
    });
  }
}
