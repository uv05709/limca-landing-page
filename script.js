

var tl = gsap.timeline({scrollTrigger:{
    trigger:".two",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    
}})
tl.to("#limca",{
    top:"105%",
    left:"-13%",

},'orange')
tl.to("#orange-cut",{
    top:"160%",
    left:"14%"
},'orange')
tl.to("#orange",{
    top:"160%",
    right:"10%"
},'orange')
tl.to("#leaf1",{
    width:"10%",
    rotate:"45deg",
    top:"110%",
    left:"70%"
},'orange')
tl.to("#leaf2",{
    width:"10%",
    rotate:"45deg",
    top:"99%",
    left:"-0%"
},'orange')


var tl2 = gsap.timeline({scrollTrigger:{
    trigger:".three",
    start:"0% 95%",
    end:"70% 50%",
    scrub:true,
    
}})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%"
},'lemon')

tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",
    scrub:3
},'lemon')
tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    top:"110%"
},'lemon')

tl2.from("#pepsi",{
    rotate:"90deg",
    left:"100%",
    top:"110%",
    scrub:3
},'lemon')
tl2.to("#orange-cut",{
   width:"18%",
    left:"41%",
    top:"202%"
},'lemon')

tl2.to("#limca",{
    width:"35%",
    left:"33%",
    top:"215%",
    
},'lemon')

var menu =document.querySelector(".main i")
var cross = document.querySelector("#full i")


var tl3 = gsap.timeline()

tl3.to("#full ",{
    right:0,
    duration:.6
})
tl3.from("#full h4",{
    x:150,
    duration:.5,
    stagger:.2,
    opacity:0
})
tl3.from("#full i",{ 
    opacity:0,
    duration:.1
})
tl3.pause()

menu.addEventListener("click",function(){
    tl3.play()
})
cross.addEventListener("click",function(){
    tl3.reverse()
})

window.addEventListener("wheel",function(dets){
    if (dets.deltaY>0){
        gsap.to(".marque",{
            transform:'translate(-200%)',
            duration:4,
            ease:"none",
            repeat:-1
        })
        gsap.to(".marque img",{
            rotate:180
        })
    }else{
            gsap.to(".marque",{
            transform:'translate(0%)',
            duration:4,
            ease:"none",
            repeat:-1
        })
         gsap.to(".marque img",{
            rotate:0
        })
    }
})
