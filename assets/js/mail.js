function sendMail(europeForm) {
    emailjs.init("user_b1Ep7OnCZJNMJsZDzLuKx");
    emailjs.send("gmail", "europe", {
       "full_name": europeForm.name.value,
       "from_email": europeForm.email.value,
       "which_way": europeForm.check.value,
       "start_country": europeForm.from.value,
       "country": europeForm.to.value,
       "hotel": europeForm.hotelstay.value,
       "start_date": europeForm.start.value,
       "end_date": europeForm.end.value,
       "adults": europeForm.ads.value,
       "kids": europeForm.kids.value,
       "travelling_class": europeForm.trvl.value
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       document.getElementById("holiday-form").reset(); // reset the form if successful
    }, function(error) {
       console.log('FAILED...', error);
    });
    return false;
}

// window.onload = function() {
//             document.getElementById('holiday-form').addEventListener('submit', function(event) {
//                 event.preventDefault();
//                 // generate the contact number value
//                 this.contact_number.value = Math.random() * 100000 | 0;
//                 emailjs.sendForm('contact_service', 'holiday-form', this);
//             });
//         }
  