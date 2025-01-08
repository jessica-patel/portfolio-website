console.log("Hello and welcome to my portfolio site! -Jess")

function menuToggle() { // shows menu links when hamburger is clicked on
    var x = document.getElementById('myNavtoggle'); // assigns menu object to a variable using the ID (searched document for the provided ID)
    if (x.className === 'navtoggle') { // checks if classname of x is navtoggle
      x.className += ' responsive'; // changes class of object based on whether it's shown. this shows menu
    } else { // aka if it is navtoggle responsive
      x.className = 'navtoggle'; // effectively hides menu
    }
}

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navigation").style.top = "0";
//   } else {
//     document.getElementById("navigation").style.top = "-110px";
//   }
//   prevScrollpos = currentScrollPos;
// }

document.addEventListener('DOMContentLoaded', function () {
  const tagButtons = document.querySelectorAll('.tag-btn');
  const projects = document.querySelectorAll('.project');

  tagButtons.forEach(button => {
    button.addEventListener('click', function () {
      const selectedTag = this.getAttribute('data-tag');

      projects.forEach(project => {
        const projectTags = project.getAttribute('data-topics').split(' ');

        if (selectedTag === 'all' || projectTags.includes(selectedTag)) {
          project.style.display = 'inline-block';
        } else {
          project.style.display = 'none';
        }
      });
    });
  });
});

// ---- FILTER-PROJECT COUNT ---- //
// Select necessary elements
const projectElements = document.querySelectorAll('.project');
const filterButtons = document.querySelectorAll('#tag-selector button');
const displayCount = document.getElementById('display-count');

// Function to update the displayed projects
function filterProjects(filter) {
  let visibleCount = 0;

  projectElements.forEach(project => {
    if (filter === 'all' || project.dataset.topic === filter) {
      project.style.display = 'block'; // Show matching projects
      visibleCount++;
    } else {
      project.style.display = 'none'; // Hide non-matching projects
    }
  });

  // Update the display count
  displayCount.textContent = `Displaying ${visibleCount} Project${visibleCount !== 1 ? 's' : ''}`;
}

// Add event listeners to the filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter; // Get the filter from the button
    filterProjects(filter);
  });
});

// Initialize with "All" filter
filterProjects('all');
