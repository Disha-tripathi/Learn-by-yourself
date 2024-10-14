// const submitBtn = document.getElementById('submit-btn');
// const successCard = document.getElementById('success-card');

// submitBtn.addEventListener('click', () => {
//   successCard.style.display = 'block';
//   setTimeout(() => {
//     successCard.style.display = 'none';
//   }, 3000); // hide the card after 3 seconds
// });
// function clearInputs() {
//   document.getElementById('name').value = '';
//   document.getElementById('email').value = '';
//   document.getElementById('message').value = '';
// }
// // Function to open the modal
// function openModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "block";
// }

// // Function to close the modal
// function closeModal() {
//   var modal = document.getElementById("myModal");
//   modal.style.display = "none";
//   document.getElementById("loginModal").style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == document.getElementById("myModal")) {
//     closeModal();
//   }
// }
// function openLoginModal() {
//   document.getElementById("loginModal").style.display = "block";
//   document.getElementById("myModal").style.display = "none";
// }

// function closeLoginModal() {
//   document.getElementById("loginModal").style.display = "none";
// }
// function closeModal() {
//   document.getElementById("loginModal").style.display = "none";
//   document.getElementById("myModal").style.display = "none";
// }
// function openSignUpModal() {
//   document.getElementById("myModal").style.display = "block";
//   document.getElementById("loginModal").style.display = "none";
// }
// function openSignUpModal() {
//   document.getElementById('myModal').style.display = 'flex';
// }
const hero = document.querySelector('.hero-');
const about = document.querySelector('.about-');

function handleScroll() {
  const heroTop = hero.offsetTop;
  const aboutTop = about.offsetTop;
  const windowHeight = window.innerHeight;

  if (window.scrollY >= heroTop - windowHeight && window.scrollY < heroTop + hero.offsetHeight) {
    hero.classList.add('animated');
  } else {
    hero.classList.remove('animated');
  }

  if (window.scrollY >= aboutTop - windowHeight && window.scrollY < aboutTop + about.offsetHeight) {
    about.classList.add('animated');
  } else {
    about.classList.remove('animated');
  }
}

window.addEventListener('scroll', handleScroll);