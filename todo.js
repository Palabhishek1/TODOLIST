let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener(("click"),function(){
    let item = document.createElement("li");
   item.innerText = inp.value;

   let dltbtn = document.createElement("button");
   dltbtn.innerText= "...delete";
   dltbtn.classList.add("Delete");
   item.append(dltbtn);

   ul.appendChild(item);
   inp.value = " ";
})

// let delbtns = document.querySelectorAll(".Delete");
// for(btn of delbtns){
//     btn.addEventListener(("click"),function(){
       
//     let par = btn.parentElement;
    
//     par.remove();
    
//     })
// }

ul.addEventListener(("click"),function(event){
    if (event.target.nodeName == "BUTTON"){
        // let listitem = event.target.parentElement;
        // console.log(listitem);
        // listitem.remove();
        event.target.parentElement.remove();
        console.log("deleted");
    }
})