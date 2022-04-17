const addValue = document.getElementById('send');
const val = document.getElementById('description');
const del_items = document.querySelector('button');
let obj=[];
let date = new Date().toLocaleDateString(); 

localStorage.task ? obj = JSON.parse(localStorage.getItem("task")) : obj=[];

class Task {
    constructor(description, date) {
        this.description = description;
        this.date = date;
    }
}

const updatelocal = ()=>{
    localStorage.setItem('task', JSON.stringify(obj));
    set();
}
addValue.addEventListener('click',() =>{
    if(val.value == ''){
        document.getElementById('error').style.display = "inline";
    }
    else{
        document.getElementById('error').style.display = "none";
        obj.push(new Task(val.value,date));
        updatelocal();
    }
});
function tikets(descript,date, key){
    let newDiv = document.createElement("div");
    newDiv.className = "item_inner alert alert-secondary position-relative";
    newDiv.setAttribute("role", "alert");
    newDiv.setAttribute("id", "items_"+key);
    newDiv.innerHTML =`
    <p>${descript}</p> 
    <span class="badge bg-secondary obj_date float-end">${date} </span> 
    <button onclick="delItem(${key})" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">X</button>`;
  document.getElementById("inner_obj").append(newDiv);
}


function set(calback){
    let newObj = JSON.parse(localStorage.getItem("task"));
    descript = newObj[newObj.length -1].description;
    date = newObj[newObj.length -1].date;
    key = newObj.length-1;
    console.log(key);
    tikets(descript,date,key);
}

function addElement(calback) {
   for(let i = 0; i<= obj.length -1;i++){ 
       if(obj[i] != null){
            descript = obj[i].description;
            date = obj[i].date;
            key = i;
            tikets(descript,date, key);
       }

       else{
           continue
       }
    }   
}
function delItem(el){
 let objo = JSON.parse(localStorage.getItem("task"));
objo.splice(el,1);
 localStorage.setItem('task', JSON.stringify(objo));
 items = document.querySelector("#items_"+el);
 items.remove();
 document.location.reload();
}
addElement();

