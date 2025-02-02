// import { User } from './User';
// import { formatDate } from './helpers.js';
// const user1 = new User('Marek', 'Kowalski');
// console.log(formatDate(user1.createdAt));
// const user2 = new User('Adam', 'Kowalski');
// console.log(formatDate(user2.createdAt))
document.getElementById('review-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Zapobiega przeładowaniu strony
    // Pobieranie danych z formularza
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating').value;
    // Walidacja (opcjonalna)
    if (!comment || !rating) {
        alert('Please fill out both the comment and rating fields.');
        return;
    }
    // Tworzenie nowego elementu recenzji
    const reviewDiv = document.createElement('div');
    reviewDiv.classList.add('review');
    const ratingParagraph = document.createElement('p');
    ratingParagraph.classList.add('rating');
    ratingParagraph.textContent = `Rating: ${rating} / 5`;
    const commentParagraph = document.createElement('p');
    commentParagraph.textContent = comment;
    reviewDiv.appendChild(ratingParagraph);
    reviewDiv.appendChild(commentParagraph);
    // Dodawanie recenzji na stronę
    document.getElementById('reviews').appendChild(reviewDiv);
    // Czyszczenie formularza
    document.getElementById('review-form').reset();
});
