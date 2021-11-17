let waypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if(direction == "down"){
            $(".header").addClass("shadow");
            $(".header").addClass("animate__slideInDown");
            $(".scroll-to-top").addClass("stpBlock");
            $(".scroll-to-top").addClass("animate__slideInUp");
        }else{
            $(".header").removeClass("shadow");
            $(".header").removeClass("animate__slideInDown");
            $(".scroll-to-top").removeClass("stpBlock");
            $(".scroll-to-top").removeClass("animate__slideInUp");
        }
    },
    offset: '75%'
});

ScrollReveal({
    origin: "top",
    distance: "30px",
    duration: 1500,
    reset: true
}).reveal(".top",{
    interval : 200
});

ScrollReveal({
    origin: "left",
    distance: "30px",
    duration: 1500,
    reset: true
}).reveal(".left",{
    interval : 200
});

ScrollReveal({
    origin: "right",
    distance: "30px",
    duration: 1500,
    reset: true
}).reveal(".right",{
    interval : 200
});

function setActive(current){
    $(`.nav-link`).removeClass("active");
    $(`.nav-link[href='#${current}']`).addClass("active");
}

function navScroll(){
    let currentSection = $("section[id]");
    currentSection.waypoint(function (direction) {
        if(direction = "down"){
            let currentSectionId =$(this.element).attr('id');
            setActive(currentSectionId);
        }
    },{
        offset:'150px'
    });

    currentSection.waypoint(function (direction) {
        if(direction = "up"){
            let currentSectionId =$(this.element).attr('id');
            console.log(currentSectionId)
            setActive(currentSectionId);
        }
    },{
        offset:'-100px'
    });
}

navScroll();

function changeMood() {
    $("body").toggleClass("night-mood");
    $(".mood-icon").toggleClass("ri-moon-line");
    $(".mood-icon").toggleClass("ri-sun-fill");
}

