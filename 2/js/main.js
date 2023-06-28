const submitLeft = document.getElementById('submit_left');
const actionLeft = document.getElementById('action_left');
const table = document.getElementById('todotable');

submitLeft.addEventListener('click', function(e){
    e.preventDefault();
    const text = actionLeft.value;
    const inputGroupLeft = document.getElementsByClassName('input_group_left')[0];

    if(!text){
        inputGroupLeft.classList.add('error')
        return;
    }

    if(inputGroupLeft.classList.contains('error')){
        inputGroupLeft.classList.remove('error');
    }

    addRowLeft(text);
    actionLeft.value = "";
})

function addRowLeft(text){
    let row = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.classList.add('text');
    td1.innerText = text;

    let td2 = document.createElement('td');
    td2.classList.add('text');
    td2.innerText = "";

    row.append(td1);
    row.append(td2);
    table.append(row);
}

const submitRight = document.getElementById('submit_right');
const actionRight = document.getElementById('action_right');

submitRight.addEventListener('click', function(e){
    e.preventDefault();
    const text = actionRight.value;
    const inputGroupRight = document.getElementsByClassName('input_group_right')[0];

    if(!text){
        inputGroupRight.classList.add('error')
        return;
    }

    if(inputGroupRight.classList.contains('error')){
        inputGroupRight.classList.remove('error');
    }

    addRowRight(text);
    actionRight.value = "";
})

function addRowRight(text){
    let row = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.classList.add('text');
    td1.innerText = "";

    let td2 = document.createElement('td');
    td2.classList.add('text');
    td2.innerText = text;

    row.append(td1);
    row.append(td2);
    table.append(row);
}