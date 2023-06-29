let timer =
{
    time: 0,
    id: null,

    startTimer: function()
    {
        this.time = parseInt(document.querySelector("#timer-input").value);
        
        if(!isNaN(this.time) && this.time > 0)
        {
            console.log("Таймер запущен на "+ this.time + " секунд.");
            
            clearInterval(this.id);
            
            // ссылка на объект timer
            let self = this;

            // Добавляем код для вывода времени на странице
            let timerOutput = document.querySelector("#timer-output");
        
            this.id = setInterval(function()
            {
                if(self.time == 0)
                {
                    console.log("Таймер завершен!");
                    clearInterval(self.id);

                    // Очищаем поле вывода времени после завершения таймера
                    timerOutput.innerHTML = "";

                    // Очищаем поле ввода времени после завершения таймера
                    document.querySelector("#timer-input").value = "";
                }
                else
                {
                    console.log("Осталось времени:" + self.time + " секунд.");
                    timerOutput.innerHTML = "Осталось времени: " + self.time + " секунд.";
                    self.time--;
                }
            }, 1000);
        }
        else
        {
            console.error("Пожалуйста, введите корректное значение времени.");
            // Очищаем поле ввода времени
            document.querySelector("#timer-input").value = "";
        }
    }
};

document.querySelector("#start-button").addEventListener("click", function()
{
    timer.startTimer();
});