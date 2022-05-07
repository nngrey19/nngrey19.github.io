$(document).ready(function(){
  
  // Pagination
  $(".pagination").click(function(e) {
    var currentId = parseInt($(".active").text());
    var newId;
    
    if(e.target.id === "left"){
      $(".active").removeClass("active");

      if(currentId > 1) {
        newId = currentId - 1;
        // newId = newId.toString();
        // $(".active").removeClass("active");
        $("#no" + newId).addClass("active");
        // $(".posts").hide();
        // $("div#" + newId).show();
      }
    } else if(e.target.id === "right") {
      if (currentId < 2) {
        newId = currentId + 1;
        // newId = newId.toString()
        // $(".active").removeClass("active");
        $("#no" + newId).addClass("active");
        // $(".posts").hide();
        // $("div#" + newId).show();
      }
    } else {
      // $(".active").removeClass("active");
      $(e.target).addClass("active");
      newId = $(".active").text();
      // $(".posts").hide();
      // $("div#" + newId).show();
    }
    $(".posts").hide();
    $("div#" + newId).show();
  });

  // $("#new-pic").click(function() {
  // 
  //   $.get("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21q=*", function( data ) {
  //     var ids = data["objectIDs"];
  //     var id = ids[Math.floor(Math.random() * ids.length)];
  // 
  //     $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
  //       var img = data["primaryImageSmall"];
  //       var url = data["objectURL"];
  // 
  //       $('#met-image').attr('src', img);
  //       $('#title').text(data["title"]);
  //       $('#artist').text(data["artistDisplayName"]);
  //       $('#date').text(data["objectDate"]);
  //       $('#met-link').attr('href', url);
  //     });
  //   });
  // });
}); 
