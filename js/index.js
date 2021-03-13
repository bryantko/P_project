$(function(){
   var timer =null;
   var liw=$('.focus ul li:first').innerWidth();
   timer = setInterval(function(){
      play()
   },2000)
   function play(){
       $('.focus ul').animate({
         left:-liw
      },function(){
         $(this).css('left',0).find('li:first').appendTo(this);
      })
   }
   $('.focus ul').mouseover(function(){
      clearInterval(timer);
   })
   $('.focus ul').mouseout(function(){
     timer=setInterval(function(){
         play();
     },2000)
   })

   $('.arrow_r').click(function(){
      // cearInterval(timer);
      play();
   })
   $('.arrow_l').click(function(){
      $('.focus ul').css('left',-liw).find('li:last').prependTo('.focus ul');
      $('.focus ul').animate({left:0});
   })
   // 导航栏
    $('.xiaomi>a').mouseover(function(){
       $('.xiaomi ul').slideDown();
       
    })
    $('.xiaomi>a').mouseout(function(){
        $('.xiaomi ul').slideUp();
        
     }) 
     

     $('.main_left li').eq(0).mouseover(function(){
        $('.menu_item ul').show();
     })
     $('.main_left li').eq(0).mouseout(function(){
      $('.menu_item ul').hide();
   })
   var hour=document.querySelector('.hour');
   var minute=document.querySelector('.minute');
   var second=document.querySelector('.second');
   var inputTime=+new Date('2021-3-8 22:00:00');
   countDown();
   var time=setInterval(countDown,1000);
   function countDown(){
    var nowTime=+new Date();
    var resultTime = (inputTime - nowTime)/1000;
    var h = parseInt(resultTime/60/60%24);
       h=h<10?'0'+h:h;
       hour.innerHTML=h;
    var m = parseInt(resultTime/60%60);
       m=m<10?'0'+m:m;
       minute.innerHTML=m;
       var s =parseInt(resultTime%60);
       s=s<10?'0'+s:s;
       second.innerHTML=s;
   }

   
})