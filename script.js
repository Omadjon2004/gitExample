// Add smooth scrolling to anchor links
// $('a[href*="#"]').on('click', function(event) {
//     if (this.hash !== '') {
//       event.preventDefault();
//       const hash = this.hash;
  
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 800, function() {
//         window.location.hash = hash;
//       });
//     }
//   });
const btn = document.querySelector('.btn');

btn.addEventListener('click', (event) => {
  event.preventDefault();
  const overviewSection = document.querySelector('#overview');
  overviewSection.scrollIntoView({ behavior: 'smooth' });
});
