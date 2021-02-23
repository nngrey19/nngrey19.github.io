$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    $.get( "https://collectionapi.metmuseum.org/public/collection/v1/objects", function( data ) {
      console.log( data );
    });
  });

}); 
