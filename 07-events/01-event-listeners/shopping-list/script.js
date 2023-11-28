const clearBtn = document.querySelector('#clear');

const clearButton = document.querySelector('#clear')

// JS event listener 
// clearButton.onclick = function () {
//   alert('Clear Items')
// }

// add event listener

// clearButton.addEventListener('click', function () {
//   alert('Clear Items')
// })
// clearButton.addEventListener('click', function () {
//   console.log('poop');
// })

function onClear() {
  const itemList = document.querySelector('ul')
  itemList.innerHTML = ''
}

clearButton.addEventListener('click', onClear)

// setTimeout(() => clearButton.removeEventListener('Click', onClear), 5000)

setTimeout(() => clearButton.click(), 5000)



// *** You can have more than one event listener on an item

// function onClear() {
//   alert('Clear Items')
// }

// function onClear() {
//   const itemList = document.querySelector('ul');
//   const items = itemList.querySelectorAll('li');

//   // itemList.innerHTML = '';

//   // items.forEach((item) => item.remove());

//   while (itemList.firstChild) {
//     itemList.removeChild(itemList.firstChild);
//   }
// }

// // JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

// // addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));

// // Use named function
// clearBtn.addEventListener('click', onClear);

// // removeEventListener()
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// // Fire off event from JS
// setTimeout(() => clearBtn.click(), 5000);
