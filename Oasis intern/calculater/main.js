let show = document.querySelector("#show");              // get elemnet
let buttons = document.querySelectorAll("button");        // get element
let string = "";                                       // empty string  which value store
let arr = Array.from(buttons);                     // array creat

arr.forEach((buttons) => {                         // for each loop
  buttons.addEventListener("click", (e) => {        // e = (argument pass get event(button)) button value
    console.log(e.target.value);                    // all  button value call
    if (e.target.value == "AC")
    {
        string=""
        show.value=string
    } 
    else if (e.target.value == "delete") 
    {
      // tostring():= mean covert array to stirng like "1,2,3,4"
      // slice(0(start),-1(end)) := mean remove the last character
       string =  string.toString().slice(0,-1);       
       show.value= string;
    }
    else if(e.target.value=='=')
        {
            // eval(string);
            // show.value=eval(String)
            ans= eval(string)
            show.value=ans;
        }
    else{
        string += e.target.value;                  // add value
        console.log(string);
        show.value=string;
    }
  });
});
