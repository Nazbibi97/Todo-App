var input =document.getElementById("input")
var ul = document.getElementById("ul")
function add(){
    if (input.value === ""){
        alert("Please enter your task")
    }else{
var li = document.createElement("li");
li.setAttribute("class","addedList")

var liText= document.createTextNode(input.value);
// liText.setAttribute("class", "value")
li.appendChild(liText);

// edit button
var editbtn= document.createElement("button");
var editbtnText = document.createTextNode("Edit");
editbtn.appendChild(editbtnText);
editbtn.setAttribute("onclick", "addTask(this)");
editbtn.setAttribute("class","edit")

li.appendChild(editbtn)

// delete button

var deleteBtn = document.createElement("button");
var delBtnText = document.createTextNode("Delete");
deleteBtn.appendChild(delBtnText);
deleteBtn.setAttribute("class","dele")
deleteBtn.setAttribute("onclick", "deleteTask(this)");
li.appendChild(deleteBtn);
ul.appendChild(li);


    }
}

function delet(){
    ul.innerHTML ="";
}
function addTask(editbtn){
    var one = editbtn.parentNode.firstChild.nodeValue;
    var two = prompt("Enter your Task" + one);
    editbtn.parentNode.firstChild.nodeValue = two

   
}
function deleteTask(deleteBtn){
    deleteBtn.parentNode.remove()
}






