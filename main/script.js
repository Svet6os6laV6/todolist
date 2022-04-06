const addValue = document.getElementById('send');
const val = document.getElementById('description');
const del_items = document.querySelector('button');
let obj=[];
let date = new Date().toLocaleDateString(); 

localStorage.task ? obj = JSON.parse(localStorage.getItem("task")) : obj=[];

function Task(description,date){
    this.description = description;
    this.date = date;
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

function set(){
    let newObj = JSON.parse(localStorage.getItem("task"));
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `<div class="item_inner alert alert-secondary position-relative" role="alert">
                          <p>${newObj[newObj.length -1].description}</p> 
                          <span class="badge bg-secondary obj_date float-end">${newObj[newObj.length -1].date} </span> 
                          <button onclick="delItem()" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">X</button>
                        </div>`;
    document.getElementById("inner_obj").append(newDiv);
}

function addElement() {
   for(let i = 0; i<= obj.length -1;i++){ 
       if(obj[i] != null){
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<div class="item_inner alert alert-secondary position-relative" role="alert"> 
                                  <p>${obj[i].description}</p> 
                                  <span class="badge bg-secondary obj_date float-end">${obj[i].date}</span> 
                                  <button onclick="delItem(${i})" class="position-absolute top-0 start-100 translate-middle badge border border-light rounded-circle bg-danger p-2">X</button> 
                                </div>`;
            document.getElementById("inner_obj").append(newDiv);
       }

       else{
           continue
       }
    }   
  }
  
  for(let i = 0; i >=del_items.length; i++){
    del_items[i].addEventListener('click',(e) =>{
      console.log("Удалил");
  });
  }

addElement();

function delItem(el){
 const objo = JSON.parse(localStorage.getItem("task"));
 delete objo[el];
 const ad = objo;

 console.log(ad);
 localStorage.setItem('task', JSON.stringify(ad));
}