
document.querySelector("form").addEventListener("submit",todofun);

var tododata =JSON.parse(localStorage.getItem("mytodo")) || [];

// if(JSON.parse(localStorage.getItem("mytodo"))==null){
//     tododata = [];
// }else{
//     tododata = JSON.parse(localStorage.getItem("mytodo"));
// }

function todofun(){
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var qty = document.querySelector("#qty").value;
    var prty = document.querySelector("#priority").value;

    var obj = {
                mytodo : name,
                quantity : qty,
                priority : prty,
            }


    tododata.push(obj);

    localStorage.setItem("mytodo",JSON.stringify(tododata));   
    
}


    
