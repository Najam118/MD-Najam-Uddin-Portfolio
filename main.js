


let NavLink = document.getElementById("NavbarIcon");
let bar = document.getElementById("bar");
let Crose = document.getElementById("crose");


function ShowMenu(){
 NavLink.style.left ="0px";

}
function CloseMenu(){
	NavLink.style.left ="-400px";
	
   }

   var typed = new Typed(".autotype",{
    strings:["MD Najam Uddin","Developer","Designer","Freelancer",],
    typeSpeed: 100,
    backSpeed: 100,
    loop:true
});





let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabname){
  for(tabLink of tabLinks){
    tabLink.classList.remove("active-link");
  }
  for(tabContent of tabContents){
    tabContent.classList.remove("active-tab");
  }
 event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");

  
};




var nameError= document.getElementById('name-error'); 
   var phoneError= document.getElementById('phone-error'); 
   var emailError= document.getElementById('email-error'); 
   var messageError= document.getElementById('Message-error'); 
   var SubmitError= document.getElementById('Submit-error'); 
  


function validateName(){
  var name = document.getElementById('contact-name').value;
  

  if(name.length == 0){
    nameError.innerHTML= 'Name is required';
   return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML= 'write full Name';
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function RegisredName(){
  var Regis = document.getElementById('Regis-name').value;
  

  if(Regis.length == 0){
    RegisError.innerHTML= 'Name is required';
   return false;
  }
  if(!Regis.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    RegisError.innerHTML= 'write full Name';
    return false;
  }
  RegisError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatephone(){
  var phone = document.getElementById('contact-phone').value;
  if(phone.length == 0){
    phoneError.innerHTML= 'phone No is required';
   return false;
}
if(phone.length !== 10){
  phoneError.innerHTML= 'phone No should be 10 digits';
 return false;
}
if(!phone.match(/^[0-9]{10}$/)){
  phoneError.innerHTML= 'only digits plese';
 return false;
}
   phoneError.innerHTML= '<i class="fas fa-check-circle"></i>';
   return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 10){
    emailError.innerHTML= 'Email is required';
   return false;
}
if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  emailError.innerHTML= 'Email Invalid';
 return false;
}
emailError.innerHTML= '<i class="fas fa-check-circle"></i>';
return true;

}



function validateMessage(){
  var message = document.getElementById('contact-message').value; 
var required = 50;
var left = required - message.length;
 if(left>0){
  messageError.innerHTML = left + 'more Characters required';
  return false;
 }
messageError.innerHTML='<i class="fas fa-check-circle"></i>';
return true;
}



function validateform(){
  if( !validateName() || !validatephone() || !validateEmail() || !validateMessage){
   SubmitError.style.display= 'block';
 SubmitError.innerHTML = 'please fix error to submit';
 setTimeout(function(){
  SubmitError.style.display= 'none';
 }, 3000);
 return false;
  }
 
}


function Alert(){
  alert("Are You sure Download this file?");

}



