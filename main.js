let Header=document.querySelector('header');
let DIV=document.querySelector('#Main');
let Menu=document.querySelector('#Menu');
let Catergories=document.querySelector('#Catergories');
let LoginDisplay =document.querySelector('#LoginDisplay');
let SplashScreen=document.querySelector('.SplashScreen');

DIV.innerHTML=HomeData;
Menu.innerHTML=MenuData;
Header.innerHTML=HeaderData;
Catergories.innerHTML=CatergoriesData;
LoginDisplay.innerHTML=NewsLetter;
AutoLogIn();
setTimeout(() => {
    SplashScreen.style.display='none'	  
  }, 5000);
  