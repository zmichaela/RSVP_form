// capture input
const form = document.getElementById("registrar");
const input = form.querySelector("input");
const ul = document.getElementById("invitedList");


//create li functionwith text as a parameter
function createLi (text) {
const li = document.createElement("li");
  li.textContent = text;
  //added confirmed checkbox
  const label = document.createElement("label");
  label.textContent = "Confirmed";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  label.appendChild(checkbox);
  li.appendChild(label);
  //
  const editButton = document.createElement("button");
  editButton.textContent = "edit";
  li.appendChild(editButton);
  //added remove button
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  li.appendChild(removeButton);
  return li;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value;
  input.value = "";
  const li = createLi (text);
  ul.appendChild(li);
})



ul.addEventListener("change", (e) => {
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  if (checked) {
    listItem.className = "responded";
  }
  else {
    listItem.className = "";  
  }
});


// remove and edit names - event handlers
ul.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const li = e.target.parentNode;
    const ul = li.parentNode;
    if (button === "remove") {
      ul.removeChild(li);
    } else if (button === "edit") {
      console.log("edit");
    }
  } 
})



//edit names and save






