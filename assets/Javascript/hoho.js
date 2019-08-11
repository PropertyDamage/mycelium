// var windowHeightScrollMinY = $(this).height() - 200;

$(window).scroll(function() {
  var x = $(this).scrollTop();
  console.log(x);
  if (x > 0) {
    $(".site-header").css("background", "#222222");
    $(".site-header").css("padding-top", "0px");
  } else {
    $(".site-header").css("background", "#22222200");
    $(".site-header").css("padding-top", "20px");
  }
});
