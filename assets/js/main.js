const userInput = document.getElementById("userInput");
const myList = document.getElementById("myList");
const selectedList = document.getElementById("selectedList")

userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask(event);
  }
});


function addTask() {
        if(userInput.value === '') {
                alert ("Enter a list!");
        }
        else {
                let li = document.createElement("li");
                li.innerHTML = userInput.value;
                myList.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.addEventListener("click", (e) => {
                selectedList.innerHTML=li.textContent;
                console.log('You clicked on a list', li.textContent);
                console.log(e.target.tagName)
        })
                li.appendChild(span);
                
        }
        userInput.value = "";
        saveData();
}

myList.addEventListener("click", function (e) {
        if(e.target.tagName === "li") {
                e.target.classList.toggle("checked");
                saveData();
                
        }
        else if(e.target.tagName === "SPAN") {
                e.target.parentElement.remove();
                saveData();
        }
}, false);

function saveData(){
        localStorage.setItem("data", myList.innerHTML);
}
function showList() {
        myList.innerHTML = localStorage.getItem("data");
}
showList();

//Add Item section

const taskInput = document.getElementById("taskInput");
const selectedListItems = document.getElementById("selectedListItems");


taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addItem(event);
  }
});

function addItem () {
        if(taskInput.value === '') {
                alert ("Add an item to enter!");
        }
        else {
                let li = document.createElement("li");
                li.innerHTML = taskInput.value;
                selectedListItems.appendChild(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.addEventListener("click", (e) => {
                selectedListItems.innerHTML=li.textContent;
                })
                li.appendChild(span);
        }
                taskInput.value = "";
                saveData();
}

selectedListItems.addEventListener("click", function(e){
        if(e.target.tagName === "li") {
                e.target.classList.toggle ("checked");
                saveData();
        }
        else if(e.target.tagName === "SPAN") {
                e.target.remove ();
                saveData();
        }
}, false);
    

function saveData(){
        localStorage.setItem("data", selectedList.innerHTML);
}

showList();
