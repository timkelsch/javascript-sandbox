fetch('./movies.json')
    .then(response => response.json() )
    .then(data => console.log(data))

fetch('./test.txt')
//    .then(response => console.log(response.text()))
    .then(response => response.text())
    .then(data => console.log(data))

fetch('https://api.github.com/users/bradtraversy')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => document.querySelector('h1').appendChild = data.login)

// // Fetching a JSON file
// fetch('./movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// // Fetching a text file
// fetch('./test.txt')
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// // Fetching from an API
// fetch('https://api.github.com/users/bradtraversy')
//   .then((response) => response.json())
//   .then((data) => (document.querySelector('h1').textContent = data.login));
