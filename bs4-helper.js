//Copyright 2021 Karthikeya Kaza
//A Framework for Bootstrap 4 Additional Components and Styles - BS4 Helper.

$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function(){
  $('[data-toggle="popover"]').popover();
});

$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

$(document).ready(function(){
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
    });
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    });
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
});

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
            }
        }
    }
    for (var n = 0; n < attribute.length; n++) {
        element = attribute[n];
        move_load(element);
    }
});

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
});


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

window.addEventListener('load', function() {
    var elements = document.getElementsByClassName("progress-bar");
    var element;
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
});


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
  var iter = Array.prototype.filter.call(elements, function(element){
      element.style.width = scrolled + "%";
  });
}

window.addEventListener('load', function(){
    var elements = document.getElementsByClassName("repeated-html");
    var iteration = Array.prototype.filter.call(elements, function(elem){
        var to_repeat = elem.getAttribute("content"),
            times = parseInt(elem.getAttribute("times"));
        var inner_html = "";
        for (var t = 0; t < times; t++){
            inner_html += to_repeat;
        }
        elem.innerHTML = inner_html;
    });
});

window.addEventListener("load", function(){
    var btn = document.getElementById("theme-switch");
    btn.classList.add("circle");
    btn.setAttribute("data-toggle", "tooltip");
    btn.setAttribute("data-placement", "bottom");
    btn.setAttribute("data-delay", "250");
    btn.setAttribute("title", "Toggle between dark/light theme")
    btn.innerHTML = '<span class="fa fa-moon-o" style="font-size:25px"></span>';
    btn.onclick = function(){var body = document.body; body.classList.toggle("theme-dark")};
});

window.addEventListener("load", function(){
    var elements = document.getElementsByClassName("location-sensor");
    if (elements.length != 0){
    }
    var iter = Array.prototype.filter.call(elements, function(elem){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(pos){
                var lat = pos.coords.latitude, long = pos.coords.longitude;                
                elem.innerHTML = "Latitude: " + lat + "<br>Longitude: " + long;
                elem.setAttribute("lat", lat);
                elem.setAttribute("long", long);   
            }, exception);
        }
        else {
            window.alert("Geolocation is not supported by this browser.");
        }
    });
});

function exception(error){
    switch(error.code) {
        case error.PERMISSION_DENIED:
            window.alert("Request for geolocation was denied, please allow and refresh the page.");
            break;
        case error.POSITION_UNAVAILABLE:
            window.alert("Location information is unavailable. Please try again.");
            break;
        case error.TIMEOUT:
            window.alert("The request to get user location timed out. Please try again.");
            break;
        case error.UNKNOWN_ERROR:
            window.alert("An unknown error occurred. Please try again.");
            break;
    }    
}

window.addEventListener('load', function(){
    var elements = document.getElementsByClassName('input-clear');
    var iter = Array.prototype.filter.call(elements, function(elem){
        var inp_id = elem.getAttribute('data-clear');
        if (inp_id != null){
            var inp = document.getElementById(inp_id);
            elem.innerHTML = "&times;"
            elem.onclick = function(){
                inp.value = "";
            };
        }
    });
});

window.addEventListener('load', function(){
    var elements = document.getElementsByClassName('password-visibility-control');
    var iter = Array.prototype.filter.call(elements, function(elem){
        var inp_id = elem.getAttribute('data-control');
        if (inp_id != null){
            var inp = document.getElementById(inp_id);
            inp.type = "password";
            elem.onclick = function(){
                inp.type = inp.type === "password" ? "text" : "password";
            };
        }
    });
});