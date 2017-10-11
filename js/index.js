$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();

    const API_URL = 'http://localhost:3000/';
    const EMAIL_URL = API_URL + 'email_list'

    $("#signUp").click(function(){
      alert("Thanks!  We'll be in touch soon.")
    })
  
  });
