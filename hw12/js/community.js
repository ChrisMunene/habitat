let posts = localStorage.getItem("posts");
let now = new Date();

if (!posts) {
	posts = [
		{
			id: 0,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, now.getHours()-3, now.getMinutes() - 37, now.getSeconds(), now.getMilliseconds()),
			user: "Jen",
			title: "Post 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: null,
			likes: 5,
			comments: []
		},
		{
			id: 1,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 13, now.getMinutes() - 12, now.getSeconds(), now.getMilliseconds()),
			user: "Eli",
			title: "Post 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: "assets/img1.jpg",
			likes: 12,
			comments: []
		},
		{
			id: 2,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),
			user: "Chris",
			title: "Post 3",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			image: null,
			likes: 2,
			comments: [
				{
					id: 0,
					timestamp: 0,
					user: "Jen",
					text: "Comment text here."
				}
			]
		}
	];
}

function renderPost(post) {
	

	// let imageElms = document.querySelectorAll('.card-image .card-content .likes');
	// imageElms.forEach(el => el.addEventListener('dblclick', function () {

 //    	console.log(this);
        		
 //        let postId = this.parentNode.parentNode.getAttribute('data-post-id');
 //        increaseLike(posts, postId);
 //    }));

    let post_html = `
		<div class="row" data-post-id="${post.id}">
			<div class="col s12 l8 offset-l1">
				<div class="card post" id="post${post.id}">
					<div class="card-header">
						<a href="#!" class="user teal-text darken-4"><i class="material-icons small">portrait</i>${post.user}</a>
						<span class="date">${renderTimestamp(post.timestamp)} </span>
					</div>`;
	
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
						<a class="waves-effect waves-teal grey-text text-darken-3 btn-flat modal-trigger" href="#post-comment"><i class="material-icons">comment</i></a>
						<a class="waves-effect waves-teal grey-text text-darken-3 btn-flat modal-trigger" href="#"><i class="material-icons">favorite_border</i></a>
					</div>
					<div class="card-content comments">
					</div>
				</div>
			</div>
		</div>`;	

	return post_html;
}

function renderCommunity(habitID) {	
	posts = posts.sort((p1, p2) => p2.id - p1.id);
	
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
	posts.unshift(
		{
			id: posts.length,
			timestamp: 0,
			user: "You!",
			title: $("#textareamodalTitle").val(),
			text: $("#textareamodalPost").val(),
			image: null,
			likes: 0,
			comments: []
		}
	);
	
	renderCommunity(0);
}

function renderTimestamp(timestamp) {
	return timestamp.toLocaleString("en-US", {year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "2-digit"});
}

function increaseLike(posts, postId) {
    let post = posts.find(p => p.id == postId);// return the first element matching the condition
    if (!post) return;

    post.likes = post.likes + 1;


    localStorage.setItem('posts', JSON.stringify(posts));

    render(posts); // re-render with the updated posts

}

let params = (new URL(document.location)).searchParams;
if (params.has("habitID"))
	habitID = params.get("habitID");
else
	habitID = 0;
renderCommunity(habitID);