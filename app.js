let btn=document.querySelectorAll("button");
let string="";
let input=document.querySelector("input")
for(let btnss of btn)
{
    btnss.addEventListener("click",function(){
// string=string+btnss.innerText;
//         input.value=string
//         console.log(input.value);
if(btnss.innerText==="=")
{
    string=eval(string);
    input.value=string;

}
else if(btnss.innerText==="AC")
{
    string="";
    input.value=string;

}
else if(btnss.innerText==="DEL")
{
    string=string.slice(0,string.length-1);
    input.value=string;

}

else{
    string=string+btnss.innerText;
        input.value=string
        console.log(input.value);
}
    })
}