var habits;

(function($) {
	$(function() {	
		$('.sidenav').sidenav();
		$('.modal').modal();
		$('.collapsible').collapsible();
		$('.tabs').tabs();
		$(".dropdown-trigger").dropdown();
	});
	
	$('.fixed-action-btn').floatingActionButton({
		toolbarEnabled: true
	});
	
	if (localStorage.getItem("habits") === null) {
		//window.location.assign("onboarding.html");
	}
	
	else {
		habits = JSON.parse(localStorage.getItem("habits"));
	}
})(jQuery);

function deleteHabits() {
	localStorage.removeItem('habits');
	window.location.assign("onboarding.html");
}