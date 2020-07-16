$('.carousel.carousel-slider').carousel({
	fullWidth: true,
	indicators: true
});

function startHabit() {
	let habitID = $('input[name=habit]:checked').val();
	let habits = [
		{
			id: 0,
			title: "Drink More Water",
			checklists: [
				{
					day: 0,
					goals: [
						{
							id: 0,
							title: "Acquire a new water bottle",
							description: "Get your new habit started with a bang!	Go get yourself a fancy new water bottle—something that will make you want to pick it up throughout the day—and then come back and check this task off as complete.",
							complete: 1
						},
						{
							id: 1,
							title: "Set reminders on your phone",
							description: "It's easy to forget about hydration throughout the day, especially when you're busy.  Set up notifications on your phone to give you a gentle reminder at opportune times to take a sip.",
							complete: 0
						},
						{
							id: 1,
							title: "Task 3",
							description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							complete: 1
						},
					]
				},
				{
					day: 1,
					goals: [
						{
							id: 0,
							title: "Acquire a new water bottle",
							description: "Get your new habit started with a bang!	Go get yourself a fancy new water bottle—something that will make you want to pick it up throughout the day—and then come back and check this task off as complete.",
							complete: 1
						},
						{
							id: 1,
							title: "Set reminders on your phone",
							description: "It's easy to forget about hydration throughout the day, especially when you're busy.  Set up notifications on your phone to give you a gentle reminder at opportune times to take a sip.",
							complete: 0
						},
						{
							id: 1,
							title: "Task 3",
							description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
							complete: 1
						},
					]
				}
			],
		}
	];
		
	localStorage.setItem("habits", JSON.stringify(habits));
	
	window.location.assign("todo.html");
}