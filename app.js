//Create the event Listener for the buttons.
let postsData = [
    { id: 1, author: 'John', content: 'Hello, Instagram!', likes: 10, comments: ['Great post!', 'Nice photo!'], image: 'https://files.codingninjas.in/image2-28694.jpg' },
    { id: 2, author: 'Jane', content: 'This is a great post!', likes: 15, comments: [], image: 'https://files.codingninjas.in/oip-28704.jpg' },
    { id: 3, author: 'Alice', content: 'Another post', likes: 8, comments: [], image: 'https://files.codingninjas.in/th-2-28706.jpg' },
    { id: 4, author: 'Bob', content: 'Check out this photo!', likes: 20, comments: [], image: 'https://files.codingninjas.in/image1-28708.jpg' },
  ];
function renderPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = '';

    postsData.forEach(post=>{
        postsContainer.appendChild(addPost(post));
    })
  
}
function addPost(post) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    const imageElement = document.createElement('img');
    imageElement.src = post.image;
    imageElement.alt = 'Post Image';

    const likeButton = document.createElement('button');
    likeButton.textContent = `Like`;
    likeButton.classList.add('like-button');
    //Add eventListerner here to update the likes.

    const commentInput = document.createElement('input');
    commentInput.type = 'text';
    commentInput.placeholder = 'Write a comment...';

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comment';
    commentButton.classList.add('comment-button')
    //Create eventListener here for the comment button


    const postFooter = document.createElement('div');
    postFooter.classList.add('post-footer');
    postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;

    const commentsContainer = document.createElement('div');
    commentsContainer.classList.add('comments-container');
    commentsContainer.style.display = 'none';

    post.comments.forEach((comment) => {
        const commentElement = document.createElement('p');
        commentElement.textContent = comment;
        commentsContainer.appendChild(commentElement);
    });

    postFooter.addEventListener('click', () => {
        if (commentsContainer.style.display === 'none') {
            commentsContainer.style.display = 'block';
        } else {
            commentsContainer.style.display = 'none';
        }
    });

    likeButton.addEventListener('click', () => {
        likeButton.disabled = true;
        likeButton.style.backgroundColor = 'red';
        post.likes++;
        postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
    });

    commentButton.addEventListener('click', () => {
        if (commentInput.value) {
            post.comments.push(commentInput.value);
            const commentElement = document.createElement('p');
            commentElement.textContent = commentInput.value;
            commentsContainer.appendChild(commentElement);
            commentInput.value = '';
            postFooter.textContent = `Likes: ${post.likes}   Comments: ${post.comments.length}`;
        }
    });

    postElement.appendChild(authorElement);

    postElement.appendChild(imageElement);
    postElement.appendChild(contentElement);
    postElement.appendChild(likeButton);
    postElement.appendChild(commentInput);
    postElement.appendChild(commentButton);
    postElement.appendChild(postFooter);
    postElement.appendChild(commentsContainer);

    

    return postElement;
}

renderPosts();   

const addPostBtn = document.getElementById('postForm');
addPostBtn.addEventListener('submit', (event) => {
    event.preventDefault()
    const author = 'You';
    const content = document.getElementById('postInput').value;
    const image = URL.createObjectURL(document.getElementById("imageInput").files[0]);
    const newPost = { id: postsData.length + 1, author, content, image, likes: 0, comments: [] };
    postsData.push(newPost);
    console.log(postsData);
    renderPosts();
});
