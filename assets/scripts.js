$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    $.get( "https://collectionapi.metmuseum.org/public/collection/v1/objects", function( data ) {
      var ids = data["objectIDs"];
      var id = ids[Math.floor(Math.random() * ids.length)];
      https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]
      $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
        console.log("*************")
        console.log(data["accessionYear"]);
      });
    });
  });

}); 
