'use strict';


const modal =document.querySelector('.modal');
const closeBtn =document.querySelector('.close-modal');
const overlay =document.querySelector('.overlay');
const buttonModel = document.querySelectorAll('.show-modal');

/* */
const openModel = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

/* if you want to operate same function in multiple elements then it's always good 
to write a separate function and call it when needed */
const closeModel = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

/* We are not using () after the function openModel and closeModel because 
we only want them to execute once the click event happens*/

for(let i=0; i<buttonModel.length;i++){
    buttonModel[i].addEventListener('click',openModel);
}
closeBtn.addEventListener('click',closeModel);
overlay.addEventListener('click',closeModel);


//KeyPress Button ( Esc key)
// Keyboard events are global events. keypress,keydown,keyup

document.addEventListener('keydown',function(event){
   /*  console.log(event.which); it's telling which key has been pressed */ 
    /*console.log(event); return the keyboard object and all the properties  */
   if(event.key==='Escape' && !modal.classList.contains('hidden')){
            closeModel();
     }
  });

