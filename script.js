document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const recipeDetails = this.parentElement.querySelector('.recipe-details');
            recipeDetails.classList.toggle('active');
            if (recipeDetails.classList.contains('active')) {
                this.textContent = 'Hide Recipe';
            } else {
                this.textContent = 'View Recipe';
            }
        });
    });
});


  
  