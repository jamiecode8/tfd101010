// 輪播效果
const splideInstances = []

var elms = document.getElementsByClassName( 'splide' );
console.log(elms)
for ( var i = 0, len = elms.length; i < len; i++ ) {
const instance = new Splide( elms[ i ] ,{
    type:'loop',
    pagination:false
  }).mount();

  splideInstances.push(instance)
}
console.log(splideInstances)
const block = document.querySelectorAll('.inner_block')

for (let index = 0; index < block.length; index++) {
  const current_block = block[index];
  const dots = current_block.querySelectorAll('.sidedot')

  for (let dot_index = 0; dot_index < dots.length; dot_index++) {
    const dot = dots[dot_index];
    dot.addEventListener('click',()=>{
      splideInstances[index].go(dot_index)
    })
  }
}


// 中間區域tab選單
function opennumber(name, element){
  var i, inner_block;
  // 找到同樣class的物件，全部隱藏
  inner_block = document.getElementsByClassName("inner_block_area");
  for (i = 0; i < inner_block.length; i++) {
    inner_block[i].style.display = "none";
  }
  // 找到指定物件，顯是那個
  document.getElementById(name).style.display = "block";
}

document.getElementById("defaultOpen").click();

// 選單下方的底線
var items = document.getElementsByClassName("menuitem");
// console.log(items);
for(let i = 0; i < items.length; i++){
  items[i].addEventListener("click",function(){
    let links = this.closest("ul.menubar").querySelectorAll("li.menuitem");
    links.forEach(function(item, i){
      //console.log(item);
      item.classList.remove("underline");
    });
    this.classList.add("underline");
  })
};


// 加入圖片1動畫
var add1 = new TimelineMax().to(".img_base", .8 , {
  opacity: 1,
  esse: SlowMo.ease.config(0.5, 0.1, true)
}).stop();
var btn_add1 = document.getElementById('add1');
btn_add1.onclick = function(){
  add1.play()
}

// 刪除圖片動畫
var btn_remove = document.getElementById('remove1');
btn_remove.onclick = function(){
  add1.reverse();
}

var btn_remove_S1 = document.getElementById('remove_S1');
btn_remove_S1.onclick = function(){
  add1.reverse();
}

// 加入圖片2動畫
var add2 = new TimelineMax().to(".img_top", .8 , {
  opacity: 1,
  esse: SlowMo.ease.config(0.5, 0.1, true)
}).stop();
var btn_add2 = document.getElementById('add2');

btn_add2.onclick = function(){
  add2.play()
}

// 刪除圖片動畫
var btn_remove = document.getElementById('remove2');
btn_remove.onclick = function(){
  add2.reverse();
}

var btn_remove_S2 = document.getElementById('remove_S2');
btn_remove_S2.onclick = function(){
  add2.reverse();
}

// 加入圖片3動畫
var add3 = new TimelineMax().to(".img_mid", .8 , {
  opacity: 1,
  esse: SlowMo.ease.config(0.5, 0.1, true)
}).stop();
var btn_add3 = document.getElementById('add3');

btn_add3.onclick = function(){
  add3.play()
}

// 刪除圖片動畫
var btn_remove = document.getElementById('remove3');
btn_remove.onclick = function(){
  add3.reverse();
}

var btn_remove_S3 = document.getElementById('remove_S3');
btn_remove_S3.onclick = function(){
  add3.reverse();
}

// 加入圖片4動畫
var add4 = new TimelineMax().to(".img_last", .8 , {
  opacity: 1,
  esse: SlowMo.ease.config(0.5, 0.1, true)
}).stop();
var btn_add4 = document.getElementById('add4');

btn_add4.onclick = function(){
  add4.play()
}

// 刪除圖片動畫
var btn_remove = document.getElementById('remove4');
btn_remove.onclick = function(){
  add4.reverse();
}

var btn_remove_S4 = document.getElementById('remove_S4');
btn_remove_S4.onclick = function(){
  add4.reverse();
}


// 隱藏視窗_固定板型
var open = document.querySelector('.finish');
var close = document.querySelector('.close_yours');

var yours = new TimelineMax();
yours
  .to('.yours', .2, {height: '100vh', right: '0' })
  .to('.yours_inner', .1, {opacity:1 })
  .to('.yours h1', .3, {opacity:1 })
  .to('.yours_left img', .3, {opacity:1 })
  .to('.yours_table', .2 ,{opacity:1, delate: -.6 })
  // 出現時間 間格時間
  .to('.close_cart', .3, {opacity:1 , delate: -.5})
  .to('.close_yours', .2, {opacity:1, delate: -.3 })
  
  yours.stop();

  var main_area = document.querySelector('.main');
  open.onclick = function(){
  yours.play();
  main_area.classList.add("blur");
  }

  close.onclick =function(){
    yours.reverse();
    main_area.classList.remove("blur");
  };


// 隱藏視窗_手機板
var open_rwd = document.querySelector('.rwd_finish');
var close_rwd = document.querySelector('.rwd_close_yours');
var rwd_yours = document.querySelector('.rwd_yours');
open_rwd.onclick = function(){
  rwd_yours.style.display = "block";
  main_area.classList.add("blur");
}

close_rwd.onclick = function(){
  rwd_yours.style.display = "none";
  main_area.classList.remove("blur");
}
