const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Create a new post with a POST request
const Post = {
  title : 'Post ',
  body: 'Bazarhoff',
  userId: 1
};

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(Post)
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    console.log(' mon post:', data);

    return fetch(`${apiUrl}?_limit=10`);
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }
 
   
  })
  .catch(error => {
    console.error('Error:', error);
  });
