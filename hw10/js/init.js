(function($){
	$(function(){	
		$('.sidenav').sidenav();
		$('.modal').modal();
		$('.collapsible').collapsible();
	});
	
	$('.fixed-action-btn').floatingActionButton({
		toolbarEnabled: true
	});
})(jQuery);
