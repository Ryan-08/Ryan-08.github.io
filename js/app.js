var trash = document.getElementsByClassName("trashClass");
var edit = document.getElementsByClassName("editClass");
var modal = document.getElementById("myModal");
var btnSave = document.getElementById("saveBtn");
var editInput = document.getElementById("inputEdit");
var myList = document.getElementsByClassName("listed");
var listTodo = document.getElementById("list-kegiatan");
var mbody = document.getElementById("modal-body");

function myKeyPress(e) {
    var keynum;

    if(window.event) { // IE                    
      keynum = e.keyCode;      
    } else if(e.which){ // Netscape/Firefox/Opera                   
      keynum = e.which;
    }
    // var char = String.fromCharCode(keynum);
    
    return keynum;
}

function makeList(event) {
    var key = myKeyPress(event);
    if(key == 13){
        var inputValue = document.getElementById("input").value;
        var listItem = newTask(inputValue);        
        listTodo.appendChild(listItem);  
        addEvent();
        document.getElementById("input").value = "";    
        window.open('#daftar-Kegiatan','_top');
    }    
}

function newTask(task) {
    var li = document.createElement("li");
    var span = document.createTextNode(task);   
    // span.className= "listed";
    li.className= "listed";
        
    li.appendChild(span);

    if (task === '') {
        alert("You must write something!");
        return 1;
    }                  

    li.value = task;

    var editSpan = document.createElement("span");
    var editIcon = document.createElement("i");
    
    var trashSpan = document.createElement("span");
    var trashIcon = document.createElement("i");

    li.disabled = true;
    
    editIcon.className = "fa fa-pencil"
    editSpan.className = "editClass";   
    editSpan.appendChild(editIcon);  

    trashIcon.className = "fa fa-trash"
    trashSpan.className = "trashClass";   
    trashSpan.appendChild(trashIcon);    
    
    li.appendChild(trashSpan);
    li.appendChild(editSpan);
    // span.appendChild(li);       
    return li;
}

function addEvent(){
    for (let i = 0; i < trash.length; i++) {
        trash[i].addEventListener('click', deleteFunc, false);    
    }
    for (let i = 0; i < edit.length; i++) {
        edit[i].addEventListener('click', editFunc, false);  
    }
}

function deleteFunc(event) {
    if(event.target.tagName == 'SPAN') {
        var span = event.target; // span        
        var li = span.parentNode; // li  
    } else {
        var icon = event.target; // icon         
        var span = icon.parentNode; // span
        var li = span.parentNode; // li 
    }  

    li.parentNode.removeChild(li);
}
var myTarget;
function editFunc(event) {    
    myTarget = event.target;
    if(myTarget.tagName == 'SPAN') {
        var li = myTarget.parentNode; // li     
        modal.style.display = "block";
        editInput.value = li.textContent;
    } else {
        var span = myTarget.parentNode; // span
        var li = span.parentNode; // li     
        modal.style.display = "block";
        editInput.value = li.textContent;
    }    
}

$("#saveBtn").on("click", function(){
    var text = editInput.value;
    if(myTarget.tagName == 'SPAN') {
        var li = myTarget.parentNode; // li 
    } else {
        var span = myTarget.parentNode; // span
        var li = span.parentNode; // li   
    }
    var task = newTask(text);

    listTodo.replaceChild(task, li);
    addEvent();
    modal.style.display = "none"; 
    editInput.value = "";
});

function modalEdit(event) {  
    if(myTarget.tagName == 'SPAN') {
        var li = myTarget.parentNode; // li 
    } else {
        var span = myTarget.parentNode; // span
        var li = span.parentNode; // li   
    }
    var key = myKeyPress(event);
    if(key == 13){
        var text = editInput.value;
        var task = newTask(text);
        listTodo.replaceChild(task, li);
        addEvent();
        modal.style.display = "none"; 
        editInput.value = "";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.myList');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');  
    swicthItem();
  }
}, false);

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }        
}

function myOpen() {
    window.open('#home', '_top'); 
}

function swicthItem() {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById("list-kegiatan");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      b = list.getElementsByTagName("LI");      
      // Loop through all list items:
      for (i = 0; i < (b.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;        
        /* Check if the next item should
        switch place with the current item: */        
        if (b[i].className == 'listed checked' && b[i].className != b[i+1].className) {
          /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop: */          
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark the switch as done: */
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        // b[i].parentNode.insertBefore(b[i], b[b.length-1]);        
        switching = true;
      }
    }
  }