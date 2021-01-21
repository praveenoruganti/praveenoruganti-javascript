const buttonPress = ()=>{
   const display=document.querySelector(".display-1");
   const button =document.querySelector(".btn");


button.addEventListener('click',()=>{
for (let i=1; i<11; i++) {
	console.log(i);
    const display = document.querySelector('.display-1'); 
    setTimeout( function timer(){

    	if (i===2){
    	 display.src="images/2.png"
    }
     }, i*400 );
    
    setTimeout( function timer(){

    	if (i===3){
    	 display.src="images/3.png"
    }
     }, i*400 );
    setTimeout( function timer(){

    	if (i===4){
    	 display.src="images/4.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===5){
    	 display.src="images/5.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===6){
    	 display.src="images/6.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===7){
    	 display.src="images/7.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===8){
    	 display.src="images/8.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===9){
    	 display.src="images/9.png"
    }
     }, i*400 );

    setTimeout( function timer(){

    	if (i===10){
    	 display.src="images/10.png"
    }
     }, i*400 );
}

});
}

buttonPress();