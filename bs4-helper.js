//Copyright 2021 Bhogi7589

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
          move(element, max, transition, percentage);
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
        width = 0;
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

(function() {
  'use strict';
  window.addEventListener('load', function() {
      var elements = document.getElementsByClassName("progress-bar"),
          attribute = [],
          i = 0;
      var element;
      for (var i = 0; i < elements.length; i++) {
          element = elements[i];
          if (element.getAttribute("data-showanimation") !== "false"){
              if (element.getAttribute("data-progress") === "loading") {
                  attribute.push(element);
                  element.innerHTML = "Loading...";
              }
          }
      }
      for (var n = 0; n < attribute.length; n++) {
          element = attribute[n];
          move_load(element);
      }
  }, false);
})();

var i = 0;
function move_load(element) {
  if (i == 0) {
    i = 1;
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        width = 0;
        element.style.visibility = "hidden";
      } else {
        width++;
        element.style.width = width + "%";
      }
    }
  }
}

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
              if (element.getAttribute("data-progress") === "shrink") {
                  attribute.push(element);
                  max = element.getAttribute("data-min-width");
                  if (max === "" || max == null) {
                      maxwidth.push(0);
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
          shrink(element, max, transition, percentage);
      }
  }, false);
})();

function shrink(element, min, trans, percent) {
    var width = 100;
    var id = setInterval(frame, trans);
    function frame() {
        if (width <= min) {
            clearInterval(id);
            width = 0;
        }
        else {
            width--;
            element.style.width = width + "%";
            if (percent == "true") {
                element.innerHTML = width + "%";
            }
        }
    }
}

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
              if (element.getAttribute("data-progress") === "timer" && (element.getAttribute("data-time") !== "" && element.getAttribute("data-progress") != null)) {
                  element.classList.add("timer");
                  element.style.width = "100%"
                  var label = element.getAttribute("show-label");
                  label = label === "" || label == null ? "false":document.getElementById(label);
                  var btnattr = element.getAttribute("toggle-btn")
                  var btn = btnattr === "" || btnattr == null ? "false":document.getElementById(btnattr);
                  if (btn != "false") {
                    btn.classList.add("fa");
                    btn.classList.add("fa-play");
                    btn.innerHTML = "";
                    btn.onclick = function(){movetime(btn, element, element.getAttribute("data-time"), label)};
                  }
                  else {
                    movetime(null, element, element.getAttribute("data-time"), label)
                  }
                  var resetbtnattr = element.getAttribute("reset-btn")
                  var resetbtn = resetbtnattr === "" || resetbtnattr == null ? "false":document.getElementById(resetbtnattr);
                  if (resetbtn != "false") {
                    resetbtn.classList.add("fa");
                    resetbtn.classList.add("fa-rotate-left");
                    resetbtn.innerHTML = "";
                    resetbtn.onclick = function(){reset(element.getAttribute("data-time"), element, label);};
                  }
              }
          }
      }
  }, false);
})();

function setminl(num) {
    var snum = num.toString();
    while (snum.length < 2) {
        snum = "0" + snum;
    }
    return snum;
}

function convert(time) {
    var minutes = time/60|0,
        seconds = time % 60;
    var hours = minutes/60|0;
    minutes = minutes % 60;
    return [setminl(hours), setminl(minutes), setminl(seconds)]
}

function pause(btn, element){
    if (play) {
        play = false;
        btn.classList.remove("fa-pause");
        btn.classList.add("fa-play");
        element.classList.add("timer-disabled");
    }
    else {
        play = true;
        btn.classList.remove("fa-play");
        btn.classList.add("fa-pause");
        element.classList.remove("timer-disabled");
    }
}

function reset(time, element, label){
    width = time;
    element.style.width = "100%";
    if (label !== "false") {
        var remain = convert(time);
        label.innerHTML = "Remaining Time: " + remain[0] + ":" + remain[1] + ":" + remain[2];
    }
}

var i = 0;
var id;
var play = true;
var width;
function movetime(btn, element, time, label) {
    if (btn !== null) {
        btn.classList.add("fa-pause");
        btn.classList.remove("fa-play");
        btn.onclick = function(){pause(btn, element);}
    }
    width = time;
    id = setInterval(frame, 1000);
    function frame() {
        if (play) {
            if (width === 0) {
                reset(time, element, label);
                play = false;
                btn.classList.remove("fa-pause");
                element.classList.add("timer-disabled");
                btn.classList.add("fa-play");
            } 
            else {
                width--;
                element.style.width = (width/time)*100 + "%";
                if (label !== "false") {
                    var remain = convert(width);
                    label.innerHTML = "Remaining Time: " + remain[0] + ":" + remain[1] + ":" + remain[2];
                }
            }
        }
    }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var elements = document.getElementsByClassName("scroll-indicator");
  for (var i = 0; i < elements.length; i++) {
      elements[i].style.width = scrolled + "%";
  }
}