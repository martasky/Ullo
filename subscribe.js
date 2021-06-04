const subscribe = document.querySelector("form");
subscribe.addEventListener("submit", userSubscribed);

function userSubscribed(e) {
 e.preventDefault();
 console.log(subscribe.elements.email.value);
 const payload = {
     email: subscribe.elements.email.value
 }
 document.querySelector("input[type=submit]").disabled = true;

 fetch("https://keaprojects21-50cf.restdb.io/rest/newsletter-subscriptors", 
 {
    method: "POST",
    headers: {
      "x-apikey": "602e38155ad3610fb5bb62bd",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  })
  .then(response => {
    console.log(response);
     // add congrats message
     document.querySelector(".thankyoumessage").classList.remove("hidden");
     document.querySelector(".close-it").addEventListener("click", closeMessage)
     document.querySelector("form").classList.add("hidden");
     document.querySelector("input[type=submit]").disabled = false;
     subscribe.elements.email.value = "";

     function closeMessage() {
         document.querySelector(".thankyoumessage").classList.add("hidden");
         document.querySelector("form").classList.remove("hidden");

     }


  })
  .catch(err => {
    console.error(err);
  });

}
