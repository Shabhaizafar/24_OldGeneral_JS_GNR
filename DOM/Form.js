const btn = document.querySelector('button');

btn.addEventListener('click',function(event){
    event.preventDefault();
    const fname = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const pwd = document.querySelector('#password').value;

    var tr = document.createElement('tr');
    tr.innerHTML = `<td>${fname}</td>
            <td>${email}</td>
            <td>${pwd}</td>`;
    
    document.querySelector('table').appendChild(tr);
    document.querySelector('#name').value = "";
    document.querySelector('#email').value= "";
    document.querySelector('#password').value = "";
});