function renderGoal(goal) {

		if (goal.complete == false) {

			return 	`
				<li>
					<div class="collapsible-header">
						<label>
							 <span><i class="material-icons red-text">cancel</i></span>
						</label>
						${goal.title}
						<span class="badge"><i class="material-icons medium teal-text">info_outline</i></span>
					</div>
					<div class="collapsible-body"><span>${goal.description}</span></div>
				</li>`;
		}
}

function renderHistory(habitID, day) {
	let habitat = habits;
	let history = $("#history");
	let display_goal = $("#display_goal");
	let goals, daily_goal = [];

	for (var i = 0; i < habitat.length; i++) {
		let checklist = habitat[i].checklists;
		for (var j = 0; j < checklist.length; j++) {
			daily_goal = checklist[j].daily_goal;
			goals = checklist[j].goals;
		}
	}

	history.html(goals.map(p => renderGoal(p)).join(''));
	display_goal.html(`Daily Goal: Drink ${habits[0].goal} fl oz of water`);

}



	var ctx = document.getElementById("1-Day");
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data:
			        {
			        labels: ["12-4 am", "4-8 am", "8-12pm", "12-4pm", "4-8pm", "8-12am"],
			        datasets: [
			        {
			            label: 'Water Intake (fl oz)',
		            data: [16, 8, 0, 24, 27, 4],
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});

	var ctx = document.getElementById("7-Day");
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			        datasets: [
			        {
			        	label: "Daily Goal",
			        	data: [habits[0].goal,habits[0].goal,habits[0].goal,habits[0].goal,habits[0].goal,habits[0].goal],
			        	backgroundColor: 'rgba(0, 0, 0, 0)',
			        	borderColor: 'black',
			        	type: 'line',
			        },
			        {
			            label: 'Water Intake (fl oz)',
			            data: [40, 64, 35, 80, 66, 68],
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)',
			                'rgba(153, 102, 255, 0.2)',
			                'rgba(255, 159, 64, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)',
			                'rgba(153, 102, 255, 1)',
			                'rgba(255, 159, 64, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});

	var ctx = document.getElementById("30-Day");
	console.log(habits[0].goal);
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
			        datasets: [
			        {
			        	label: "Daily Goal",
			        	data: [habits[0].goal,habits[0].goal,habits[0].goal,habits[0].goal],
			        	backgroundColor: 'rgba(0, 0, 0, 0)',
			        	borderColor: 'black',
			        	type: 'line',
			        },
			        {
			            label: 'Average Daily Water Intake (fl oz)',
			            data: [40, 64, 60, 72],
			            backgroundColor: [
			                'rgba(255, 99, 132, 0.2)',
			                'rgba(54, 162, 235, 0.2)',
			                'rgba(255, 206, 86, 0.2)',
			                'rgba(75, 192, 192, 0.2)'
			            ],
			            borderColor: [
			                'rgba(255,99,132,1)',
			                'rgba(54, 162, 235, 1)',
			                'rgba(255, 206, 86, 1)',
			                'rgba(75, 192, 192, 1)'
			            ],
			            borderWidth: 1
			        }]
			    },
			    options: {
			        scales: {
			            yAxes: [{
			                ticks: {
			                    beginAtZero:true
			                }
			            }]
			        }
			    }
			});



renderHistory(0, 0);
renderGraph(0);