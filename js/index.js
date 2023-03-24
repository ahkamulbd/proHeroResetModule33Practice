fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => loadUsers2(data))

function loadUsers2(data) {
    const ul = document.getElementById('user-list');
    for (const user of data) {
        //console.log(user);
        //console.log(data);
        const li = document.createElement('li');
        //li.innerText = user.name;
        //li.innerText = user.email;
        li.innerText = user.username;
        ul.appendChild(li);
    }
}