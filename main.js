let button = document.querySelector(".img-container");
let email = document.querySelector("input");
let regx = /[a-zA-Z0-9_]@(g|yahoo|hot)mail\.(com|net)/g
let error = document.querySelector(".error")
let errorImg =document.querySelector(".error-img")

button.addEventListener("click",()=>{
   if(!email.value.match(regx)){
    error.style.height = "20px";
    errorImg.style.height = "100%";
   }
})
email.addEventListener("input",()=>{
    if(getComputedStyle(error).height != 0){
        error.style.height = "0px";
        errorImg.style.height = "0";
    }
})