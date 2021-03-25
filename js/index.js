//loading動畫
// var textWrapper = document.querySelector('.ml12');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


// anime.timeline({loop: true})
//   .add({
//     targets: '.ml12 .letter',
//     translateX: [40,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1200,
//     delay: (el, i) => 500 + 30 * i
//   }).add({
//     targets: '.ml12 .letter',
//     translateX: [0,-30],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1100,
//     delay: (el, i) => 100 + 30 * i
//   });

//   var loading = document.querySelector('.loading');
//   var wrap = document.querySelector('.wrap');
//   setTimeout(function(){
//     loading.classList.add("fade_out");
//   },7000);


//   setTimeout(function(){
//     loading.style.display = "none";
//     wrap.style.display = "block";
//   },8000);


// 入口區塊動畫
var tl1 = new TimelineMax();
  tl1.fromTo('.img_up', 1, { x: -90, y:90, opacity: 0 }, { x: 0, y:30, opacity: 1 
  }).fromTo('.img_dw', 1, { x: 90, y:-90, opacity: 0 }, { x: 30, y:0, opacity: 1 
  }).fromTo('.p1', 1, { opacity: 0 , delay: -5}, { opacity: 1 
  }).fromTo('.p2', 1, { opacity: 0  , delay: -.5}, { opacity: 1 });
