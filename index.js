let list = document.querySelector("#to_do_list");
 let input =  document.querySelector("#input_add_todo input");
 let add = document.querySelector("#input_add_todo button");


 list.addEventListener("click" , (e)=>{
    if(e.target.nodeName == "SPAN" && e.target.className == "delete_btn" ) {
    e.target.parentNode.remove()
    if(list.children.length == 0){
     let listMassage =  document.createElement("div");
     listMassage.style.textAlign = "center"
     listMassage.style.color = "#333"
     listMassage.innerText = "your list is empty"
     listMassage.id= "emptyMsg"
     list.appendChild(listMassage)
    }
    }
     
  })
  add.addEventListener("click", (e)=>{
    e.preventDefault();
    if(!input.value.trim()) {
     return;
    }
    if(document.querySelector("#emptyMsg")) {
    document.querySelector("#emptyMsg").remove()
    }
    list.append(createlistItem(input.value))
    input.value = "";
 })
 function createlistItem(itemValue) {
    let item = document.createElement("li")
    let title = document.createElement("span")
    let btn = document.createElement("span")

    item.className = "to_do_item"
    title.className = " title"
    title.innerText = itemValue

    btn.className = "delete_btn"
    btn.innerText = "delete"

    item.appendChild(title)
    item.appendChild(btn)
    return item
 }