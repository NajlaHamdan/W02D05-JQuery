$("body").append(
  `<div class='InputButton'> <input type='text'> <button onclick='addToList()'>Add to List</button> </div>`
);
$("body").append("<ul></ul>");

listToDo = [
//   { mmm: "mmmm", name: "iiii", isComplete: true },
//   { mmm: "mmmm", name: "iiii", isComplete: false },
];

function displayList() {
  $("ul").text("");
  listToDo.forEach((element, index) => {
    $("ul").append(
      `<li> 
        ${element.name} 
        <button onclick='deleteItem(${index})'>Delete</button> <button onclick='updateItem(${index})'>Update</button> </li>`
    );
  });
  $(".counter").text(`You have ${counterNotCompetedTask()} to do.`);
}
displayList();

function counterNotCompetedTask() {
  arrr = listToDo.filter((item) => !item.isComplete);
  return arrr.length;
}

function addToList() {
  const item = $("input").val();
  if(item.length && item.trim().length){
    listToDo.push({ name: item, isComplete: true });
    displayList();
  }
}
function deleteItem(index){
  listToDo.splice(index, 1);
  displayList();
}
function updateItem(index) {
  const editedItem = prompt("enter edited value");
  listToDo[index].name=editedItem;
  displayList();
}
function clearList() {
  listToDo.length = 0;
  displayList();
}
function clearCompletedList() {
  const notCompleted=listToDo.filter((item) =>item.isComplete==true);
  //console.log(notCompleted);
  //return notCompleted;
  //displayList();
}
