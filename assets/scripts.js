$(document).ready(function(){
  
  // Pagination
  $(".pagination").click(function(e) {
    window.history.replaceState({}, document.title, "https://www.nng.ink");
    var currentId = parseInt($(".active").text());
    var newId;
    $(".active").removeClass("active");
    
    if(e.target.id === "left"){
      newId = (currentId > 1) ? currentId - 1 : currentId
      $("#no" + newId).addClass("active");
    } else if(e.target.id === "right") {
      newId = (currentId < 2) ? currentId + 1 : currentId
      $("#no" + newId).addClass("active");
    } else {
      $(e.target).addClass("active");
      newId = $(".active").text();
    }
    
    $(".posts").hide();
    $("div#group" + newId).show();
  });
  
  // Load the correct posts on back
  (function(){
    var urlParams = new URLSearchParams(window.location.search);
    var page = urlParams.get('page');
      
    if(page === "2") {
      $("#no1").removeClass("active");
      $(".posts").hide(); 
      $("#no2").addClass("active");
      $("div#group2").show();
    } else if(page === "1") {
      $("#no2").removeClass("active");
      $(".posts").hide(); 
      $("#no1").addClass("active");
      $("div#group1").show();
    }
  })();

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
