
const randomColor= function() {
    const hex= '123456789ABCDEF';
    let color= '#';
     
    for(let i=0;i<6;i++) {
        color+=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;
const changecolor = function() {
    
    if(!intervalId){
     intervalId = setInterval(changeBGcolor, 750);
    }
    function changeBGcolor() {
    document.body.style.backgroundColor= randomColor();
    }

}

const stopchange = function() {
 
    clearInterval(intervalId);
    intervalId=null;
}

document.querySelector('#start').addEventListener('click',changecolor);
document.querySelector('#stop').addEventListener('click',stopchange);