$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$(document).ready(function(){
  $('.toast').toast('show');
});

$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

(function() {
  'use strict';
  window.addEventListener('load', function() {
      var elements = document.getElementsByClassName("progress-bar"),
          attribute = [],
          maxwidth = [],
          transitions = [],
          percentages = [],
          i = 0;
      var element, max, str, transition, percentage;
      for (var i = 0; i < elements.length; i++) {
          element = elements[i];
          if (element.getAttribute("data-showanimation") !== "false"){
              if (element.getAttribute("data-progress") === "grow") {
                  attribute.push(element);
                  max = element.getAttribute("data-max-width");
                  if (max === "" || max == null) {
                      maxwidth.push(100);
                  }
                  else {
                      maxwidth.push(max);
                  }
                  transition = element.getAttribute("data-transition");
                  if (transition === "" || transition == null) {
                      transitions.push(30);
                  }
                  else {
                      transitions.push(transition);
                  }
                  percentage = element.getAttribute("show-percentage");
                  if (percentage === "" || percentage == null) {
                      percentages.push("false");
                  }
                  else {
                      percentages.push(percentage);
                  }
              }
          }
      }
      for (var n = 0; n < attribute.length; n++) {
          element = attribute[n];
          max = maxwidth[n];
          transition = transitions[n];
          percentage = percentages[n];
          element.onload = move(element, max, transition, percentage);
      }
  }, false);
})();

var i = 0;
function move(element, max, trans, percent) {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, trans);
    function frame() {
      if (width >= max) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        element.style.width = width + "%";
        if (percent == "true") {
            element.innerHTML = width + "%";
        }
      }
    }
  }
}