// tabLinks = $(".tabLinks");
// tabContent= $(".tabContent");

// tabLinks.on(click, function() {
// 	tabLinks.removeClass("active")
// 	this.addClass("active")
// });
// work in progress - needs some refactoring and will drop JQuery i promise :)
$(document).ready(() => {
	$(".slick").slick({
		infinite: true,
		arrows: true,
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1
	});
	// $("#slideshow").slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1
	// });
});
