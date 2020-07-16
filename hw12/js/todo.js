function renderGoal(goal) {
	console.log(goal);
	return 	`
				<li>
					<div class="collapsible-header">
						<label>
							 <input type="checkbox" id="goal${goal.id}" onclick="saveGoal(${goal.id})" ${(goal.complete ? 'checked="checked"' : ' ')}/><span></span>
						</label>
						${goal.title}
						<span class="secondary-content right"><i class="material-icons">arrow_drop_down</i></span>
					</div>
					<div class="collapsible-body"><span>${goal.description}</span></div>
				</li>
	`;
}

function renderCollapsibleChecklist(habitID, day) {
	let habit = habits.find(h => h.id == habitID);
	let checklist = habit.checklists.find(c => c.day == day);	
	let collapsibleComponent = $("#checklist");
	
	collapsibleComponent.html(checklist.goals.map(p => renderGoal(p)).join(''));
}

function saveGoal(goalID) {
	console.log("Save Goal");
	let goalCheckbox = $(`#goal${goalID}`);
	console.log(habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete);
	habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete = goalCheckbox.is(":checked");
	console.log(habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete);
	
	saveHabits();
}

let params = (new URL(document.location)).searchParams;
if (params.has("habitID"))
	habitID = params.get("habitID");
else
	habitID = 0;
renderCollapsibleChecklist(habitID, 0);

function saveHabits() {
	console.log(habits);
	localStorage.setItem("habits", JSON.stringify(habits));
}