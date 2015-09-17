$(document).ready(function () {
	if ($("[rel=tooltip]").length) {
			$("[rel=tooltip]").tooltip();
		}
	
	$('.ntd4 li:nth-child(4n)').after('<div class="clear"></div>')
	$('.ntd3 li:nth-child(3n)').after('<div class="clear"></div>')
	$('.ntd2 .t-list-span:nth-child(2n)').after('<div class="clear"></div>')
	$('.ntd6 li:nth-child(6n)').after('<div class="clear"></div>')
	
	$('.carousel').carousel({ interval: 5000 })
	
	
	$("#btn-filtering").click(function(){
		$('#filtering').slideToggle();
	})
	
	
    $('#slider').carousel({
    	interval: 5000
    });
    
    
  
    
    
});

