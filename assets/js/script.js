$(document).ready(function() {
	// body...
	//console.log('javascript dosyaları hazır.');
	//$('#first').html('test') '.'class demek '#'id demek
	//$('div p').css('padding', '10px') //div içindeki p ye 10px padding uygula
	$('.list-group > .list-group-item + .list-group-item').css('background-color', '#f00')

})

$(window).on('load', function() {
	console.log('sayfa hazır');
	//$('.loading').fadeOut(1000) // yavaşça kaybolma animasyonu
	/*$('.loading').slideUp(1000) yukarı dogru 1 saniyede kaybol*/
	//$('.loading').hide(1000) normal gizleme
	$('.loading').addClass('hidden');
})