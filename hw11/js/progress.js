function renderGoal(goal) {	

		if (goal.complete == 1) {

			return 	`
				<li>
					<div class="collapsible-header">
						<label>

							 <input type="checkbox" checked/><span></span>
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

							 <input type="checkbox"/><span></span>
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

renderHistory(0, 0);