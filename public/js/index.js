
//TODO: Setup ajax call that hits the /api/parts route and render the first 6 objects(parts) to the page
$.get("/api/parts/mostrecentten",function(data){
    console.log(data);

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
    console.log("getting part");
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
          
    
      if (formValidation() == true) {
    
          var newPart = {
              partName: $("#partName").val().trim(),
              /* photo: $("#photo").val().trim() */
           
          }
    
          var currentURL = window.location.origin;
    
      //AJAX post the data to the parts route
          $.get(currentURL + "/api/parts", newPart).done(function(bestMatch) { 
            /* $.get(currentURL + "/api/parts/" + newPart.partName).done(function(bestMatch) { */
              console.log(bestMatch);
              for (var i = 0; i <= bestMatch.length, i ++;){
                var newDiv = $("<div>") 
                  newDiv.append(bestMatch.partName)
                  newDiv.append(bestMatch.partCondition)
                  $("#best-match-modal").append(newDiv)
              }
    
            
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
    