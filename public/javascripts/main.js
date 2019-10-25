console.log("Alive!");
document.addEventListener("DOMContentLoaded", ()=>{
    fetch('/',{
        method: 'POST',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }})
        .then(data=>data.json())
        .then(data=>{
            data.forEach((item)=>{
                let newDiv = document.createElement("div");
                newDiv.innerHTML = `<h2>book: ${item.title}, author: ${item.author[0].name}, edition: ${item.edition[0].title}</h2>`;
                document.querySelector("#books").appendChild(newDiv);
            });
            console.log(data)
        })
        .catch(err=>console.log(err))
});