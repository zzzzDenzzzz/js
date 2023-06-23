const submit = document.getElementById('submit');
const action = document.getElementById('action');
const table = document.getElementById('todotable');

submit.addEventListener('click', function(e){
    e.preventDefault();
    const text = action.value;
    const inputGroup = document.getElementsByClassName('input-group')[0];

    if(!text){
        inputGroup.classList.add('error')
        return;
    }

    if(inputGroup.classList.contains('error')){
        inputGroup.classList.remove('error');
    }

    addRow(text);
    action.value = "";
})

function addRow(text){
    let row = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.classList.add('text');
    td1.innerText = text;

    let td2 = document.createElement('td');
    td2.classList.add('text');
    td2.innerText = text;


    row.append(td1);
    row.append(td2);
    table.append(row);
}