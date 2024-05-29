const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
function validate()
{
var blur = document.getElementById('blur');
blur.classList.toggle('active')
var popup = document.getElementById('popup');
popup.classList.toggle('active')
var email=document.getElementById("email").value;
var password=document.getElementById("password").value;
if(email=="pasividanagama@gmail.com"&& password=="Pajanith@123")
{
	window.open("https://sites.google.com/view/cooleducations");
	return false;

}
if(email=="daham.vida@gmail.com"&& password=="Pajanith@123")
{
	window.open("https://sites.google.com/view/cooleducations");
	return false;

}
if(email=="sudeshrathnayake@gmail.com"&& password=="Sudesh@123")
{
	window.open("https://sites.google.com/view/cooleducations");
	return false;

}


else
{	
    popup.classList.add("open-popup");
}



}

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
	var popup = document.getElementById('popup');
    popup.classList.toggle('active')
  }
