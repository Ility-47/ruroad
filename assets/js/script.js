let cont = document.querySelector('.container');
let gaz = document.createElement('div');
let car = document.querySelector('.car');
let fon = document.querySelector('.fon');
cont.appendChild(gaz);
gaz.classList.add('gaz');

    let audio = new Audio();
    audio.src = 'assets/image/granta.mp3';
    audio.autoplay = true;
    audio.volume = 0.2;
    setTimeout(() => audio.play(), 24000)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowLeft' ) {
      car.style.left = '120px';
      car.style.transform = 'rotate(-10deg)'
      setTimeout( () => car.style.transform = 'rotate(0deg)', 300)
    }
    if (event.code == 'ArrowRight' ) {
        car.style.left = '400px';
        car.style.transform = 'rotate(10deg)'
        setTimeout( () => car.style.transform = 'rotate(0deg)', 300)
      }
  });


  function line(){
    let pos = getRandomIntInclusive(1,2);
    
    if(pos === 1){
        gaz.style.left = '20px';
        
    }
    if(pos === 2){
        gaz.style.left = '360px';
        
    }            
}
setInterval(line, 5000)    

    
    function crash(){


    
        let gazPos = Math.floor(gaz.getBoundingClientRect().top + 704);
        let carPos = Math.floor(car.getBoundingClientRect().top) ;

        if((gazPos > 420 && gazPos < 440)&&((window.getComputedStyle(car).left == '400px' && window.getComputedStyle(gaz).left == '360px') || (window.getComputedStyle(car).left == '120px' && window.getComputedStyle(gaz).left == '20px'))){
            let krik = new Audio();
            krik.src = 'assets/image/krik.mp3';
            krik.autoplay = true;
            krik.volume = 1;
            gaz.style.animation = 0;
            fon.style.animation = 0;
            audio.stop();
        }
    }

    setInterval(crash, 1)
   