let bttn=document.getElementById("sub");
let user=document.getElementById("user");
let passwo=document.getElementById("passw");
let outputt=document.getElementById("outputt");

bttn.addEventListener("click", function(){
    if((user.value.match("Admin")) && (passwo.value.match("Admin123"))){
        window.open("index.html");
        return true;
    }else  if ((user.value != "Admin") && (passwo.value != "Admin123")){
        alert("Your login details are incorrect. Try again");
        window.open("signin.html", "_top");
        return false;
    }

    
})
