$(document).ready(function() {

	<!-- Chatra {literal} -->

	ChatraID = '7TQGG5RqXJjTSYaJW';
	(function(d, w, c) {
		var n = d.getElementsByTagName('script')[0],
			s = d.createElement('script');
		w[c] = w[c] || function() {
				(w[c].q = w[c].q || []).push(arguments);
			};
		s.async = true;
		s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
			+ '//chat.chatra.io/chatra.js';
		n.parentNode.insertBefore(s, n);
	})(document, window, 'Chatra');

		<!-- /Chatra {/literal} -->

// это попап
	$(function() {
		$( "#dialog" ).dialog({
			autoOpen: false,
			show: {
				effect: "blind",
				duration: 1000
			},
			hide: {
				effect: "explode",
				duration: 1000
			}
		});

		$( ".opener" ).click(function(e) {
			e.preventDefault();
			$( "#dialog" ).dialog( "open" );
		});
	});


	// wow
	var wow = new WOW(
		{
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       150,          // distance to the element when triggering the animation (default is 0)
			mobile:       true,       // trigger animations on mobile devices (default is true)
			live:         true,       // act on asynchronously loaded content (default is true)
			callback:     function(box) {
				// the callback is fired every time an animation is started
				// the argument that is passed in is the DOM node being animated
			},
			scrollContainer: null // optional scroll container selector, otherwise use window
		}
	);
	wow.init();


	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

// подгрузка скрпта

$.getScript("js/navigation.js", function(){

	console.log("navigation load");

});



$.getScript("js/paralax.js", function(){

	console.log("paralax load");

});