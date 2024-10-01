const inputbox=document.getElementById("input-box");
const list=document.getElementById("list-container");
function AddTask()
{
    if(inputbox.value ==='')
        {
            alert("you must write somthing");
        }
        else{
            let li=document.createElement("li");
            li.innerHTML=inputbox.value;
            list.appendChild(li);
            let span =document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
        }
        inputbox.value = "";
}
list.addEventListener("click", function(e){
          if (e.target.tagName === "SPAN")
            {
                e.target.parentElement.remove();
            }
});