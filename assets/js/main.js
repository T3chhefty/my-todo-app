// creating variables for the variables
const wrapper = document.querySelector(".wrapper");
// the actual form Element
const form = document.querySelector("#form");
// the input element that receives the users input

const userInput = document.querySelector(".user-input");

// the event Listener for the actions
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // create the user input element

  //   passing the user input to the todo element and checking if it is empty
  if (!userInput.value) {
    Swal.fire({
      text: "Empty or Duplicate Task Not Allowed",
      showConfirmButton: false,
      timer: 1500,
      color: "red"
    });
    return;
  } else {
    // create the div element tha wraps the Users Activities in Todo list
    // create the div element tha wraps the Users Activities in Todo list
    const todoWrapper = document.createElement("div");
    todoWrapper.setAttribute("class", "todo-wrapper");
    // create a checkbox element
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.style.accentColor = "green";

    const userInputedTodo = document.createElement("input");
    userInputedTodo.value = userInput.value;
    userInputedTodo.type = "text";
    userInputedTodo.maxLength = 50;
    userInputedTodo.classList.add("user-inputed-todo");
    // create button for editing and deleting respectively
    // creating a div to hold the buttons
    const btnWrappers = document.createElement("div");
    btnWrappers.classList.add("buttons-wrapper");

    // edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");

    // delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Del";
    delBtn.classList.add("del-btn");

    //   append children starts here
    wrapper.appendChild(todoWrapper);
    todoWrapper.appendChild(checkBox);
    todoWrapper.appendChild(userInputedTodo);
    todoWrapper.appendChild(btnWrappers);
    btnWrappers.appendChild(editBtn);
    btnWrappers.appendChild(delBtn);
    //   append children ends here

    //   making user input readOnly
    userInputedTodo.readOnly = true;
    //passing user input into the todo list

    Swal.fire({
      text: "New Task created",
      showConfirmButton: false,
      timer: 1500,
      icon: "success",
      color: "green"
    });

    userInput.value = "";

    // this would handle the del action

    delBtn.addEventListener("click", () => {
      // todoWrapper.remove();
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "",
            text: "Task  deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
          // this line will delete the element it is clicked against
          todoWrapper.remove();
        }
      });
      // delete the task if the user accepts the confirmation
    });
    // this would handle the del action ends here

    // this would handle the edit action

    editBtn.addEventListener("click", () => {
      if (editBtn.innerText == "Edit") {
        editBtn.innerText = "Save";
        editBtn.style.backgroundColor = "green";
        userInputedTodo.readOnly = false;
      } else {
        editBtn.innerText = "Edit";
        editBtn.style.backgroundColor = "black";
        userInputedTodo.readOnly = true;
      }
    });
    // this would handle the edit action ends her

    checkBox.addEventListener("change", () => {
      if (checkBox.checked == true) {
        editBtn.style.display = "none";
        userInputedTodo.style.textDecoration = "line-through";
        Swal.fire({
          text: "Task complete",
          showConfirmButton: false,
          timer: 1500,
        });
        userInputedTodo.style.color = "green";
      } else {
        editBtn.style.display = "block";
        userInputedTodo.style.textDecoration = "none";
        userInputedTodo.style.color = "blue";

        //   seting the user input element to empty
      }
    });

    userInputedTodo.addEventListener("click", () => {
      // Swal.fire({
      //   text: userInputedTodo.value
      // });
      Swal.fire({
        title: "Your Proposed Task is:",
        text: userInputedTodo.value,
        showConfirmButton: true,
      });
    });
  }
});
