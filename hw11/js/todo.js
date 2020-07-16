function renderGoal(goal) {
	return 	`
				<li>
					<div class="collapsible-header">
						<label>
							 <input type="checkbox" /><span></span>
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

let params = (new URL(document.location)).searchParams;
if (params.has("habitID"))
	habitID = params.get("habitID");
else
	habitID = 0;
renderCollapsibleChecklist(habitID, 0);