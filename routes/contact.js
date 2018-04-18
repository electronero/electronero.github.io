var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
/* GET home page. */
// router.get('/contact', function (req, res, next) {
//     res.render('contact', { title: 'Express-contact' });
// });
router.post('/contact/subscribe', function (req, res) {
   
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'electronero.official@gmail.com',
            pass: 'ejsliemtbuzsggux'
        }
        
    });

    var mailOption = {
        from: 'Electronero Official <electronero.official@gmail.com>', // sender address
        to: 'etxsub.ou4jbg@zapiermail.com, electronero.official@gmail.com, electronerodev@gmail.com', // receivers address
        subject: req.body.email, // subject added to sheet
        text: 'The following subscriber has requested contact and/or reply from the Electronero team', // text body
        html: '<p>Electronero Form Submission:</p><ul><li>' +req.body.email+ '</li>' + '</ul>'
    }
    transporter.sendMail(mailOption, function (error, info) {
        console.log(info);
        if (error) {
            console.log(error);
            res.redirect('/');
        }else{        
            consol.log('Message Sent');
            res.redirect('/');
        }
    });
    res.redirect('/');
});

router.post('/contact/send', function (req, res) {
   
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'electronero.official@gmail.com',
            pass: 'ejsliemtbuzsggux'
        }
        
    });

    let formSubmittedEmail = req.body.email;
    let formSubmittedName = req.body.name;
    let formSubmittedMessage = req.body.message;
    let sendFormToStaff = 'etxsub.ou4jbg@zapiermail.com, electronero.official@gmail.com, electronerodev@gmail.com';

    var mailOption = {
        from: '' + formSubmittedName + ' <' + formSubmittedEmail + '>', // sender address
        to: sendFormToStaff, // staff addresses
        subject: formSubmittedEmail, // email in subject
        text: formSubmittedMessage, // text body to the left, and HTML body below
        html: '<p>Electronero Form Submission:</p><ul>Name: <li>' + formSubmittedName + '</li>Email: <li>' + formSubmittedEmail + '</li>Message: <li>' + formSubmittedMessage + '</li></ul>'
    }
    transporter.sendMail(mailOption, function (error, info) {
        console.log(info);
        if (error) {
            console.log(error);
            res.redirect('/');
        }else{        
            consol.log('Message Sent');
            res.redirect('/');
        }
    });
    res.redirect('/');
});

module.exports = router;

