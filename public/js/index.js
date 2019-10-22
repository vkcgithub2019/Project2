
//TODO: Setup ajax call that hits the /api/parts route and render the first 10 objects(parts) to the page
$.get("/api/parts", function(data){
    // console.log(data);

    for (var i = 0; i < data.length; i++) {
        let img = data[i].photo;
        let partImg = $(`<img class='part-image' data-id=${data[i].id}>`);
        partImg.attr("src", img);
        $("#most-recent-ten-parts").append(partImg);

    }


});

$(document).on('click', '.part-image', function(){

  const partId = $(this).data('id')
  window.location.replace('/details/' + partId)
})



    
    
    $(function() {
      $("#partName").focus();
    });
    
    $("#submit").on("click", function(e) {
      e.preventDefault();
    // console.log("getting part");
      function formValidation() {
          var validForm = true;
          $(".form-control").each(function() {
              if ($(this).val() === "") {
                  validForm = false;
              }
          });
    
         
    
          if ($("#partName").val() === "" || $("#department").val() === ""){
              validForm = false
            };
    
              return validForm;
         }
          function getItemDetail() {
            var id = $(this).data("id")
            /* $.get("/details/" + id).then(function(){

            }) */
            window.location = "/details/" + id
          }
    
      if (formValidation() == true) {
    

          var partName = $("#partName").val().trim()
      
      //AJAX post the data to the parts route
          $.get("/api/parts/" + partName).done(function(bestMatch) { 
            /* $.get(currentURL + "/api/parts/" + newPart.partName).done(function(bestMatch) { */
              // console.log(bestMatch);
              
              for (var i = 0; i < bestMatch.length; i++){
                const {photo, partName, price, description } = bestMatch[i]
                var newDiv = $("<div>") 
                newDiv.data("id",bestMatch[i].id)
                  newDiv.append(bestMatch[i].partName)
                  newDiv.append(bestMatch[i].partCondition)
                  var image = $(`<img src=${photo}>`);
                   var name = $('<h3>').text(partName);
                   var descriptionP = $('<p>').text(description);
                   var priceP = $('<p>').text(price)
                  newDiv.append(name, image, descriptionP, priceP)
                  newDiv.on("click",getItemDetail)
                  $(".modal-body").append(newDiv)
              }   
                  /**
                   * UserId: null
createdAt: "2019-10-17T22:12:46.000Z"
department: "body"
description: "1968 hub caps, 4 available, sold as a set"
id: 16
partCondition: "OEM"
partName: "hub caps"
phone: null
photo: "https://www.justaircooled.co.uk/images/P/hubcap%20flat%20silver.JPG"
price: 246
updatedAt: "2019-10-17T22:12:46.000Z"
                   */

                   
              // }
    
            
              /* $("#bestMatch-partName").html("<h2 style='font-size: 4em;'>" + bestMatch.partName + "</h2>");
              $("#bestMatch-photo").html("<img src='" + bestMatch.photo + "' alt='best match photo'>"); */
      //bring up the modal
              $("#best-match-modal").modal("toggle")
          });
          //empty all fields after user submitted to get ready for next user
          $("#department").val("");
          $("#photo").val("");
          $("#partName").focus();
      } 
      
      else {
          alert("Please go back and check that all fields are completed");
        
      };
      
    })
    