var flag = 0;

document.querySelector("#search").addEventListener("click",function(){

    if(flag === 0){
    document.querySelector("#searchbar").style.width = "13vw"
    document.querySelector("#searchbar h3").style.opacity = ".6"

       flag = 1;
    }
   else{
    document.querySelector("#searchbar").style.width = "0"
    document.querySelector("#searchbar h3").style.opacity = "0"

    flag= 0
   } 

})

var tl = gsap.timeline()

tl.from("#left",{left: "-100%", duration: 1, ease: "easeInOut"})

tl.from("#right",{x: "100%",duration: 1,  ease: "easeInOut"})


tl.from("#circle",{y: "200%", duration: 1, ease: "easeInOut"})

tl.from("#c1",{y: "200%", duration: 1, ease: "easeInOut"})



tl.from("#nav",{left: "-100%", duration: 1.5, ease: "easeInOut"})
tl.from("#nav2",{x: "120%", duration: .5, ease: "easeInOut"})

tl.from("#food",{duration: 1,opacity:0, ease: "easeInOut"})

tl.from("#desc",{opacity:0, duration: 1.5, ease: "easeInOut"})

tl.from("#sidebar",{y: "300%", duration: 1, ease: "easeInOut"})










