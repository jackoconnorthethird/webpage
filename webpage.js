$(".navbar-toggler").click(function () {
    $("#navbar-header").toggle();
});

var el = document.querySelector('.navbar-header');

el.onclick = function() {
  el.classList.toggle('active');
}