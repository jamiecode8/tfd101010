// loading動畫
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
  // TweenMax.fromTo('.img_up', 1.5, { x: 10, y:10 }, { x: 300, y:200 });

  // TweenMax.from(".img_up", 5 ,{ 
  //   x:200 ,
  //   repeat: -1,
  // });

  TweenMax
  .To('.p1', 2, { opacity: 0 }, { opacity: 1 })
  .to('.p2', 2, { opacity: 0 }, { opacity: 1 })
