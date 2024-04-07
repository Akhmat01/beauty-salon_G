
function sayHello() {
    const name = document.getElementById("nameInput").value;
    const message = `Добро пожаловать на наш сайт, ${name}! Чем могу быть полезен?`;
    document.getElementById("messageOutput").innerHTML = message;
}
