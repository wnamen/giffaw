$(document).on("ready", function(){

  $.ajax({
    method: "GET",
    url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
    dataType: "json",
    success: onSuccess,
    error: onError
  })

  $("btn").click(function clickSearch(event) {
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?",
      data: $("form").serialize(),
      dataType: "json",
      success: onSuccess,
      error: onError
    })
  })

  function onSuccess(json) {
    var jData = json.data;

    for (var i = 0; i < jData.length; i++) {
      var img = jData[i].images.fixed_height.url;

      $("div").append("<img src=" + img +">");
    }
  }

  function onError(xhr, status, errorThrown) {
      alert("Sorry, there was a problem!");
      console.log("Error: " + errorThrown);
      console.log("Status: " + status);
      console.dir(xhr);
  }

});
