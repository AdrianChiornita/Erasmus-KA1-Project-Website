$(document).ready(function(){

	var slideshow = $('.slideshow');
	var imgNumber = slideshow.attr('numberOfImages');

	var growContainer = $('.imgContainer');
	var amountOfMovement = slideshow.width();

	var buttonLeft = $('#btnLeft');
	var buttonRight = $('#btnRight');

	var sizeGrowContainer = amountOfMovement * imgNumber;
	growContainer.css({
		'width' : sizeGrowContainer
	});

	
	buttonLeft.click(function() {
		if(growContainer.position().left < 0){
			growContainer.animate({
				'left': '+=' + amountOfMovement +'px'
			}, 300)
	}
	});

	buttonRight.click(function(){
		if( growContainer.position().left > -(sizeGrowContainer - amountOfMovement) ){
			growContainer.animate({
				'left': '-=' + amountOfMovement +'px'
			}, 300)
	}
	});
});	