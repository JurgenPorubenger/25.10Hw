console.log("Alive!");


document.addEventListener("DOMContentLoaded", ()=>{
    fetch('/books')
        .then(data=>data.json())
        .then(data=>{
            let bookDiv = document.querySelector("#books");
            data.forEach((item,i,arr)=>{
                let newDiv = document.createElement("div");
                newDiv.id=i;
                newDiv.innerHTML = `<h3>book: ${item.title}</h3>`;
                bookDiv.appendChild(newDiv);
            })
         })
        .catch(err=>console.log(err));
});


//     fetch(`/book`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({title: item.title})})
//         .then(data=>
//             data.json()
//         )
//         .then(data=> console.log(data))
//         .catch(err=>console.log(err))

// newDiv.addEventListener('click',()=>{
//     return fetch(`/book`,{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify({title: item.title})
//     })
// });