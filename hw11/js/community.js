let posts = localStorage.getItem("posts");

if (!posts) {
	posts = [
		{
			id: 0,
			datetime: 0,//insert datetime
			user: "Jen",
			title: "Post Title",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: null,
			likes: 5,
			comments: []
		},
		{
			id: 1,
			datetime: 0,
			user: "Eli",
			title: "Post Title",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "assets/img1.jpg",
			likes: 12,
			comments: []
		},
		{
			id: 2,
			datetime: 0,//insert datetime
			user: "Chris",
			title: "Post Title",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: null,
			likes: 2,
			comments: []
		}
	];
}

function renderPost(post) {
	let post_html = `
		<div class="row">
			<div class="col s12 l8 offset-l1">
				<div class="card">`;
	
	if (post.image != null) {
		post_html = post_html + `
					<div class="card-image">
						<img src="assets/img1.jpg">
					</div>`;
	}
	
	post_html = post_html + `
					<div class="card-content">
						<span class="card-title">${post.title}</span>
						<p>${post.text}</p>
					</div>
					<div class="card-action">
						<a class="waves-effect waves-light grey-text text-darken-3 modal-trigger" href="#post-comment"><i class="material-icons">comment</i></a>
						<a class="waves-effect waves-light grey-text text-darken-3 modal-trigger" href="#"><i class="material-icons">favorite_border</i></a>
					</div>
				</div>
			</div>
		</div>`;	

	return post_html;
}

function renderCommunity(habitID) {	
	container = $('main');
	container.html(`
		<div class="row">
			<div class="col s12 l8 offset-l1 center">
				 <a class="waves-effect waves-teal btn modal-trigger" href="#new-post">New Post</a>
			</div>
		</div>`);
		
	container.append(posts.map(p => renderPost(p)).join(''));
}

function newPost() {
	console.log(posts);
	posts.push(
		{
			id: 4,
			datetime: 0,
			user: "You!",
			title: $("#textareamodalTitle").val(),
			text: $("#textareamodalPost").val(),
			image: null,
			likes: 0,
			comments: []
		}
	);
	
	console.log(posts);
	
	renderCommunity(0);
}

let params = (new URL(document.location)).searchParams;
if (params.has("habitID"))
	habitID = params.get("habitID");
else
	habitID = 0;
renderCommunity(habitID);