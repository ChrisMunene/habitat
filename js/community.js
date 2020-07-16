let posts = localStorage.getItem("posts");
let now = new Date();

if (!posts) {
	posts = [
		{
			id: 0,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, now.getHours()-3, now.getMinutes() - 37, now.getSeconds(), now.getMilliseconds()),
			user: "Jen",
			title: "Post 1",
			text: "Today I had the best drink ever at this restaurant! Y'all should try it. It's called strawberry-basil water. It will change your life!",
			image: "assets/basil-water.jpg",
			likes: 5,
			comments: []
		},
		{
			id: 1,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 13, now.getMinutes() - 12, now.getSeconds(), now.getMilliseconds()),
			user: "Eli",
			title: "Post 2",
			text: "Guys you are not going to believe this! I found the best water-bottle ever. I've been using it for a week now and it just motivates to drink more because its so convenient and pretty. Highly recommended guys.",
			image: "assets/water-bottle.jpg",
			likes: 12,
			comments: []
		},
		{
			id: 2,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),
			user: "Chris",
			title: "Post 3",
			text: "Does anyone know a place where I can buy some good takeout salad?",
			image: "assets/salad.jpg",
			likes: 2,
			comments: [
				{
					id: 0,
					timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),
					user: "Jen",
					text: "Try the new chinese restaurant @firenoodles.com"
				},
				{
					id: 1,
					timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),
					user: "Chris",
					text: "Interesting!"
				},
				{
					id: 2,
					timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),
					user: "Eli",
					text: "Thanks for the advice!"
				}
			]
		}
	];
}

function renderPost(post) {
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
						<img src=${post.image}>
					</div>`;
	}

	let comment_html = "";
	for (i = 0; i < post.comments.length; i++) {
		comment_html = comment_html + `
					<div class="comment">
						<span class="user">${post.comments[i]['user']} </span>
						<span class="text">${post.comments[i]['text']} </span>
						<span class="timestamp">${renderTimestamp(post.comments[i]['timestamp'])} </span>
					</div>`;
	}

	post_html = post_html + `
					<div class="card-content">
						<span class="card-title">${post.title}</span>
						<p>${post.text}</p>
					</div>
					<div class="card-action">
						<a onclick="$('#postID').val(${post.id})" class="waves-effect waves-teal grey-text text-darken-3 btn-flat modal-trigger" href="#post-comment"><i class="material-icons">comment</i></a>
						<a class="waves-effect waves-teal grey-text text-darken-3 btn-flat modal-trigger" href="#"><i class="material-icons">favorite_border</i></a>
					</div>
					<div class="card-content comments">`
					+ comment_html +
					`
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

	let imageElms = document.querySelectorAll('.card');
	console.log(imageElms);
	imageElms.forEach(el => el.addEventListener('dblclick', function () {

         let postId = this.parentNode.parentNode.getAttribute('data-post-id');
         console.log(this);
         increaseLike(posts, postId);
     }));
}

function newPost() {
	posts.unshift(
		{
			id: posts.length,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 13, now.getMinutes() - 12, now.getSeconds(), now.getMilliseconds()),
			user: "You!",
			title: $("#textareamodalTitle").val(),
			text: $("#textareamodalPost").val(),
			image: $("newImagePost").val(),
			likes: 0,
			comments: []
		}
	);

	renderCommunity(0);
}

function newComment(post_id) {
	posts[post_id].comments.push(
		{
			postID: parseInt(post_id),
			id: posts[post_id].comments.length + 1,
			timestamp: new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() - 5, now.getMinutes() - 53, now.getSeconds(), now.getMilliseconds()),	

			user: "You",
			text: $("#textareacomment").val()
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