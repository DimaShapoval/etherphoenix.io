const themeButton=document.getElementById('theme-button')
const bodyTheme = document.getElementById('body');
const p = document.getElementsByTagName('p');
const darkBox = document.getElementById('dark-box');
const darkBox1 = document.getElementById('nav-second');





themeButton.addEventListener('click',function(){
  console.log(darkBox1);
  
  // if(bodyTheme.classList.contains('dark-mode')){
  //   bodyTheme.classList.remove('dark-mode');
  //   bodyTheme.classList.add('light-mode');
  //   // darkmode.disable();
  // }
  // else{
  //   bodyTheme.classList.remove('light-mode');
  //   bodyTheme.classList.add('dark-mode');
  //   // darkmode.enable();
  // }
  
  themeButton.classList.toggle('theme-button')
  themeButton.classList.toggle('sun-button')
  bodyTheme.classList.toggle('light-theme');
   bodyTheme.classList.toggle('dark-theme');
  
  if(bodyTheme.classList.toggle == 'dark-theme'){
    darkBox1.classList.add('navbar-dark')
  }
  else{
    darkBox1.classList.remove('navbar-dark')
  }
  
  
  

})