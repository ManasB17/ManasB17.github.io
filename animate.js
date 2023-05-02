const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

// Function to toggle the display of the sections
function toggleSections(id) {
  sections.forEach(section => {
    if (section.id === id) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

// Add event listener to each link in the navigation menu
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").substring(1);
    toggleSections(id);
  });
});

// Display the home section by default
toggleSections("home");

sections.forEach(section => {
  section.addEventListener('click', () => {
    section.querySelector('.content').classList.toggle('active');
  });
});

document.addEventListener('mousemove', function(e) {
    var waterdrop = document.getElementById('waterdrop');
    var x = e.clientX;
    var y = e.clientY;
    waterdrop.style.left = x + 'px';
    waterdrop.style.top = y + 'px';
  });
  