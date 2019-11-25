
$(document).on("click", "#submitButton", submitForm);
function submitForm(){
    event.preventDefault()
    /* console.log ("submit form triggered") */
// if (formValidation() == true){
    var submitFormData = {
        sellerName: $("#sellerName").val(),
        sellerEmail: $("#sellerEmail").val(),
        sellerPhone: $("#sellerPhone").val(),
        partName: $("#partName").val(),
        department: $("#categorySelect").val(),
        partCondition: $("#partCondition").val(),
        price: $("#price").val(),
        description: $("#description").val(),
        photo: $("#photo").val()
    }
   
    // console.log('submitFormData', submitFormData)

//do an ajax call here in (), .get
$.ajax({
    method: "POST",
    url: "/api/addParts",
    data: submitFormData
  })
    .then(function(addPartsDataReponse) {
      // console.log('addPartsDataReponse', addPartsDataReponse)
        $("#name").val("");
        $("#email").val("");
        $("phone").val("");
        $("#partName").focus();
        $("#price").val("");
        $("#description").text("");
        $("#photo").val("");
            });
}

//AJAX post the data to the html route
// $.post(currentURL + "/api/sell", newUser).done(function(searchResult) {
//     console.log(searchResult);
//     $("#partName").html("<h2 style='font-size: 4em;'>" + partName + "</h2>");
//     /* $("#bestMatch-photo").html("<img src='" + bestMatch.photo + "' alt='best match photo'>"); */
// //bring up the modal
//     $("#best-match-modal").modal("toggle")

// //empty all fields after user submitted to get ready for next user


// });
//  } else 

// {
// alert("Please go back and check that all fields are completed");
// return false;
// }
// }