gsap.from(".centertext",{
    opacity:0,
    duration:1,
});

gsap.from(".centertext button",{
    opacity:0,
    duration:.5,
    delay:1,
    y:20,
    stagger:0.3,
});

gsap.from(".centertext h4",{
    opacity:0,
    duration:.5,
    delay:2,
    x:-30,
});

gsap.from(".right h1",{
    opacity:0,
    delay:.2,
    duration:.8,
    x:30,

    scrollTrigger:{
        scroller:'body',
        trigger:".right h1",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".right h4",{
    opacity:0,
    delay:.2,
    duration:.4,
    x:30,

    scrollTrigger:{
        scroller:'body',
        trigger:".right h4",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".right button",{
    opacity:0,
    delay:.2,
    duration:.4,
    y:30,

    scrollTrigger:{
        scroller:'body',
        trigger:".right button",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".left h1",{
     opacity:0,
    delay:.2,
    duration:.8,
    x:-30,

    scrollTrigger:{
        scroller:'body',
        trigger:".left h1",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".left h4",{
    opacity:0,
    delay:.3,
    duration:.4,
    x:-30,

    scrollTrigger:{
        scroller:'body',
        trigger:".left h4",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".left button",{
    opacity:0,
    delay:.2,
    duration:.4,
    y:30,

    scrollTrigger:{
        scroller:'body',
        trigger:".left button",
        // markers:true,
        start:"top 80%",
    }
});

gsap.from(".centerertext h1",{
    opacity:0,
    delay:.2,
    duration:.8,
    y:100,

    scrollTrigger:{
        scroller:'body',
        trigger:".centerertext h1",
        // markers:true,
        start:"top 100%",
    }
});

gsap.from(".page6 img",{
    opacity:0,
    delay:.2,
    duration:.8,
    y:100,
    x:20,
    stagger:.4,
    delay:1,

    scrollTrigger:{
        scroller:'body',
        trigger:".page6 img",
        // markers:true,
        start:"top 100%",
    }
})
