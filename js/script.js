
$(document).ready(function () {
	$("#bars").click(function() {
     $(".nav").slideToggle(700);
	});
	$(".nav > img").click(function(){
		$(".nav").hide(700);
	})
});
