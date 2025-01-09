const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    data.forEach(user => {
      console.log(`Nom: ${user.name}`);
      console.log(`Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
