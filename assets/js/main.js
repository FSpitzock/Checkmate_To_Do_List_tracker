const userInput = document.getElementById("userInput");
const myList = document.getElementById("myList");
const selectedList = document.getElementById("selectedList")

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
                li.addEventListener('click', (e) => {
                selectedList.appendChild(li);
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
