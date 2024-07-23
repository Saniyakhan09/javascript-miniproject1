// var a = [1,2,3,4];
// var b = a.map(function(value){
//     return value*2;
// });
// console.log(b);

// var a = [ 12,3,4,5,6,7,];
// var b = a.filter(function(value){
//     return value>5;
// });
// console.log(b);

var color = document.querySelector("#center");
color.addEventListener("mousemove",function(details){
    var rectangular = color.getBoundingClientRect();
    var ans = details.clientX - rectangular.left;

    if(ans<rectangular.width/2){
    var redcolor =     gsap.utils.mapRange(0, rectangular.width/2, 255, 0, ans);
        gsap.to(color, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: "power4.out",
        });
        
    }
    else{
        var bluecolor = gsap.utils.mapRange(rectangular.width/2,rectangular.width,255,0,ans);
            gsap.to(color,{
                backgroundColor: `rgb(0, 0,(${bluecolor})`,
                ease: "power4.out",
            });
        }

      
 
});
// var color = document.querySelector("#center");
color.addEventListener("mouseleave",function(){
// color.style.backgroundColor = "white";
gsap.to(color,{
    backgroundColor: "white"
})
   });    




// console.log(typeof('5' - 3))

// console.log('2'+3*4)

// var a = 5;
// console.log(++a)
// console.log(a)

// console.log(typeof NaN)
// console.log(1<2<3)
// console.log(3>2>1)


// var a = [0,1,2,3,4,5];
// var b = a.map(function(value){
//     return value*2;
// });
//  b.filter(function(value){
//     return (value<3)
// })
// var sumb = a.reduce((acc, val) => {
//     return acc = acc+ val;
// });
// console.log(sumb)
