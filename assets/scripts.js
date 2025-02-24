$(document).ready(function(){
  
  // Pagination
  $(".pagination").click(function(e) {
    window.history.replaceState({}, document.title, "https://www.nathangrey.net");
    var currentId = parseInt($(".active").text());
    var newId;
    $(".active").removeClass("active");
    console.log("currentId", currentId)

    if(e.target.id === "left"){
      newId = (currentId > 1) ? currentId - 1 : currentId
      console.log("newId", newId)
      $("#no" + newId).addClass("active");
    } else if(e.target.id === "right") {
      newId = (currentId < 4) ? currentId + 1 : currentId
      console.log("newId", newId)
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
    console.log(window.location.search);
    var page = urlParams.get('page');
    console.log("page", page);
      
    if(page === "1") {
      $("#no1, #no2, #no3").removeClass("active");
      $(".posts").hide(); 
      $("#no4").addClass("active");
      $("div#group4").show();
    } else if(page === "2") {
      $("#no1, #no2, #no4").removeClass("active");
      $(".posts").hide(); 
      $("#no3").addClass("active");
      $("div#group3").show();
    } else if(page === "3") {
      $("#no1, #no3, #no4").removeClass("active");
      $(".posts").hide(); 
      $("#no2").addClass("active");
      $("div#group2").show();
    } else if(page === "4") {
      $("#no2, #no3, #no4").removeClass("active");
      $(".posts").hide(); 
      $("#no1").addClass("active");
      $("div#group1").show();
    }  else {
      // about, todo, timeline
      $("#no2, #no3, #no4").removeClass("active");
      $(".posts").hide(); 
      $("#no1").addClass("active");
      $("div#group1").show();
    }
  })();

  $(function() {
    $( "#accordion" ).accordion({
        active: false,
        collapsible: true
    });
  });

  $(function() {
    $( "#accordion2" ).accordion({
        active: false,
        collapsible: true
    });
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

document.addEventListener("DOMContentLoaded", function () {
  const days = document.querySelectorAll(".day");
  let activeDay = null; // Track active day

  days.forEach(day => {
      day.addEventListener("click", function () {
          const month = this.getAttribute("data-month");
          const dayNum = this.getAttribute("data-day");
          const eventContainer = document.getElementById(`${month}-${dayNum}`);

          if (activeDay === this) {
              // If the same day is clicked, hide its events smoothly
              eventContainer.classList.remove("show");
              this.classList.remove("active");
              activeDay = null;
          } else {
              // Hide all event containers smoothly
              document.querySelectorAll(".event-container").forEach(event => {
                  event.classList.remove("show");
              });

              // Remove active class from all days
              document.querySelectorAll(".day").forEach(d => {
                  d.classList.remove("active");
              });

              // Show the selected day's events with slide effect
              eventContainer.classList.add("show");
              this.classList.add("active");
              activeDay = this;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const months = ["january", "february"]; // Add all month names here
  const container = document.getElementById("months-container");

  months.forEach(month => {
      fetch(`months/${month}.html`) // Load the month file
          .then(response => response.text()) // Get the HTML content
          .then(data => {
              container.innerHTML += data; // Append to the container
          })
          .catch(error => console.error(`Error loading ${month}:`, error));
  });
});
