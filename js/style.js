//  logo出現
var logoFixPic = document.getElementById("logoFix");
    logoScrollY = 800;
    window.addEventListener('scroll', function(){
        var st = this.scrollY;
        // console.log(st + "+" + stSpace+ "+" +menuHnS[.styledisplay)
        /* 判斷捲軸距離頂部(st)超過800時，logo才出現。 */
        if( st < logoScrollY) {
            logoFixPic.style.opacity = 0;
        } else {
            logoFixPic.style.opacity = 1;
        };      
    });           


// menu出現

// var menuHnS = document.getElementsByClassName("menu")
//   menuScrollY = 1000;
//   stOld = 0;
//   stSpace = 0;
//   window.addEventListener('scroll', function(){
//       var st = this.scrollY;    
//       /* 判斷捲軸距離頂部(st)超過70，而且向下捲動(stSpace>  時，nav-bar失；
//       捲軸距離頂部超過70，但向上捲動時，nav-bar又出現。 */
//       stSpace=st-stOld;
//       if( st > menuScrollY) {
//           // 滑鼠往上捲時
//           if(stSpace < 0) {
//           menuHnS[0].style.display="flex";
//           } else {
//               menuHnS[0].style.display="none";   
//           }
//       } else if( st > 70 && stSpace > 0) {
//           menuHnS[0].style.display="none";
//       } else {
//           menuHnS[0].style.display="flex";
//       };
//       stOld = st;            
//   });          
