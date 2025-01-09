// source : https://www.freecodecamp.org/news/make-api-calls-in-javascript/

const apiUrl = 'https://official-joke-api.appspot.com/random_joke';


fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    
    console.log(`Setup : ${data.setup}`);
    console.log(`Punchline : ${data.punchline}`);
  })
  .catch(error => {
    console.error('Error:', error);
  });
