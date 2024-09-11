document.addEventListener('DOMContentLoaded', function() {
  console.log("Document prêt.");
});
  
  
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu')

burger.addEventListener('click', () =>{
  burger.classList.toggle('active');
  menu.classList.toggle('swipe')
})


document.getElementById('emailform').addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre normalement

  var formData = new FormData(this);

  fetch('traitement.php', {
      method: 'POST',
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      var messageDiv = document.getElementById('message');
      messageDiv.textContent = data.message;
      messageDiv.style.color = data.status === 'success' ? 'green' : 'red';
      messageDiv.style.backgroundColor = data.status === 'success' ? '#d4edda' : '#f8d7da';
      messageDiv.style.borderColor = data.status === 'success' ? '#c3e6cb' : '#f5c6cb';
      messageDiv.style.display = 'block';

      // Effacer le message après 3 secondes
      setTimeout(() => {
          messageDiv.style.display = 'none'; // Cacher le message après 3 secondes
      }, 3000);
  })
  .catch(error => {
      console.error('Error:', error);
  });
});

