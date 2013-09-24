jQuery(document).ready(

	function(){
		Calendar.init();
	}


);


var Calendar = {

	init: function(){
		var prev = jQuery("#NavigationBarID .previous a");
		jQuery(prev).attr("href", jQuery(prev).attr("rel"));
		var next = jQuery("#NavigationBarID .next a");
		jQuery(next).attr("href", jQuery(next).attr("rel"));
	}

}
