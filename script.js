const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});



function firstPageAnimation(){
    var tl=gsap.timeline();
    tl.from("#nav",{
        y:-20,
        opacity:0,
        duration:1.2,
        ease:Expo.easeInOut,
        stagger: 0.1
    })
    .to(".boundingelem",{
        y:0,
        delay:-0.8,
        ease:Expo.easeInOut,
        stagger:.2,
        duration:1.4,
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.2,
        delay:-1,
        ease:Expo.easeInOut
    })
}

function circleChapta(){
    var xscale=1;
    var yscale=1;
     var timeout;
    var xprev=0;
    var yprev=0;
    window.addEventListener('mousemove',(dets)=>{
        clearTimeout(timeout);

        var xdiff=dets.clientX-xprev;
        var ydiff=dets.clientY-yprev;

        xscale =gsap.utils.clamp(.8,1.2,xdiff);//clamping
        yscale =gsap.utils.clamp(.8,1.2,ydiff);//clamp-->gsap.utils.clamp

        xprev=dets.clientX;
        yprev=dets.clientY;

    
      circleMouseFollower(xscale,yscale)

      timeout=setTimeout(()=>{
             document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
      },100);
   
    


    }
        

    )
}

function circleMouseFollower(xscale,yscale){
    window.addEventListener('mousemove',(dets)=>{
           document.querySelector('#minicircle').style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`
           
    })
}
circleChapta();



firstPageAnimation();
circleMouseFollower();

document.querySelectorAll(".elem").forEach(function (elem){
    var rotate=0;
    var diffrot=0;
    
    elem.addEventListener("mousemove",function(dets){
         var diff=dets.clientY-elem.getBoundingClientRect().top;
         diffrot=dets.clientX-rotate;
         rotate=dets.clientX;

         
         
           gsap.to(elem.querySelector("img"),{
            opacity:1,
            
            top:diff,
            left:dets.clientX,
            rotate:gsap.utils.clamp(-20,20,diffrot*0.5),
            ease:Power3,
           })
    })

    elem.addEventListener("mouseleave",function(dets){
        
        
        

        
        
          gsap.to(elem.querySelector("img"),{
           opacity:0,
           duration:0.5,
           ease:Power3,
          })
   })
})