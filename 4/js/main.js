let button = document.getElementById("button");
let myTable = document.getElementById("my-table");

window.onload = function()
{
    // Проверяем наличие сохраненных данных в localStorage
    if (localStorage.getItem("tableData") != null)
    {
        let data = JSON.parse(localStorage.getItem("tableData"));
        for (let i = 0; i < data.length; i++)
        {
            addRow(data[i]);
        }
    } 
    else
    { 
        addRow("");
    }
    
    button.addEventListener("click", function()
    {
        let secondColumnInput = document.getElementById("second-column-input");
    
        if(secondColumnInput.value != "")
        {
            // Добавление текста и новой строки таблицы
            // Сохранение в localStorage
            let tableData = [];
            let rows = document.querySelectorAll("#my-table tbody tr");
    
            for(let i = 0; i < rows.length; i++)
            {
                let cells = rows[i].cells;
                tableData.push(cells[1].textContent);
            }
    
            tableData.push(secondColumnInput.value);
    
            localStorage.setItem("tableData", JSON.stringify(tableData));
    
            addRow(secondColumnInput.value);
    
            secondColumnInput.value = "";
        } 
        else
        { 
            // Удаление текста и строки из localStorage
            let rowToRemove;
    
            for(let row of myTable.rows)
            {
                if(row.cells[1].textContent == secondColumnInput.value)
                {
                    rowToRemove = row;
                    break;
                }
            }
    
            if(rowToRemove != null)
            {
                rowToRemove.remove();
    
                // Обновление данных в localStorage после удаления строки
                let updatedTableData = [];
    
                for(let r of myTable.rows)
                {
                    updatedTableData.push(r.cells[1].textContent);
                }
    
                localStorage.setItem("tableData", JSON.stringify(updatedTableData));
            }
      
            secondColumnInput.value = "";
        }
    });
};
    
function addRow(text)
{
    let newRow = document.createElement("tr");
    
    newRow.innerHTML = `<td>${text}</td><td><button class="delete-button">Удалить</button></td>`;
    document.querySelector("#my-table tbody").appendChild(newRow);
    
    // Прикрепляем обработчик события на кнопку "Удалить"
    newRow.querySelector(".delete-button").addEventListener("click", function()
    {
        newRow.remove();
      
        // Обновление данных в localStorage после удаления строки
        let updatedTableData = [];
      
        for (let i = myTable.rows.length - 1; i >= 0; i--)
        {
            let row = myTable.rows[i];
            updatedTableData.push(row.cells[0].textContent);
        }
      
        localStorage.setItem("tableData", JSON.stringify(updatedTableData));
    });
}