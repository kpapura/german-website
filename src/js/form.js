const input = document.querySelector('#phone');
const iti = window.intlTelInput(input, {
  initialCountry: 'auto',
  separateDialCode: true,
  preferredCountries: ['ua', 'ru', 'by', 'pl'], 
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  document.getElementById('thankYouModal').style.display = 'block';
});

document.getElementsByClassName('close')[0].addEventListener('click', function() {
  document.getElementById('thankYouModal').style.display = 'none';
});

window.onclick = function(event) {
  if (event.target == document.getElementById('thankYouModal')) {
    document.getElementById('thankYouModal').style.display = 'none';
  }
}
