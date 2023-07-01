// Получение ссылок на элементы таблицы и кнопку
let myTable = document.getElementById("my-table");
let button = document.getElementById("add-button");

// Инициализация данных из localStorage или создание нового массива, если данных нет
let tableData = JSON.parse(localStorage.getItem('tableData')) || [];

// При загрузке страницы заполняем таблицу данными из localStorage, если они есть.
for(let i = 0; i < tableData.length; i++)
{
    addRow(tableData[i]);
}

// Функция для добавления строки в таблицу
function addRow(text)
{
    let row = myTable.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    let textNode = document.createTextNode(text);
    cell1.appendChild(textNode);

    cell2.innerHTML = '<button class="delete-button" onclick="removeRow(this)">Delete</button>';
}

// Функция для удаления строки из таблицы
function removeRow(button)
{
    let rowToRemove = button.parentNode.parentNode;

    // Удаление строки из DOM и данных в localStorage после удаления строки 
    if (rowToRemove)
    {
        myTable.deleteRow(rowToRemove.rowIndex);

        // Обновление данных в localStorage после удаления строки
        let updatedTableData = [];

        for (let i = 1; i < myTable.rows.length; i++)
        {
            let cellText = myTable.rows[i].cells[0].textContent;
            updatedTableData.push(cellText);
        }

        localStorage.setItem('tableData', JSON.stringify(updatedTableData));
    }
}

// Добавляем обработчик события клика по кнопке "Add"
button.addEventListener("click", function()
{
    let firstColumnInput = document.getElementById("first-column-input");

    if(firstColumnInput && firstColumnInput.value !== "")
    {
        addRow(firstColumnInput.value);
        tableData.push(firstColumnInput.value);
        localStorage.setItem('tableData', JSON.stringify(tableData));
        firstColumnInput.value = "";
    }
});