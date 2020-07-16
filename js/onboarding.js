$('.carousel.carousel-slider').carousel({
	fullWidth: true,
	indicators: true
});

function startHabit() {
	let habitID = $('input[name=habit]:checked').val();

	if(!habitID){
		habitID = 1;
	}

	let habits =[];

	if (habitID == 0){
        habits = [
		{
			id: 0,
			title: "Drink More Water",
			goal: parseInt($("input#goal").val()),
			goalUnits: "fl oz",
			checklists: [
				{
					day: 0,
					daily_goal: [
						{

							goal: "Drink 30 Ounces of water",
						},

					],
					units: "ounces",
					quantity: 0,
					goals: [
						{
							id: 0,
							title: "Acquire a new water bottle",
							description: "Get your new habit started with a bang! Go get yourself a fancy new water bottle—something that will make you want to pick it up throughout the day—and then come back and check this task off as complete.",
							complete: false
						},
						{
							id: 1,
							title: "Set hourly reminders on your phone",
							description: "It's easy to forget about hydration throughout the day, especially when you're busy. Set up hourly notifications on your phone to give you a gentle reminder at opportune times to take a sip.",
							complete: false
						},
						{
							id: 2,
							title: "Drink Water before every meal or snack",
							description: "One simple way to increase water intake is to create this healthy habit: before each meal, even breakfast or a snack, drink a half glass or full glass of water.",
							complete: false
						},
						{
							id: 3,
							title: "Eat a nice juicy fruit or salad",
							description: "Drinking H2O isn’t the only way to increase water intake. Tomatoes, watermelons, cucumbers, celery, green peppers, cauliflower, and spinach are all foods high in water content. Dig into a yummy Classic Cucumber & Tomato Salad.",
							complete: false
						},
						{
							id: 4,
							title: "Say No to Soda",
							description: "Whether your weakness is diet pop or regular soda, sipping these beverages can trigger weight gain—yes, even diet drinks! Banish soda from the fridge so that you’re less likely to cave to temptation. ",
							complete: false
						},
						{
							id: 5,
							title: "Drink a dilute juice",
							description: "Another way to increase water intake is to dilute the juice you drink. Adding water to no-added-sugar juice will reduce calories and help you boost water consumption.",
							complete: false
						},
						{
							id: 6,
							title: "Drink a bottle of water before bed",
							description: "Always remember to drink a bottle before bed and to take another bottle with you to drink during the night.",
							complete: false
						},

					]
				}
				
			],
		}
	]
	}
	else {

		habits = [
		{
			id: 0,
			title: "Reading",
			checklists: [
				{
					day: 0,
					quantity: 50,
					daily_goal: [
						{

							goal: "Read for 30 minutes",
						},

					],
					units: "Minutes",
					quantity: 10,
					goals: [
						{
							id: 0,
							title: "Buy yourself a new novel",
							description: "Get your new habit started with a bang! Go get yourself an interesting new novel.",
							complete: false
						},
						{
							id: 1,
							title: "Read 30 minutes in the morning",
							description: "Morning are usually the best time time to get that groove going. Grab that new book you bought and read at least two chapters in 30 minutes",
							complete: false
						},
						{
							id: 2,
							title: "Set hourly reminders on your phone",
							description: "It's easy to forget about reading throughout the day, especially when you're busy. Set up hourly notifications on your phone to give you a gentle reminder at opportune times to take a sip.",
							complete: false
						},
						{
							id: 3,
							title: "Read one article youre interested in",
							description: "Books shouldn't be the only things you read. Read an article on your favorite topics today.",
							complete: false
						},
						{
							id: 4,
							title: "Watch video on importance of reading",
							description: "Whether your weakness is diet pop or regular soda, sipping these beverages can trigger weight gain—yes, even diet drinks! Banish soda from the fridge so that you’re less likely to cave to temptation. ",
							complete: false
						},
						{
							id: 5,
							title: "Go to the library for an hour",
							description: "Another way to increase water intake is to dilute the juice you drink. Adding water to no-added-sugar juice will reduce calories and help you boost water consumption.",
							complete: false
						},
						{
							id: 6,
							title: "Read for 20 minutes before bed",
							description: "Always remember to drink a bottle before bed and to take another bottle with you to drink during the night.",
							complete: false
						},

					]
				}
				
			],
		}
	]
	};
	

	localStorage.setItem("habits", JSON.stringify(habits));

	window.location.assign("todo.html");
}

function toggleButton() {
	if ($("input[name=habit]:checked").length > 0)
		$("#selectHabit").removeClass("disabled");
	else
		$("#selectHabit").addClass("disabled");
}