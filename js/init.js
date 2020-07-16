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
})(jQuery);

function deleteHabits() {
	localStorage.removeItem('habits');
	window.location.assign("onboarding.html");
}

function setProgressBar() {
	if (localStorage.getItem("habits") != null) {
		quantity = habits.find(h => h.id == 0).checklists.find(c => c.day == 0).quantity;
		goal = habits.find(h => h.id == 0).goal;
		percentage = quantity / goal * 100;
		if (percentage < 0)
			percentage = 0;
		if (percentage > 100)
			percentage = 100;
		$("#progress-bar").css("width", percentage + "%");
	}
	else
		$("#progress-bar").css("width", 0);
}

let habits = JSON.parse(localStorage.getItem("habits"));
setProgressBar();