// tabLinks = $(".tabLinks");
// tabContent= $(".tabContent");

// tabLinks.on(click, function() {
// 	tabLinks.removeClass("active")
// 	this.addClass("active")
// });
// work in progress - needs some refactoring and will drop JQuery i promise :)
$(document).ready(() => {
	$("#slideshow .slick").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
	// $("#slideshow").slick({
	// 	infinite: true,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1
	// });
});
