$(document).ready(function() {
	$("#send").click(function() {
Email.send( {
  Host: "smtp.gmail.com",
  Username: $("#username").val(), // the  account youd like to use to send the email
  Password: $("#pwd").val(), // account password
  To: "olugbengajohnoye@gmail.com", // the receiver email address
  From: $("#email").val(), // same value as Username
  Subject: $("#subject").val(), // the topic / subject
  Body: $("#body").val() // your message
}).then(function(message){
   if (message == "OK") {
     alert("The email was send successfully");
   } else {
     alert(message); // i smell mistake here so lets show the error
   }
});
	});
});
