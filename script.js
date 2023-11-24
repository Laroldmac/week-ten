function addItem(){
    let newItemInput=document.getElementById("new-item");
    let newItem=newItemInput.value.trim();

    if (newItem !==""){
        let groceryList=document.getElementById("grocery-list");
        let listItem=document.createElement("li");
        listItem.textContent=newItem;
        groceryList.appendChild(listItem);

        newItemInput.value="";
    }else{
        alert("Please enter a valid item!");
    }
}

function clearList() {
    let groceryList=document.getElementById("grocery-list");
    groceryList.innerHTML="";
}
let input=document.getElementById("new-item");

input.addEventListener("keypress",function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});