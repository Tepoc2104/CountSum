function Count(num1, num2) {
    // Получаем вводимые значения
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    //Проводим такую манипуляцию с полученными значениями (умножаем в отдельности на 10, затем делим на 10 результат
    //Это необходимо для корректного подсчета, особенно начальных знчений 0.1+0.2
    var result = (Number(num1)*10+Number(num2)*10)/10;
    alert("Результат: "+"\r\n\n"+result);
}