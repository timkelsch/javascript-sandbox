// querySelectorAll()
// Returns a NodeList
// *** NodeList is an array like structure

const listItems = document.querySelectorAll('.item');
// console.log(listItems[1].innerText);

listItems.forEach((item, index) => {
  item.style.color = 'Orange'
  if (index === 1) {
    item.remove();
  }
  // Have to take the whole item because it's too stupid to ignore the button
  if (index === 0) {
    item.innerHTML = ` Oranges
    <button class="remove-item btn-link text-red">
      <i class="fa-solid fa-xmark"></i>
    </button>`;
  }
});


const listItems2 = document.getElementsByClassName
  ('item')

console.log(listItems2[2].innerText);

// can't use forEach on an HTMLCollection. have to convert to array first.

const poo = Array.from(listItems2)
poo.forEach(item => {
    console.log(item.innerText);
})

const listItems3 = document.getElementsByTagName('li')
console.log(listItems3[0]);




// // Access elements by index
// console.log(listItems[1].innerText);

// // Setting a color for specific element
// listItems[1].style.color = 'red';

// // We can use forEach() on a NodeList
// listItems.forEach((item, index) => {
//   item.style.color = 'red';

//   if (index === 1) {
//     item.remove();
//   }

//   if (index === 0) {
//     item.innerHTML = ` Oranges
//     <button class="remove-item btn-link text-red">
//       <i class="fa-solid fa-xmark"></i>
//     </button>`;
//   }
// });

// // getElementsByClassName()
// // Returns an HTMLCollection

// const listItems2 = document.getElementsByClassName('item');

// console.log(listItems2[2].innerText);

// const listItemsArray = Array.from(listItems2);

// listItemsArray.forEach((item) => {
//   console.log(item.innerText);
// });

// // getElementsByTagName()

// const listItems3 = document.getElementsByTagName('li');
// console.log(listItems3[0].innerText);
