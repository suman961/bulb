const box = document.querySelector(".box");
const btn = document.querySelector("button");
  
var flag = 0;
btn.addEventListener("click",function(){
    if(flag==0){
        box.style.backgroundColor = "yellow";
        btn.innerHTML="ON"
        flag=1;
    }else{
            box.style.backgroundColor= "white";
            btn.innerHTML="OFF"
            flag=0;
    }
})