var b = false;

$(".navbar-toggler").click(function() {
  if (!b) {
    b = true;
    $(".navbar-toggler-icon").css("background-image", "url('images/cancel.svg')");
    $(".navbar-toggler-icon").css("background-size", "60%");
  }
  else if(b){
    b = false;
    $(".navbar-toggler-icon").css("background-image", "url('images/menu.svg')");
  }
})
