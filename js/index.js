$(document).ready(function(){
  $(".news-list-nav li").click(function(){
	$(".news-list-nav .active").removeClass("active");
    $(this).addClass("active");
  });
});