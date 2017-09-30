$("#navMain").ready(function() {
	$("#navMain").hide();
});

$( "#navToggle" ).click(function() {
	if ($("#navMain").hasClass("shown")) {
		$("#navMain").toggleClass("shown");
		setTimeout(function(){ $("#navMain").hide(); }, 200);
	} else {
		$("#navMain").show();
		$("#navMain").toggleClass("shown");
	};
 	$( "#navToggle" ).toggleClass( "close" ); // bug - can be spammed
});

$( ".artboards.swap2" ).click(function() {
	$( this ).toggleClass("toggle");
});

$( ".artboards.rotate3" ).click(function() {
	var first = $( this ).children(".first");
	var second = $( this ).children(".second");
	var third = $( this ).children(".third");
	first.removeClass("first").addClass("third");
	second.removeClass("second").addClass("first");
	third.removeClass("third").addClass("second");
});