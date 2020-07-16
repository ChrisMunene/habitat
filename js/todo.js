function renderGoal(goal) {
	return 	`
				<li${(!goal.id ? ' class="active"' : '')}>
					<div class="collapsible-header">
						<label>
							 <input type="checkbox" id="goal${goal.id}" onclick="saveGoal(${goal.id})" ${(goal.complete ? 'checked="checked"' : ' ')}/><span></span>
						</label>
						${goal.title}
						<span class="badge"><i class="material-icons medium teal-text">info_outline</i></span>
					</div>
					<div class="collapsible-body">
						<span>${goal.description}</span>
					</div>
				</li>
	`;
}

function renderCollapsibleChecklist(habitID, day) {

	let habit = habits.find(h => h.id == habitID);
	let checklist = habit.checklists.find(c => c.day == day);
	let collapsibleComponent = $("#checklist");

	collapsibleComponent.append(checklist.goals.map(p => renderGoal(p)).join(''));

}

function saveGoal(goalID) {
	console.log("Save Goal");
	let goalCheckbox = $(`#goal${goalID}`);
	console.log(habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete);
	habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete = goalCheckbox.is(":checked");
	console.log(habits.find(h => h.id == 0).checklists.find(c => c.day == 0).goals.find(g => g.id == goalID).complete);

	saveHabits();
}

function saveHabits() {
	console.log(habits);
	localStorage.setItem("habits", JSON.stringify(habits));
}

function renderLogger() {
	$("#logged").html(`<a onclick="renderModalQuantity();" class="modal-trigger" href="#input-habit"><strong class="teal-text">${habits[0].checklists[0].quantity}</strong></a> of <strong>${habits[0].goal}</strong> ${habits[0].goalUnits} consumed today`);
}

function adjustQuantity(quantity, relative=true) {
	if (relative)
		habits.find(h => h.id == 0).checklists.find(c => c.day == 0).quantity += quantity;
	else
		habits.find(h => h.id == 0).checklists.find(c => c.day == 0).quantity = quantity;
	saveHabits();
	setProgressBar();
	renderLogger();
}

function renderModalQuantity() {
	$('#quantity').val(habits.find(h => h.id == 0).checklists.find(c => c.day == 0).quantity);
	$('#quantity').focus();
}

let params = (new URL(document.location)).searchParams;
if (params.has("habitID"))
	habitID = params.get("habitID");
else
	habitID = 0;
	
renderLogger();
renderCollapsibleChecklist(habitID, 0);