define(['jquery'], function() {
    $('#formBtn').click( function(event){
		event.preventDefault(); 
		$('#overlay').fadeIn(400, 
		 	function(){ 
				$('#popupForm') 
					.css('display', 'block') // 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
	});
	
	$('#overlay, #close, #cancel').click( function(){ 
		$('#popupForm')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){
					$(this).css('display', 'none'); 
					$('#overlay').fadeOut(400);
				}
			);
	});
})
