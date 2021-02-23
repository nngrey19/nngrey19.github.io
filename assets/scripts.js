$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    var ids;
    var id;
    
    $.get("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21q=*", function( data ) {
      ids = data["objectIDs"];
      id = ids[Math.floor(Math.random() * ids.length)];
    });
      
    $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
      $('#met-image').attr('src', data["primaryImageSmall"]);
      $('#met-link').attr('href', data["objectURL"]);
      $('#caption').hide().text(data["title"]).show('slow');
    });
      
  });
  
}); 
