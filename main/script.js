const addValue = document.getElementById('send');
const val = document.getElementById('description');
let obj=[];


localStorage.task ? obj = JSON.parse(localStorage.getItem("task")) :obj=[];

function Task(description){
    this.description = description;
}

const updatelocal = ()=>{
    localStorage.setItem('task', JSON.stringify(obj));
    set();
}
addValue.addEventListener('click',() =>{
    if(val.value == ''){
        console.log("Пусто");
        document.getElementById('error').style.display = "inline";
    }
    else{
        document.getElementById('error').style.display = "none";
        obj.push(new Task(val.value));
        updatelocal();
    }
});

function set(){
    let newObj = JSON.parse(localStorage.getItem("task"));
    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<div class=\"item_inner alert alert-secondary position-relative\" role=\"alert\"> <p>"+newObj[newObj.length -1].description+"</p> <span class=\"badge bg-secondary obj_date float-end\">30.03.2022 </span> <button class=\"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2\">X</button> </div>";
    document.getElementById("inner_obj").append(newDiv);
}

function addElement() {
   for(let i = 0; i<= obj.length -1;i++){ 
       if(obj[i].description != ''){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "<div class=\"item_inner alert alert-secondary position-relative\" role=\"alert\"> <p>"+obj[i].description+"</p> <span class=\"badge bg-secondary obj_date float-end\">30.03.2022 </span> <button class=\"position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2\">X</button> </div>";
            document.getElementById("inner_obj").append(newDiv);
       }
       else{
           continue
       }
    }   
  }
addElement();