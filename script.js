$(document).ready(function(){
  // Fixed action button init
  $('.fixed-action-btn').floatingActionButton({
    toolbarEnabled: true,
    hoverEnabled: false
  });

  // Parallax init
  $('.parallax').parallax();
  
  // Materialboxed init
  $('.materialboxed').materialbox();

  // Modal init
  $('.modal').modal();

  // Sidenav init
  $('.sidenav').sidenav();

  // Slider init
  $('.slider').slider({
    height: 800
  });

  // Tooltipped init
  $('.tooltipped').tooltip()
});