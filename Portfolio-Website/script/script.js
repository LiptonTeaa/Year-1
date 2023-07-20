
// Script to make the navbar sticky with a background when scrolling and not sticky with no background when at the top of the page 

$(document).ready(function(){
    $(window).scroll(function(){
        if( this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    // toggle menu/navbar script
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active"); // makes it clickable
        $('.menu-button i').toggleClass("active"); // makes it change animation wehn clicked 
    });
});