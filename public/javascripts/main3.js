console.log('Alive3!');

let myNodeList = document.querySelector('#books').childNodes.length;
let item;
for (let i = 0; i < myNodeList.length; ++i) {
    item = myNodeList[i];  // Вызов myNodeList.item(i) необязателен в JavaScript
    console.log(item)
}
// booksLength.forEach((item,i)=>{
    console.log(myNodeList.length, item);
// });
// console.log(booksLength);

// newDiv.addEventListener('click',()=>{
//     return fetch(`/book`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({title: item.title})
//     })
// });