const ratingForm = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRatingText = document.querySelector("#selected-rating");
const thankYouTitle = document.querySelector(".thank-you-card h1");

ratingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const selectedRating = ratingForm.querySelector('input[name="rating"]:checked');

    if (selectedRating) {
        selectedRatingText.textContent = selectedRating.value;

        ratingForm.hidden = true;
        thankYouCard.hidden = false;

        thankYouTitle.focus();
    } else {
        alert("Please select a rating before submitting!");
    }
});