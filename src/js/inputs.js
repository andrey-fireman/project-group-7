
let inputsCard = document.querySelectorAll('.card-input');
if (inputsCard.length > 0){
    inputsCard.forEach(input => {
        input.addEventListener("input", function (e) {
            var input = e.target.value;
            input = input.replace(/\D/g, ''); // Оставляем только цифры
            input = input.substring(0, 16); // Ограничиваем максимальную длину вводимых символов
            input = input.replace(/(\d{4})/g, '$1 ').trim(); // Добавляем пробелы между группами символов
            e.target.value = input;
        });
    });
}