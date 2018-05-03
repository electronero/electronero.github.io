    let formChecker = false;
    let subChecker = false;
    var contactForm = $('#contact-form'), subscribeForm = $('#subscribe-form');
    function clearForm()
    {
    document.getElementById("contact-form").reset();
    document.getElementById("subscribe-form").reset();
    }
    function requiredSub()
    {
      var subEmail = document.forms["subscribe-form"]["email"].value;
    if (subEmail === "")
    {
    subChecker = false;
    }
    else
    {
    subChecker = true;
    }
    }
    function requiredForm()
    {
      var name = document.forms["contact-form"]["name"].value;
      var email = document.forms["contact-form"]["email"].value;
      var message = document.forms["contact-form"]["message"].value;
    if (email === "")
    {
    formChecker = false;
    }
    else
    {
    formChecker = true;
    }
    }
    function formSubmit() {
    requiredForm()
    if (formChecker == true){
                let qf_results = contactForm.find('.form-results');
                qf_results.slideUp(400);
                let message = 'Message sent! Thanks for contacting us.';
                var type = 'alert-success';
                qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(message).slideDown(400);
                setTimeout(clearForm, 3000);
    };
    if (formChecker == false){
                let qf_results = contactForm.find('.form-results');
                qf_results.slideUp(400);
                let message = 'Message could not be sent! Please try again momentarily.';
                var type = 'alert-danger';
                qf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(message).slideDown(400);
    };
};
    function subSubmit() {
    requiredSub()
    if (subChecker == true){
                var sf_results = subscribeForm.find('.subscribe-results');
                sf_results.slideUp(400);
                let message = 'Message sent! Thanks for contacting us.';
                var type = 'alert-success';
                sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(message).slideDown(400);
                setTimeout(clearForm, 3000);
    };
    if (subChecker == false){
                var sf_results = subscribeForm.find('.subscribe-results');
                sf_results.slideUp(400);
                let message = 'Message could not be sent! Please try again momentarily.';
                var type = 'alert-danger';
                sf_results.removeClass( 'alert-danger alert-success' ).addClass( 'alert ' + type ).html(message).slideDown(400);
    };
};
