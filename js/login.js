$(document).ready(function(){
	normaltab();
});


function normaltab(){
	
	$(".tabtitle").click(function(){
			var f = $(this).siblings();
			var num = $(this).attr("data");
			
			$(f).each(function( index ) {
				var n = $(this).attr("data");
				$(this).removeClass("tab_on");
				$("." + n ).hide();
			});
			
			$(this).addClass("tab_on");
			$("." + num ).show();
		})
		
	}

