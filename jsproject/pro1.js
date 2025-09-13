const buttons = document.querySelectorAll('.box');
    const bg = document.querySelector('body');

    buttons.forEach(function(bb){
      
        bb.addEventListener('click',function(event){
           
             if(event.target.id==='red') {
                bg.style.backgroundColor='red';
             } 
             if(event.target.id==='blue'){
                bg.style.backgroundColor='rgb(0, 81, 255)';
             }  
              if(event.target.id==='green'){
                bg.style.backgroundColor='green';
             }  

             if(event.target.id==='yellow'){
                bg.style.backgroundColor='yellow';
             }
        
        });
    });