const userInput = document.getElementById("userInput");
const myList = document.getElementById("myList");

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
                li.addEventListener("click", );
        }
        userInput.value = "";
        saveData();
}

myList.addEventListener("click", function (e) {
        if(e.target.tagName === "LI") {
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