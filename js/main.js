document.addEventListener("DOMContentLoaded", ready);

function ready() {
 var box = document.getElementsByClassName('box')[0];
 var start = document.getElementsByClassName('start')[0];
 var stop = document.getElementsByClassName('stop')[0];
 var reset = document.getElementsByClassName('reset')[0]; 
 var accordion = document.getElementById('accordion');
 var items = accordion.getElementsByTagName('p'); 
 var lists = accordion.getElementsByClassName('list-container'); 
 
 var firstWidth = getComputedStyle(box).width;

 go(1500);

 function go(myWidth) {
   var myWidth = myWidth || 1000;
   var timer; 
   console.log(myWidth);
   start.addEventListener('click', function(e) {

	 clearInterval(timer);
	   
	 startWidth = parseInt(getComputedStyle(box).width);

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

	 clearInterval(timer);
	 box.style.width = firstWidth;

   });
 }
 
 accordion.addEventListener('click', function (event) {
	for (var i = 0; i < items.length; i++) {
		lists[i].style.overflow = 'hidden';
		lists[i].style.height = '0';
		if (event.target == items[i]){
			if (getComputedStyle(lists[i]).overflow == 'hidden'){
				lists[i].style.overflow = 'auto';
				lists[i].style.height = '130px';				
			} else {
				lists[i].style.overflow = 'hidden';
				lists[i].style.height = '0';				
			}		 
		}
	}
	 
 });
 
}


 
//todo  реализовать анимацию - при нажатии на старт ширина элемента увеличивается, при нажатии на стоп "рост" элемента останавливается
//реализовать аккордеон - при нажатии соответствующей вкладки ее содержимое раскрывается, а содержимое остальных - скрывается
