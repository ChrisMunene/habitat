function renderGoal(goal) {	

		if (goal.complete == 1) {

			return 	`
				<li>
					<div class="collapsible-header">
						<label>

							 <input type="checkbox" class="filled-in" checked="checked" /><span></span>
						</label>
						${goal.title}
						<span class="secondary-content right"><i class="material-icons">arrow_drop_down</i></span>
					</div>
					<div class="collapsible-body"><span>${goal.description}</span></div>
				</li>

				
	`;
		}
		else{
			return 	`
				<li>
					<div class="collapsible-header">
						<label>
							 <span><i class="material-icons red-text">cancel</i></span>
						</label>
						${goal.title}
						<span class="secondary-content right"><i class="material-icons">arrow_drop_down</i></span>
					</div>
					<div class="collapsible-body"><span>${goal.description}</span></div>
				</li>

				
	`;
		}
	
	
}

function renderHistory(habitID, day) {
	let habitat = habits;
	let history = $("#history");
	let goals = []

	for (var i = 0; i < habitat.length; i++) {
		let checklist = habitat[i].checklists;
		for (var j = 0; j < checklist.length; j++) {
			 goals = checklist[j].goals;		
		}		
	}
	
	history.html(goals.map(p => renderGoal(p)).join(''));
}



function renderGraph(habitID, day) {
	let habitat = habits;
	let graph = $("#graph");
	let units, quantity, days= []; 
	

	for (var i = 0; i < habitat.length; i++) {		
		let checklists = habitat[i].checklists;			

		for (var i = 0; i < checklists.length; i++) {
			days = checklists[i].day;
			units = checklists[i].units;
			quantity = checklists[i].quantity;					
		}
	}

	
	var ctx = document.getElementById("1-Day");
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["12-4 am", "4-8 am", "8-12pm", "12-4pm", "4-8pm", "8-12am"],
			        datasets: [{
			            label: 'Ounces',
			            data: [12, 19, 3, 5, 2, 3],
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
			        datasets: [{
			            label: 'Ounces',
			            data: [12, 19, 3, 5, 2, 3],
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
			var myChart = new Chart(ctx, {
			    type: 'bar',
			    data: {
			        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
			        datasets: [{
			            label: 'Ounces',
			            data: [12, 19, 3, 5, 2, 3],
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
	
}

renderHistory(0, 0);
renderGraph(0);