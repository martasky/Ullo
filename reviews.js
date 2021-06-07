fetch("https://keaprojects21-50cf.restdb.io/rest/ullo-reviews", {
  method: "GET",
  headers: {
    "x-apikey": "602e38155ad3610fb5bb62bd",
  },
})
  .then((res) => res.json())
  .then((response) => {
    console.log(response);
    showReviews(response);
  })
  .catch((err) => {
    console.error(err);
  });

function showReviews(data) {
  data.forEach(function (review) {
    console.log(review);

    showReview(review);
  });
}
function showReview(review) {
  const tempRev = document.querySelector("#reviews-template").content;
  const clone = tempRev.cloneNode(true);

  clone.querySelector(".review-title").textContent = review.title;
  clone.querySelector(".review-comment").textContent = review.comment;

  if (review.stars === 4) {
    clone.querySelector(".stars img:last-child").classList.add("hidden");
  }

  const rev = document.querySelector("#reviews");
  rev.appendChild(clone);
}
