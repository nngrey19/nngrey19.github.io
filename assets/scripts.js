$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    var ids;
    var id;
    
    $.get("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21q=*", function( data ) {
      ids = data["objectIDs"];
      id = ids[Math.floor(Math.random() * ids.length)];
    });
      
    $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
      var img = data["primaryImageSmall"];
      var title = data["title"];
      var url = data["objectURL"];
      updateImage(img).done(updateLinkAndCaption(title, url));
    });
    
    var updateImage = function(img) {
      $('#met-image').attr('src', img);
    };
    
    var updateLinkAndCaption(title, url) {
      $('#caption').text(title);
      $('#met-link').attr('href', url);
    };

  });
  
}); 
