var input =document.getElementById("input")
var ul = document.getElementById("ul")
function add(){
    if (input.value === ""){
        alert("Please enter your task")
    }else{
var li = document.createElement("li");
var liText= document.createTextNode(input.value);
li.appendChild(liText);
// edit button
var editbtn= document.createElement("button");
var editbtnText = document.createTextNode("Edit");
editbtn.appendChild(editbtnText);
editbtn.setAttribute("onclick","adddTask(this)");
li.appendChild(editbtn)

// delete button

var deleteBtn = document.createElement("button");
var delBtnText = document.createTextNode("Delete");
deleteBtn.appendChild(delBtnText);
deleteBtn.setAttribute("onclick", "deleteTask(this)");
li.appendChild(deleteBtn);
ul.appendChild(li);


    }
}

function delet(){
    ul.innerHTML ="";
}
function addTask(editbtn){
    var oldVal = editbtn.parentNode.firstChild.nodeValue;
    var newVal = prompt("Edit Task"+ oldVal);
}
function deleteTask(deleteBtn){
    deleteBtn.parentNode.remove()
}






// function adddTask(){
//     var li = document.createElement("li");
// var liText = document.createTextNode(input.value);
// li.setAttribute("class", "task")
// li.appendChild(liText);
// //  /////---- addd btn
// var addbtn = document.createElement("button");
// var addbtnText = document.createTextNode("add");
// addbtn.appendChild(addbtnText);
// addbtn.setAttribute("onclick", "addTask(this)");
// li.appendChild(addbtn);
// // //// delete btn
// var deleteBtn = document.createElement("button");
// var delBtnText = document.createTextNode("Delete");
// deleteBtn.appendChild(delBtnText);
// deleteBtn.setAttribute("onclick", "deleteTask(this)");
// li.appendChild(deleteBtn);
// }