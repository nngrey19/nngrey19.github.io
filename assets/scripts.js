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
}); 

document.addEventListener("DOMContentLoaded", function () {
  const months = ["1-january", "2-february"]; // Add all month files in order
  const container = document.getElementById("months-container");

  // Load months in order
  let loadMonthPromises = months.map((month) => {
    return fetch(`months/${month}.html`)
      .then(response => response.text())
      .then(data => {
        container.innerHTML += data; // Append to container
      })
      .catch(error => console.error(`Error loading ${month}:`, error));
  });

  // Wait for all months to load before attaching event listeners
  Promise.all(loadMonthPromises)
    .then(() => {
      // Once all months are loaded, attach event listeners
      attachDayEventListeners();
    });
});

// Function to attach event listeners after content loads
function attachDayEventListeners() {
  const container = document.getElementById("months-container");

  container.addEventListener("click", function (event) {
      if (event.target.classList.contains("day")) {
          const day = event.target;
          const month = day.getAttribute("data-month");
          const dayNum = day.getAttribute("data-day");
          const eventContainer = document.getElementById(`${month}-${dayNum}`);

          if (!eventContainer) return; // Avoid errors if event container is missing

          if (day.classList.contains("active")) {
              // If the same day is clicked, hide events smoothly
              eventContainer.classList.remove("show");
              day.classList.remove("active");
          } else {
              // Hide all other event containers
              document.querySelectorAll(".event-container").forEach(event => {
                  event.classList.remove("show");
              });

              // Remove active class from all days
              document.querySelectorAll(".day").forEach(d => {
                  d.classList.remove("active");
              });

              // Show the selected day's events smoothly
              eventContainer.classList.add("show");
              day.classList.add("active");
          }
      }
  });
}
