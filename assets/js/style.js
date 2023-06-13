$(document).ready(function() {
    // $("li a").click(function() {
    //   // Remove active class from all links
    //   $("li a").removeClass("active");
      
    //   // Add active class to the clicked link
    //   $(this).addClass("active");
    // });

    // Check the initial state of the dark mode toggle
    var isDarkMode = localStorage.getItem("darkMode") === "true";
    $("#darkmode-toggle").prop("checked", isDarkMode);

    // Set the dark mode class based on the initial state
    if (isDarkMode) {
      $("body").addClass("dark-mode");
    }

    // Handle dark mode toggle changes
    $("#darkmode-toggle").change(function() {
      var isChecked = $(this).is(":checked");
      if (isChecked) {
        $("body").addClass("dark-mode");
        localStorage.setItem("darkMode", true);
      } else {
        $("body").removeClass("dark-mode");
        localStorage.setItem("darkMode", false);
      }
    });
});

// viber link
function openViberChat(event) {
  var mobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  if (mobileDevice) {
    event.preventDefault();
    window.location.href = 'viber://pa?chatURI=viber://chat?number=+959407708451';
  }
}

// gmail link
function openGmailChat(event) {
  var mobileDevice = /Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var iosDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  if (mobileDevice) {
    event.preventDefault();
    window.location.href = 'intent://compose?to=lailaigrace16@gmail.com#Intent;scheme=mailto;package=com.google.android.gm;end';
  }
  if (iosDevice) {
    event.preventDefault();
    window.location.href ='mailto:lailaigrace16@gmail.com';
  }
}