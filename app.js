function loadData() {
  const list = document.getElementById("dataList");
  list.innerHTML = "";

  const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  data.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${index + 1}. ${item}`;
    list.appendChild(li);
  });

  console.log("Data loaded successfully");
}

function addItem(item) {
  const list = document.getElementById("dataList");
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
}

function removeItems() {
  const list = document.getElementById("dataList");
  list.innerHTML = "";
}

function initApp() {
  console.log("App Initialized");
}

document.addEventListener("DOMContentLoaded", initApp);
