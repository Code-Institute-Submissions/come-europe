$(document).ready(function () {
  function fade() {
    $("#slogan").hide();
    $("#appearing-dest").hide();
    $("#slogan").fadeIn(2500);
    console.log("working");
  }
  fade();
  $("#eulink-dest").hover(function appearingDest() {
    $("#appearing-dest").show();
  });
  $("#appearing-dest").mouseleave(function appearingDest() {
    $("#appearing-dest").hide();
  });
  $("#navigation").mouseleave(function appearingDest() {
    $("#appearing-dest").hide();
  });
  
});
