$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    $.get( "https://collectionapi.metmuseum.org/public/collection/v1/objects?isHighlight=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21", function( data ) {
      var ids = data["objectIDs"];
      var id = ids[Math.floor(Math.random() * ids.length)];
      console.log(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`);
      $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
        console.log("*************")
        console.log(data["objectID"]);
        $('#met-image').attr('src', data["primaryImageSmall"]);
        $('#met-link').attr('href', data["linkResource"]);
        $('#caption').text(data["title"]);
      });
    });
  });

}); 
