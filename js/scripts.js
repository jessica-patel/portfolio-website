console.log("Hello and welcome to my portfolio site! -Jess")

function menuToggle() { // shows menu links when hamburger is clicked on
    var x = document.getElementById('myNavtoggle'); // assigns menu object to a variable using the ID (searched document for the provided ID)
    if (x.className === 'navtoggle') { // checks if classname of x is navtoggle
      x.className += ' responsive'; // changes class of object based on whether it's shown. this shows menu
    } else { // aka if it is navtoggle responsive
      x.className = 'navtoggle'; // effectively hides menu
    }
}

function scrollToAnchor(aid){
    const destination = $("a[name='"+ aid +"']");
    $('html,body').animate({
        scrollTop: destination.offset().top
    },'slow');
}

$(document).on('click', '.smooth-link', function(){
    scrollToAnchor('contact');
});