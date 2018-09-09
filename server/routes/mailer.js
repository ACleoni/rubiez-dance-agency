const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const fs = require('fs');

fs.readFile('../RubiezRates.pdf', ((err, data) => {
    console.log(JSON.stringify(data))
})
)


// const msg = {
//   to: 'alexander.cleoni@gmail.com',
//   from: 'miyaparks@rubiezdance.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//   attachments: [
//       {
//     content: ,
//       filename: 'some-attachment.txt',
//       type: 'plain/text',
//       disposition: 'attachment',
//       contentId: 'mytext'
//   },
// ]
// };
// sgMail.send(msg);

// class EmailService {
//     async _sendQuote(email)
//     {
//         try 
//         {
//             let message = {
//                 to: 'alexander.cleoni@gmail.com',
//                 from: 'alexander.cleoni@gmail.com',
//                 subject: 'Rubiez Rates',
//                 text: 'Test Email'

//             }
//             console.log('Sending')
//             await sgMail.send(message)
//         } catch (error) 
//         {
//             console.error(error)
//         }
//     }
// }

// module.exports = (new EmailService());

