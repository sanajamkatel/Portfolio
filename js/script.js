// Ensure this function is in your script.js file or within a <script> tag
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
      section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  } else {
      console.log("Section not found: " + sectionId);
  }
}
