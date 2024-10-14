

// // Get the skills section element
// const skillsSection = document.querySelector('.skills');

// // Get the icons inside the skills section
// const icons = skillsSection.querySelectorAll('i');

// // Add an event listener to the window to detect scroll events
// window.addEventListener('scroll', () => {
//   // Check if the skills section is in view
//   if (isInView(skillsSection)) {
//     // Trigger the animation
//     icons.forEach((icon, index) => {
//       icon.style.animation = `slideIn 1s forwards`;
//       icon.style.animationDelay = `${index * 0.5}s`;
//     });
//   }
// });

// // Function to check if an element is in view
// function isInView(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }