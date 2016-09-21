document.addEventListener("DOMContentLoaded", ready);

function ready() {
 var box = document.getElementsByClassName('box')[0];
 console.log(box);
 var start = document.getElementsByClassName('start')[0];
 var stop = document.getElementsByClassName('stop')[0];
 var reset = document.getElementsByClassName('reset')[0]; 
 var myWidth = 1000;
 var firstWidth = getComputedStyle(box).width;
 var timer;

 start.addEventListener('click', function() {

   clearInterval(timer);
   
    startWidth = parseInt(getComputedStyle(box).width);
    console.log(myWidth);

    timer = setInterval(function() {
        startWidth += 10;
        
        box.style.width = startWidth + 'px';

        if ( parseInt(getComputedStyle(box).width) > myWidth) clearInterval(timer);

      }, 30);

  });

  stop.addEventListener('click', function() {
   
    clearInterval(timer);

  });

  reset.addEventListener('click', function() {
   
    box.style.width = firstWidth;

  });
}


 
//todo  реализовать анимацию - при нажатии на старт ширина элемента увеличивается, при нажатии на стоп "рост" элемента останавливается
//реализовать аккордеон - при нажатии соответствующей вкладки ее содержимое раскрывается, а содержимое остальных - скрывается
