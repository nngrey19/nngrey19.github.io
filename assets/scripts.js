$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    
    $.get("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21q=*", function( data ) {
      var ids = data["objectIDs"];
      var id = ids[Math.floor(Math.random() * ids.length)];
      
      $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
        var img = data["primaryImageSmall"];
        var title = data["title"];
        var url = data["objectURL"];
        
        $('#met-image').attr('src', img);
        $('#caption').text(title);
        $('#met-link').attr('href', url);
      });
    });
  });
}); 
