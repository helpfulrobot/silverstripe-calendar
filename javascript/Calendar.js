jQuery(document).ready(

	function(){
		Calendar.init();
	}


);


var Calendar = {

	init: function(){
		alert("go");
		var prev = jQuery("#NavigationBarID .previous a");
		var previousLink  = jQuery(prev).attr("rel");
		jQuery(prev).attr("href", previousLink);
		var next = jQuery("#NavigationBarID .next a");
		var nextLink = jQuery(next).attr("rel");
		alert(nextLink);
		jQuery(next).attr("href", nextLink);
	}

}
