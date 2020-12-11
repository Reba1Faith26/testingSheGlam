function animateWeb(){
    $(".welcome-caption").animate({
        marginLeft : '0px'
    },1000)
    
    $(".we-do").animate({
        marginRight: '0px'
    },1000
    )

    $(".card-wrapper").animate({
        marginRight : '0px'
    },1000)
}
function menuBar(){
    $(".fa-bars").click(function(){
        $(".nav-list").slideToggle(500);
    })
}
menuBar();