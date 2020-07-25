var list = document.getElementById("list")

function addNew(){
    var New = document.getElementById("input");



    /// create element ///
    var li = document.createElement("li");
    li.setAttribute("class","li")
    var li1 = document.createTextNode(New.value);
    New.value = "";
    li.appendChild(li1)
    

    // create edit button //
    var edit = document.createElement("input");
    edit.setAttribute("type","image");
    edit.setAttribute("src","download.png");
    // edit.setAttribute("value","Edit");
    edit.setAttribute("class","edit")
    // var edit1 = document.createTextNode("Edit");
    edit.setAttribute("onclick","editBtn(this)")
    // edit.appendChild(edit1);
    li.appendChild(edit)
    
    
    // create delete button //
    var del = document.createElement("input");
    // var del1 = document.createTextNode("Delete");
    del.setAttribute("onclick","delBtn(this)")
    del.setAttribute("type","image");
    del.setAttribute("src","images.png");
    // del.setAttribute("value","Delete")
    del.setAttribute("class","del")
    // del.appendChild(del1);
    li.appendChild(del);
    
    list.appendChild(li)
}


function deleteAll(){
    list.innerHTML = ""
}

function editBtn(e){
    var call = prompt("update todo",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue = call

}

function delBtn(f){
    f.parentNode.remove();
}




