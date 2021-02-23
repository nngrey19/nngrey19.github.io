$(document).ready(function(){

  $( "#new-pic" ).click(function() {
    
    $.get("https://collectionapi.metmuseum.org/public/collection/v1/search?isHighlight=true&hasImages=true&departmentIds=3|5|6|7|9|10|11|12|13|14|17|21q=*", function( data ) {
      var ids = data["objectIDs"];
      var id = ids[Math.floor(Math.random() * ids.length)];
      
      $.get( `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`, function( data ) {
        var img = data["primaryImageSmall"];
        
        $('#met-image').attr('src', img).done(function() {
          var title = data["title"];
          var url = data["objectURL"];
          
          $('#caption').text(title);
          $('#met-link').attr('href', url);
        });
      });
    });
  });
}); 

// var updateImage = function(img) {
//   $('#met-image').attr('src', img);
// };
// 
// var updateLinkAndCaption = function(title, url) {
//   $('#caption').text(title);
//   $('#met-link').attr('href', url);
// };
