//select Box
$(document).ready(function(){
	selectBox();
	portletHide();
	SearchRank();
	normaltab();
	flexslider("flexslider1", true, false, true, true);
	menuDetailChng();
	allMenu1();
	allMenu2();
	lnbmenuOnOff();
	calendarlnbmenuOnOff();
	lnbmenu();
	calendarlnb();
});

//셀렉트 박스
function selectBox(){
	$('.inputbox').find('select').each(function() {
		var self = $(this),
			parentBox = self.parents('.inputbox'),
			change = function() {
				$(this).prev('.txt').text($(this).find('option:selected').text());
			},
			focusin = function() {
				$(this).parents('.inputbox').addClass('selected');
			},
			focusout = function() {
				$(this).parents('.inputbox').removeClass('selected');
			};

		self.css({
			'width' : parentBox.width() + 'px',
			'height' : parentBox.height() + 'px'
		}).on({
			'change' : change,
			'focusin' : focusin,
			'focusout' : focusout
		});
	}).end().find('.txt').each(function(){
		var self = $(this);
		self.text(self.next('select').find('option:selected').text());
	});
}

//flexslider
function flexslider(classNm, arg0, arg1, arg2, arg3, arg4){
	$("." + classNm).flexslider({
		animation : arg0,
		directionNav : arg1,
		controlNav : arg2,
		pausePlay : arg3,
		direction: arg4
	});
}

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

//menu_detail
function menuDetailChng(){
	$(".menu_detail").hide();
	$(".btn_menudetail_on").click(function(){
		$('.menu_detail').show();
	});	
	
	$(".btn_menudetail_off").click(function(){
		$(".menu_detail").hide();
	});
}

//menu_detail
function portletHide(){
	$(".btn_hide").click(function(){
		$(this).prev('div').slideUp();
		$(this).hide();
		$(this).next('.btn_show').show();
	});	
	$(".btn_show").click(function(){
		$(this).siblings('div').slideDown();
		$(this).hide();
		$(this).prev('.btn_hide').show();
	});	
}

//
function SearchRank(){
	$(".search_rank .cont").hide();
	$(".search_rank h4").click(function(){
		$('.search_rank .cont').show();
	});	
	
	$(".search_rank .btn_close").click(function(){
		$(".search_rank .cont").hide();
	});
}

//
function allMenu1(){
	$(".gnb .depth01 > li > a").click(function(){
		$(".gnb .depth02").slideUp();
		$(".gnb .depth01 > li").removeClass("on");
		$(this).next(".depth02").slideToggle();
		$(this).parent("li").addClass("on");
	});
}

//
function allMenu2(){
	$(".gnb .depth02 > li > a").click(function(){
		$(".gnb .depth03").slideUp();
		$(".gnb .depth02 > li").removeClass("on");
		$(this).next(".depth03").slideToggle();
		$(this).parent("li").addClass("on");
	});
}

//menu_detail
function lnbmenuOnOff(){
	$(".lnb").hide();
	$(".btn_submenu").click(function(){
		$('.lnb').show();
	});	
	
	$(".lnb .btn_close").click(function(){
		$(".lnb").hide();
	});
}

function lnbmenu(){
	$('.lnb .depth01 > li.on').children('.depth02').css('display','block');
	$(".lnb .depth01 > li > span > a.btn_arr").click(function(){
		$('.lnb .depth01 > li').removeClass('on');
		$('.lnb .depth02').slideUp();
		$(this).parents("li").addClass('on');
		$(this).parents("span").next(".depth02").slideDown();
	})
}



//menu_detail
function calendarlnbmenuOnOff(){
	$(".calendarlnb").hide();
	$(".btn_submenu").click(function(){
		$('.calendarlnb').show();
	});	
	
	$(".calendarlnb .btn_close").click(function(){
		$(".calendarlnb").hide();
	});
}

function calendarlnb(){
	$('.calendarlnb .depth01 > li.on').children('.depth02').css('display','block');
	$(".calendarlnb .depth01 > li > span > a").click(function(){
		var a = $(this).parent().parent().hasClass("on");
		if(a){
			$(this).parents("li").removeClass('on');
			$(this).parents("span").next(".depth02").slideUp();
		}else{
			$(this).parents("li").addClass('on');
		$(this).parents("span").next(".depth02").slideDown();
		}
	})
}
