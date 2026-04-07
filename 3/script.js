const inputAdd = document.getElementById("inputAdd");
const ul = document.getElementsByTagName("ul")[0];

function addTask() {
  if (inputAdd.value == "") {
    alert("lu belum isi sesuatu di input!");
    saveData();
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputAdd.value;
    ul.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "&#10006";
    li.appendChild(span);
    inputAdd.value = "";
  }
  saveData();
}

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", ul.innerHTML);
}

function showData() {
  ul.innerHTML = localStorage.getItem("data");
}
showData();
