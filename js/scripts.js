// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}



// user logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputFirst = $("#new-first-name").val();
    var inputLast = $("#new-last-name").val();

    var newContact = new Contact(inputFirst, inputLast);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-last-name").val("");
    $("input#new-first-name").val("");

  });
});
