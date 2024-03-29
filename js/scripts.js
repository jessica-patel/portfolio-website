console.log("Hello and welcome to my portfolio site! -Jess")

function menuToggle() { // shows menu links when hamburger is clicked on
    var x = document.getElementById('myNavtoggle'); // assigns menu object to a variable using the ID (searched document for the provided ID)
    if (x.className === 'navtoggle') { // checks if classname of x is navtoggle
      x.className += ' responsive'; // changes class of object based on whether it's shown. this shows menu
    } else { // aka if it is navtoggle responsive
      x.className = 'navtoggle'; // effectively hides menu
    }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-110px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function () {
  const tagButtons = document.querySelectorAll('.tag-btn');
  const projects = document.querySelectorAll('.project');

  tagButtons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedTag = this.getAttribute('data-tag');

      projects.forEach(project => {
        const projectTags = project.getAttribute('data-tags').split(' ');

        if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
          project.style.display = 'inline-block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});