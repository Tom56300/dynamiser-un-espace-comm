document.addEventListener('DOMContentLoaded', function() {
    const commentList = document.getElementById('comment-list');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    const messageInput = document.getElementById('message');
    const errorMessage = document.getElementById('error-message');
  
    // Fonction pour ajouter un commentaire à la liste
    function addComment(firstName, lastName, message) {
      const newComment = document.createElement('div');
      newComment.classList.add('flex', 'space-x-4', 'text-sm', 'text-gray-500');
      newComment.innerHTML = `
        <div class="flex-1 py-10 border-t border-gray-200">
          <h3 class="font-medium text-gray-900">${firstName} ${lastName}</h3>
          <div class="prose prose-sm mt-4 max-w-none text-gray-500">
            <p>${message}</p>
          </div>
        </div>
      `;
      commentList.appendChild(newComment);
    }
  
    // Fonction pour afficher un message d'erreur
    function showError(message) {
      errorMessage.style.display = 'block';
      errorMessage.querySelector('.font-medium').textContent = message;
    }
  
    // Événement de soumission du formulaire
    document.querySelector('form').addEventListener('submit', function(event) {
      event.preventDefault(); // Empêcher le rechargement de la page
  
      // Récupérer les valeurs des champs
      const firstName = firstNameInput.value.trim();
      const lastName = lastNameInput.value.trim();
      const message = messageInput.value.trim();
  
      // Vérifier si tous les champs sont remplis
      if (firstName === '' || lastName === '' || message === '') {
        showError('Tous les champs doivent être remplis');
        return;
      }
  
      // Ajouter le commentaire à la liste
      addComment(firstName, lastName, message);
  
      // Effacer les valeurs des champs
      firstNameInput.value = '';
      lastNameInput.value = '';
      messageInput.value = '';
  
      // Cacher le message d'erreur s'il est affiché
      errorMessage.style.display = 'none';
    });
  });
  