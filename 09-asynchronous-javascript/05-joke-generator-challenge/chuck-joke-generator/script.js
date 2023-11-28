document.getElementById("joke-btn").addEventListener('click', onClick)


const generateJoke = () => {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')
  xhr.onreadystatechange = function () {
    console.log(this.status);
    if (this.readyState === 4 && this.status === 200) {
      const data = JSON.parse(this.responseText)

      const div = document.createElement('div')
      div.innerHTML = data.value
      document.querySelector('#joke').innerText(div)
    }
  }
  xhr.send()
}


// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
//   const xhr = new XMLHttpRequest();

//   xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200) {
//         // console.log(JSON.parse(this.responseText).value);
//         jokeEl.innerHTML = JSON.parse(this.responseText).value;
//       } else {
//         jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
//       }
//     }
//   };

//   xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);
