var getdata = JSON.parse(localStorage.getItem("mytodo"));

getdata.map(function(ele){

    var td1 = document.createElement("td");
    td1.innerText=ele.mytodo;

    var td2 = document.createElement("td");
    td2.innerText=ele.quantity;

    var td3 = document.createElement("td");
    td3.innerText=ele.priority;

    var tr = document.createElement("tr");

    var td4 = document.createElement("td");
    td4.innerText="Complete";

    tr.append(td1,td2,td3,td4);

    document.querySelector("#body").append(tr);
})