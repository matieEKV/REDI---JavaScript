let btn = document.getElementById('add-btn');
let list = document.getElementById('task-list');
let input = document.getElementById('task-input');

function clearInput () {
    input.value = '';
}
btn.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.innerText = input.value;
    list.appendChild(newItem);
    clearInput();
})