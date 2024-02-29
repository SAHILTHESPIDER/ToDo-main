const todo=document.getElementById("do");
const listcontain=document.querySelector(".ul-list")


 function toclick()
 {
   if(todo.value==='')
    {
    alert("something went wrong")
    }
    else
  {
     let list=document.createElement("LI");
     list.innerHTML=todo.value;
     listcontain.appendChild(list);
     todo.value="";
    
    let dlt=document.createElement("SPAN");
    dlt.innerHTML="x"
    list.appendChild(dlt);
    local();
}
}

listcontain.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        local();
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        local();
    }
   
});
function local()
{
    localStorage.setItem("data",listcontain.innerHTML);
}
function show()
{
    listcontain.innerHTML=localStorage.getItem("data");
}
show();