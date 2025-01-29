const input = document.querySelector('.input');
const addbtn = document.querySelector('.add');
const ul = document.querySelector('ul');

addbtn.onclick = function(){
    var newstr = `<span>${input.value}</span>
        <div class="todo-actions">
          <span class="material-icons edit">edit</span>
          <span class="material-icons delete">delete</span>
        </div>`;
    // console.log(newstr);

    // How to Create a new ELement using a JS : 
    var li = document.createElement('li');
    li.innerHTML = newstr;
    // console.log(li);

    // How to add class Using a JS : 
    li.classList.add('todo-item');

    // How to Access Element using JS : 
    // console.log(ul);


    // How to add new Element using a JS : 
    ul.appendChild(li);

    document.querySelector('.todo-success').classList.add('add-block');
    setTimeout(() => {
        document.querySelector('.todo-success').classList.remove('add-block');
    }, 1000);
    input.value = "";
}