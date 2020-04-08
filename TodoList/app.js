// // Add a "checked" symbol when clicking on a list item
// var list = document.querySelector('.myList');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');    
//   }
// }, false);

// var trash = document.getElementsByClassName("trash");
// var edit = document.getElementsByClassName("edit");
// var modal = document.getElementById("myModal");
// var btnSave = document.getElementById("saveBtn");
// var editInput = document.getElementById("inputEdit");
// var myList = document.getElementsByClassName("listed");
// var listTodo = document.getElementById("list-kegiatan");
// var mbody = document.getElementById("modal-body");

//     btnSave.onclick = function() {
//         modal.style.display = "none";          
//         // var text = document.getElementById("inputEdit").value; 
//         // var tasker = newTask(text);                
//         // for (let index = 0; index < arrayTask.length; index++) {           
//         //     if(arrayTask[index]===oldTask){
//         //         Replace(oldTask, text);
//         //         listTodo.replaceChild(tasker, listTodo.childNodes[index]);                               
//         //     }            
//         // }              
//     }

//     function Replace(oldTask, text){
//         var indeks = arrayTask.indexOf(oldTask);
//         if(~indeks){
//             arrayTask[indeks] = text;
//         }        
//     }  
//   // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }        
//     }
// // first text
// var t;
// var oldTask;
// var arrayTask = [];
// var i = 0;
// let newTask = function(task){
//     var li = document.createElement("input");
//     var span = document.createElement("div");
//     // arrayTask.push(task);
//     span.className= "listed";
//     li.className= "myInput";
        
//     // li.appendChild(t);

//     if (task === '') {
//         alert("You must write something!");
//     }                  

//     li.value = task;

//     var editSpan = document.createElement("span");
//     var editIcon = document.createElement("i");
    
//     var trashSpan = document.createElement("span");
//     var trashIcon = document.createElement("i");

//     li.disabled = true;
    
//     editIcon.className = "fa fa-pencil"
//     editSpan.className = "edit";   
//     editSpan.appendChild(editIcon);  

//     trashIcon.className = "fa fa-trash"
//     trashSpan.className = "trash";   
//     trashSpan.appendChild(trashIcon);    
    
//     span.appendChild(trashSpan);
//     span.appendChild(editSpan);
//     span.appendChild(li);
//     i++;  
    
//     return span;
// }

// // Create a new list item
// let makeList = function(ele) {
//     if(event.key === 'Enter'){  
//         var inputValue = document.getElementById("input").value;
//         var listItem = newTask(inputValue);
//         // Click on a trash to hide the current list item
//         // Click on edit to open edit menu  
//         listTodo.appendChild(listItem);
//         for (count = 0; count < trash.length; count++) {
//             trash[count].onclick = function() {
//                 var parent = this.parentElement;
//                 parent.style.display = "none";
//             }
//             edit[count].onclick = function() {
//                 modal.style.display = "block"; 
//                 oldTask = inputValue;      
//                 mbody.appendChild(listItem);
//                 // editInput.value = oldTask;                
//             }           
//         }   
//         document.getElementById("input").value = "";
//         window.open('#daftar-Kegiatan','_top');      
//     }
// }

