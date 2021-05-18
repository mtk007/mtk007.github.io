
//Navigation 
$(window).scroll(function() {
  $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
  }, 2000);
});

//hopefully very responsive nav buttons
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//RESUME DOWNLOAD
function download() {
    var iframe = document.getElementById('invisible');
    iframe.src = "assets/april2021resume_mattkrack.pdf";
};

//formspree action
window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};


//form io
formButton("create", {
    action: "https://formspree.io/f/xdoyedyd",
    title: "How can we help?",
    fields: [
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com"
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      title: {
        backgroundColor: "5E60BE"
      },
      button: {
        backgroundColor: "gray"
      }
    }
  });
