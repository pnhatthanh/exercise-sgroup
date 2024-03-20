document.getElementById("register").addEventListener('click', register);

function User(username, password) {
    this.username = username;
    this.password = password;
}

function register() {
    var users = [];
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const user = new User(username, password);
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'));
    }
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = './index.html';
}
