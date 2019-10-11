


$(document).on("click", "#submitButton", submitForm);
function submitForm(){
    event.preventDefault()
    /* console.log ("submit form triggered") */

    var name = $("#name").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var partName = $("#partName").val();
    var price = $("#price").val();
    var description = $("#description").val();
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(partName)
    console.log(price)
    console.log(description)

//do an ajax call here in (), .get
    $.ajax()

//AJAX post the data to the html route
$.post(currentURL + "/api/sell", newUser).done(function(searchResult) {
    console.log(searchResult);
    $("#partName").html("<h2 style='font-size: 4em;'>" + partName + "</h2>");
    $("#bestMatch-photo").html("<img src='" + bestMatch.photo + "' alt='best match photo'>");
//bring up the modal
    $("#best-match-modal").modal("toggle")
});
//empty all fields after user submitted to get ready for next user
$("#name").val("");
$("#email").val("");
$("phone").val("");
$("#partName").focus();
$("#price").val("");
$("#description").val("");

} else {
alert("Please go back and check that all fields are completed");
/* return false; */
}











