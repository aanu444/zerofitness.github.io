let  btn=document.getElementById("submit");
let output=document.getElementById("output");

btn.addEventListener("click", function(){
    let inputType=document.querySelectorAll("input");
    console.log(inputType);

    for (let i=0; i < inputType.length; i++){
        if (inputType[i].value == " "){
            output.innerHTML="Kindly fill all required fields";
            return false;
        }
        else{
            return true;
        }
    }
    
})

let pass=document.getElementById("pass");
let passConfirm=document.getElementById("pass-confirm");
  
console.log(pass.value);
console.log(passConfirm.value);

btn.addEventListener("click", function(){
    if (pass.value != passConfirm.value){
        output.innerHTML="Kindly ensure that both passwords are correct then try again";
        return false;
    }else{
        return true;
    }
})


btn.addEventListener("click", function(){
    let passw= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    if ((pass.value.match(passw)) || (pass.value.match(passw))){
        //output.innerHTML="Your password is strong";
        return true;
    }else {
        output.innerHTML="Ensure your password is between 6 to 20 characters <br> which contain at least one numeric digit, one uppercase and one lowercase letter";
        return false;
    }
})



    




    