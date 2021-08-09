gsap.to('.b2 h2', {
    duration: 1, y:0, 
    scale: 2,
    autoAlpha:1,
    scrollTrigger: {
        trigger: ".b2 h2",
        markers: true,
        start: "top 60%",
        end: "bottom 40%",
        // onEnter onLeave onEnterBack onLeaveBack
        toggleActions: "play pause reverse reset",
        //play pause resume reset restart
        //complete reverse none
        scrub: 1
    }
 })