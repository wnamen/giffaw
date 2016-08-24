$(document).on("ready", function(){

  $.ajax({
    method: "GET",
    url: "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    dataType: "json",
    success: onSuccess,
    error: onError
  })

  $("form").on("submit", function(event) {
    event.preventDefault();

    $(".gif-gallery").empty();

    $.ajax({
      method: "GET",
      url: "https://api.giphy.com/v1/gifs/search",
      data: $("form").serialize(),
      dataType: "json",
      success: onSuccess,
      error: onError
    })
  })

  function onSuccess(json) {

    console.log("success");
    var jData = json.data;

    for (var i = 0; i < jData.length; i++) {
      var img = jData[i].images.fixed_height.url;

      $(".gif-gallery").append("<img src=" + img +">");
    }
  }

  function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
  }

});
