const posts = [
	{
		id: 1,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/300?image=171",
		author: {
			name: "Phil Mangione",
			image: "https://unsplash.it/300/300?image=15",
		},
		likes: 80,
		created: "2021-06-25",
	},
	{
		id: 2,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=112",
		author: {
			name: "Sofia Perlari",
			image: "https://unsplash.it/300/300?image=10",
		},
		likes: 120,
		created: "2021-09-03",
	},
	{
		id: 3,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=234",
		author: {
			name: "Chiara Passaro",
			image: "https://unsplash.it/300/300?image=20",
		},
		likes: 78,
		created: "2021-05-15",
	},
	{
		id: 4,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=24",
		author: {
			name: "Luca Formicola",
			image: null,
		},
		likes: 56,
		created: "2021-04-03",
	},
	{
		id: 5,
		content:
			"Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
		media: "https://unsplash.it/600/400?image=534",
		author: {
			name: "Alessandro Sainato",
			image: "https://unsplash.it/300/300?image=29",
		},
		likes: 95,
		created: "2021-03-05",
	},
];



const container = document.querySelector(".posts-list");

for (let i = 0; i < posts.length; i++) {
	const dataInvertita = invertDate(posts[i].created);
	const noImg = posts[i].author.image || 'https://via.placeholder.com/150x150.png?text=' + getInitials(posts[i].author.name);
	container.innerHTML += `<div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${noImg}" alt="${getInitials(posts[i].author.name)}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${posts[i].author.name}</div>
                <div class="post-meta__time">${dataInvertita}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${posts[i].content}</div>
    <div class="post__image">
        <img src="${posts[i].media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" data-postid="${posts[i].id}">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-${posts[i].id}" class="js-likes-counter">${posts[i].likes}</b> persone
            </div>
        </div> 
        </div>            
        </div>`;
}



let likedPost = [];
const likeBtn = document.querySelectorAll(".like-button");
const eleCounters = document.querySelectorAll(".js-likes-counter");

for (let i = 0; i < likeBtn.length; i++) {
	const elelike = likeBtn[i];

	elelike.addEventListener("click", function () {
		const eleCounter = eleCounters[i];

		if (elelike.classList.contains("like-button--liked")) {
			posts[i].likes -= 1;
		} else {
			posts[i].likes += 1;
			likedPost.push(container);
		}

		elelike.classList.toggle("like-button--liked");
		eleCounter.innerHTML = posts[i].likes;
	});
}






//function---------------------------------------------------
function invertDate(date) {
	const parts = date.split("-");
	return parts[2] + "-" + parts[1] + "-" + parts[0];
}


function getInitials(name) {
    return name.split(' ').map(word => word.charAt(0)).join('').toUpperCase();
}